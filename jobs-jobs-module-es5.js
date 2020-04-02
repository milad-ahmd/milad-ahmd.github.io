function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-jobs-module"], {
  /***/
  "./src/app/feature/main/jobs/jobs-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/feature/main/jobs/jobs-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: JobsRoutingModule */

  /***/
  function srcAppFeatureMainJobsJobsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function () {
      return JobsRoutingModule;
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


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/feature/main/jobs/jobs/jobs.component.ts");

    var routes = [{
      path: '',
      component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"]
    }];

    var JobsRoutingModule = function JobsRoutingModule() {
      _classCallCheck(this, JobsRoutingModule);
    };

    JobsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: JobsRoutingModule
    });
    JobsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function JobsRoutingModule_Factory(t) {
        return new (t || JobsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsRoutingModule, [{
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
  "./src/app/feature/main/jobs/jobs.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/feature/main/jobs/jobs.module.ts ***!
    \**************************************************/

  /*! exports provided: JobsModule */

  /***/
  function srcAppFeatureMainJobsJobsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsModule", function () {
      return JobsModule;
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


    var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jobs-routing.module */
    "./src/app/feature/main/jobs/jobs-routing.module.ts");
    /* harmony import */


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/feature/main/jobs/jobs/jobs.component.ts");
    /* harmony import */


    var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/core.module */
    "./src/app/core/core.module.ts");

    var JobsModule = function JobsModule() {
      _classCallCheck(this, JobsModule);
    };

    JobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: JobsModule
    });
    JobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function JobsModule_Factory(t) {
        return new (t || JobsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsModule, {
        declarations: [_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/main/jobs/jobs/jobs.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/feature/main/jobs/jobs/jobs.component.ts ***!
    \**********************************************************/

  /*! exports provided: JobsComponent */

  /***/
  function srcAppFeatureMainJobsJobsJobsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsComponent", function () {
      return JobsComponent;
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


    var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/footer/footer.component */
    "./src/app/core/footer/footer.component.ts");

    var JobsComponent =
    /*#__PURE__*/
    function () {
      function JobsComponent() {
        _classCallCheck(this, JobsComponent);
      }

      _createClass(JobsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JobsComponent;
    }();

    JobsComponent.ɵfac = function JobsComponent_Factory(t) {
      return new (t || JobsComponent)();
    };

    JobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JobsComponent,
      selectors: [["app-jobs"]],
      decls: 45,
      vars: 0,
      consts: [[1, "container", "mt-5"], [1, "col-md-12"], [1, "row"], [1, "each-job"], [1, "d-flex", "justify-content-between"], [1, "job-title"], [1, "resume"], [1, "d-flex", "mb-3"], ["src", "/assets/img/pin.svg", 1, "ml-2", 2, "width", "20px"], [1, "d-flex"], ["src", "/assets/img/portfolio.svg", 1, "ml-2", 2, "width", "20px"]],
      template: function JobsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-second-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0627\u0631\u0634\u062F \u0633\u06CC\u0648 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0627\u0631\u0633\u0627\u0644 \u0631\u0632\u0648\u0645\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0632\u0646\u062C\u0627\u0646- \u0632\u0646\u062C\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0642\u0631\u0627\u0631 \u062F\u0627\u062F \u062A\u0645\u0627\u0645 \u0648\u0642\u062A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0627\u0631\u0634\u062F \u0633\u06CC\u0648 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0627\u0631\u0633\u0627\u0644 \u0631\u0632\u0648\u0645\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0632\u0646\u062C\u0627\u0646- \u0632\u0646\u062C\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0642\u0631\u0627\u0631 \u062F\u0627\u062F \u062A\u0645\u0627\u0645 \u0648\u0642\u062A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u06A9\u0627\u0631\u0634\u0646\u0627\u0633 \u0627\u0631\u0634\u062F \u0633\u06CC\u0648 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0627\u0631\u0633\u0627\u0644 \u0631\u0632\u0648\u0645\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0632\u0646\u062C\u0627\u0646- \u0632\u0646\u062C\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0642\u0631\u0627\u0631 \u062F\u0627\u062F \u062A\u0645\u0627\u0645 \u0648\u0642\u062A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-footer");
        }
      },
      directives: [_core_second_header_second_header_component__WEBPACK_IMPORTED_MODULE_1__["SecondHeaderComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".each-job[_ngcontent-%COMP%] {\n  background: #ececec;\n  width: 100%;\n  margin-bottom: 30px;\n  padding: 30px;\n  border-radius: 1px;\n  box-shadow: 2px 3px 7px #ababab;\n}\n.each-job[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  color: #5a5a5a;\n  font-size: 25px;\n  font-family: IRANSans-web-bold !important;\n}\n.each-job[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%] {\n  border: 2px solid #fa693c;\n  padding: 10px;\n  background: transparent;\n  color: #fa693c;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWluYWJzYWxlaGkvRG9jdW1lbnRzL3Byb2plY3RzL3NhbmF5LXdlYi9zYW5heS9zcmMvYXBwL2ZlYXR1cmUvbWFpbi9qb2JzL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZS9tYWluL2pvYnMvam9icy9qb2JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbWFpbi9qb2JzL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYWNoLWpvYntcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDNweCA3cHggI2FiYWJhYjtcbiAgICAuam9iLXRpdGxle1xuICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogSVJBTlNhbnMtd2ViLWJvbGQhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgIC5yZXN1bWV7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYTY5M2M7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogI2ZhNjkzYztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbiIsIi5lYWNoLWpvYiB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggN3B4ICNhYmFiYWI7XG59XG4uZWFjaC1qb2IgLmpvYi10aXRsZSB7XG4gIGNvbG9yOiAjNWE1YTVhO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fucy13ZWItYm9sZCAhaW1wb3J0YW50O1xufVxuLmVhY2gtam9iIC5yZXN1bWUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmE2OTNjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmYTY5M2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jobs',
          templateUrl: './jobs.component.html',
          styleUrls: ['./jobs.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=jobs-jobs-module-es5.js.map