import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GenericCardComponent } from './components/cards/generic-card/generic-card.component';
import { PlaceholderCardComponent } from './components/cards/placeholder-card/placeholder-card.component';
import { SingleCardComponent } from './components/cards/single-card/single-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DurationPipe } from './utils/duration.pipe';
import { MultipleCardComponent } from './components/cards/multiple-card/multiple-card.component';
export class SimpleCarouselModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2VzY28vUHJvamVjdHMvYW5ndWxhci1jYXJvdXNlbC9wcm9qZWN0cy9zaW1wbGUtY2Fyb3VzZWwvc3JjLyIsInNvdXJjZXMiOlsibGliL3NpbXBsZS1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDMUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBa0JqRyxNQUFNLE9BQU8sb0JBQW9COzs7WUFoQmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHdCQUF3QjtvQkFDeEIsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBHZW5lcmljQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkcy9nZW5lcmljLWNhcmQvZ2VuZXJpYy1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZHMvcGxhY2Vob2xkZXItY2FyZC9wbGFjZWhvbGRlci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW5nbGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmRzL3NpbmdsZS1jYXJkL3NpbmdsZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi91dGlscy9kdXJhdGlvbi5waXBlJztcbmltcG9ydCB7IE11bHRpcGxlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkcy9tdWx0aXBsZS1jYXJkL211bHRpcGxlLWNhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2VuZXJpY0NhcmRDb21wb25lbnQsXG4gICAgU2luZ2xlQ2FyZENvbXBvbmVudCxcbiAgICBQbGFjZWhvbGRlckNhcmRDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgRHVyYXRpb25QaXBlLFxuICAgIE11bHRpcGxlQ2FyZENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2Fyb3VzZWxDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJvdXNlbE1vZHVsZSB7IH1cbiJdfQ==