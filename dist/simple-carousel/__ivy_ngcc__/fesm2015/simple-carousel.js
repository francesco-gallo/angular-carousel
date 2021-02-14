import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef, Pipe, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GenericCardComponent_ng_container_2_lib_single_card_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "lib-single-card", 5);
} if (rf & 2) {
    const model_r3 = ɵngcc0.ɵɵnextContext().ngIf;
    ɵngcc0.ɵɵproperty("model", model_r3);
} }
function GenericCardComponent_ng_container_2_lib_multiple_card_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "lib-multiple-card", 5);
} if (rf & 2) {
    const model_r3 = ɵngcc0.ɵɵnextContext().ngIf;
    ɵngcc0.ɵɵproperty("model", model_r3);
} }
function GenericCardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, GenericCardComponent_ng_container_2_lib_single_card_1_Template, 1, 1, "lib-single-card", 4);
    ɵngcc0.ɵɵtemplate(2, GenericCardComponent_ng_container_2_lib_multiple_card_2_Template, 1, 1, "lib-multiple-card", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const model_r3 = ctx.ngIf;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", model_r3.cardinality === "single");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", model_r3.cardinality === "collection");
} }
function GenericCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "lib-placeholder-card");
} }
function SingleCardComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "duration");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r0.model.duration), " ");
} }
const _c0 = ["container"];
const _c1 = ["scrollable"];
function CarouselComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "img", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.icon, ɵngcc0.ɵɵsanitizeUrl);
} }
function CarouselComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵlistener("click", function CarouselComponent_div_13_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.scrollCarousel(-1); });
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "<");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function CarouselComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵlistener("click", function CarouselComponent_div_14_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.scrollCarousel(1); });
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 17);
    ɵngcc0.ɵɵtext(3, ">");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
class GenericCardComponent {
}
GenericCardComponent.ɵfac = function GenericCardComponent_Factory(t) { return new (t || GenericCardComponent)(); };
GenericCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GenericCardComponent, selectors: [["lib-generic-card"]], decls: 6, vars: 4, consts: [[1, "outer-card"], [1, "card"], [4, "ngIf", "ngIfElse"], ["placeholderBlock", ""], [3, "model", 4, "ngIf"], [3, "model"]], template: function GenericCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, GenericCardComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵtemplate(4, GenericCardComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(3, 2, ctx.model$))("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc1.NgIf, SingleCardComponent, MultipleCardComponent, PlaceholderCardComponent]; }, pipes: function () { return [ɵngcc1.AsyncPipe]; }, styles: [".outer-card[_ngcontent-%COMP%]{padding:10px}.card[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}"] });
GenericCardComponent.width = 220;
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GenericCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-generic-card',
                template: "<div class=\"outer-card\">\n    <div class=\"card\">\n        <ng-container *ngIf=\"model$ | async as model; else placeholderBlock\">\n            <lib-single-card *ngIf=\"model.cardinality==='single'\" [model]=\"model\"></lib-single-card>\n            <lib-multiple-card *ngIf=\"model.cardinality==='collection'\" [model]=\"model\"></lib-multiple-card>\n        </ng-container>\n        <ng-template #placeholderBlock>\n            <lib-placeholder-card></lib-placeholder-card>\n        </ng-template>\n    </div>\n</div>",
                styles: [".outer-card{padding:10px}.card{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}"]
            }]
    }], null, null); })();

class PlaceholderCardComponent {
}
PlaceholderCardComponent.ɵfac = function PlaceholderCardComponent_Factory(t) { return new (t || PlaceholderCardComponent)(); };
PlaceholderCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PlaceholderCardComponent, selectors: [["lib-placeholder-card"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "image", "loading"], [1, "bars"], [1, "bar", "bar1", "loading"], [1, "bar", "bar2", "loading"]], template: function PlaceholderCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".container[_ngcontent-%COMP%]{height:220px;width:200px}.container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background:#e9ebee;height:100px}.container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{height:85px}.container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background:#e9ebee;height:19px;margin:0 13px 13px}.container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%]{margin-top:15px;width:80%}.container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%]{width:30%}.loading[_ngcontent-%COMP%]{overflow:hidden;position:relative}.loading[_ngcontent-%COMP%]:after{animation:loading-placeholder 1.5s ease-in-out infinite;background-color:#dddfe2;bottom:0;content:\"\";display:block;height:100%;position:absolute;top:0;transform:translateX(0);width:100%}@keyframes loading-placeholder{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PlaceholderCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-placeholder-card',
                template: "  <div class=\"container\">\n    <div class=\"image loading\">\n    </div>\n    <div class=\"bars\">\n      <div class=\"bar bar1 loading\"></div>\n      <div class=\"bar bar2 loading\"></div>\n    </div>\n  </div>",
                styles: [".container{height:220px;width:200px}.container .image{background:#e9ebee;height:100px}.container .bars{height:85px}.container .bars .bar{background:#e9ebee;height:19px;margin:0 13px 13px}.container .bars .bar1{margin-top:15px;width:80%}.container .bars .bar2{width:30%}.loading{overflow:hidden;position:relative}.loading:after{animation:loading-placeholder 1.5s ease-in-out infinite;background-color:#dddfe2;bottom:0;content:\"\";display:block;height:100%;position:absolute;top:0;transform:translateX(0);width:100%}@keyframes loading-placeholder{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
            }]
    }], null, null); })();

class SingleCardComponent {
}
SingleCardComponent.ɵfac = function SingleCardComponent_Factory(t) { return new (t || SingleCardComponent)(); };
SingleCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SingleCardComponent, selectors: [["lib-single-card"]], inputs: { model: "model" }, decls: 11, vars: 5, consts: [[1, "container"], [1, "upper"], [1, "image", 3, "src"], [1, "desc", "left"], ["class", "desc right", 4, "ngIf"], [1, "lower"], [1, "title"], [1, "subtitle"], [1, "desc", "right"]], template: function SingleCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "img", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, SingleCardComponent_span_5_Template, 3, 3, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "span", 6);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "span", 7);
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("src", ctx.model.image, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.model.type, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.model.duration);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.model.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.model.subtitle);
    } }, directives: function () { return [ɵngcc1.NgIf]; }, pipes: function () { return [DurationPipe]; }, styles: [".container[_ngcontent-%COMP%]{height:220px;width:200px}.container[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:100px;overflow:hidden;width:-webkit-max-content;width:max-content}.container[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{background-color:rgba(50,50,50,.8);bottom:4px;color:#fff;font-size:x-small;font-weight:700;padding:3px 5px;position:absolute}.container[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .desc.left[_ngcontent-%COMP%]{left:0;text-transform:uppercase}.container[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .desc.right[_ngcontent-%COMP%]{right:0}.container[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]{padding:10px}.container[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#346262;display:block;font-size:small;font-weight:700;word-break:normal}.container[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#6b7373;display:block;font-size:x-small;font-weight:700;margin-top:10px;word-break:normal}"] });
SingleCardComponent.propDecorators = {
    model: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SingleCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-single-card',
                template: "<div class=\"container\">\n    <div class=\"upper\">\n        <img class=\"image\" src={{model.image}}/>\n        <span class=\"desc left\">\n            {{model.type}}\n        </span>\n        <span *ngIf=\"model.duration\" class=\"desc right\">\n            {{model.duration | duration}}\n        </span>\n    </div>\n    <div class=\"lower\">\n        <span class=\"title\">{{model.title}}</span>\n        <span class=\"subtitle\">{{model.subtitle}}</span>\n    </div>\n</div>",
                styles: [".container{height:220px;width:200px}.container .upper{position:relative}.container .upper .image{height:100px;overflow:hidden;width:-webkit-max-content;width:max-content}.container .upper .desc{background-color:rgba(50,50,50,.8);bottom:4px;color:#fff;font-size:x-small;font-weight:700;padding:3px 5px;position:absolute}.container .upper .desc.left{left:0;text-transform:uppercase}.container .upper .desc.right{right:0}.container .lower{padding:10px}.container .lower .title{color:#346262;display:block;font-size:small;font-weight:700;word-break:normal}.container .lower .subtitle{color:#6b7373;display:block;font-size:x-small;font-weight:700;margin-top:10px;word-break:normal}"]
            }]
    }], null, { model: [{
            type: Input
        }] }); })();

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
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver)); };
CarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["lib-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollable = _t.first);
    } }, inputs: { title: "title", subtitle: "subtitle", icon: "icon", fetchCards: "fetchCards" }, decls: 15, vars: 5, consts: [[1, "carousel"], [1, "header"], ["class", "icon", 4, "ngIf"], [1, "description"], [1, "title"], [1, "subtitle"], [1, "wrapper", 3, "mouseenter", "mouseleave"], [1, "container"], ["scrollable", ""], ["container", ""], ["class", "prev", 3, "click", 4, "ngIf"], ["class", "next", 3, "click", 4, "ngIf"], [1, "icon"], [1, "icon-image", 3, "src"], [1, "prev", 3, "click"], [1, "scroll-img"], [1, "next", 3, "click"], [1, ""]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, CarouselComponent_div_2_Template, 2, 1, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "span", 5);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵlistener("mouseenter", function CarouselComponent_Template_div_mouseenter_8_listener() { return ctx.onMouseInside(true); })("mouseleave", function CarouselComponent_Template_div_mouseleave_8_listener() { return ctx.onMouseInside(false); });
        ɵngcc0.ɵɵelementStart(9, "div", 7, 8);
        ɵngcc0.ɵɵelement(11, "template", null, 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, CarouselComponent_div_13_Template, 4, 0, "div", 10);
        ɵngcc0.ɵɵtemplate(14, CarouselComponent_div_14_Template, 4, 0, "div", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mouseInside && ctx.currentIndex > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mouseInside);
    } }, directives: [ɵngcc1.NgIf], styles: [".carousel[_ngcontent-%COMP%]{background-color:#d3d3d3;padding:10px}.carousel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;display:flex}.carousel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background-color:#6887b3;border-radius:10px;height:50px;margin-right:10px;padding:5px;width:50px}.carousel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .icon-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%}.carousel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#6887b3;display:block}.carousel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:grey;display:block;font-size:small;margin-top:5px}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-top:10px;position:relative}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;overflow-x:hidden}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]{left:0}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]{background-color:hsla(0,0%,43.5%,.8);height:-webkit-fill-available;position:absolute;top:0;width:50px}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{right:0}.carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .scroll-img[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-webkit-user-select:none;color:#fff;font-size:x-large;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);user-select:none}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'lib-carousel',
                template: "<div class=\"carousel\">\n    <div class=\"header\">\n        <div class=\"icon\" *ngIf=\"icon\">\n            <img class=\"icon-image\" src={{icon}} />\n        </div>\n        <div class=\"description\">\n            <span class=\"title\">{{title}}</span>\n            <span class=\"subtitle\">{{subtitle}}</span>\n        </div>\n    </div>\n\n    <div class=\"wrapper\" (mouseenter)=\"onMouseInside(true)\" (mouseleave)=\"onMouseInside(false)\">\n        <div #scrollable class=\"container\">\n            <template #container></template>\n        </div>\n\n        <div *ngIf=\"mouseInside && currentIndex>0\" class=\"prev\" (click)=\"scrollCarousel(-1)\">\n            <div class=\"scroll-img\">\n                <span><</span>\n            </div>\n        </div>\n        <div class=\"next\" *ngIf=\"mouseInside\" (click)=\"scrollCarousel(1)\">\n            <div class=\"scroll-img\">\n                <span class=\"\">></span>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".carousel{background-color:#d3d3d3;padding:10px}.carousel .header{align-items:center;display:flex}.carousel .header .icon{background-color:#6887b3;border-radius:10px;height:50px;margin-right:10px;padding:5px;width:50px}.carousel .header .icon .icon-image{max-height:100%;max-width:100%}.carousel .header .description .title{color:#6887b3;display:block}.carousel .header .description .subtitle{color:grey;display:block;font-size:small;margin-top:5px}.carousel .wrapper{margin-top:10px;position:relative}.carousel .wrapper .container{display:flex;overflow-x:hidden}.carousel .wrapper .prev{left:0}.carousel .wrapper .next,.carousel .wrapper .prev{background-color:hsla(0,0%,43.5%,.8);height:-webkit-fill-available;position:absolute;top:0;width:50px}.carousel .wrapper .next{right:0}.carousel .wrapper .scroll-img{-webkit-font-smoothing:antialiased;-webkit-user-select:none;color:#fff;font-size:x-large;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);user-select:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }]; }, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], icon: [{
            type: Input
        }], fetchCards: [{
            type: Input
        }], container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: true }]
        }], scrollable: [{
            type: ViewChild,
            args: ['scrollable', { read: ElementRef, static: true }]
        }] }); })();

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
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "duration", type: DurationPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DurationPipe, [{
        type: Pipe,
        args: [{
                name: 'duration'
            }]
    }], null, null); })();

class MultipleCardComponent {
}
MultipleCardComponent.ɵfac = function MultipleCardComponent_Factory(t) { return new (t || MultipleCardComponent)(); };
MultipleCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultipleCardComponent, selectors: [["lib-multiple-card"]], inputs: { model: "model" }, decls: 6, vars: 1, consts: [[1, "container"], [1, "fake-card-3"], [1, "fake-card-2"], [1, "fake-card-1"], [1, "real-card"], [3, "model"]], template: function MultipleCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelement(5, "lib-single-card", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("model", ctx.model);
    } }, directives: [SingleCardComponent], styles: [".container[_ngcontent-%COMP%]{height:220px;position:relative;width:200px}.container[_ngcontent-%COMP%]   .fake-card-1[_ngcontent-%COMP%]{height:101%;left:2%;width:96%}.container[_ngcontent-%COMP%]   .fake-card-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .fake-card-2[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);position:absolute;top:0}.container[_ngcontent-%COMP%]   .fake-card-2[_ngcontent-%COMP%]{height:102%;left:4%;width:92%}.container[_ngcontent-%COMP%]   .fake-card-3[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);height:103%;left:6%;position:absolute;top:0;width:88%}.container[_ngcontent-%COMP%]   .real-card[_ngcontent-%COMP%]{background-color:#fff;height:100%;position:absolute;top:0;width:100%}"] });
MultipleCardComponent.propDecorators = {
    model: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultipleCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-multiple-card',
                template: "<div class=\"container\">\n        <div class=\"fake-card-3\"></div>\n        <div class=\"fake-card-2\"></div>\n        <div class=\"fake-card-1\"></div>\n    <div class=\"real-card\">\n        <lib-single-card [model]=\"model\"></lib-single-card>\n    </div>\n</div>",
                styles: [".container{height:220px;position:relative;width:200px}.container .fake-card-1{height:101%;left:2%;width:96%}.container .fake-card-1,.container .fake-card-2{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);position:absolute;top:0}.container .fake-card-2{height:102%;left:4%;width:92%}.container .fake-card-3{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);height:103%;left:6%;position:absolute;top:0;width:88%}.container .real-card{background-color:#fff;height:100%;position:absolute;top:0;width:100%}"]
            }]
    }], null, { model: [{
            type: Input
        }] }); })();

class SimpleCarouselModule {
}
SimpleCarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SimpleCarouselModule });
SimpleCarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SimpleCarouselModule_Factory(t) { return new (t || SimpleCarouselModule)(); }, imports: [[
            BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SimpleCarouselModule, { declarations: function () { return [GenericCardComponent, SingleCardComponent, PlaceholderCardComponent, CarouselComponent, DurationPipe, MultipleCardComponent]; }, imports: function () { return [BrowserModule]; }, exports: function () { return [CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SimpleCarouselModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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