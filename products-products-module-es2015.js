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
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "/products/details/" + item_r29._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r29.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
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
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_2__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".clients__container[_ngcontent-%COMP%]   .clients__title[_ngcontent-%COMP%] {\n  color: #575252;\n  font-weight: bold;\n  line-height: 1.13;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 62px 0 34px;\n  font-size: 45px;\n}\n\n.clients__dash[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  min-height: 4px;\n  background: #fa693c;\n  margin-bottom: 55px;\n}\n\n.each-products[_ngcontent-%COMP%] {\n  text-align: center;\n  background: white;\n  border-radius: 15px;\n  padding: 20px 30px;\n  margin-bottom: 30px;\n  height: 355px;\n  position: relative;\n  cursor: pointer;\n  box-shadow: 0 6px 22px 3px rgba(162, 190, 255, 0.35);\n}\n\n.each-products[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.each-products[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fa693c;\n  font-size: 20px;\n  margin-top: 15px;\n}\n\n.each-products[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%] {\n  display: block;\n  display: -webkit-box;\n  max-width: 200px;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.each-products[_ngcontent-%COMP%]   .multi-ellipsis[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  max-height: 80px;\n  height: 80px;\n  line-height: 2;\n  text-align: justify;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  margin-top: 30px;\n}\n\n.btn-more[_ngcontent-%COMP%] {\n  background: #fa693c;\n  color: white;\n  border-radius: 5px;\n  height: 40px;\n  padding: 0px 20px;\n  border: 1px solid;\n  margin-top: 15px;\n}\n\n.job-card__link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n}\n\n.job-card__icon[_ngcontent-%COMP%] {\n  fill: #8eb5e2;\n  transition: fill 0.2s ease-in-out;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2FsbC1wcm9kdWN0cy9DOlxcUHJvamVjdHNcXHNhbmF5d2ViYXBwL3NyY1xcYXBwXFxmZWF0dXJlXFxtYWluXFxwcm9kdWN0c1xcYWxsLXByb2R1Y3RzXFxhbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9hbGwtcHJvZHVjdHMvYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7QUNBRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEUUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvZHVjdHMvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnRzX19jb250YWluZXIgLmNsaWVudHNfX3RpdGxlIHtcclxuICBjb2xvcjogIzU3NTI1MjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMS4xMztcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogNjJweCAwIDM0cHg7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG4uY2xpZW50c19fZGFzaCB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWluLWhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuXHJcbi5lYWNoLXByb2R1Y3Rze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDZweCAyMnB4IDNweCByZ2JhKDE2MiwgMTkwLCAyNTUsIDAuMzUpO1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuXHJcbiAgICBjb2xvcjogI2ZhNjkzYztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZGVze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLm11bHRpLWVsbGlwc2lzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idG4tbW9yZXtcclxuYmFja2dyb3VuZDogI2ZhNjkzYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uam9iLWNhcmRfX2xpbmt7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uam9iLWNhcmRfX2ljb24ge1xyXG4gIGZpbGw6ICM4ZWI1ZTI7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG59XHJcbiIsIi5jbGllbnRzX19jb250YWluZXIgLmNsaWVudHNfX3RpdGxlIHtcbiAgY29sb3I6ICM1NzUyNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4xMztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogNjJweCAwIDM0cHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmNsaWVudHNfX2Rhc2gge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLmVhY2gtcHJvZHVjdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMzU1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDZweCAyMnB4IDNweCByZ2JhKDE2MiwgMTkwLCAyNTUsIDAuMzUpO1xufVxuLmVhY2gtcHJvZHVjdHMgaW1nIHtcbiAgd2lkdGg6IDExMHB4O1xufVxuLmVhY2gtcHJvZHVjdHMgLnRpdGxlIHtcbiAgY29sb3I6ICNmYTY5M2M7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5lYWNoLXByb2R1Y3RzIC5kZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZWFjaC1wcm9kdWN0cyAubXVsdGktZWxsaXBzaXMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ0bi1tb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uam9iLWNhcmRfX2xpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLmpvYi1jYXJkX19pY29uIHtcbiAgZmlsbDogIzhlYjVlMjtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"] });
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
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.description[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #828386;\n  font-size: 22px;\n}\n.featuretitle[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 33px;\n  color: #545454;\n  font-weight: bolder;\n  position: relative;\n  margin-top: 60px;\n}\n.featuretitle[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-bottom: 4px solid #fa693c;\n  position: absolute;\n  width: 10%;\n  bottom: -30px;\n}\n.feature-table-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  color: #545454;\n}\n.feature-items[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  color: #828386;\n}\n.feature-items[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fa693c;\n}\n.product-img[_ngcontent-%COMP%] {\n  height: 260px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n  .slide {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL2N1c3RvbWVyLWRldGFpbHMvQzpcXFByb2plY3RzXFxzYW5heXdlYmFwcC9zcmNcXGFwcFxcZmVhdHVyZVxcbWFpblxccHJvZHVjdHNcXGN1c3RvbWVyLWRldGFpbHNcXGN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBREVGO0FDREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QURHSjtBQ0FFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURFSjtBQ0RJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURHTjtBQ0ZNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURJUjtBQ0ZRO0VBVEY7SUFVSSxlQUFBO0lBQ0EsZ0JBQUE7RURLUjtBQUNGO0FDQ0E7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FERUY7QUNBRTs7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREdKO0FDQUU7O0VBQ0Usa0JBQUE7QURHSjtBQ0RFOztFQUNFLFlBQUE7QURJSjtBQ0ZFOztFQUNFLFlBQUE7RUFDQSxzQkFBQTtBREtKO0FDRkU7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7QURLSjtBQ0ZFOztFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBRUEsNERBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBREtKO0FDRkU7O0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FES0o7QUNEQTtFQUNFLGlCQUFBO0FESUY7QUNIRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FES0o7QUNEQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0hFO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBREtKO0FDREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FESUY7QUNEQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FESUY7QUNIRTtFQUNFLHlCQUFBO0FES0o7QUNEQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FESUY7QUNEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QURJRjtBQ0FBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBREdGO0FDQUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QURHRjtBQ0FBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FER0Y7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QURJRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VydmljZS1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmY0NTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM5N3B4O1xuICBwYWRkaW5nLWJvdHRvbTogODJweDtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1heC13aWR0aDogNzM1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG4sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZhNjkzYztcbiAgZmlsbDogI2ZhNjkzYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0biBzdmcsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuIHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOmhvdmVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXI6OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTUwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOjphZnRlcixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTY5M2M7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG4tLWZpdC10ZXh0LFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQge1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjODI4Mzg2O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5mZWF0dXJldGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDMzcHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uZmVhdHVyZXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZhNjkzYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBib3R0b206IC0zMHB4O1xufVxuXG4uZmVhdHVyZS10YWJsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG5cbi5mZWF0dXJlLWl0ZW1zIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4ICNiZGJkYmRkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzgyODM4Njtcbn1cbi5mZWF0dXJlLWl0ZW1zOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhNjkzYztcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stbmV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhIRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGlkZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iLCIuc2VydmljZS1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmNDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAuc2VydmljZS1oZWFkZXJfX2JnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzk3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5zZXJ2aWNlLWhlYWRlcl9fdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1heC13aWR0aDogNzM1cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbixcclxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNThweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmhvbGxvdy1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZhNjkzYztcclxuICAgIGZpbGw6ICNmYTY5M2M7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmhvbGxvdy1idG4gc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhvbGxvdy1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmhvbGxvdy1idG4tLWZpdC10ZXh0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGNvbG9yOiAjODI4Mzg2O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZlYXR1cmV0aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXNpemU6IDMzcHg7XHJcbiAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZS10YWJsZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6ICM1NDU0NTQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWl0ZW1zIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4ICNiZGJkYmRkZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODI4Mzg2O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZhNjkzYztcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltZyB7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2xpY2stcHJldntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbGljay1uZXh0e1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLW5leHQ6OmJlZm9yZXtcclxuICBjb250ZW50OiAnXFxmMTA0JztcclxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxufVxyXG5cclxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stcHJldjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICdcXGYxMDUnO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG59XHJcbjo6bmctZGVlcCAuc2xpY2stcHJldjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmZvY3Vze1xyXG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2xpY2stbmV4dDpmb2N1c3tcclxuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNsaWRle1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-slider-img/product-slider-img.component */ "./src/app/feature/main/products/product-slider-img/product-slider-img.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/second-header/second-header.component */ "./src/app/core/second-header/second-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/loading/loading.component */ "./src/app/core/loading/loading.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function ProductDetailsComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ProductDetailsComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.title, " ");
} }
function ProductDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_32_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const item_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.imgModel(item_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/products"]; };
class ProductDetailsComponent {
    constructor(service, dialog, route) {
        this.service = service;
        this.dialog = dialog;
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
    imgModel(event) {
        console.log(event);
        this.dialog.open(_product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_2__["ProductSliderImgComponent"], {
            width: '900px',
            data: event
        });
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 34, vars: 8, consts: [[4, "ngIf"], [1, "mb-5"], [1, "service-header"], ["src", "https://codete.com/images/top_background.jpg?viewport-width=1440&dpr=2&width=1440", 1, "service-header__bg"], [1, "container"], [1, "service-header__content"], [1, "service-header__header"], [1, "service-header__title"], [1, "service-header__action"], [1, "hollow-btn", "hollow-btn--fit-text", 3, "routerLink"], [1, "service-header__btn"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "service-header__arrow"], ["points", "3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"], [1, "description", "col-md-12"], [3, "innerHTML"], [1, "col-md-12", "text-right"], [1, "featuretitle"], [1, "col-md-12", "mb-5"], [1, "row", "mt-5"], [1, "text-right", "features"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center", "pt-5"], ["dir", "rtl", 1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 3, "click", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide", 3, "click"], [1, "product-img", 3, "src"], [1, "preview-icon"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductDetailsComponent_div_32_Template, 5, 1, "div", 24);
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
    } }, directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_6__["SecondHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselComponent"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Dir"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickItemDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.description[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #828386;\n  font-size: 22px;\n}\n.featuretitle[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 33px;\n  color: #545454;\n  font-weight: bolder;\n  position: relative;\n  margin-top: 60px;\n}\n.featuretitle[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-bottom: 4px solid #fa693c;\n  position: absolute;\n  width: 10%;\n  bottom: -30px;\n}\n.feature-table-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  color: #545454;\n}\n.feature-items[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  color: #828386;\n  height: 120px;\n}\n.feature-items[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fa693c;\n}\n.product-img[_ngcontent-%COMP%] {\n  height: 260px;\n  box-shadow: 2px 3px 6px #bdbdbddd;\n  border-radius: 10px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  transition: 0.3s ease-in-out;\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n.preview-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide[_ngcontent-%COMP%]:hover   .preview-icon[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 40%;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  cursor: pointer;\n}\n.slide[_ngcontent-%COMP%]:hover   .product-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n  .slide {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 2;\n  font-size: 22px;\n  color: #353535ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvQzpcXFByb2plY3RzXFxzYW5heXdlYmFwcC9zcmNcXGFwcFxcZmVhdHVyZVxcbWFpblxccHJvZHVjdHNcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURFRjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FER0o7QUNBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERUo7QUNESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FER047QUNGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FESVI7QUNGUTtFQVRGO0lBVUksZUFBQTtJQUNBLGdCQUFBO0VES1I7QUFDRjtBQ0NBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBREVGO0FDQUU7O0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURHSjtBQ0FFOztFQUNFLGtCQUFBO0FER0o7QUNERTs7RUFDRSxZQUFBO0FESUo7QUNGRTs7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QURLSjtBQ0ZFOztFQUNFLFdBQUE7RUFDQSxVQUFBO0FES0o7QUNGRTs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDREQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QURLSjtBQ0ZFOztFQUNFLFdBQUE7RUFDQSxxQkFBQTtBREtKO0FDREE7RUFDRSxpQkFBQTtBRElGO0FDSEU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREtKO0FDREE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FESUY7QUNIRTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QURLSjtBQ0RBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRElGO0FDREE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURJRjtBQ0hFO0VBQ0UseUJBQUE7QURLSjtBQ0RBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBRElGO0FDREE7RUFDRSxhQUFBO0FESUY7QUNBRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURHSjtBQ0FFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBREVGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QURDRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBREVGO0FDRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzk3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MnB4O1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LXdpZHRoOiA3MzVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmE2OTNjO1xuICBmaWxsOiAjZmE2OTNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4gc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuLmRlc2NyaXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICM4MjgzODY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZlYXR1cmV0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5mZWF0dXJldGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmE2OTNjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5mZWF0dXJlLXRhYmxlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cblxuLmZlYXR1cmUtaXRlbXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggI2JkYmRiZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4Mzg2O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuLmZlYXR1cmUtaXRlbXM6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmE2OTNjO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI2MHB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcbiAgZmlsdGVyOiBibHVyKDApO1xufVxuXG4ucHJldmlldy1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlOmhvdmVyIC5wcmV2aWV3LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbGlkZTpob3ZlciAucHJvZHVjdC1pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLW5leHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SEXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpZGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5mZWF0dXJlcyBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMzUzNTM1ZWU7XG59IiwiLnNlcnZpY2UtaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgLnNlcnZpY2UtaGVhZGVyX19iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM5N3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDczNXB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXHJcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5ob2xsb3ctYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmYTY5M2M7XHJcbiAgICBmaWxsOiAjZmE2OTNjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5ob2xsb3ctYnRuIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5ob2xsb3ctYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmhvbGxvdy1idG46aG92ZXIgc3ZnIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmhvbGxvdy1idG46OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBjb2xvcjogIzgyODM4NjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJldGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZhNjkzYztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZlYXR1cmUtdGFibGUtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG59XHJcblxyXG4uZmVhdHVyZS1pdGVtcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzgyODM4NjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZhNjkzYztcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltZyB7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjYmRiZGJkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxufVxyXG5cclxuLnByZXZpZXctaWNvbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2xpZGU6aG92ZXJ7XHJcbiAgLnByZXZpZXctaWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLnNsaWNrLXByZXZ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2xpY2stbmV4dHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1uZXh0OjpiZWZvcmV7XHJcbiAgY29udGVudDogJ1xcZjEwNCc7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZXtcclxuICBjb250ZW50OiAnXFxmMTA1JztcclxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxufVxyXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1c3tcclxuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbGlkZXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVze1xyXG4gIGxpe1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzM1MzUzNWVlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/main/products/product-slider-img/product-slider-img.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/feature/main/products/product-slider-img/product-slider-img.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductSliderImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSliderImgComponent", function() { return ProductSliderImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class ProductSliderImgComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.preview = this.data;
    }
}
ProductSliderImgComponent.ɵfac = function ProductSliderImgComponent_Factory(t) { return new (t || ProductSliderImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProductSliderImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductSliderImgComponent, selectors: [["app-product-slider-img"]], decls: 3, vars: 1, consts: [["mat-dialog-close", ""], [1, "preview", 3, "src"]], template: function ProductSliderImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".preview[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 600px;\n  border-radius: 15px;\n  box-shadow: 0px 0px 9px 6px #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL3Byb2R1Y3Qtc2xpZGVyLWltZy9DOlxcUHJvamVjdHNcXHNhbmF5d2ViYXBwL3NyY1xcYXBwXFxmZWF0dXJlXFxtYWluXFxwcm9kdWN0c1xccHJvZHVjdC1zbGlkZXItaW1nXFxwcm9kdWN0LXNsaWRlci1pbWcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LXNsaWRlci1pbWcvcHJvZHVjdC1zbGlkZXItaW1nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2R1Y3RzL3Byb2R1Y3Qtc2xpZGVyLWltZy9wcm9kdWN0LXNsaWRlci1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlld3tcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDlweCA2cHggI2RkZDtcclxuXHJcbn1cclxuIiwiLnByZXZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggNnB4ICNkZGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSliderImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-slider-img',
                templateUrl: './product-slider-img.component.html',
                styleUrls: ['./product-slider-img.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


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
/* harmony import */ var _product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-slider-img/product-slider-img.component */ "./src/app/feature/main/products/product-slider-img/product-slider-img.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













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
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"], _product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_9__["ProductSliderImgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"], _product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_9__["ProductSliderImgComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]
                ],
                entryComponents: [
                    _product_slider_img_product_slider_img_component__WEBPACK_IMPORTED_MODULE_9__["ProductSliderImgComponent"]
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