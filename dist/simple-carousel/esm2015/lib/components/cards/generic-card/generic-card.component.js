import { Component } from '@angular/core';
export class GenericCardComponent {
}
GenericCardComponent.width = 220;
GenericCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-generic-card',
                template: "<div class=\"outer-card\">\n    <div class=\"card\">\n        <ng-container *ngIf=\"model$ | async as model; else placeholderBlock\">\n            <lib-single-card *ngIf=\"model.cardinality==='single'\" [model]=\"model\"></lib-single-card>\n            <lib-multiple-card *ngIf=\"model.cardinality==='collection'\" [model]=\"model\"></lib-multiple-card>\n        </ng-container>\n        <ng-template #placeholderBlock>\n            <lib-placeholder-card></lib-placeholder-card>\n        </ng-template>\n    </div>\n</div>",
                styles: [".outer-card{padding:10px}.card{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2VzY28vUHJvamVjdHMvYW5ndWxhci1jYXJvdXNlbC9wcm9qZWN0cy9zaW1wbGUtY2Fyb3VzZWwvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZHMvZ2VuZXJpYy1jYXJkL2dlbmVyaWMtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxNQUFNLE9BQU8sb0JBQW9COztBQUN4QiwwQkFBSyxHQUFHLEdBQUcsQ0FBQzs7WUFOcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHNoQkFBNEM7O2FBRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FyZC1tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1nZW5lcmljLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJpYy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2VuZXJpYy1jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VuZXJpY0NhcmRDb21wb25lbnQge1xuICBzdGF0aWMgd2lkdGggPSAyMjA7XG4gIFxuICBwdWJsaWMgbW9kZWwkOiBPYnNlcnZhYmxlPENhcmRNb2RlbD5cbn1cbiJdfQ==