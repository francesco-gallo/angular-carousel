import { ComponentFactoryResolver, OnInit } from '@angular/core';
import { CardModel } from '../../models/card-model';
import * as ɵngcc0 from '@angular/core';
export declare class CarouselComponent implements OnInit {
    private resolver;
    title: string;
    subtitle: string;
    icon: string;
    fetchCards: (chunkSize: number) => Promise<CardModel[]>;
    currentIndex: number;
    mouseInside: boolean;
    cardModels: CardModel[];
    private container;
    private scrollable;
    private windowSize;
    private chunkSize;
    private cardRefs;
    private cardWidth;
    private pendingLoadings;
    private init;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    scrollCarousel(count: number): void;
    conditionalFetchData(): void;
    onMouseInside(inside: boolean): void;
    private fetchData;
    private refreshCardInstances;
    private refreshWindowSize;
    private refreshCardModels;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CarouselComponent, "lib-carousel", never, { "title": "title"; "subtitle": "subtitle"; "icon": "icon"; "fetchCards": "fetchCards"; }, {}, never, never>;
}

//# sourceMappingURL=carousel.component.d.ts.map