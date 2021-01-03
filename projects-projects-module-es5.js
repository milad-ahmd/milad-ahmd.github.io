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
      styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #23232394;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fa693c;\n  padding: 5px;\n  margin-left: 10px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: right;\n  margin-top: 35px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #ffffffc9;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n.manager-name[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 25px;\n  font-size: 22px;\n}\n.manager-name[_ngcontent-%COMP%]::before {\n  background-color: #fa693c;\n  content: \"\";\n  height: 4px;\n  right: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 0.3s ease-in-out;\n  width: 40px;\n}\n.each-dev[_ngcontent-%COMP%] {\n  position: relative;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 290px;\n  margin-bottom: 15px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 16px;\n  bottom: 0px;\n  color: #fa693c;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  background: #ffffffb5;\n  padding: 15px 5px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvQzpcXFVzZXJzXFxaZWluYWIgU2FsZWhpXFxEb2N1bWVudHNcXHByb2plY3RzXFxzYW5heVxcc2FuYXl3ZWJhcHAvc3JjXFxhcHBcXGZlYXR1cmVcXG1haW5cXHByb2plY3RzXFxtZW1iZXJzXFxtZW1iZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURFSjtBQ0RJO0VBQ0ksV0FBQTtFQUNKLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURHSjtBQ0RJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FER047QUNFSTtFQUNJLFVBQUE7RUFDRixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREFOO0FDRU07RUFDSSxnQkFBQTtBREFWO0FDQ1U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRENaO0FDRU07RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREFSO0FDRVE7RUFDSSxtQkFBQTtFQUNSLGNBQUE7RUFDQSxnQkFBQTtBREFKO0FDR007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRERSO0FDRVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBREFWO0FDRVU7RUFURjtJQVVJLGVBQUE7SUFDQSxnQkFBQTtFRENWO0FBQ0Y7QUNLRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QURGSjtBQ0lJOztFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FERE47QUNJSTs7RUFDRSxrQkFBQTtBREROO0FDR0k7O0VBQ0UsWUFBQTtBREFOO0FDRUk7O0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FEQ047QUNFSTs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBRENOO0FDRUk7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEQ047QUNFSTs7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QURDTjtBQ0tFO0VBQ0UseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURGSjtBQ0tFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURGSjtBQ0dJO0VBQ0kseUJBQUE7RUFDSixXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7QURESjtBQ01FO0VBQ0ksa0JBQUE7QURITjtBQ0lJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBREZSO0FDS007RUFDRSxrQkFBQTtFQUNKLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FESEo7QUNLSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QURIUjtBQ1FDO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRExKO0FDU0M7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FETko7QUNTQztFQUNHLFlBQUE7RUFDQSwwQkFBQTtBRE5KO0FDU0M7RUFDRyxZQUFBO0VBQ0EsMEJBQUE7QUROSjtBQ1FDO0VBQ08sbUJBQUE7QURMUjtBQ1FDO0VBQ08sbUJBQUE7QURMUjtBQ1FDO0VBQ0csbUJBQUE7QURMSjtBQ1FBO0VBQ0ksbUJBQUE7QURMSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VydmljZS1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmY0NTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uc2VydmljZS1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICMyMzIzMjM5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAwO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQge1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzOTdweDtcbiAgcGFkZGluZy1ib3R0b206IDgycHg7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnRlZ25vIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnRlZ25vIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuZGVzLXBhcnQge1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLmRlcy1wYXJ0IHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICNmZmZmZmZjOTtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1heC13aWR0aDogNzM1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5zZXJ2aWNlLWhlYWRlcl9faGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG4sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZhNjkzYztcbiAgZmlsbDogI2ZhNjkzYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0biBzdmcsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuIHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOmhvdmVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXI6OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTUwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuOjphZnRlcixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTY5M2M7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG4tLWZpdC10ZXh0LFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQge1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLm1hbmFnZXItbmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYW5hZ2VyLW5hbWU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTY5M2M7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5lYWNoLWRldiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lYWNoLWRldiAuZGV2LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI5MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmVhY2gtZGV2IC5kZXYtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3R0b206IDBweDtcbiAgY29sb3I6ICNmYTY5M2M7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYjU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuLmVhY2gtZGV2IC5kZXYtbmFtZSBwIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLXByZXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLW5leHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SEXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG59XG5cbjo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stbmV4dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59IiwiLnNlcnZpY2UtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmY0NTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM5NDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlLWhlYWRlcl9fYmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM5N3B4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogODJweDtcclxuICAgICAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgLnRlZ25ve1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRlcy1wYXJ0e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgY29sb3I6ICNmZmZmZmZjOTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIG1heC13aWR0aDogNzM1cHg7XHJcbiAgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXHJcbiAgLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAuaG9sbG93LWJ0biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAjZmE2OTNjO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICNmYTY5M2M7XHJcbiAgICAgIGZpbGw6ICNmYTY5M2M7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhvbGxvdy1idG4gc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbGxvdy1idG46aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMTUwJTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICBcclxuICAgIC5ob2xsb3ctYnRuOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2OTNjO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICBcclxuICAgIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICAudGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAubWFuYWdlci1uYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmVhY2gtZGV2e1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZGV2LWltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXYtbmFtZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGNvbG9yOiAjZmE2OTNjO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZiNTtcclxuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIDo6bmctZGVlcCAuc2xpY2stcHJldntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcclxuXHJcbiB9XHJcblxyXG4gOjpuZy1kZWVwIC5zbGljay1uZXh0e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xyXG4gfVxyXG5cclxuIDo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLW5leHQ6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICdcXGYxMDQnO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XHJcbiB9XHJcblxyXG4gOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stcHJldjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJ1xcZjEwNSc7XHJcbiAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuIH1cclxuIDo6bmctZGVlcCAuc2xpY2stcHJldjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG4gfVxyXG5cclxuIDo6bmctZGVlcCAuc2xpY2stbmV4dDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG4gfVxyXG5cclxuIDo6bmctZGVlcCAuc2xpY2stcHJldjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2xpY2stbmV4dDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XHJcbn0iXX0= */"]
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
      styles: ["main[_ngcontent-%COMP%] {\n  background-color: #f4f4f4 !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n\n.manager-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.manager-card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .feild[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a9a9a9;\n  margin-top: 20px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px;\n  text-align: right;\n  transition: background 0.2s ease-in-out;\n  position: relative;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover {\n  background: #fa693c;\n  color: white;\n  cursor: pointer;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .feild[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fa693c;\n  transition: fill 0.2s ease-in-out;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL3Byb2plY3QtbWFuYWdlci9DOlxcVXNlcnNcXFplaW5hYiBTYWxlaGlcXERvY3VtZW50c1xccHJvamVjdHNcXHNhbmF5XFxzYW5heXdlYmFwcC9zcmNcXGFwcFxcZmVhdHVyZVxcbWFpblxccHJvamVjdHNcXHByb2plY3QtbWFuYWdlclxccHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvamVjdHMvcHJvamVjdC1tYW5hZ2VyL3Byb2plY3QtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREVNO0VBQ0UsWUFBQTtBQ0FSOztBREdNO0VBQ0UsWUFBQTtBQ0RSOztBRElNO0VBQ0UsVUFBQTtBQ0ZSOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0pOOztBRE9JO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9wcm9qZWN0LW1hbmFnZXIvcHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbi5tYW5hZ2VyLWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5mZWlsZHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYTlhOWE5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5pbmZve1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIC5uYW1le1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5mZWlsZHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuam9iLWNhcmRfX2ljb24ge1xyXG4gICAgICAgIGZpbGw6ICNmZmY7XHJcbiAgICBcclxuICAgIH1cclxuICAgIH1cclxuICAgIC5qb2ItY2FyZF9fbGlua3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmpvYi1jYXJkX19pY29uIHtcclxuICAgICAgZmlsbDogI2ZhNjkzYztcclxuICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICBcclxuICB9XHJcbiAgfVxyXG59XHJcbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ubWFuYWdlci1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hbmFnZXItY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFuYWdlci1jYXJkIC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1hbmFnZXItY2FyZCAuZmVpbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYTlhOWE5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIC5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbzpob3ZlciAuZmVpbGQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvOmhvdmVyIC5qb2ItY2FyZF9faWNvbiB7XG4gIGZpbGw6ICNmZmY7XG59XG4ubWFuYWdlci1jYXJkIC5pbmZvIC5qb2ItY2FyZF9fbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbyAuam9iLWNhcmRfX2ljb24ge1xuICBmaWxsOiAjZmE2OTNjO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"]
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