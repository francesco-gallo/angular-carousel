import { Component, ComponentFactoryResolver, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { of } from 'rxjs';
import { GenericCardComponent } from '../cards/generic-card/generic-card.component';
export class CarouselComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jZXNjby9Qcm9qZWN0cy9hbmd1bGFyLWNhcm91c2VsL3Byb2plY3RzL3NpbXBsZS1jYXJvdXNlbC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLFVBQVUsRUFBRSxLQUFLLEVBQ3RGLFNBQVMsRUFBRSxnQkFBZ0IsRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQU9wRixNQUFNLE9BQU8saUJBQWlCO0lBdUM1QixZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQXpCL0MsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFRNUIsZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFFLDRDQUE0QztRQUU3RCxjQUFTLEdBQUcsQ0FBQyxDQUFBO1FBRWIsYUFBUSxHQUF5QyxFQUFFLENBQUM7UUFFcEQsY0FBUyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQztRQUUvQywwREFBMEQ7UUFDbEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUVxQyxDQUFDO0lBRTNELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0s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LENBQUM7OztZQWhJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDArQkFBd0M7O2FBRXpDOzs7WUFYOEIsd0JBQXdCOzs7b0JBY3BELEtBQUs7dUJBR0wsS0FBSzttQkFHTCxLQUFLO3lCQUdMLEtBQUs7d0JBU0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO3lCQUc3RCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCxcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmRNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9jYXJkLW1vZGVsJztcbmltcG9ydCB7IEdlbmVyaWNDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FyZHMvZ2VuZXJpYy1jYXJkL2dlbmVyaWMtY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3VidGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmZXRjaENhcmRzOiAoY2h1bmtTaXplOiBudW1iZXIpID0+IFByb21pc2U8Q2FyZE1vZGVsW10+O1xuXG4gIHB1YmxpYyBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHB1YmxpYyBtb3VzZUluc2lkZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjYXJkTW9kZWxzOiBDYXJkTW9kZWxbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWV9KSAvLyBjb250YWluZXIgZm9yIHRoZSBjYXJkc1xuICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCdzY3JvbGxhYmxlJywge3JlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZX0pIC8vIHNjcm9sbGFibGUgd3JhcHBlclxuICBwcml2YXRlIHNjcm9sbGFibGU6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgd2luZG93U2l6ZSA9IDA7ICAvLyBob3cgbWFueSBjYXJkcyBjYW4gYmUgY29uY3VycmVudGx5IHZpZXdlZFxuXG4gIHByaXZhdGUgY2h1bmtTaXplID0gNlxuXG4gIHByaXZhdGUgY2FyZFJlZnM6IENvbXBvbmVudFJlZjxHZW5lcmljQ2FyZENvbXBvbmVudD5bXSA9IFtdO1xuXG4gIHByaXZhdGUgY2FyZFdpZHRoID0gR2VuZXJpY0NhcmRDb21wb25lbnQud2lkdGg7XG5cbiAgLy8gRG9uJ3QgZmV0Y2ggbmV3IGRhdGEgaWYgd2UgYXJlIGFscmVhZHkgd2FpdGluZyBmb3Igc29tZVxuICBwcml2YXRlIHBlbmRpbmdMb2FkaW5ncyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xuICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMud2luZG93U2l6ZSk7XG4gICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxDYXJvdXNlbChjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xuICAgIGlmIChjb3VudCA8IDApIHsgLy8gV2UgYXJlIGJhY2t0cmFja2luZywgYWxsIHRoZSBjYXJkcyBkYXRhIGhhdmUgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLmN1cnJlbnRJbmRleCArIGNvdW50KTsgLy8gSW5kZXggY2FuJ3QgYmUgbmVnYXRpdmVcbiAgICB9IGVsc2UgaWYgKGNvdW50ID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gY291bnQ7XG4gICAgICB0aGlzLmNvbmRpdGlvbmFsRmV0Y2hEYXRhKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNOZXh0ID0gKGNvdW50PjApO1xuICAgIHRoaXMucmVmcmVzaENhcmRNb2RlbHMoaXNOZXh0KTtcbiAgICB0aGlzLnNjcm9sbGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7bGVmdDogaXNOZXh0ID8gMCA6IHRoaXMuY2FyZFdpZHRoLCBiZWhhdmlvcjogJ2F1dG8nfSlcbiAgICB0aGlzLnNjcm9sbGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7bGVmdDogaXNOZXh0ID8gdGhpcy5jYXJkV2lkdGggOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxuICB9XG5cbiAgcHVibGljIGNvbmRpdGlvbmFsRmV0Y2hEYXRhKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wZW5kaW5nTG9hZGluZ3MpIHtcbiAgICAgIC8vIENoZWNrIHdoZXRoZXIgd2UgYXJlIGdvaW5nIG91dHNpZGUgdGhlIGFscmVhZHkgZmV0Y2hlZCBkYXRhIGFuZCB3ZSBuZWVkIHRvIGxvYWQgYSBuZXcgc2V0IG9mIGRhdGFcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMud2luZG93U2l6ZSA+IHRoaXMuY2FyZE1vZGVscy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5jaHVua1NpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbk1vdXNlSW5zaWRlKGluc2lkZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW91c2VJbnNpZGUgPSBpbnNpZGU7XG4gIH1cblxuICBwcml2YXRlIGZldGNoRGF0YShjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmV0Y2hDYXJkcykge1xuICAgICAgY29uc3QgaXNJbml0ID0gdGhpcy5pbml0OyAvLyBUaGUgZmlyc3QgdGltZSB0aGUgcmVmcmVzaCBtb2RlbCBtZXRob2QgbmVlZHMgdG8gc3RhcnQgZnJvbSAwXG4gICAgICB0aGlzLnBlbmRpbmdMb2FkaW5ncyA9IHRydWU7XG4gICAgICB0aGlzLmZldGNoQ2FyZHMoY291bnQpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMucGVuZGluZ0xvYWRpbmdzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FyZE1vZGVscy5wdXNoKC4uLmRhdGEpO1xuICAgICAgICB0aGlzLnJlZnJlc2hDYXJkTW9kZWxzKGlzSW5pdCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxGZXRjaERhdGEoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBvciBkZXN0cm95IHRoZSByZWZlcmVuY2VzIHRvIGtlZXAgdGhlIG1lbW9yeSBjbGVhblxuICBwcml2YXRlIHJlZnJlc2hDYXJkSW5zdGFuY2VzKGRlbHRhOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxHZW5lcmljQ2FyZENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEdlbmVyaWNDYXJkQ29tcG9uZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8ZGVsdGE7ICsraSkge1xuICAgICAgICAgIGNvbnN0IG5ld0NhcmQ6IENvbXBvbmVudFJlZjxHZW5lcmljQ2FyZENvbXBvbmVudD4gPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgdGhpcy5jYXJkUmVmcy5wdXNoKG5ld0NhcmQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IC1kZWx0YTsgKytpKSB7XG4gICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5jYXJkUmVmcy5wb3AoKTtcbiAgICAgICAgICByZWYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSB0aGUgY2Fyb3VzZWwgZ290IHJlc2l6ZWQsIGNoZWNrIGlmIG5ldyB3aWRnZXRzIGFyZSBuZWVkZWRcbiAgcHJpdmF0ZSByZWZyZXNoV2luZG93U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICBjb25zdCBuZXdXaW5kb3dTaXplID0gTWF0aC5jZWlsKHRoaXMuc2Nyb2xsYWJsZS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gdGhpcy5jYXJkV2lkdGgpICsgMVxuICAgICAgaWYgKHRoaXMud2luZG93U2l6ZSAhPT0gbmV3V2luZG93U2l6ZSkge1xuICAgICAgICB0aGlzLnJlZnJlc2hDYXJkSW5zdGFuY2VzKG5ld1dpbmRvd1NpemUgLSB0aGlzLndpbmRvd1NpemUpO1xuICAgICAgfVxuICAgICAgdGhpcy53aW5kb3dTaXplID0gbmV3V2luZG93U2l6ZTtcbiAgICB9XG4gIH1cblxuICAvLyBzd2l0Y2hlcyB0aGUgbW9kZWwgdG8gZmFrZSB0aGUgd2lkZ2V0cycgcm90YXRpb25cbiAgcHJpdmF0ZSByZWZyZXNoQ2FyZE1vZGVscyhpc05leHQgPSBmYWxzZSk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkUmVmcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgY2FuZGlkYXRlSW5kZXggPSBpICsgdGhpcy5jdXJyZW50SW5kZXggKyAoaXNOZXh0ID8gLTEgOiAwKTtcbiAgICAgIHRoaXMuY2FyZFJlZnNbaV0uaW5zdGFuY2UubW9kZWwkID0gb2YodGhpcy5jYXJkTW9kZWxzW2NhbmRpZGF0ZUluZGV4XSk7XG4gICAgfVxuICB9XG59XG4iXX0=