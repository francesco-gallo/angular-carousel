import { Input } from '@angular/core';
import { Component } from '@angular/core';
export class MultipleCardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNlc2NvL1Byb2plY3RzL2FuZ3VsYXItY2Fyb3VzZWwvcHJvamVjdHMvc2ltcGxlLWNhcm91c2VsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhcmRzL211bHRpcGxlLWNhcmQvbXVsdGlwbGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLE1BQU0sT0FBTyxxQkFBcUI7OztZQUxqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd1JBQTZDOzthQUU5Qzs7O29CQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FyZC1tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ2FyZCB9IGZyb20gJy4uL2Jhc2UtY2FyZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tdWx0aXBsZS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpcGxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tdWx0aXBsZS1jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQmFzZUNhcmQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2RlbDogQ2FyZE1vZGVsO1xuXG59XG4iXX0=