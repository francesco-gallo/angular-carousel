(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('simple-carousel', ['exports', '@angular/core', '@angular/platform-browser', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['simple-carousel'] = {}, global.ng.core, global.ng.platformBrowser, global.rxjs));
}(this, (function (exports, core, platformBrowser, rxjs) { 'use strict';

    var GenericCardComponent = /** @class */ (function () {
        function GenericCardComponent() {
        }
        return GenericCardComponent;
    }());
    GenericCardComponent.width = 220;
    GenericCardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-generic-card',
                    template: "<div class=\"outer-card\">\n    <div class=\"card\">\n        <ng-container *ngIf=\"model$ | async as model; else placeholderBlock\">\n            <lib-single-card *ngIf=\"model.cardinality==='single'\" [model]=\"model\"></lib-single-card>\n            <lib-multiple-card *ngIf=\"model.cardinality==='collection'\" [model]=\"model\"></lib-multiple-card>\n        </ng-container>\n        <ng-template #placeholderBlock>\n            <lib-placeholder-card></lib-placeholder-card>\n        </ng-template>\n    </div>\n</div>",
                    styles: [".outer-card{padding:10px}.card{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}"]
                },] }
    ];

    var PlaceholderCardComponent = /** @class */ (function () {
        function PlaceholderCardComponent() {
        }
        return PlaceholderCardComponent;
    }());
    PlaceholderCardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-placeholder-card',
                    template: "  <div class=\"container\">\n    <div class=\"image loading\">\n    </div>\n    <div class=\"bars\">\n      <div class=\"bar bar1 loading\"></div>\n      <div class=\"bar bar2 loading\"></div>\n    </div>\n  </div>",
                    styles: [".container{height:220px;width:200px}.container .image{background:#e9ebee;height:100px}.container .bars{height:85px}.container .bars .bar{background:#e9ebee;height:19px;margin:0 13px 13px}.container .bars .bar1{margin-top:15px;width:80%}.container .bars .bar2{width:30%}.loading{overflow:hidden;position:relative}.loading:after{animation:loading-placeholder 1.5s ease-in-out infinite;background-color:#dddfe2;bottom:0;content:\"\";display:block;height:100%;position:absolute;top:0;transform:translateX(0);width:100%}@keyframes loading-placeholder{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
                },] }
    ];

    var SingleCardComponent = /** @class */ (function () {
        function SingleCardComponent() {
        }
        return SingleCardComponent;
    }());
    SingleCardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-single-card',
                    template: "<div class=\"container\">\n    <div class=\"upper\">\n        <img class=\"image\" src={{model.image}}/>\n        <span class=\"desc left\">\n            {{model.type}}\n        </span>\n        <span *ngIf=\"model.duration\" class=\"desc right\">\n            {{model.duration | duration}}\n        </span>\n    </div>\n    <div class=\"lower\">\n        <span class=\"title\">{{model.title}}</span>\n        <span class=\"subtitle\">{{model.subtitle}}</span>\n    </div>\n</div>",
                    styles: [".container{height:220px;width:200px}.container .upper{position:relative}.container .upper .image{height:100px;overflow:hidden;width:-webkit-max-content;width:max-content}.container .upper .desc{background-color:rgba(50,50,50,.8);bottom:4px;color:#fff;font-size:x-small;font-weight:700;padding:3px 5px;position:absolute}.container .upper .desc.left{left:0;text-transform:uppercase}.container .upper .desc.right{right:0}.container .lower{padding:10px}.container .lower .title{color:#346262;display:block;font-size:small;font-weight:700;word-break:normal}.container .lower .subtitle{color:#6b7373;display:block;font-size:x-small;font-weight:700;margin-top:10px;word-break:normal}"]
                },] }
    ];
    SingleCardComponent.propDecorators = {
        model: [{ type: core.Input }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CarouselComponent = /** @class */ (function () {
        function CarouselComponent(resolver) {
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
        CarouselComponent.prototype.ngOnInit = function () {
            this.refreshWindowSize();
            this.fetchData(this.windowSize);
            this.init = true;
        };
        CarouselComponent.prototype.scrollCarousel = function (count) {
            this.refreshWindowSize();
            if (count < 0) { // We are backtracking, all the cards data have already been requested
                this.currentIndex = Math.max(0, this.currentIndex + count); // Index can't be negative
            }
            else if (count > 0) {
                this.currentIndex += count;
                this.conditionalFetchData();
            }
            var isNext = (count > 0);
            this.refreshCardModels(isNext);
            this.scrollable.nativeElement.scrollTo({ left: isNext ? 0 : this.cardWidth, behavior: 'auto' });
            this.scrollable.nativeElement.scrollTo({ left: isNext ? this.cardWidth : 0, behavior: 'smooth' });
        };
        CarouselComponent.prototype.conditionalFetchData = function () {
            if (!this.pendingLoadings) {
                // Check whether we are going outside the already fetched data and we need to load a new set of data
                if (this.currentIndex + this.windowSize > this.cardModels.length) {
                    this.fetchData(this.chunkSize);
                }
            }
        };
        CarouselComponent.prototype.onMouseInside = function (inside) {
            this.mouseInside = inside;
        };
        CarouselComponent.prototype.fetchData = function (count) {
            var _this = this;
            if (this.fetchCards) {
                var isInit_1 = this.init; // The first time the refresh model method needs to start from 0
                this.pendingLoadings = true;
                this.fetchCards(count).then(function (data) {
                    var _a;
                    _this.pendingLoadings = false;
                    (_a = _this.cardModels).push.apply(_a, __spread(data));
                    _this.refreshCardModels(isInit_1);
                    _this.conditionalFetchData();
                });
            }
        };
        // Create or destroy the references to keep the memory clean
        CarouselComponent.prototype.refreshCardInstances = function (delta) {
            if (this.container) {
                if (delta > 0) {
                    var factory = this.resolver.resolveComponentFactory(GenericCardComponent);
                    for (var i = 0; i < delta; ++i) {
                        var newCard = this.container.createComponent(factory);
                        this.cardRefs.push(newCard);
                    }
                }
                else {
                    for (var i = 0; i < -delta; ++i) {
                        var ref = this.cardRefs.pop();
                        ref.destroy();
                    }
                }
            }
        };
        // In case the carousel got resized, check if new widgets are needed
        CarouselComponent.prototype.refreshWindowSize = function () {
            if (this.scrollable) {
                var newWindowSize = Math.ceil(this.scrollable.nativeElement.getBoundingClientRect().width / this.cardWidth) + 1;
                if (this.windowSize !== newWindowSize) {
                    this.refreshCardInstances(newWindowSize - this.windowSize);
                }
                this.windowSize = newWindowSize;
            }
        };
        // switches the model to fake the widgets' rotation
        CarouselComponent.prototype.refreshCardModels = function (isNext) {
            if (isNext === void 0) { isNext = false; }
            for (var i = 0; i < this.cardRefs.length; ++i) {
                var candidateIndex = i + this.currentIndex + (isNext ? -1 : 0);
                this.cardRefs[i].instance.model$ = rxjs.of(this.cardModels[candidateIndex]);
            }
        };
        return CarouselComponent;
    }());
    CarouselComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-carousel',
                    template: "<div class=\"carousel\">\n    <div class=\"header\">\n        <div class=\"icon\" *ngIf=\"icon\">\n            <img class=\"icon-image\" src={{icon}} />\n        </div>\n        <div class=\"description\">\n            <span class=\"title\">{{title}}</span>\n            <span class=\"subtitle\">{{subtitle}}</span>\n        </div>\n    </div>\n\n    <div class=\"wrapper\" (mouseenter)=\"onMouseInside(true)\" (mouseleave)=\"onMouseInside(false)\">\n        <div #scrollable class=\"container\">\n            <template #container></template>\n        </div>\n\n        <div *ngIf=\"mouseInside && currentIndex>0\" class=\"prev\" (click)=\"scrollCarousel(-1)\">\n            <div class=\"scroll-img\">\n                <span><</span>\n            </div>\n        </div>\n        <div class=\"next\" *ngIf=\"mouseInside\" (click)=\"scrollCarousel(1)\">\n            <div class=\"scroll-img\">\n                <span class=\"\">></span>\n            </div>\n        </div>\n    </div>\n</div>",
                    styles: [".carousel{background-color:#d3d3d3;padding:10px}.carousel .header{align-items:center;display:flex}.carousel .header .icon{background-color:#6887b3;border-radius:10px;height:50px;margin-right:10px;padding:5px;width:50px}.carousel .header .icon .icon-image{max-height:100%;max-width:100%}.carousel .header .description .title{color:#6887b3;display:block}.carousel .header .description .subtitle{color:grey;display:block;font-size:small;margin-top:5px}.carousel .wrapper{margin-top:10px;position:relative}.carousel .wrapper .container{display:flex;overflow-x:hidden}.carousel .wrapper .prev{left:0}.carousel .wrapper .next,.carousel .wrapper .prev{background-color:hsla(0,0%,43.5%,.8);height:-webkit-fill-available;position:absolute;top:0;width:50px}.carousel .wrapper .next{right:0}.carousel .wrapper .scroll-img{-webkit-font-smoothing:antialiased;-webkit-user-select:none;color:#fff;font-size:x-large;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);user-select:none}"]
                },] }
    ];
    CarouselComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver }
    ]; };
    CarouselComponent.propDecorators = {
        title: [{ type: core.Input }],
        subtitle: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        fetchCards: [{ type: core.Input }],
        container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: true },] }],
        scrollable: [{ type: core.ViewChild, args: ['scrollable', { read: core.ElementRef, static: true },] }]
    };

    var DurationPipe = /** @class */ (function () {
        function DurationPipe() {
        }
        // transform ms into duration
        DurationPipe.prototype.transform = function (value) {
            var string = "";
            value /= 1000; //ms to seconds
            value = Math.floor(value);
            var minutes = Math.floor(value / 60);
            if (value < 3600) { // less than 1h
                var seconds = value - (minutes * 60);
                if (seconds < 10) {
                    string = minutes + ":0" + seconds;
                }
                else {
                    string = minutes + ":" + seconds;
                }
            }
            else {
                var hours = Math.floor(minutes / 60);
                minutes = minutes - (hours * 60);
                string = hours + "h " + minutes + "m";
            }
            return string;
        };
        return DurationPipe;
    }());
    DurationPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'duration'
                },] }
    ];

    var MultipleCardComponent = /** @class */ (function () {
        function MultipleCardComponent() {
        }
        return MultipleCardComponent;
    }());
    MultipleCardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-multiple-card',
                    template: "<div class=\"container\">\n        <div class=\"fake-card-3\"></div>\n        <div class=\"fake-card-2\"></div>\n        <div class=\"fake-card-1\"></div>\n    <div class=\"real-card\">\n        <lib-single-card [model]=\"model\"></lib-single-card>\n    </div>\n</div>",
                    styles: [".container{height:220px;position:relative;width:200px}.container .fake-card-1{height:101%;left:2%;width:96%}.container .fake-card-1,.container .fake-card-2{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);position:absolute;top:0}.container .fake-card-2{height:102%;left:4%;width:92%}.container .fake-card-3{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);height:103%;left:6%;position:absolute;top:0;width:88%}.container .real-card{background-color:#fff;height:100%;position:absolute;top:0;width:100%}"]
                },] }
    ];
    MultipleCardComponent.propDecorators = {
        model: [{ type: core.Input }]
    };

    var SimpleCarouselModule = /** @class */ (function () {
        function SimpleCarouselModule() {
        }
        return SimpleCarouselModule;
    }());
    SimpleCarouselModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        GenericCardComponent,
                        SingleCardComponent,
                        PlaceholderCardComponent,
                        CarouselComponent,
                        DurationPipe,
                        MultipleCardComponent
                    ],
                    imports: [
                        platformBrowser.BrowserModule
                    ],
                    exports: [
                        CarouselComponent
                    ]
                },] }
    ];

    (function (cardCardinality) {
        cardCardinality["single"] = "single";
        cardCardinality["collection"] = "collection";
    })(exports.cardCardinality || (exports.cardCardinality = {}));

    (function (cardType) {
        cardType["elearning"] = "elearning";
        cardType["video"] = "video";
        cardType["learning_plan"] = "learning_plan";
        cardType["playlist"] = "playlist";
    })(exports.cardType || (exports.cardType = {}));

    var CardModel = /** @class */ (function () {
        function CardModel() {
        }
        return CardModel;
    }());

    /*
     * Public API Surface of simple-carousel
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardModel = CardModel;
    exports.CarouselComponent = CarouselComponent;
    exports.SimpleCarouselModule = SimpleCarouselModule;
    exports.ɵa = GenericCardComponent;
    exports.ɵb = SingleCardComponent;
    exports.ɵc = PlaceholderCardComponent;
    exports.ɵd = DurationPipe;
    exports.ɵe = MultipleCardComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=simple-carousel.umd.js.map
