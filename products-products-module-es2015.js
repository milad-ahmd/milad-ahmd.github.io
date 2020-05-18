(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/feature/main/products/all-products/all-products.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/feature/main/products/all-products/all-products.component.ts ***!
  \******************************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/second-header/second-header.component */ "./src/app/core/second-header/second-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/loading/loading.component */ "./src/app/core/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function AllProductsComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
const _c0 = function (a0) { return [a0]; };
function AllProductsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "/products/details/" + item_r23._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r23.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r23.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AllProductsComponent {
    constructor(service) {
        this.service = service;
        this.allProduct = [];
        this.loading = true;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.service.getAll().subscribe((res) => {
            if (res.data) {
                this.loading = false;
                this.allProduct = res.data;
            }
        });
    }
}
AllProductsComponent.ɵfac = function AllProductsComponent_Factory(t) { return new (t || AllProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
AllProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllProductsComponent, selectors: [["app-all-products"]], decls: 12, vars: 2, consts: [[4, "ngIf"], [1, "all-product-view"], [1, "container"], [1, "clients__container", "text-right"], [1, "clients__title"], [1, "clients__dash"], [1, "col-md-12"], [1, "row"], ["class", "col-md-4 ", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "each-products", 3, "routerLink"], [3, "src"], [1, "title"], [1, "multi-ellipsis", 3, "innerHTML"], [1, "job-card__link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "12.688", "viewBox", "0 0 20 12.688", 1, "job-card__icon"], ["d", "M19.379 5.798l.001-.001L13.871 0l-.682.723 4.876 5.131H0v.993h18.225l-5.036 5.119.682.722L20 6.457z"]], template: function AllProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-second-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllProductsComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0645\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllProductsComponent_div_10_Template, 9, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allProduct);
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_2__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".clients__container[_ngcontent-%COMP%]   .clients__title[_ngcontent-%COMP%] {\n  color: #575252;\n  font-weight: bold;\n  line-height: 1.13;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 62px 0 34px;\n  font-size: 45px;\n}\n\n.clients__dash[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  min-height: 4px;\n  background: #fa693c;\n  margin-bottom: 55px;\n}\n\n.each-products[_ngcontent-%COMP%] {\n  text-align: center;\n  background: white;\n  border-radius: 15px;\n  padding: 20px 30px;\n  margin-bottom: 30px;\n  height: 355px;\n  position: relative;\n  cursor: pointer;\n  box-shadow: 0 6px 22px 3px rgba(162, 190, 255, 0.35);\n}\n\n.each-products[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.each-products[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fa693c;\n  font-size: 20px;\n  margin-top: 15px;\n}\n\n.each-products[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%] {\n  display: block;\n  display: -webkit-box;\n  max-width: 200px;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.each-products[_ngcontent-%COMP%]   .multi-ellipsis[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  max-height: 80px;\n  height: 80px;\n  line-height: 2;\n  text-align: justify;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  margin-top: 30px;\n}\n\n.btn-more[_ngcontent-%COMP%] {\n  background: #fa693c;\n  color: white;\n  border-radius: 5px;\n  height: 40px;\n  padding: 0px 20px;\n  border: 1px solid;\n  margin-top: 15px;\n}\n\n.job-card__link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n}\n\n.job-card__icon[_ngcontent-%COMP%] {\n  fill: #8eb5e2;\n  transition: fill 0.2s ease-in-out;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3NhbmF5d2ViYXBwL3NyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2FsbC1wcm9kdWN0cy9hbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9hbGwtcHJvZHVjdHMvYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7QUNBRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEUUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvZHVjdHMvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnRzX19jb250YWluZXIgLmNsaWVudHNfX3RpdGxlIHtcbiAgY29sb3I6ICM1NzUyNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4xMztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogNjJweCAwIDM0cHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmNsaWVudHNfX2Rhc2gge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuXG4uZWFjaC1wcm9kdWN0c3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBoZWlnaHQ6IDM1NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA2cHggMjJweCAzcHggcmdiYSgxNjIsIDE5MCwgMjU1LCAwLjM1KTtcbiAgaW1ne1xuICAgIHdpZHRoOiAxMTBweDtcbiAgfVxuXG4gIC50aXRsZXtcblxuICAgIGNvbG9yOiAjZmE2OTNjO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbiAgLmRlc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAubXVsdGktZWxsaXBzaXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbn1cblxuLmJ0bi1tb3Jle1xuYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uam9iLWNhcmRfX2xpbmt7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4uam9iLWNhcmRfX2ljb24ge1xuICBmaWxsOiAjOGViNWUyO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cbn1cbiIsIi5jbGllbnRzX19jb250YWluZXIgLmNsaWVudHNfX3RpdGxlIHtcbiAgY29sb3I6ICM1NzUyNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4xMztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogNjJweCAwIDM0cHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmNsaWVudHNfX2Rhc2gge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLmVhY2gtcHJvZHVjdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMzU1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDZweCAyMnB4IDNweCByZ2JhKDE2MiwgMTkwLCAyNTUsIDAuMzUpO1xufVxuLmVhY2gtcHJvZHVjdHMgaW1nIHtcbiAgd2lkdGg6IDExMHB4O1xufVxuLmVhY2gtcHJvZHVjdHMgLnRpdGxlIHtcbiAgY29sb3I6ICNmYTY5M2M7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5lYWNoLXByb2R1Y3RzIC5kZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZWFjaC1wcm9kdWN0cyAubXVsdGktZWxsaXBzaXMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ0bi1tb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uam9iLWNhcmRfX2xpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLmpvYi1jYXJkX19pY29uIHtcbiAgZmlsbDogIzhlYjVlMjtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-products',
                templateUrl: './all-products.component.html',
                styleUrls: ['./all-products.component.scss']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/main/products/customer-details/customer-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/feature/main/products/customer-details/customer-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modals_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../modals/client */ "./src/app/modals/client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/second-header/second-header.component */ "./src/app/core/second-header/second-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/loading/loading.component */ "./src/app/core/loading/loading.component.ts");









function CustomerDetailsComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
const _c0 = function () { return ["/"]; };
class CustomerDetailsComponent {
    constructor(route, clientService) {
        this.route = route;
        this.clientService = clientService;
        this.data = new _modals_client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        this.loading = true;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.clientDetail();
            }
        });
    }
    clientDetail() {
        this.clientService.getOne(this.id).subscribe((res) => {
            if (res.data) {
                this.loading = false;
                this.data = res.data;
            }
        });
    }
}
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"])); };
CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["app-customer-details"]], decls: 22, vars: 6, consts: [[4, "ngIf"], [1, "mb-5"], [1, "service-header"], ["src", "https://codete.com/images/top_background.jpg?viewport-width=1440&dpr=2&width=1440", 1, "service-header__bg"], [1, "container"], [1, "service-header__content"], [1, "service-header__header"], [1, "text-right"], [2, "width", "120px", 3, "src"], [1, "service-header__title", "mt-5"], [1, "service-header__action"], [1, "hollow-btn", "hollow-btn--fit-text", 3, "routerLink"], [1, "service-header__btn"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "service-header__arrow"], ["points", "3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"], [1, "description", "col-md-12"], [3, "innerHTML"]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-second-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDetailsComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0647\u0645\u0647 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polygon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.description[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #828386;\n  font-size: 22px;\n}\n.featuretitle[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 33px;\n  color: #545454;\n  font-weight: bolder;\n  position: relative;\n  margin-top: 60px;\n}\n.featuretitle[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-bottom: 4px solid #fa693c;\n  position: absolute;\n  width: 10%;\n  bottom: -30px;\n}\n.feature-table-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  color: #545454;\n}\n.feature-items[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  color: #828386;\n}\n.feature-items[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fa693c;\n}\n.product-img[_ngcontent-%COMP%] {\n  height: 260px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n  .slide {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3NhbmF5d2ViYXBwL3NyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FERUY7QUNERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBREdKO0FDQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREVKO0FDREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBREdOO0FDRk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRElSO0FDRlE7RUFURjtJQVVJLGVBQUE7SUFDQSxnQkFBQTtFREtSO0FBQ0Y7QUNDQTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QURFRjtBQ0FFOztFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FER0o7QUNBRTs7RUFDRSxrQkFBQTtBREdKO0FDREU7O0VBQ0UsWUFBQTtBRElKO0FDRkU7O0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FES0o7QUNGRTs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBREtKO0FDRkU7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FES0o7QUNGRTs7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QURLSjtBQ0RBO0VBQ0UsaUJBQUE7QURJRjtBQ0hFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURLSjtBQ0RBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRElGO0FDSEU7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FES0o7QUNEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QURJRjtBQ0RBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURJRjtBQ0hFO0VBQ0UseUJBQUE7QURLSjtBQ0RBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRElGO0FDQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FER0Y7QUNBQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBREdGO0FDQUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QURHRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRElGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzk3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MnB4O1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LXdpZHRoOiA3MzVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmE2OTNjO1xuICBmaWxsOiAjZmE2OTNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4gc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuLmRlc2NyaXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICM4MjgzODY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZlYXR1cmV0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5mZWF0dXJldGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5mZWF0dXJlLXRhYmxlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cblxuLmZlYXR1cmUtaXRlbXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjODI4Mzg2O1xufVxuLmZlYXR1cmUtaXRlbXM6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmE2OTNjO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI2MHB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1uZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhFwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWRlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSIsIi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgLnNlcnZpY2UtaGVhZGVyX19iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzOTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODJweDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1heC13aWR0aDogNzM1cHg7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5ob2xsb3ctYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmE2OTNjO1xuICAgIGZpbGw6ICNmYTY5M2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHotaW5kZXg6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhvbGxvdy1idG4gc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmhvbGxvdy1idG46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbGxvdy1idG46aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTUwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmhvbGxvdy1idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAuaG9sbG93LWJ0bi0tZml0LXRleHQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBjb2xvcjogIzgyODM4NjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cblxuLmZlYXR1cmV0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gIH1cbn1cblxuLmZlYXR1cmUtdGFibGUtdGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuXG4uZmVhdHVyZS1pdGVtcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM4MjgzODY7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYTY5M2M7XG4gIH1cbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldntcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG5cbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0e1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stbmV4dDo6YmVmb3Jle1xuICBjb250ZW50OiAnXFxmMTA0JztcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZXtcbiAgY29udGVudDogJ1xcZjEwNSc7XG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xufVxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1c3tcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmZvY3Vze1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWRle1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-details',
                templateUrl: './customer-details.component.html',
                styleUrls: ['./customer-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/main/products/product-details/product-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/feature/main/products/product-details/product-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modals_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../modals/product */ "./src/app/modals/product.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/second-header/second-header.component */ "./src/app/core/second-header/second-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/loading/loading.component */ "./src/app/core/loading/loading.component.ts");










function ProductDetailsComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ProductDetailsComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r28.title, " ");
} }
function ProductDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/products"]; };
class ProductDetailsComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            rtl: true
        };
        this.data = new _modals_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.loading = true;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.getProduct();
            }
        });
    }
    getProduct() {
        this.service.getOne(this.id).subscribe((res) => {
            if (res.data) {
                this.loading = false;
                this.data = res.data;
            }
        });
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 34, vars: 8, consts: [[4, "ngIf"], [1, "mb-5"], [1, "service-header"], ["src", "https://codete.com/images/top_background.jpg?viewport-width=1440&dpr=2&width=1440", 1, "service-header__bg"], [1, "container"], [1, "service-header__content"], [1, "service-header__header"], [1, "service-header__title"], [1, "service-header__action"], [1, "hollow-btn", "hollow-btn--fit-text", 3, "routerLink"], [1, "service-header__btn"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "service-header__arrow"], ["points", "3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"], [1, "description", "col-md-12"], [3, "innerHTML"], [1, "col-md-12", "text-right"], [1, "featuretitle"], [1, "col-md-12", "mb-5"], [1, "row", "mt-5"], [1, "text-right", "features"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center", "pt-5"], ["dir", "rtl", 1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "product-img", 3, "src"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-second-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0647\u0645\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polygon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u0633\u06CC\u0633\u062A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductDetailsComponent_li_25_Template, 2, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u062A\u0635\u0627\u0648\u06CC\u0631 \u0633\u06CC\u0633\u062A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-slick-carousel", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductDetailsComponent_div_32_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.productImages);
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickItemDirective"]], styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.description[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #828386;\n  font-size: 22px;\n}\n.featuretitle[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 33px;\n  color: #545454;\n  font-weight: bolder;\n  position: relative;\n  margin-top: 60px;\n}\n.featuretitle[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-bottom: 4px solid #fa693c;\n  position: absolute;\n  width: 10%;\n  bottom: -30px;\n}\n.feature-table-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  color: #545454;\n}\n.feature-items[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  color: #828386;\n  height: 120px;\n}\n.feature-items[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fa693c;\n}\n.product-img[_ngcontent-%COMP%] {\n  height: 260px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n  .slide {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 2;\n  font-size: 22px;\n  color: #353535ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvemVpbmFic2FsZWhpL0RvY3VtZW50cy9zYW5heXdlYmFwcC9zcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURFRjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FER0o7QUNBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERUo7QUNESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FER047QUNGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FESVI7QUNGUTtFQVRGO0lBVUksZUFBQTtJQUNBLGdCQUFBO0VES1I7QUFDRjtBQ0NBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBREVGO0FDQUU7O0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURHSjtBQ0FFOztFQUNFLGtCQUFBO0FER0o7QUNERTs7RUFDRSxZQUFBO0FESUo7QUNGRTs7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QURLSjtBQ0ZFOztFQUNFLFdBQUE7RUFDQSxVQUFBO0FES0o7QUNGRTs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDREQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QURLSjtBQ0ZFOztFQUNFLFdBQUE7RUFDQSxxQkFBQTtBREtKO0FDREE7RUFDRSxpQkFBQTtBRElGO0FDSEU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREtKO0FDREE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FESUY7QUNIRTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QURLSjtBQ0RBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRElGO0FDREE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURJRjtBQ0hFO0VBQ0UseUJBQUE7QURLSjtBQ0RBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRElGO0FDQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FER0Y7QUNBQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBREdGO0FDQUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QURHRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0UsbUJBQUE7QURJRjtBQ0RBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRElGO0FDQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FER0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzk3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MnB4O1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LXdpZHRoOiA3MzVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmE2OTNjO1xuICBmaWxsOiAjZmE2OTNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4gc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuLmRlc2NyaXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICM4MjgzODY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZlYXR1cmV0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5mZWF0dXJldGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5mZWF0dXJlLXRhYmxlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cblxuLmZlYXR1cmUtaXRlbXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4Mzg2O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuLmZlYXR1cmUtaXRlbXM6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmE2OTNjO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI2MHB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1uZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhFwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWRlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmVhdHVyZXMgbGkge1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzM1MzUzNWVlO1xufSIsIi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgLnNlcnZpY2UtaGVhZGVyX19iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzOTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODJweDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1heC13aWR0aDogNzM1cHg7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5ob2xsb3ctYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmE2OTNjO1xuICAgIGZpbGw6ICNmYTY5M2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHotaW5kZXg6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhvbGxvdy1idG4gc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmhvbGxvdy1idG46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbGxvdy1idG46aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTUwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmhvbGxvdy1idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAuaG9sbG93LWJ0bi0tZml0LXRleHQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBjb2xvcjogIzgyODM4NjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cblxuLmZlYXR1cmV0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gIH1cbn1cblxuLmZlYXR1cmUtdGFibGUtdGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuXG4uZmVhdHVyZS1pdGVtcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgzODY7XG4gIGhlaWdodDogMTIwcHg7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYTY5M2M7XG4gIH1cbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldntcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG5cbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0e1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stbmV4dDo6YmVmb3Jle1xuICBjb250ZW50OiAnXFxmMTA0JztcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZXtcbiAgY29udGVudDogJ1xcZjEwNSc7XG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xufVxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1c3tcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmZvY3Vze1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWRle1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5mZWF0dXJlc3tcbiAgbGl7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzUzNTM1ZWU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/main/products/products-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/feature/main/products/products-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-products/all-products.component */ "./src/app/feature/main/products/all-products/all-products.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/feature/main/products/product-details/product-details.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/feature/main/products/customer-details/customer-details.component.ts");







const routes = [
    { path: '', component: _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__["AllProductsComponent"] },
    { path: 'details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"] },
    { path: 'customer/:id', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"] }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/main/products/products.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature/main/products/products.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/feature/main/products/products-routing.module.ts");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-products/all-products.component */ "./src/app/feature/main/products/all-products/all-products.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/feature/main/products/product-details/product-details.component.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/feature/main/products/customer-details/customer-details.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");










class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, providers: [
        _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
                ],
                providers: [
                    _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modals/product.ts":
/*!***********************************!*\
  !*** ./src/app/modals/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor() {
        this.description = '';
        this.descriptionEn = '';
        this.productImages = [];
        this.features = [];
    }
}


/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map