import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef, Pipe, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

class GenericCardComponent {
}
GenericCardComponent.width = 220;
GenericCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-generic-card',
                template: "<div class=\"outer-card\">\n    <div class=\"card\">\n        <ng-container *ngIf=\"model$ | async as model; else placeholderBlock\">\n            <lib-single-card *ngIf=\"model.cardinality==='single'\" [model]=\"model\"></lib-single-card>\n            <lib-multiple-card *ngIf=\"model.cardinality==='collection'\" [model]=\"model\"></lib-multiple-card>\n        </ng-container>\n        <ng-template #placeholderBlock>\n            <lib-placeholder-card></lib-placeholder-card>\n        </ng-template>\n    </div>\n</div>",
                styles: [".outer-card{padding:10px}.card{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}"]
            },] }
];

class PlaceholderCardComponent {
}
PlaceholderCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-placeholder-card',
                template: "  <div class=\"container\">\n    <div class=\"image loading\">\n    </div>\n    <div class=\"bars\">\n      <div class=\"bar bar1 loading\"></div>\n      <div class=\"bar bar2 loading\"></div>\n    </div>\n  </div>",
                styles: [".container{height:220px;width:200px}.container .image{background:#e9ebee;height:100px}.container .bars{height:85px}.container .bars .bar{background:#e9ebee;height:19px;margin:0 13px 13px}.container .bars .bar1{margin-top:15px;width:80%}.container .bars .bar2{width:30%}.loading{overflow:hidden;position:relative}.loading:after{animation:loading-placeholder 1.5s ease-in-out infinite;background-color:#dddfe2;bottom:0;content:\"\";display:block;height:100%;position:absolute;top:0;transform:translateX(0);width:100%}@keyframes loading-placeholder{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
            },] }
];

class SingleCardComponent {
}
SingleCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-single-card',
                template: "<div class=\"container\">\n    <div class=\"upper\">\n        <img class=\"image\" src={{model.image}}/>\n        <span class=\"desc left\">\n            {{model.type}}\n        </span>\n        <span *ngIf=\"model.duration\" class=\"desc right\">\n            {{model.duration | duration}}\n        </span>\n    </div>\n    <div class=\"lower\">\n        <span class=\"title\">{{model.title}}</span>\n        <span class=\"subtitle\">{{model.subtitle}}</span>\n    </div>\n</div>",
                styles: [".container{height:220px;width:200px}.container .upper{position:relative}.container .upper .image{height:100px;overflow:hidden;width:-webkit-max-content;width:max-content}.container .upper .desc{background-color:rgba(50,50,50,.8);bottom:4px;color:#fff;font-size:x-small;font-weight:700;padding:3px 5px;position:absolute}.container .upper .desc.left{left:0;text-transform:uppercase}.container .upper .desc.right{right:0}.container .lower{padding:10px}.container .lower .title{color:#346262;display:block;font-size:small;font-weight:700;word-break:normal}.container .lower .subtitle{color:#6b7373;display:block;font-size:x-small;font-weight:700;margin-top:10px;word-break:normal}"]
            },] }
];
SingleCardComponent.propDecorators = {
    model: [{ type: Input }]
};

class CarouselComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.currentIndex = 0;
        this.mouseInside = false;
        this.cardModels = [];
        this.windowSize = 0; // how many cards can be concurrently viewed
        this.chunkSize = 6;
        this.cardRefs = [];
        this.cardWidth = GenericCardComponent.width;
        // Don't fetch new data if we are already waiting for some
        this.pendingLoadings = false;
        this.init = false;
    }
    ngOnInit() {
        this.refreshWindowSize();
        this.fetchData(this.windowSize);
        this.init = true;
    }
    scrollCarousel(count) {
        this.refreshWindowSize();
        if (count < 0) { // We are backtracking, all the cards data have already been requested
            this.currentIndex = Math.max(0, this.currentIndex + count); // Index can't be negative
        }
        else if (count > 0) {
            this.currentIndex += count;
            this.conditionalFetchData();
        }
        const isNext = (count > 0);
        this.refreshCardModels(isNext);
        this.scrollable.nativeElement.scrollTo({ left: isNext ? 0 : this.cardWidth, behavior: 'auto' });
        this.scrollable.nativeElement.scrollTo({ left: isNext ? this.cardWidth : 0, behavior: 'smooth' });
    }
    conditionalFetchData() {
        if (!this.pendingLoadings) {
            // Check whether we are going outside the already fetched data and we need to load a new set of data
            if (this.currentIndex + this.windowSize > this.cardModels.length) {
                this.fetchData(this.chunkSize);
            }
        }
    }
    onMouseInside(inside) {
        this.mouseInside = inside;
    }
    fetchData(count) {
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
    refreshCardInstances(delta) {
        if (this.container) {
            if (delta > 0) {
                const factory = this.resolver.resolveComponentFactory(GenericCardComponent);
                for (let i = 0; i < delta; ++i) {
                    const newCard = this.container.createComponent(factory);
                    this.cardRefs.push(newCard);
                }
            }
            else {
                for (let i = 0; i < -delta; ++i) {
                    const ref = this.cardRefs.pop();
                    ref.destroy();
                }
            }
        }
    }
    // In case the carousel got resized, check if new widgets are needed
    refreshWindowSize() {
        if (this.scrollable) {
            const newWindowSize = Math.ceil(this.scrollable.nativeElement.getBoundingClientRect().width / this.cardWidth) + 1;
            if (this.windowSize !== newWindowSize) {
                this.refreshCardInstances(newWindowSize - this.windowSize);
            }
            this.windowSize = newWindowSize;
        }
    }
    // switches the model to fake the widgets' rotation
    refreshCardModels(isNext = false) {
        for (let i = 0; i < this.cardRefs.length; ++i) {
            const candidateIndex = i + this.currentIndex + (isNext ? -1 : 0);
            this.cardRefs[i].instance.model$ = of(this.cardModels[candidateIndex]);
        }
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-carousel',
                template: "<div class=\"carousel\">\n    <div class=\"header\">\n        <div class=\"icon\" *ngIf=\"icon\">\n            <img class=\"icon-image\" src={{icon}} />\n        </div>\n        <div class=\"description\">\n            <span class=\"title\">{{title}}</span>\n            <span class=\"subtitle\">{{subtitle}}</span>\n        </div>\n    </div>\n\n    <div class=\"wrapper\" (mouseenter)=\"onMouseInside(true)\" (mouseleave)=\"onMouseInside(false)\">\n        <div #scrollable class=\"container\">\n            <template #container></template>\n        </div>\n\n        <div *ngIf=\"mouseInside && currentIndex>0\" class=\"prev\" (click)=\"scrollCarousel(-1)\">\n            <div class=\"scroll-img\">\n                <span><</span>\n            </div>\n        </div>\n        <div class=\"next\" *ngIf=\"mouseInside\" (click)=\"scrollCarousel(1)\">\n            <div class=\"scroll-img\">\n                <span class=\"\">></span>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".carousel{background-color:#d3d3d3;padding:10px}.carousel .header{align-items:center;display:flex}.carousel .header .icon{background-color:#6887b3;border-radius:10px;height:50px;margin-right:10px;padding:5px;width:50px}.carousel .header .icon .icon-image{max-height:100%;max-width:100%}.carousel .header .description .title{color:#6887b3;display:block}.carousel .header .description .subtitle{color:grey;display:block;font-size:small;margin-top:5px}.carousel .wrapper{margin-top:10px;position:relative}.carousel .wrapper .container{display:flex;overflow-x:hidden}.carousel .wrapper .prev{left:0}.carousel .wrapper .next,.carousel .wrapper .prev{background-color:hsla(0,0%,43.5%,.8);height:-webkit-fill-available;position:absolute;top:0;width:50px}.carousel .wrapper .next{right:0}.carousel .wrapper .scroll-img{-webkit-font-smoothing:antialiased;-webkit-user-select:none;color:#fff;font-size:x-large;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);user-select:none}"]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CarouselComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    icon: [{ type: Input }],
    fetchCards: [{ type: Input }],
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
    scrollable: [{ type: ViewChild, args: ['scrollable', { read: ElementRef, static: true },] }]
};

class DurationPipe {
    // transform ms into duration
    transform(value) {
        let string = "";
        value /= 1000; //ms to seconds
        value = Math.floor(value);
        let minutes = Math.floor(value / 60);
        if (value < 3600) { // less than 1h
            const seconds = value - (minutes * 60);
            if (seconds < 10) {
                string = `${minutes}:0${seconds}`;
            }
            else {
                string = `${minutes}:${seconds}`;
            }
        }
        else {
            const hours = Math.floor(minutes / 60);
            minutes = minutes - (hours * 60);
            string = `${hours}h ${minutes}m`;
        }
        return string;
    }
}
DurationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'duration'
            },] }
];

class MultipleCardComponent {
}
MultipleCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-multiple-card',
                template: "<div class=\"container\">\n        <div class=\"fake-card-3\"></div>\n        <div class=\"fake-card-2\"></div>\n        <div class=\"fake-card-1\"></div>\n    <div class=\"real-card\">\n        <lib-single-card [model]=\"model\"></lib-single-card>\n    </div>\n</div>",
                styles: [".container{height:220px;position:relative;width:200px}.container .fake-card-1{height:101%;left:2%;width:96%}.container .fake-card-1,.container .fake-card-2{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);position:absolute;top:0}.container .fake-card-2{height:102%;left:4%;width:92%}.container .fake-card-3{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);height:103%;left:6%;position:absolute;top:0;width:88%}.container .real-card{background-color:#fff;height:100%;position:absolute;top:0;width:100%}"]
            },] }
];
MultipleCardComponent.propDecorators = {
    model: [{ type: Input }]
};

class SimpleCarouselModule {
}
SimpleCarouselModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

var cardCardinality;
(function (cardCardinality) {
    cardCardinality["single"] = "single";
    cardCardinality["collection"] = "collection";
})(cardCardinality || (cardCardinality = {}));

var cardType;
(function (cardType) {
    cardType["elearning"] = "elearning";
    cardType["video"] = "video";
    cardType["learning_plan"] = "learning_plan";
    cardType["playlist"] = "playlist";
})(cardType || (cardType = {}));

class CardModel {
}

/*
 * Public API Surface of simple-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardModel, CarouselComponent, SimpleCarouselModule, cardCardinality, cardType, GenericCardComponent as ɵa, SingleCardComponent as ɵb, PlaceholderCardComponent as ɵc, DurationPipe as ɵd, MultipleCardComponent as ɵe };
//# sourceMappingURL=simple-carousel.js.map
