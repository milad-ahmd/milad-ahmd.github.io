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
      styles: ["@charset \"UTF-8\";\n.service-header[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  position: relative;\n  z-index: 0;\n  background-color: #192f45;\n  display: flex;\n  align-items: stretch;\n}\n.service-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #23232394;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  z-index: -1;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%] {\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 397px;\n  padding-bottom: 82px;\n  padding-top: 130px;\n  margin-left: 0;\n  margin-right: 0;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .tegno[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fa693c;\n  padding: 5px;\n  margin-left: 10px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: right;\n  margin-top: 35px;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .des-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 2;\n  color: #ffffffc9;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: bold;\n  text-align: right;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 735px;\n}\n@media screen and (max-width: 600px) {\n  .service-header[_ngcontent-%COMP%]   .service-header__content[_ngcontent-%COMP%]   .service-header__header[_ngcontent-%COMP%]   .service-header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 1.5;\n  }\n}\n.service-header__action[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%] {\n  margin-top: 58px;\n  width: 100%;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 4px solid #fa693c;\n  font-size: 14px;\n  padding: 10px 15px;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  color: #fa693c;\n  fill: #fa693c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  outline: none;\n  z-index: 0;\n  cursor: pointer;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n  fill: white !important;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]:hover::after {\n  width: 150%;\n  opacity: 1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after, .service-header__description[_ngcontent-%COMP%]   .hollow-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: calc(100% + 10px);\n  background-color: #fa693c;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0) skewX(-45deg) scale(1);\n  transition: all 0.3s;\n  will-change: transform;\n  z-index: -1;\n}\n.service-header__action[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%], .service-header__description[_ngcontent-%COMP%]   .hollow-btn--fit-text[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n.manager-name[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 25px;\n  font-size: 22px;\n}\n.manager-name[_ngcontent-%COMP%]::before {\n  background-color: #fa693c;\n  content: \"\";\n  height: 4px;\n  right: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 0.3s ease-in-out;\n  width: 40px;\n}\n.each-dev[_ngcontent-%COMP%] {\n  position: relative;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 290px;\n  margin-bottom: 15px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 16px;\n  bottom: 0px;\n  color: #fa693c;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  background: #ffffffb5;\n  padding: 15px 5px;\n}\n.each-dev[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n  .slick-prev {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  .slick-next {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fa693c6e;\n}\n  [dir=rtl] .slick-next::before {\n  content: \"\uF104\";\n  font-family: \"FontAwesome\";\n}\n  [dir=rtl] .slick-prev::before {\n  content: \"\uF105\";\n  font-family: \"FontAwesome\";\n}\n  .slick-prev:hover {\n  background: #fa693c;\n}\n  .slick-next:hover {\n  background: #fa693c;\n}\n  .slick-prev:focus {\n  background: #fa693c;\n}\n  .slick-next:focus {\n  background: #fa693c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3Byb2plY3RzL3NhbmF5LXdlYi9zYW5heS9zcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBREVKO0FDREk7RUFDSSxXQUFBO0VBQ0oscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBREdKO0FDREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QURHTjtBQ0VJO0VBQ0ksVUFBQTtFQUNGLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEQU47QUNFTTtFQUNJLGdCQUFBO0FEQVY7QUNDVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEQ1o7QUNFTTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEQVI7QUNFUTtFQUNJLG1CQUFBO0VBQ1IsY0FBQTtFQUNBLGdCQUFBO0FEQUo7QUNHTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FERFI7QUNFUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEQVY7QUNFVTtFQVRGO0lBVUksZUFBQTtJQUNBLGdCQUFBO0VEQ1Y7QUFDRjtBQ0tFOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBREZKO0FDSUk7O0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURETjtBQ0lJOztFQUNFLGtCQUFBO0FERE47QUNHSTs7RUFDRSxZQUFBO0FEQU47QUNFSTs7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QURDTjtBQ0VJOztFQUNFLFdBQUE7RUFDQSxVQUFBO0FEQ047QUNFSTs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDREQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QURDTjtBQ0VJOztFQUNFLFdBQUE7RUFDQSxxQkFBQTtBRENOO0FDS0U7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREZKO0FDS0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREZKO0FDR0k7RUFDSSx5QkFBQTtFQUNKLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtBRERKO0FDTUU7RUFDSSxrQkFBQTtBREhOO0FDSUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FERlI7QUNLTTtFQUNFLGtCQUFBO0VBQ0osZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QURISjtBQ0tJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBREhSO0FDUUM7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FETEo7QUNTQztFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUROSjtBQ1NDO0VBQ0csWUFBQTtFQUNBLDBCQUFBO0FETko7QUNTQztFQUNHLFlBQUE7RUFDQSwwQkFBQTtBRE5KO0FDUUM7RUFDTyxtQkFBQTtBRExSO0FDUUM7RUFDTyxtQkFBQTtBRExSO0FDUUM7RUFDRyxtQkFBQTtBRExKO0FDUUE7RUFDSSxtQkFBQTtBRExKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tYWluL3Byb2plY3RzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZXJ2aWNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zZXJ2aWNlLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogIzIzMjMyMzk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM5N3B4O1xuICBwYWRkaW5nLWJvdHRvbTogODJweDtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAudGVnbm8ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAudGVnbm8gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc2VydmljZS1oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IC5kZXMtcGFydCB7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuZGVzLXBhcnQgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogI2ZmZmZmZmM5O1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNlcnZpY2UtaGVhZGVyIC5zZXJ2aWNlLWhlYWRlcl9fY29udGVudCAuc2VydmljZS1oZWFkZXJfX2hlYWRlciAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LXdpZHRoOiA3MzVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZXJ2aWNlLWhlYWRlciAuc2VydmljZS1oZWFkZXJfX2NvbnRlbnQgLnNlcnZpY2UtaGVhZGVyX19oZWFkZXIgLnNlcnZpY2UtaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bixcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZhNjkzYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmE2OTNjO1xuICBmaWxsOiAjZmE2OTNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2aWNlLWhlYWRlcl9fYWN0aW9uIC5ob2xsb3ctYnRuIHN2Zyxcbi5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24gLmhvbGxvdy1idG4gc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46aG92ZXIgc3ZnLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjpob3ZlciBzdmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24gLmhvbGxvdy1idG46OmFmdGVyLFxuLnNlcnZpY2UtaGVhZGVyX19kZXNjcmlwdGlvbiAuaG9sbG93LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2tld1goLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBza2V3WCgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZS1oZWFkZXJfX2FjdGlvbiAuaG9sbG93LWJ0bi0tZml0LXRleHQsXG4uc2VydmljZS1oZWFkZXJfX2Rlc2NyaXB0aW9uIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ubWFuYWdlci1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1hbmFnZXItbmFtZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0cHg7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmVhY2gtZGV2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVhY2gtZGV2IC5kZXYtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjkwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZWFjaC1kZXYgLmRldi1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvdHRvbTogMHB4O1xuICBjb2xvcjogI2ZhNjkzYztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZiNTtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG4uZWFjaC1kZXYgLmRldi1uYW1lIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbjo6bmctZGVlcCAuc2xpY2stcHJldiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xufVxuXG46Om5nLWRlZXAgLnNsaWNrLW5leHQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M2ZTtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stbmV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhIRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1wcmV2OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn0iLCIuc2VydmljZS1oZWFkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTJmNDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAmOjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM5NDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC5zZXJ2aWNlLWhlYWRlcl9fYmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IC0xO1xuXG4gICAgIFxuICAgIH1cbiAgXG4gICAgLnNlcnZpY2UtaGVhZGVyX19jb250ZW50IHtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAzOTdweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgIC50ZWdub3tcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRlcy1wYXJ0e1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcblxuICAgICAgICBwe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBjb2xvcjogI2ZmZmZmZmM5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VydmljZS1oZWFkZXJfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAuc2VydmljZS1oZWFkZXJfX3RpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDczNXB4O1xuICBcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnNlcnZpY2UtaGVhZGVyX19hY3Rpb24sXG4gIC5zZXJ2aWNlLWhlYWRlcl9fZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgIC5ob2xsb3ctYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYTY5M2M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNmYTY5M2M7XG4gICAgICBmaWxsOiAjZmE2OTNjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIFxuICAgIC5ob2xsb3ctYnRuIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5ob2xsb3ctYnRuOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmhvbGxvdy1idG46aG92ZXIgc3ZnIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAuaG9sbG93LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgLmhvbGxvdy1idG46OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjkzYztcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNrZXdYKC00NWRlZykgc2NhbGUoMSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIFxuICAgIC5ob2xsb3ctYnRuLS1maXQtdGV4dCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cbiAgXG4gIFxuXG4gIC50aXRsZXtcbiAgICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuXG4gIC5tYW5hZ2VyLW5hbWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAmOjpiZWZvcmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTY5M2M7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cblxuXG4gIC5lYWNoLWRldntcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZGV2LWltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXYtbmFtZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3R0b206IDBweDtcbiAgICBjb2xvcjogI2ZhNjkzYztcbiAgICByaWdodDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmI1O1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICB9XG4gIH1cblxuIDo6bmctZGVlcCAuc2xpY2stcHJldntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZDogI2ZhNjkzYzZlO1xuXG4gfVxuXG4gOjpuZy1kZWVwIC5zbGljay1uZXh0e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjNmU7XG4gfVxuXG4gOjpuZy1kZWVwIFtkaXI9cnRsXSAuc2xpY2stbmV4dDo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICdcXGYxMDQnO1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuIH1cblxuIDo6bmctZGVlcCBbZGlyPXJ0bF0gLnNsaWNrLXByZXY6OmJlZm9yZXtcbiAgICBjb250ZW50OiAnXFxmMTA1JztcbiAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiB9XG4gOjpuZy1kZWVwIC5zbGljay1wcmV2OmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xuIH1cblxuIDo6bmctZGVlcCAuc2xpY2stbmV4dDpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhNjkzYztcbiB9XG5cbiA6Om5nLWRlZXAgLnNsaWNrLXByZXY6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogI2ZhNjkzYztcbn1cblxuOjpuZy1kZWVwIC5zbGljay1uZXh0OmZvY3Vze1xuICAgIGJhY2tncm91bmQ6ICNmYTY5M2M7XG59Il19 */"]
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
      styles: ["main[_ngcontent-%COMP%] {\n  background-color: #f4f4f4 !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: IRANSans-web-bold !important;\n  text-align: right;\n  font-size: 35px;\n}\n\n.manager-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.manager-card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .feild[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a9a9a9;\n  margin-top: 20px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px;\n  text-align: right;\n  transition: background 0.2s ease-in-out;\n  position: relative;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover {\n  background: #fa693c;\n  color: white;\n  cursor: pointer;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .feild[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: 15px;\n}\n\n.manager-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .job-card__icon[_ngcontent-%COMP%] {\n  fill: #fa693c;\n  transition: fill 0.2s ease-in-out;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3Byb2plY3RzL3NhbmF5LXdlYi9zYW5heS9zcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9wcm9qZWN0LW1hbmFnZXIvcHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlL21haW4vcHJvamVjdHMvcHJvamVjdC1tYW5hZ2VyL3Byb2plY3QtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREVNO0VBQ0UsWUFBQTtBQ0FSOztBREdNO0VBQ0UsWUFBQTtBQ0RSOztBRElNO0VBQ0UsVUFBQTtBQ0ZSOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0pOOztBRE9JO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9wcm9qZWN0cy9wcm9qZWN0LW1hbmFnZXIvcHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNCFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZXtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zLXdlYi1ib2xkIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5tYW5hZ2VyLWNhcmR7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gcGFkZGluZy10b3A6IDMwcHg7XG4gIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLm5hbWV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmZlaWxke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2E5YTlhOTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmluZm97XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmE2OTNjO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAubmFtZXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIFxuICAgICAgLmZlaWxke1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgXG4gICAgICAuam9iLWNhcmRfX2ljb24ge1xuICAgICAgICBmaWxsOiAjZmZmO1xuICAgIFxuICAgIH1cbiAgICB9XG4gICAgLmpvYi1jYXJkX19saW5re1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIGJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAuam9iLWNhcmRfX2ljb24ge1xuICAgICAgZmlsbDogI2ZhNjkzYztcbiAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICBcbiAgfVxuICB9XG59XG4iLCJtYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLm1hbmFnZXItY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYW5hZ2VyLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1hbmFnZXItY2FyZCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYW5hZ2VyLWNhcmQgLmZlaWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2E5YTlhOTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYW5hZ2VyLWNhcmQgLmluZm8ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYTY5M2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbzpob3ZlciAubmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYW5hZ2VyLWNhcmQgLmluZm86aG92ZXIgLmZlaWxkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbzpob3ZlciAuam9iLWNhcmRfX2ljb24ge1xuICBmaWxsOiAjZmZmO1xufVxuLm1hbmFnZXItY2FyZCAuaW5mbyAuam9iLWNhcmRfX2xpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cbi5tYW5hZ2VyLWNhcmQgLmluZm8gLmpvYi1jYXJkX19pY29uIHtcbiAgZmlsbDogI2ZhNjkzYztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"]
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