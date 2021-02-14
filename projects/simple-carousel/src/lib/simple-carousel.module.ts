import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GenericCardComponent } from './components/cards/generic-card/generic-card.component';
import { PlaceholderCardComponent } from './components/cards/placeholder-card/placeholder-card.component';
import { SingleCardComponent } from './components/cards/single-card/single-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DurationPipe } from './utils/duration.pipe';
import { MultipleCardComponent } from './components/cards/multiple-card/multiple-card.component';

@NgModule({
  declarations: [
    GenericCardComponent,
    SingleCardComponent,
    PlaceholderCardComponent,
    CarouselComponent,
    DurationPipe,
    MultipleCardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class SimpleCarouselModule { }
