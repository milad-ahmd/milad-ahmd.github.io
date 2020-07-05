function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./src/app/feature/main/projects/members/members.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/feature/main/projects/members/members.component.ts ***!
    \********************************************************************/

  /*! exports provided: MembersComponent */

  /***/
  function srcAppFeatureMainProjectsMembersMembersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembersComponent", function () {
      return MembersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../core/second-header/second-header.component */
    "./src/app/core/second-header/second-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../core/footer/footer.component */
    "./src/app/core/footer/footer.component.ts");

    function MembersComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0632\u06CC\u0646\u0628 \u0635\u0627\u0644\u062D\u06CC ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Senior Full stack developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/projects/manager"];
    };

    var MembersComponent =
    /*#__PURE__*/
    function () {
      function MembersComponent() {
        _classCallCheck(this, MembersComponent);

        this.slides = [{
          img: "http://placehold.it/350x150/000000"
        }, {
          img: "http://placehold.it/350x150/111111"
        }, {
          img: "http://placehold.it/350x150/333333"
        }, {
          img: "http://placehold.it/350x150/666666"
        }, {
          img: "http://placehold.it/350x150/666666"
        }];
        this.slideConfig = {
          "slidesToShow": 4,
          "slidesToScroll": 4,
          rtl: true
        };
      }

      _createClass(MembersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MembersComponent;
    }();

    MembersComponent.ɵfac = function MembersComponent_Factory(t) {
      return new (t || MembersComponent)();
    };

    MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MembersComponent,
      selectors: [["app-members"]],
      decls: 42,
      vars: 4,
      consts: [[1, "service-header"], ["src", "https://codete.com/assets/bgEmerging2.jpg?viewport-width=1440&dpr=2&width=1440", 1, "service-header__bg"], [1, "container", 2, "z-index", "9"], [1, "service-header__content"], [1, "service-header__header"], [1, "service-header__title"], [1, "des-part"], [1, "tegno"], [1, "service-header__action"], [1, "hollow-btn", "hollow-btn--fit-text", 3, "routerLink"], [1, "service-header__btn"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "service-header__arrow"], ["points", "3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"], [1, "container"], [1, "col-md-12", "pt-3", "pb-5"], [1, "col-md-12", "text-right"], [1, "row", "manager-name"], [1, "mr-2"], [1, "col-md-12", "mt-3"], ["dir", "rtl", 1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "col-md-12"], [1, "each-dev"], ["src", "https://picsum.photos/200/300", 1, "dev-img"], [1, "dev-name"]],
      template: function MembersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-second-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 NetClear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " react-native ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0647\u0645\u0647 \u062A\u06CC\u0645 \u0647\u0627 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "polygon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0645\u062F\u06CC\u0631 \u062A\u06CC\u0645 : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627\u0646 : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngx-slick-carousel", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MembersComponent_div_39_Template, 9, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_1__["SecondHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickItemDirective"]],
      styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #23232394;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fa693c;\n  padding: 5px;\n  margin-left: 10px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: right;\n  margin-top: 35px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #ffffffc9;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n.manager-name[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 25px;\n  font-size: 22px;\n}\n.manager-name[_ngcontent-%COMP%]::before {\n  background-color: #fa693c;\n  content: \"\";\n  height: 4px;\n  right: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 0.3s ease-in-out;\n  width: 40px;\n}\n.each-dev[_ngcontent-%COMP%] {\n  position: relative;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 290px;\n  margin-bottom: 15px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 16px;\n  bottom: 0px;\n  color: #fa693c;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  background: #ffffffb5;\n  padding: 15px 5px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3Byb2plY3RzL3NhbmF5L3NhbmF5d2ViYXBwL3NyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDSixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FER0o7QUNESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBREdOO0FDRUk7RUFDSSxVQUFBO0VBQ0YsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURBTjtBQ0VNO0VBQ0ksZ0JBQUE7QURBVjtBQ0NVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURDWjtBQ0VNO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURBUjtBQ0VRO0VBQ0ksbUJBQUE7RUFDUixjQUFBO0VBQ0EsZ0JBQUE7QURBSjtBQ0dNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUREUjtBQ0VRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURBVjtBQ0VVO0VBVEY7SUFVSSxlQUFBO0lBQ0EsZ0JBQUE7RURDVjtBQUNGO0FDS0U7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FERko7QUNJSTs7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREROO0FDSUk7O0VBQ0Usa0JBQUE7QURETjtBQ0dJOztFQUNFLFlBQUE7QURBTjtBQ0VJOztFQUNFLFlBQUE7RUFDQSxzQkFBQTtBRENOO0FDRUk7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7QURDTjtBQ0VJOztFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBRUEsNERBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRENOO0FDRUk7O0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FEQ047QUNLRTtFQUNFLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERko7QUNLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERko7QUNHSTtFQUNJLHlCQUFBO0VBQ0osV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0FEREo7QUNNRTtFQUNJLGtCQUFBO0FESE47QUNJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURGUjtBQ0tNO0VBQ0Usa0JBQUE7RUFDSixlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBREhKO0FDS0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FESFI7QUNRQztFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QURMSjtBQ1NDO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRE5KO0FDU0M7RUFDRyxZQUFBO0VBQ0EsMEJBQUE7QUROSjtBQ1NDO0VBQ0csWUFBQTtFQUNBLDBCQUFBO0FETko7QUNRQztFQUNPLG1CQUFBO0FETFI7QUNRQztFQUNPLG1CQUFBO0FETFI7QUNRQztFQUNHLG1CQUFBO0FETEo7QUNRQTtFQUNJLG1CQUFBO0FETEoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvamVjdHMvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNlcnZpY2UtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmNDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLnNlcnZpY2UtaGVhZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzOTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IHtcbiAgei1pbmRleDogOTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzk3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MnB4O1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC50ZWdubyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC50ZWdubyBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLmRlcy1wYXJ0IHtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5kZXMtcGFydCBwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjZmZmZmZmYzk7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDczNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmE2OTNjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmYTY5M2M7XG4gIGZpbGw6ICNmYTY5M2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG4gc3ZnLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0biBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3Zlcixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3ZlciBzdmcsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHN2ZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlcixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDE1MCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjo6YWZ0ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuLS1maXQtdGV4dCxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4tLWZpdC10ZXh0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zLXdlYi1ib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5tYW5hZ2VyLW5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWFuYWdlci1uYW1lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDRweDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uZWFjaC1kZXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZWFjaC1kZXYgLmRldi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5lYWNoLWRldiAuZGV2LW5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiAjZmE2OTNjO1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmI1O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbn1cbi5lYWNoLWRldiAuZGV2LW5hbWUgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1uZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhFwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXY6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufSIsIi5zZXJ2aWNlLWhlYWRlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmY0NTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogIzIzMjMyMzk0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgLnNlcnZpY2UtaGVhZGVyX19iZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgei1pbmRleDogLTE7XG5cbiAgICAgXG4gICAgfVxuICBcbiAgICAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQge1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDM5N3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDgycHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICAgLnRlZ25ve1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGVzLXBhcnR7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuXG4gICAgICAgIHB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIGNvbG9yOiAjZmZmZmZmYzk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5zZXJ2aWNlLWhlYWRlcl9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzM1cHg7XG4gIFxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc2VydmljZS1oZWFkZXJfX2FjdGlvbixcbiAgLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLmhvbGxvdy1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogI2ZhNjkzYztcbiAgICAgIGZpbGw6ICNmYTY5M2M7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB6LWluZGV4OiAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgXG4gICAgLmhvbGxvdy1idG4gc3ZnIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmhvbGxvdy1idG46aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogMTUwJTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgXG4gICAgLmhvbGxvdy1idG4tLWZpdC10ZXh0IHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxuICBcbiAgXG5cbiAgLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgLm1hbmFnZXItbmFtZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgICY6OmJlZm9yZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbiAgfVxuXG5cbiAgLmVhY2gtZGV2e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5kZXYtaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmRldi1uYW1le1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjZmE2OTNjO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYjU7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG5cbiAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIH1cbiAgfVxuXG4gOjpuZy1kZWVwIC5zbGljay1wcmV2e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG5cbiB9XG5cbiA6Om5nLWRlZXAgLnNsaWNrLW5leHR7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbiB9XG5cbiA6Om5nLWRlZXAgW2Rpcj1ydGxdIC5zbGljay1uZXh0OjpiZWZvcmV7XG4gICAgY29udGVudDogJ1xcZjEwNCc7XG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gfVxuXG4gOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stcHJldjo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICdcXGYxMDUnO1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuIH1cbiA6Om5nLWRlZXAgLnNsaWNrLXByZXY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XG4gfVxuXG4gOjpuZy1kZWVwIC5zbGljay1uZXh0OmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xuIH1cblxuIDo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQ6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-members',
          templateUrl: './members.component.html',
          styleUrls: ['./members.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/main/projects/project-manager/project-manager.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/feature/main/projects/project-manager/project-manager.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProjectManagerComponent */

  /***/
  function srcAppFeatureMainProjectsProjectManagerProjectManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectManagerComponent", function () {
      return ProjectManagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../core/second-header/second-header.component */
    "./src/app/core/second-header/second-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/footer/footer.component */
    "./src/app/core/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/projects/members"];
    };

    var ProjectManagerComponent =
    /*#__PURE__*/
    function () {
      function ProjectManagerComponent() {
        _classCallCheck(this, ProjectManagerComponent);
      }

      _createClass(ProjectManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectManagerComponent;
    }();

    ProjectManagerComponent.ɵfac = function ProjectManagerComponent_Factory(t) {
      return new (t || ProjectManagerComponent)();
    };

    ProjectManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectManagerComponent,
      selectors: [["app-project-manager"]],
      decls: 107,
      vars: 4,
      consts: [[1, "container", "pt-5", "pb-5"], [1, "col-md-12"], [1, "title"], [1, "row", 2, "margin-top", "50px"], [1, "col-md-3", "text-center"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "manager-card"], ["src", "/assets/img/dommy/manager.jpeg"], [1, "info"], [1, "name"], [1, "feild"], [1, "job-card__link", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "12.688", "viewBox", "0 0 20 12.688", 1, "job-card__icon"], ["d", "M19.379 5.798l.001-.001L13.871 0l-.682.723 4.876 5.131H0v.993h18.225l-5.036 5.119.682.722L20 6.457z"], [1, "job-card__link"]],
      template: function ProjectManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-second-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0645\u062F\u06CC\u0631\u0627\u0646 \u0627\u0631\u0634\u062F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u0646\u0627\u0645 \u0645\u062F\u06CC\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0634\u0628\u06A9\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      },
      directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_1__["SecondHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["main[_ngcontent-%COMP%] {\n  background-color: #f4f4f4 !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n\n.manager-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.manager-card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .feild[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a9a9a9;\n  margin-top: 20px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px;\n  text-align: right;\n  transition: background 0.2s ease-in-out;\n  position: relative;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover {\n  background: #fa693c;\n  color: white;\n  cursor: pointer;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .feild[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fa693c;\n  transition: fill 0.2s ease-in-out;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3Byb2plY3RzL3NhbmF5L3NhbmF5d2ViYXBwL3NyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL3Byb2plY3QtbWFuYWdlci9wcm9qZWN0LW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9wcm9qZWN0LW1hbmFnZXIvcHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FDREo7O0FERUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQU47O0FERU07RUFDRSxZQUFBO0FDQVI7O0FER007RUFDRSxZQUFBO0FDRFI7O0FESU07RUFDRSxVQUFBO0FDRlI7O0FETUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSk47O0FET0k7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL3Byb2plY3QtbWFuYWdlci9wcm9qZWN0LW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0IWltcG9ydGFudDtcbn1cblxuLnRpdGxle1xuICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLm1hbmFnZXItY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvLyBwYWRkaW5nLXRvcDogMzBweDtcbiAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAubmFtZXtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZmVpbGR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjYTlhOWE5O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC5uYW1le1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgXG4gICAgICAuZmVpbGR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5qb2ItY2FyZF9faWNvbiB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgXG4gICAgfVxuICAgIH1cbiAgICAuam9iLWNhcmRfX2xpbmt7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC5qb2ItY2FyZF9faWNvbiB7XG4gICAgICBmaWxsOiAjZmE2OTNjO1xuICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIFxuICB9XG4gIH1cbn1cbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ubWFuYWdlci1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hbmFnZXItY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFuYWdlci1jYXJkIC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1hbmFnZXItY2FyZCAuZmVpbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYTlhOWE5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIC5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbzpob3ZlciAuZmVpbGQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIC5qb2ItY2FyZF9faWNvbiB7XG4gIGZpbGw6ICNmZmY7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvIC5qb2ItY2FyZF9fbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbyAuam9iLWNhcmRfX2ljb24ge1xuICBmaWxsOiAjZmE2OTNjO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-manager',
          templateUrl: './project-manager.component.html',
          styleUrls: ['./project-manager.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/main/projects/projects-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/feature/main/projects/projects-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProjectsRoutingModule */

  /***/
  function srcAppFeatureMainProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
      return ProjectsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project-manager/project-manager.component */
    "./src/app/feature/main/projects/project-manager/project-manager.component.ts");
    /* harmony import */


    var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./members/members.component */
    "./src/app/feature/main/projects/members/members.component.ts");

    var routes = [{
      path: 'manager',
      component: _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_2__["ProjectManagerComponent"]
    }, {
      path: 'members',
      component: _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]
    }];

    var ProjectsRoutingModule = function ProjectsRoutingModule() {
      _classCallCheck(this, ProjectsRoutingModule);
    };

    ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsRoutingModule
    });
    ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsRoutingModule_Factory(t) {
        return new (t || ProjectsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/main/projects/projects.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/feature/main/projects/projects.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppFeatureMainProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/feature/main/projects/projects-routing.module.ts");
    /* harmony import */


    var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-manager/project-manager.component */
    "./src/app/feature/main/projects/project-manager/project-manager.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _members_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./members/members.component */
    "./src/app/feature/main/projects/members/members.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");

    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsModule_Factory(t) {
        return new (t || ProjectsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, {
        declarations: [_project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_3__["ProjectManagerComponent"], _members_members_component__WEBPACK_IMPORTED_MODULE_5__["MembersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_3__["ProjectManagerComponent"], _members_members_component__WEBPACK_IMPORTED_MODULE_5__["MembersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map