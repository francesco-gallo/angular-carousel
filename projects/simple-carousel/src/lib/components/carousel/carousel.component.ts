import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input, OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { of } from 'rxjs';
import { CardModel } from '../../models/card-model';
import { GenericCardComponent } from '../cards/generic-card/generic-card.component';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public icon: string;

  @Input()
  public fetchCards: (chunkSize: number) => Promise<CardModel[]>;

  public currentIndex = 0;

  public mouseInside = false;

  public cardModels: CardModel[] = [];

  @ViewChild('container', {read: ViewContainerRef, static: true}) // container for the cards
  private container: ViewContainerRef;

  @ViewChild('scrollable', {read: ElementRef, static: true}) // scrollable wrapper
  private scrollable: ElementRef<HTMLDivElement>;

  private windowSize = 0;  // how many cards can be concurrently viewed

  private chunkSize = 6

  private cardRefs: ComponentRef<GenericCardComponent>[] = [];

  private cardWidth = GenericCardComponent.width;

  // Don't fetch new data if we are already waiting for some
  private pendingLoadings = false;

  private init = false;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.refreshWindowSize();
    this.fetchData(this.windowSize);
    this.init = true;
  }

  public scrollCarousel(count: number): void {
    this.refreshWindowSize();
    if (count < 0) { // We are backtracking, all the cards data have already been requested
      this.currentIndex = Math.max(0, this.currentIndex + count); // Index can't be negative
    } else if (count > 0) {
      this.currentIndex += count;
      this.conditionalFetchData();
    }

    const isNext = (count>0);
    this.refreshCardModels(isNext);
    this.scrollable.nativeElement.scrollTo({left: isNext ? 0 : this.cardWidth, behavior: 'auto'})
    this.scrollable.nativeElement.scrollTo({left: isNext ? this.cardWidth : 0, behavior: 'smooth'})
  }

  public conditionalFetchData(): void {
    if (!this.pendingLoadings) {
      // Check whether we are going outside the already fetched data and we need to load a new set of data
      if (this.currentIndex + this.windowSize > this.cardModels.length) {
        this.fetchData(this.chunkSize);
      }
    }
  }

  public onMouseInside(inside: boolean): void {
    this.mouseInside = inside;
  }

  private fetchData(count: number): void {
    if (this.fetchCards) {
      const isInit = this.init; // The first time the refresh model method needs to start from 0
      this.pendingLoadings = true;
      this.fetchCards(count).then(data => {
        this.pendingLoadings = false;
        this.cardModels.push(...data);
        this.refreshCardModels(isInit);
        this.conditionalFetchData();
      });
    }
  }

  // Create or destroy the references to keep the memory clean
  private refreshCardInstances(delta: number) {
    if (this.container) {
      if (delta > 0) {
        const factory: ComponentFactory<GenericCardComponent> = this.resolver.resolveComponentFactory(GenericCardComponent);
        for (let i = 0; i<delta; ++i) {
          const newCard: ComponentRef<GenericCardComponent> = this.container.createComponent(factory);
          this.cardRefs.push(newCard);
        }
      } else {
        for (let i = 0; i < -delta; ++i) {
          const ref = this.cardRefs.pop();
          ref.destroy();
        }
      }
    }
  }

  // In case the carousel got resized, check if new widgets are needed
  private refreshWindowSize(): void {
    if (this.scrollable) {
      const newWindowSize = Math.ceil(this.scrollable.nativeElement.getBoundingClientRect().width / this.cardWidth) + 1
      if (this.windowSize !== newWindowSize) {
        this.refreshCardInstances(newWindowSize - this.windowSize);
      }
      this.windowSize = newWindowSize;
    }
  }

  // switches the model to fake the widgets' rotation
  private refreshCardModels(isNext = false): void {
    for (let i = 0; i < this.cardRefs.length; ++i) {
      const candidateIndex = i + this.currentIndex + (isNext ? -1 : 0);
      this.cardRefs[i].instance.model$ = of(this.cardModels[candidateIndex]);
    }
  }
}
