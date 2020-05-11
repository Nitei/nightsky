function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _core_funcionalities_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/funcionalities/about/about.component */
    "./src/app/core/funcionalities/about/about.component.ts");
    /* harmony import */


    var _core_funcionalities_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/funcionalities/curriculum/curriculum.component */
    "./src/app/core/funcionalities/curriculum/curriculum.component.ts");

    var routes = [{
      path: 'games',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./core/funcionalities/games/games.module */
        "./src/app/core/funcionalities/games/games.module.ts")).then(function (m) {
          return m.GamesModule;
        });
      }
    }, {
      path: 'about',
      component: _core_funcionalities_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'curriculum',
      component: _core_funcionalities_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_3__["CurriculumComponent"]
    }, {
      path: '**',
      redirectTo: 'about'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/services/utils/utils.service */
    "./src/app/shared/services/utils/utils.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(us, translate) {
      _classCallCheck(this, AppComponent);

      this.us = us;
      this.translate = translate;
      this.us.initObservables();
      this.translate.addLangs(['es', 'en']);
      var browserLang = translate.getBrowserLang();
      this.translate.use(browserLang.match(/es|en/) ? browserLang : 'en');
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ns-root"]],
      decls: 4,
      vars: 0,
      consts: [["id", "root_wrapper"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ns-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_funcionalities_games_games_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/funcionalities/games/games.module */
    "./src/app/core/funcionalities/games/games.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module.ts/shared.module */
    "./src/app/shared/shared.module.ts/shared.module.ts");
    /* harmony import */


    var _core_funcionalities_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/funcionalities/about/about.component */
    "./src/app/core/funcionalities/about/about.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _core_funcionalities_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/funcionalities/curriculum/curriculum.component */
    "./src/app/core/funcionalities/curriculum/curriculum.component.ts"); // AoT requires an exported function for factories


    function HttpLoaderFactory(httpClient) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _core_funcionalities_games_games_module__WEBPACK_IMPORTED_MODULE_3__["GamesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
        extend: true,
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _core_funcionalities_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _core_funcionalities_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _core_funcionalities_games_games_module__WEBPACK_IMPORTED_MODULE_3__["GamesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _core_funcionalities_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _core_funcionalities_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _core_funcionalities_games_games_module__WEBPACK_IMPORTED_MODULE_3__["GamesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
            extend: true,
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
            }
          })],
          providers: [_shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/funcionalities/about/about.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/funcionalities/about/about.component.ts ***!
    \**************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppCoreFuncionalitiesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(router) {
        _classCallCheck(this, AboutComponent);

        this.router = router;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goLinkedin",
        value: function goLinkedin() {
          location.href = "https://www.linkedin.com/in/jorge-jes%C3%BAs-campoy-l%C3%B3pez-53829a129/";
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["ns-about"]],
      decls: 17,
      vars: 12,
      consts: [[1, "animated", "fast", "fadeIn"], [1, "container", "card"], [1, "box", "container_picture"], [1, "picture"], [1, "box"], [1, "ff_raleway"], [1, "ff_raleway", "pointer", 3, "click"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_p_click_14_listener($event) {
            return ctx.goLinkedin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "ABOUT.Description.first"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "CONTACT.Labels.email"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "CONTACT.Links.email"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "CONTACT.Labels.linkedin"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  padding: 1.5rem;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: -webkit-box;\n  display: flex;\n  width: auto;\n  max-width: 45%;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .container_picture[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: 10rem;\n  position: relative;\n  border-radius: 75%;\n  padding: 0px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 75%;\n}\n.container[_ngcontent-%COMP%]   .container_picture[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  position: relative;\n  position: relative;\n  width: 100%;\n  height: 16rem;\n  top: -1.6rem;\n  left: 0rem;\n  background-image: url('IMG-20180129-WA0056.jpeg');\n  background-size: cover;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    justify-content: space-around;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9hYm91dC9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxjb3JlXFxmdW5jaW9uYWxpdGllc1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBQ0FOO0FES0E7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDRkY7RURJRTtJQUNFLGVBQUE7RUNGSjtBQUNGO0FETUE7RUFDRSxlQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmJveCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyX3BpY3R1cmUge1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDc1JTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NSU7XHJcblxyXG4gICAgLnBpY3R1cmUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTZyZW07XHJcbiAgICAgIHRvcDogLTEuNnJlbTtcclxuICAgICAgbGVmdDogMHJlbTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9JTUctMjAxODAxMjktV0EwMDU2LmpwZWdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5ib3gge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA0NSU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lcl9waWN0dXJlIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDc1JTtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDc1JTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lcl9waWN0dXJlIC5waWN0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2cmVtO1xuICB0b3A6IC0xLjZyZW07XG4gIGxlZnQ6IDByZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvSU1HLTIwMTgwMTI5LVdBMDA1Ni5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29udGFpbmVyIC5ib3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/funcionalities/curriculum/curriculum.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/funcionalities/curriculum/curriculum.component.ts ***!
    \************************************************************************/

  /*! exports provided: CurriculumComponent */

  /***/
  function srcAppCoreFuncionalitiesCurriculumCurriculumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function () {
      return CurriculumComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CurriculumComponent_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var desc_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CURRICULUM.Descriptions._0" + desc_r21), " ");
      }
    }

    function CurriculumComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var func_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CURRICULUM.FunctionsPerformed._0" + func_r22));
      }
    }

    function CurriculumComponent_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r23.tech);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r23.level);
      }
    }

    var _c0 = function _c0() {
      return [1, 2, 3];
    };

    var _c1 = function _c1() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };

    var CurriculumComponent =
    /*#__PURE__*/
    function () {
      function CurriculumComponent() {
        _classCallCheck(this, CurriculumComponent);

        this.skillOrder = false;
        this.skillList = [{
          tech: "Angular V( 2 - 9 )",
          level: 8
        }, {
          tech: "Developer Tools",
          level: 8
        }, {
          tech: "Ionic 4",
          level: 7
        }, {
          tech: "Typescript / Javascript",
          level: 9
        }, {
          tech: "HTML5",
          level: 9
        }, {
          tech: "CSS3 / SASS / SCSS",
          level: 8
        }, {
          tech: "NGRX / Redux",
          level: 8
        }, {
          tech: "ReactiveX / Rxjs",
          level: 8
        }, {
          tech: "Git / Github, Gitlab, Bitbucket",
          level: 7
        }, {
          tech: "Svn",
          level: 6
        }, {
          tech: "Bootstrap",
          level: 8
        }, {
          tech: "Jquery",
          level: 7
        }, {
          tech: "Jasmine / Karma",
          level: 5
        }, {
          tech: "Reactive forms",
          level: 7
        }, {
          tech: "Jenkins",
          level: 1
        }, {
          tech: "Webpack",
          level: 5
        }, {
          tech: "Npm",
          level: 6
        }, {
          tech: "RWD / Responsive Web Design",
          level: 8
        }];
        this.switchSortSkillListBy();
      }

      _createClass(CurriculumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchSortSkillListBy",
        value: function switchSortSkillListBy() {
          var _this = this;

          var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tech';
          this.skillOrder = !this.skillOrder;
          this.skillList = this.skillList.sort(function (a, b) {
            return _this.skillOrder === true ? a[prop] > b[prop] ? 1 : -1 : a[prop] < b[prop] ? 1 : -1;
          });
        }
      }]);

      return CurriculumComponent;
    }();

    CurriculumComponent.ɵfac = function CurriculumComponent_Factory(t) {
      return new (t || CurriculumComponent)();
    };

    CurriculumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurriculumComponent,
      selectors: [["ns-curriculum"]],
      decls: 34,
      vars: 20,
      consts: [[1, "animated", "fast", "fadeIn"], [1, "container"], [1, "card"], [1, "fields"], [1, "field"], ["class", "p_03 ff_raleway", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "table_skill"], [1, "left", 3, "click"], [1, "right", 3, "click"], ["class", "skill_list", 4, "ngFor", "ngForOf"], [1, "p_03", "ff_raleway"], [1, "skill_list"], [1, "p_03", "right", "ff_raleway"]],
      template: function CurriculumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CurriculumComponent_p_8_Template, 3, 3, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CurriculumComponent_li_17_Template, 3, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumComponent_Template_th_click_27_listener($event) {
            return ctx.switchSortSkillListBy("tech");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumComponent_Template_th_click_30_listener($event) {
            return ctx.switchSortSkillListBy("level");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CurriculumComponent_tr_33_Template, 5, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "CURRICULUM.Titles.description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "CURRICULUM.Titles.functionsPerformed"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 12, "CURRICULUM.Titles.technologies"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 14, "CURRICULUM.Titles.technology"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, "CURRICULUM.Titles.level"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".p_01[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n.p_02[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.p_03[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_05[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.p_06[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n}\n.p_07[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n.p_08[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.p_09[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.p_1[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.paragraph[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1px 3px 19px 12px #c1d1ed;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: ghostwhite;\n}\n.card.--small[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.card.--big[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.--bigger[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.ff_raleway[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  color: #0079b3;\n  font-size: 1rem;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%], ns-navbar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 3rem;\n}\nns-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: ghostwhite;\n  position: fixed;\n  width: inherit;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%]   .navbar_item[_ngcontent-%COMP%] {\n  height: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: inherit;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%]   .item_part[_ngcontent-%COMP%] {\n  display: inherit;\n  height: inherit;\n  width: inherit;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%]   .item_part[_ngcontent-%COMP%]   .part_item[_ngcontent-%COMP%] {\n  display: inherit;\n  height: inherit;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\nns-navbar[_ngcontent-%COMP%]   .container_navbar[_ngcontent-%COMP%]   .item_part[_ngcontent-%COMP%]   .part_item[_ngcontent-%COMP%]   .item_brand[_ngcontent-%COMP%] {\n  display: inherit;\n  height: inherit;\n  -webkit-box-align: center;\n          align-items: center;\n}\nns-navbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:hover {\n  color: #6fa4ff;\n}\n.router_active[_ngcontent-%COMP%] {\n  color: #6fa4ff;\n}\n@media (max-width: 425px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 768px) {\n  .container_navbar[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n\n.p_01[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n.p_02[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.p_03[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_05[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.p_06[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n}\n.p_07[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n.p_08[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.p_09[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.p_1[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.paragraph[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1px 3px 19px 12px #c1d1ed;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: ghostwhite;\n}\n.card.--small[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.card.--big[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.--bigger[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.ff_raleway[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  color: #0079b3;\n  font-size: 1rem;\n}\n#root_wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 4rem 1rem 1rem 1rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.p_01[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n.p_02[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.p_03[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_05[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.p_06[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n}\n.p_07[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n.p_08[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.p_09[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.p_1[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.paragraph[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1px 3px 19px 12px #c1d1ed;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: ghostwhite;\n}\n.card.--small[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.card.--big[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.--bigger[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.ff_raleway[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  color: #0079b3;\n  font-size: 1rem;\n}\nli[_ngcontent-%COMP%] {\n  list-style: circle;\n}\n.even[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.table_skill[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid white;\n}\n.table_skill[_ngcontent-%COMP%]   th.left[_ngcontent-%COMP%], .table_skill[_ngcontent-%COMP%]   th.right[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table_skill[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.table_skill[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.table_skill[_ngcontent-%COMP%]   .skill_list[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9jdXJyaWN1bHVtL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcc2l6ZXMuc2NzcyIsInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9jdXJyaWN1bHVtL2N1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvY3VycmljdWx1bS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFxnZW5lcmljc1xccGFydHNcXHRleHRzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvY3VycmljdWx1bS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFxnZW5lcmljc1xccGFydHNcXGNhcmRzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvY3VycmljdWx1bS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFxnZW5lcmljc1xccGFydHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvY3VycmljdWx1bS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXGNvbXBvbmVudHNcXHBhcnRzXFxuYXZiYXIuc2NzcyIsInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9jdXJyaWN1bHVtL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXHZhcmlhYmxlc1xccGFydHNcXHNpemVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvY3VycmljdWx1bS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFx2YXJpYWJsZXNcXHBhcnRzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9jdXJyaWN1bHVtL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdmlld3NcXHBhcnRzXFxhcHAuc2NzcyIsInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9jdXJyaWN1bHVtL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXGNvcmVcXGZ1bmNpb25hbGl0aWVzXFxjdXJyaWN1bHVtXFxjdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGVBQUE7QUFDQTtFQUNFLGVBQUE7QUNBRjtBREVBO0VBQ0UsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxlQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7QUNHRjtBRERBO0VBQ0UsZUFBQTtBQ0lGO0FERkE7RUFDRSxlQUFBO0FDS0Y7QURIQTtFQUNFLGVBQUE7QUNNRjtBREpBO0VBQ0UsZUFBQTtBQ09GO0FETEE7RUFDRSxlQUFBO0FDUUY7QUROQTtFQUNFLGVBQUE7QUNTRjtBRFBBO0VBQ0UsYUFBQTtBQ1VGO0FDM0NBO0VBQ0UsYUFBQTtBRDhDRjtBRTdDQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUZnREY7QUU3Q0E7RUFFRSw0QkFBQTtBRitDRjtBRTlDRTtFQUNFLGVBQUE7QUZnREo7QUU5Q0U7RUFDRSxlQUFBO0FGZ0RKO0FFOUNFO0VBQ0UsYUFBQTtBRmdESjtBR25FQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUhzRUY7QUl2RUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUNMYztBTCtFaEI7QUl2RUE7RUFFRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUp5RUY7QUl0RUU7RUFFRSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNEJFU2U7RUZSZixlQUFBO0VBQ0EsY0FBQTtBSnVFSjtBSXJFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtBSnVFTjtBSXJFSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUp1RU47QUlyRU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBSnVFUjtBSXJFUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUp1RVY7QUlqRUU7RUFDRSxjQUFBO0FKbUVKO0FJL0RBO0VBQ0UsY0FBQTtBSmtFRjtBSS9EQTtFQUNFO0lBQ0UsaUJBQUE7RUprRUY7QUFDRjtBSS9EQTtFQUNFO0lBQ0UsWUFBQTtFSmlFRjtBQUNGO0FEbklBLGVBQUE7QUFDQTtFQUNFLGVBQUE7QUNxSUY7QURuSUE7RUFDRSxlQUFBO0FDc0lGO0FEcElBO0VBQ0UsZUFBQTtBQ3VJRjtBRHJJQTtFQUNFLGVBQUE7QUN3SUY7QUR0SUE7RUFDRSxlQUFBO0FDeUlGO0FEdklBO0VBQ0UsZUFBQTtBQzBJRjtBRHhJQTtFQUNFLGVBQUE7QUMySUY7QUR6SUE7RUFDRSxlQUFBO0FDNElGO0FEMUlBO0VBQ0UsZUFBQTtBQzZJRjtBRDNJQTtFQUNFLGVBQUE7QUM4SUY7QUQ1SUE7RUFDRSxhQUFBO0FDK0lGO0FDaExBO0VBQ0UsYUFBQTtBRG1MRjtBRWxMQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUZxTEY7QUVsTEE7RUFFRSw0QkFBQTtBRm9MRjtBRW5MRTtFQUNFLGVBQUE7QUZxTEo7QUVuTEU7RUFDRSxlQUFBO0FGcUxKO0FFbkxFO0VBQ0UsYUFBQTtBRnFMSjtBR3hNQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUgyTUY7QU81TUE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FQK01GO0FEcE5BLGVBQUE7QUFDQTtFQUNFLGVBQUE7QUN1TkY7QURyTkE7RUFDRSxlQUFBO0FDd05GO0FEdE5BO0VBQ0UsZUFBQTtBQ3lORjtBRHZOQTtFQUNFLGVBQUE7QUMwTkY7QUR4TkE7RUFDRSxlQUFBO0FDMk5GO0FEek5BO0VBQ0UsZUFBQTtBQzRORjtBRDFOQTtFQUNFLGVBQUE7QUM2TkY7QUQzTkE7RUFDRSxlQUFBO0FDOE5GO0FENU5BO0VBQ0UsZUFBQTtBQytORjtBRDdOQTtFQUNFLGVBQUE7QUNnT0Y7QUQ5TkE7RUFDRSxhQUFBO0FDaU9GO0FDbFFBO0VBQ0UsYUFBQTtBRHFRRjtBRXBRQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUZ1UUY7QUVwUUE7RUFFRSw0QkFBQTtBRnNRRjtBRXJRRTtFQUNFLGVBQUE7QUZ1UUo7QUVyUUU7RUFDRSxlQUFBO0FGdVFKO0FFclFFO0VBQ0UsYUFBQTtBRnVRSjtBRzFSQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUg2UkY7QVE5UkE7RUFHRSxrQkFBQTtBUitSRjtBUTVSQTtFQUNFLHVCQUFBO0FSK1JGO0FRNVJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FSK1JGO0FROVJJOztFQUVFLGVBQUE7QVJnU047QVE5Ukk7RUFDRSxnQkFBQTtBUmdTTjtBUTlSSTtFQUNFLGtCQUFBO0FSZ1NOO0FROVJFO0VBQ0UsdUJBQUE7QVJnU0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2N1cnJpY3VsdW0vY3VycmljdWx1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiogUEFERElOR1MgKiovIFxyXG4ucF8wMSB7XHJcbiAgcGFkZGluZzogLjFyZW07XHJcbn1cclxuLnBfMDIge1xyXG4gIHBhZGRpbmc6IC4ycmVtO1xyXG59XHJcbi5wXzAzIHtcclxuICBwYWRkaW5nOiAuM3JlbTtcclxufVxyXG4ucF8wNCB7XHJcbiAgcGFkZGluZzogLjRyZW07XHJcbn1cclxuLnBfMDQge1xyXG4gIHBhZGRpbmc6IC40cmVtO1xyXG59XHJcbi5wXzA1IHtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG4ucF8wNiB7XHJcbiAgcGFkZGluZzogLjZyZW07XHJcbn1cclxuLnBfMDcge1xyXG4gIHBhZGRpbmc6IC43cmVtO1xyXG59XHJcbi5wXzA4IHtcclxuICBwYWRkaW5nOiAuOHJlbTtcclxufVxyXG4ucF8wOSB7XHJcbiAgcGFkZGluZzogLjlyZW07XHJcbn1cclxuLnBfMSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufSIsIi8qKiBQQURESU5HUyAqKi9cbi5wXzAxIHtcbiAgcGFkZGluZzogMC4xcmVtO1xufVxuXG4ucF8wMiwgbGkge1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG5cbi5wXzAzIHtcbiAgcGFkZGluZzogMC4zcmVtO1xufVxuXG4ucF8wNCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLnBfMDQge1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbi5wXzA1IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucF8wNiB7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cblxuLnBfMDcge1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbi5wXzA4IHtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG4ucF8wOSB7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLnBfMSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wYXJhZ3JhcGgge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTlweCAxMnB4ICNjMWQxZWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cbi5jYXJkLi0tc21hbGwge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY2FyZC4tLWJpZyB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5jYXJkLi0tYmlnZ2VyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmZmX3JhbGV3YXksIGxpIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIGNvbG9yOiAjMDA3OWIzO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbm5zLW5hdmJhciAuY29udGFpbmVyX25hdmJhciwgbnMtbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbn1cblxubnMtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5ucy1uYXZiYXIgLmNvbnRhaW5lcl9uYXZiYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5ucy1uYXZiYXIgLmNvbnRhaW5lcl9uYXZiYXIgLm5hdmJhcl9pdGVtIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbm5zLW5hdmJhciAuY29udGFpbmVyX25hdmJhciAuaXRlbV9wYXJ0IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbm5zLW5hdmJhciAuY29udGFpbmVyX25hdmJhciAuaXRlbV9wYXJ0IC5wYXJ0X2l0ZW0ge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbm5zLW5hdmJhciAuY29udGFpbmVyX25hdmJhciAuaXRlbV9wYXJ0IC5wYXJ0X2l0ZW0gLml0ZW1fYnJhbmQge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ucy1uYXZiYXIgaDU6aG92ZXIge1xuICBjb2xvcjogIzZmYTRmZjtcbn1cblxuLnJvdXRlcl9hY3RpdmUge1xuICBjb2xvcjogIzZmYTRmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXJfbmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn1cbi8qKiBQQURESU5HUyAqKi9cbi5wXzAxIHtcbiAgcGFkZGluZzogMC4xcmVtO1xufVxuXG4ucF8wMiwgbGkge1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG5cbi5wXzAzIHtcbiAgcGFkZGluZzogMC4zcmVtO1xufVxuXG4ucF8wNCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLnBfMDQge1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbi5wXzA1IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucF8wNiB7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cblxuLnBfMDcge1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbi5wXzA4IHtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG4ucF8wOSB7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLnBfMSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wYXJhZ3JhcGgge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTlweCAxMnB4ICNjMWQxZWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cbi5jYXJkLi0tc21hbGwge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY2FyZC4tLWJpZyB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5jYXJkLi0tYmlnZ2VyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmZmX3JhbGV3YXksIGxpIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIGNvbG9yOiAjMDA3OWIzO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbiNyb290X3dyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA0cmVtIDFyZW0gMXJlbSAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLyoqIFBBRERJTkdTICoqL1xuLnBfMDEge1xuICBwYWRkaW5nOiAwLjFyZW07XG59XG5cbi5wXzAyLCBsaSB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLnBfMDMge1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG5cbi5wXzA0IHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG4ucF8wNCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLnBfMDUge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5wXzA2IHtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuXG4ucF8wNyB7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbn1cblxuLnBfMDgge1xuICBwYWRkaW5nOiAwLjhyZW07XG59XG5cbi5wXzA5IHtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuXG4ucF8xIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBhcmFncmFwaCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAtMXB4IDNweCAxOXB4IDEycHggI2MxZDFlZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xufVxuLmNhcmQuLS1zbWFsbCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5jYXJkLi0tYmlnIHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLmNhcmQuLS1iaWdnZXIge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZmZfcmFsZXdheSwgbGkge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgY29sb3I6ICMwMDc5YjM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBjaXJjbGU7XG59XG5cbi5ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZV9za2lsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi50YWJsZV9za2lsbCB0aC5sZWZ0LFxuLnRhYmxlX3NraWxsIHRoLnJpZ2h0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYmxlX3NraWxsIC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50YWJsZV9za2lsbCAucmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFibGVfc2tpbGwgLnNraWxsX2xpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IiwiLnBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvdmFyaWFibGVzL2luZGV4XCI7XHJcblxyXG4lY2FyZF9iYXNlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTlweCAxMnB4ICRjX2JsdWVfbGlnaHRlc3Q7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgQGV4dGVuZCAlY2FyZF9iYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgJi4tLXNtYWxsIHtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gIH1cclxuICAmLi0tYmlnIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbiAgJi4tLWJpZ2dlciB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmZmX3JhbGV3YXkge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gIGNvbG9yOiAjMDA3OWIzO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdXRpbHMvaW5kZXhcIjtcclxuXHJcbiVjb250YWluZXJfc2l6ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICRuYXZiYXJfaGVpZ2h0O1xyXG59XHJcblxyXG5ucy1uYXZiYXIge1xyXG4gIEBleHRlbmQgJWNvbnRhaW5lcl9zaXplO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuXHJcblxyXG4gIC5jb250YWluZXJfbmF2YmFyIHtcclxuICAgIEBleHRlbmQgJWNvbnRhaW5lcl9zaXplO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNfd2hpdGVfbGlnaHRlc3Q7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAubmF2YmFyX2l0ZW0ge1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLml0ZW1fcGFydCB7XHJcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICAucGFydF9pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAuaXRlbV9icmFuZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg1OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNmZhNGZmO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdXRlcl9hY3RpdmUge1xyXG4gIGNvbG9yOiAjNmZhNGZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXJfbmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbn1cclxuIiwiJG5hdmJhcl9oZWlnaHQ6IDNyZW07IiwiXHJcbi8vIENvbG9yZXNcclxuXHJcbi8vIFNhbmRcclxuJGNfc2FuZF9saWdodDogI2ZhZmZlYztcclxuXHJcbi8vIEdyZWVuXHJcbiRjX2dyZWVuX2xpZ2h0OiAjZGNmZmRmO1xyXG5cclxuLy8gQmx1ZVxyXG4kY19ibHVlX2xpZ2h0ZXN0OiAjYzFkMWVkO1xyXG4kY19ibHVlX3BhbGU6ICMzZjUxYjU7XHJcbiRjX2JsdWVfbGlnaHRlcjogIzlkYzFmZjtcclxuJGNfYmx1ZV9kYXJrOiAjMDIxOWJhO1xyXG4kY19ibHVlX2RhcmtlcjogIzAxMDU4NjtcclxuJGNfYmx1ZV9kYXJrZXN0OiAjMDcwNDM0O1xyXG5cclxuLy8gUmVkXHJcbiRjX3JlZF9saWdodDogI2ZmNDgyYjtcclxuJGNfcmVkX2Rhcms6ICNlNDQ4MmY7XHJcblxyXG4vLyBHcmF5XHJcbiRjX2dyYXlfbGlnaHRlc3Q6ICNmNGY0ZjQ7XHJcbiRjX2dyYXlfbGlnaHQ6ICM4MzhkOTk7XHJcbiRjX2dyYXk6ICM5YzljOWM7XHJcblxyXG4vLyB3aGl0ZVxyXG4kY193aGl0ZV9saWdodGVzdDogZ2hvc3R3aGl0ZTtcclxuJGNfd2hpdGU6IHdoaXRlO1xyXG5cclxuLy8gQmxhY2tcclxuJGNfYmxhY2s6IGJsYWNrOyIsIkBpbXBvcnQgJy4uLy4uL3V0aWxzL2luZGV4JztcclxuXHJcbiNyb290X3dyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogJG5hdmJhcl9oZWlnaHQrMXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9pbmRleFwiO1xyXG5cclxubGkge1xyXG4gIEBleHRlbmQgLmZmX3JhbGV3YXk7XHJcbiAgQGV4dGVuZCAucF8wMjtcclxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XHJcbn1cclxuXHJcbi5ldmVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRhYmxlX3NraWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRoLmxlZnQsXHJcbiAgICB0aC5yaWdodCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH07XHJcbiAgLnNraWxsX2xpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaGVpZ2h0OiAwO1xyXG4vLyBvdmVyZmxvdy15OiBoaWRkZW47XHJcbi8vIHBhZGRpbmc6IDA7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurriculumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-curriculum',
          templateUrl: './curriculum.component.html',
          styleUrls: ['./curriculum.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/funcionalities/games/calculadora/calculadora.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/core/funcionalities/games/calculadora/calculadora.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CalculadoraComponent */

  /***/
  function srcAppCoreFuncionalitiesGamesCalculadoraCalculadoraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function () {
      return CalculadoraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_abstract_subscriptions_finisher_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/abstract/subscriptions-finisher.class */
    "./src/app/shared/abstract/subscriptions-finisher.class.ts");
    /* harmony import */


    var _shared_models_chrono_status_time_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/models/chrono-status-time.model */
    "./src/app/shared/models/chrono-status-time.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/utils/utils.service */
    "./src/app/shared/services/utils/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/directives/only-number/only-number.directive */
    "./src/app/shared/directives/only-number/only-number.directive.ts");
    /* harmony import */


    var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/components/button/button.component */
    "./src/app/shared/components/button/button.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CalculadoraComponent_section_2_span_11_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.gameTypesSymbols[i_r5]);
      }
    }

    function CalculadoraComponent_section_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculadoraComponent_section_2_span_11_span_1_Template, 2, 1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", game_r4);
      }
    }

    function CalculadoraComponent_section_2_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ns-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CalculadoraComponent_section_2_div_17_Template_ns_button_clicked_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var game_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.initGame(game_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("w_small bg_blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "GAMES.Labels." + game_r8);
      }
    }

    function CalculadoraComponent_section_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CalculadoraComponent_section_2_span_11_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CalculadoraComponent_section_2_div_17_Template, 2, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ns-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CalculadoraComponent_section_2_Template_ns_button_clicked_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.modifyHowManyNumbers("+");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ns-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CalculadoraComponent_section_2_Template_ns_button_clicked_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.modifyHowManyNumbers("-");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "GAMES.Labels.calculator"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.calculadora);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.formGet("TypeGameName"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, "GAMES.Phrases.howMuch"), " ", ctx_r0.formGet("firstNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gameTypesNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.formGet("secondNumber"), " ? ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, "GAMES.Labels.level"), " ", ctx_r0.howManyNumbers, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gameTypesNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("w_small bg_blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "GAMES.Phrases.levelUp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("w_small bg_blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "GAMES.Phrases.levelDown");
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "win": a0,
        "lose": a1
      };
    };

    function CalculadoraComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var result_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, (result_r15 == null ? null : result_r15.win) === true, (result_r15 == null ? null : result_r15.win) === false));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", result_r15 == null ? null : result_r15.time == null ? null : result_r15.time.chrono, " ", result_r15 == null ? null : result_r15.time == null ? null : result_r15.time.label, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r15 == null ? null : result_r15.election);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r15 == null ? null : result_r15.result);
      }
    }

    var CalculadoraComponent =
    /*#__PURE__*/
    function (_shared_abstract_subs) {
      _inherits(CalculadoraComponent, _shared_abstract_subs);

      function CalculadoraComponent(fb, us, cdr) {
        var _this2;

        _classCallCheck(this, CalculadoraComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CalculadoraComponent).call(this));
        _this2.fb = fb;
        _this2.us = us;
        _this2.cdr = cdr;
        _this2.stopCheckResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this2.gameTypesNames = ['sum', 'subtract', 'multiply', 'divide'];
        _this2.gameTypesSymbols = ['+', '-', 'x', '/'];
        _this2.chronoList = [];
        _this2.howManyNumbers = 1;
        return _this2;
      }

      _createClass(CalculadoraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentGameType = 3;
          this.initGame('sum');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.finishSubscriptions(this.stopCheckResult);
        }
      }, {
        key: "capitalize",
        value: function capitalize(text) {
          return this.us.capitalizeText(text);
        }
      }, {
        key: "formGet",
        value: function formGet(propName) {
          return this.calculadora.get(propName).value;
        }
      }, {
        key: "resetResults",
        value: function resetResults() {
          this.chronoList = [];
        }
      }, {
        key: "modifyHowManyNumbers",
        value: function modifyHowManyNumbers(ev) {
          this.resetResults();

          if (ev === '-' && this.howManyNumbers > 1) {
            this.howManyNumbers--;
          } else if (ev === '+') {
            this.howManyNumbers++;
          }

          this.initForm(this.howManyNumbers, this.gameTypesNames[this.currentGameType]);
        }
      }, {
        key: "initGame",
        value: function initGame(game) {
          this.resetResults();
          this.currentGameType = this.gameTypesNames.findIndex(function (el) {
            return el === game;
          });
          this.initForm(this.howManyNumbers, game);
        }
      }, {
        key: "generateNumber",

        /**
         * Genera un numero aleatorio
         * @param numDigit Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
         * @return Number
         */
        value: function generateNumber(numDigit) {
          return parseInt((Math.random() * (numDigit * 10)).toString());
        }
        /**
         * Conseguimos numeros validos para el formulario del juego
         * @param howManyNumbers Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
         * @param TypeGameName sumar | restar | multiplicacion | division
         */

      }, {
        key: "generateNumbersGame",
        value: function generateNumbersGame(howManyNumbers, TypeGameName) {
          var firstNumber = this.generateNumber(howManyNumbers),
              secondNumber = this.generateNumber(howManyNumbers),
              resultGenerated = this.getFinalResult(TypeGameName, firstNumber, secondNumber),
              invalidResults = [Infinity, 0];
          if (!invalidResults.some(function (x) {
            return x === resultGenerated;
          })) return {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            resultGenerated: resultGenerated
          };
        }
        /**
         * Comprobamos el resultado final con el valor del input
         * @param result Resultado obtenido del metodo getFinalResult()
         */

      }, {
        key: "checkResult",
        value: function checkResult(result) {
          var _this3 = this;

          this.calculadora.get('result').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.stopCheckResult)).subscribe(function (inputValue) {
            var _a; // Si no hay valores en el input no continuamos


            if (inputValue.length === 0) {
              return;
            } // Para poder guardar el valor como resultado ambos tienen que tener al menos la misma cantidad de digitos


            if (((_a = result) === null || _a === void 0 ? void 0 : _a.toString().length) === inputValue.length) {
              _this3.calculadora.get('status').setValue(result === +inputValue ? true : false);

              _this3.reset();
            }
          });
        }
      }, {
        key: "getFinalResult",

        /**
         * Obtenemos el resultado en  base a el tipo de juego y los operandos antes de inicializar el formulario
         * @param TypeGameName sumar | restar | multiplicacion | division
         * @param firstN Primer operando
         * @param secondN Segundo operando
         * @return Retorna el resultado final de la operacion
         */
        value: function getFinalResult(TypeGameName, firstN, secondN) {
          var result;

          switch (TypeGameName) {
            case 'multiply':
              result = firstN * secondN;
              break;

            case 'divide':
              result = parseFloat((firstN / secondN).toFixed(1));
              break;

            case 'sum':
              result = firstN + secondN;
              break;

            case 'subtract':
              result = firstN - secondN;
              break;

            default:
              break;
          }

          this.resultOperation = result;
          return result;
        }
        /**
         * Consigue el tiempo en minutos u horas desde el inicio del juego
         */

      }, {
        key: "getChronoNumber",
        value: function getChronoNumber() {
          var timeMiliSeconds = Date.now() - this.chrono;

          var getMiliseconds = function getMiliseconds(miliSeconds) {
            var seconds = (miliSeconds / 1000).toString();

            if (seconds.indexOf('.') != -1) {
              return +seconds.slice(seconds.indexOf('.') + 1, seconds.indexOf('.') + 3);
            } else return null;
          };

          var miliSeconds = getMiliseconds(timeMiliSeconds),
              seconds = +(timeMiliSeconds / 1000).toFixed(0),
              minits = 0,
              hours = 0,
              timeLabel = 'seg',
              finalStr;
          /**
           * Funcion which recibe a param as time in miliseconds then this time willbe reduce
           * dividing
           * @description One object which have the number
           *  right(decimalTime) to point and left(intergerTime)
           * @param time Number which represent time of number interger like 324331230
           * @returns  {intergerTime: 12, decimalTime: 03}
           */

          var getTime = function getTime(time) {
            var intergerTime = 0,
                decimalTime = time;

            if (time >= 60) {
              while (decimalTime >= 60) {
                decimalTime -= 60;
                intergerTime++;
              }
            }

            if (intergerTime > 0) {
              return {
                intergerTime: intergerTime,
                decimalTime: decimalTime
              };
            }
          }; // Get numbers


          if (miliSeconds >= 60) {
            var result = getTime(miliSeconds);

            if (result) {
              seconds = result.intergerTime;
              miliSeconds = result.decimalTime;
            }
          }

          if (seconds >= 60) {
            var _result = getTime(seconds);

            if (_result) {
              minits = _result.intergerTime;
              seconds = _result.decimalTime;
            }
          }

          if (minits >= 60) {
            var _result2 = getTime(minits);

            if (_result2) {
              hours = _result2.intergerTime;
              minits = _result2.decimalTime;
            }
          } // Set time label


          if (hours > 0) {
            timeLabel = "hrs";
            finalStr = "".concat(hours, ".").concat(minits);
          } else if (minits > 0) {
            finalStr = "".concat(minits, ".").concat(seconds);
            timeLabel = "min";
          } else {
            finalStr = "".concat(seconds, ".").concat(miliSeconds);
            timeLabel = "seg";
          }

          return new _shared_models_chrono_status_time_model__WEBPACK_IMPORTED_MODULE_4__["ChronoStatusTime"](+finalStr, timeLabel);
        }
        /**
         * Reset game
         */

      }, {
        key: "reset",
        value: function reset() {
          var _this4 = this;

          this.chronoList.unshift({
            win: this.formGet('status'),
            time: this.getChronoNumber(),
            result: this.resultOperation,
            election: this.formGet('result')
          });
          this.stopCheckResult.next();
          var timer = setTimeout(function () {
            _this4.initForm(_this4.howManyNumbers, _this4.gameTypesNames[_this4.currentGameType]);

            _this4.cdr.markForCheck();

            clearTimeout(timer);
          }, 500);
        }
      }, {
        key: "initForm",

        /**
         * Inicializa el formulario
         * @param howManyNumbers Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
         * @param TypeGameName sumar | restar | multiplicacion | division
         */
        value: function initForm(howManyNumbers, TypeGameName) {
          var _a;

          var numbersForm = (_a = this.generateNumbersGame(howManyNumbers, TypeGameName), _a !== null && _a !== void 0 ? _a : this.generateNumbersGame(howManyNumbers, TypeGameName));
          this.calculadora = this.fb.group({
            firstNumber: numbersForm.firstNumber,
            secondNumber: numbersForm.secondNumber,
            result: null,
            status: this.fb.control(null),
            TypeGameName: this.fb.control(TypeGameName)
          });
          this.chrono = Date.now();
          this.checkResult(numbersForm.resultGenerated);
        }
      }]);

      return CalculadoraComponent;
    }(_shared_abstract_subscriptions_finisher_class__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsFinisher"]);

    CalculadoraComponent.ɵfac = function CalculadoraComponent_Factory(t) {
      return new (t || CalculadoraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CalculadoraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculadoraComponent,
      selectors: [["ns-calculadora"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 14,
      consts: [[1, "animated", "fast", "fadeIn"], [1, "wrapper_calc"], ["class", "calc card", 4, "ngIf"], [1, "results", "card"], ["class", "animated faster slideHiddenInUp", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "calc", "card"], [1, "calc_box"], [1, "box_left"], [3, "formGroup"], [3, "ngSwitch"], [4, "ngFor", "ngForOf"], ["formControlName", "result", "nsOnlyNumber", ""], [1, "buttons"], [1, "wrapper"], ["class", "pair", 4, "ngFor", "ngForOf"], [1, "pair"], [3, "label", "clicked"], [4, "ngSwitchCase"], [1, "animated", "faster", "slideHiddenInUp", 3, "ngClass"]],
      template: function CalculadoraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculadoraComponent_section_2_Template, 24, 22, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CalculadoraComponent_tr_21_Template, 7, 8, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calculadora);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "GAMES.Labels.results"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "GAMES.Labels.time"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "GAMES.Labels.election"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, "GAMES.Labels.result"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chronoList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".p_01[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n.p_02[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.p_03[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_05[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.p_06[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n}\n.p_07[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n.p_08[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.p_09[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.p_1[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.paragraph[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1px 3px 19px 12px #c1d1ed;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: ghostwhite;\n}\n.card.--small[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.card.--big[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.--bigger[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.ff_raleway[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  color: #0079b3;\n  font-size: 1rem;\n}\n.wrapper_calc[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url('SnowCard3.jpg');\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .calc_box[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 0 0 1rem 0;\n  width: 100%;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .calc_box[_ngcontent-%COMP%]   .box_left[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .calc_box[_ngcontent-%COMP%]   .box_left[_ngcontent-%COMP%]   .input_time[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .calc_box[_ngcontent-%COMP%]   .box_left[_ngcontent-%COMP%]   .input_time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 2rem 0 0;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .calc_box[_ngcontent-%COMP%]   .box_left[_ngcontent-%COMP%]   .input_time[_ngcontent-%COMP%]   .chrono[_ngcontent-%COMP%] {\n  width: 5rem;\n  overflow: hidden;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url('SnowCard3.jpg');\n}\n.wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n  width: inherit;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 33%;\n  text-align: center;\n  overflow: hidden;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .win[_ngcontent-%COMP%] {\n  background-color: #8dfd8d;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .lose[_ngcontent-%COMP%] {\n  background-color: #f68383;\n}\n.wrapper_calc[_ngcontent-%COMP%]   .pair[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9nYW1lcy9jYWxjdWxhZG9yYS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFxnZW5lcmljc1xccGFydHNcXHNpemVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvZ2FtZXMvY2FsY3VsYWRvcmEvY2FsY3VsYWRvcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvZ2FtZXMvY2FsY3VsYWRvcmEvRDpcXFByYWN0aWNhc1xcQW5ndWxhclxcbXktd2ViXFxuaWdodHNreS9zcmNcXGFwcFxcc3R5bGVzXFx1dGlsc1xcZ2VuZXJpY3NcXHBhcnRzXFx0ZXh0cy5zY3NzIiwic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2dhbWVzL2NhbGN1bGFkb3JhL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcY2FyZHMuc2NzcyIsInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9nYW1lcy9jYWxjdWxhZG9yYS9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFxnZW5lcmljc1xccGFydHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvZ2FtZXMvY2FsY3VsYWRvcmEvRDpcXFByYWN0aWNhc1xcQW5ndWxhclxcbXktd2ViXFxuaWdodHNreS9zcmNcXGFwcFxcY29yZVxcZnVuY2lvbmFsaXRpZXNcXGdhbWVzXFxjYWxjdWxhZG9yYVxcY2FsY3VsYWRvcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBQTtBQUNBO0VBQ0UsZUFBQTtBQ0FGO0FERUE7RUFDRSxlQUFBO0FDQ0Y7QURDQTtFQUNFLGVBQUE7QUNFRjtBREFBO0VBQ0UsZUFBQTtBQ0dGO0FEREE7RUFDRSxlQUFBO0FDSUY7QURGQTtFQUNFLGVBQUE7QUNLRjtBREhBO0VBQ0UsZUFBQTtBQ01GO0FESkE7RUFDRSxlQUFBO0FDT0Y7QURMQTtFQUNFLGVBQUE7QUNRRjtBRE5BO0VBQ0UsZUFBQTtBQ1NGO0FEUEE7RUFDRSxhQUFBO0FDVUY7QUMzQ0E7RUFDRSxhQUFBO0FEOENGO0FFN0NBO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRmdERjtBRTdDQTtFQUVFLDRCQUFBO0FGK0NGO0FFOUNFO0VBQ0UsZUFBQTtBRmdESjtBRTlDRTtFQUNFLGVBQUE7QUZnREo7QUU5Q0U7RUFDRSxhQUFBO0FGZ0RKO0FHbkVBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBSHNFRjtBSXZFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBSjBFRjtBSXhFRTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtBSjBFSjtBSXhFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBSjBFTjtBSXhFTTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUowRVI7QUl6RVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUoyRVY7QUkxRVU7RUFDRSxrQkFBQTtBSjRFWjtBSTFFVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBSjRFWjtBSXZFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtBSnlFTjtBSXhFTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUowRVI7QUlyRUU7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7QUp1RUo7QUl0RUk7RUFDRSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtBSndFTjtBSXRFSTs7O0VBR0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUp3RU47QUl0RUk7RUFDRSx5QkFBQTtBSndFTjtBSXRFSTtFQUNFLHlCQUFBO0FKd0VOO0FJckVFO0VBQ0UscUJBQUE7QUp1RUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2dhbWVzL2NhbGN1bGFkb3JhL2NhbGN1bGFkb3JhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKiBQQURESU5HUyAqKi8gXHJcbi5wXzAxIHtcclxuICBwYWRkaW5nOiAuMXJlbTtcclxufVxyXG4ucF8wMiB7XHJcbiAgcGFkZGluZzogLjJyZW07XHJcbn1cclxuLnBfMDMge1xyXG4gIHBhZGRpbmc6IC4zcmVtO1xyXG59XHJcbi5wXzA0IHtcclxuICBwYWRkaW5nOiAuNHJlbTtcclxufVxyXG4ucF8wNCB7XHJcbiAgcGFkZGluZzogLjRyZW07XHJcbn1cclxuLnBfMDUge1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcbi5wXzA2IHtcclxuICBwYWRkaW5nOiAuNnJlbTtcclxufVxyXG4ucF8wNyB7XHJcbiAgcGFkZGluZzogLjdyZW07XHJcbn1cclxuLnBfMDgge1xyXG4gIHBhZGRpbmc6IC44cmVtO1xyXG59XHJcbi5wXzA5IHtcclxuICBwYWRkaW5nOiAuOXJlbTtcclxufVxyXG4ucF8xIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59IiwiLyoqIFBBRERJTkdTICoqL1xuLnBfMDEge1xuICBwYWRkaW5nOiAwLjFyZW07XG59XG5cbi5wXzAyIHtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4ucF8wMyB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLnBfMDQge1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbi5wXzA0IHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG4ucF8wNSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnBfMDYge1xuICBwYWRkaW5nOiAwLjZyZW07XG59XG5cbi5wXzA3IHtcbiAgcGFkZGluZzogMC43cmVtO1xufVxuXG4ucF8wOCB7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuLnBfMDkge1xuICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5wXzEge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDE5cHggMTJweCAjYzFkMWVkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG59XG4uY2FyZC4tLXNtYWxsIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLmNhcmQuLS1iaWcge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4uY2FyZC4tLWJpZ2dlciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5mZl9yYWxld2F5IHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIGNvbG9yOiAjMDA3OWIzO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi53cmFwcGVyX2NhbGMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXJfY2FsYyAuY2FsYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL1Nub3dDYXJkMy5qcGdcIik7XG59XG4ud3JhcHBlcl9jYWxjIC5jYWxjIC5jYWxjX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDAgMCAxcmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXJfY2FsYyAuY2FsYyAuY2FsY19ib3ggLmJveF9sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud3JhcHBlcl9jYWxjIC5jYWxjIC5jYWxjX2JveCAuYm94X2xlZnQgLmlucHV0X3RpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndyYXBwZXJfY2FsYyAuY2FsYyAuY2FsY19ib3ggLmJveF9sZWZ0IC5pbnB1dF90aW1lIGlucHV0IHtcbiAgbWFyZ2luOiAwIDJyZW0gMCAwO1xufVxuLndyYXBwZXJfY2FsYyAuY2FsYyAuY2FsY19ib3ggLmJveF9sZWZ0IC5pbnB1dF90aW1lIC5jaHJvbm8ge1xuICB3aWR0aDogNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyX2NhbGMgLmNhbGMgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ud3JhcHBlcl9jYWxjIC5jYWxjIC5idXR0b25zIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndyYXBwZXJfY2FsYyAucmVzdWx0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL1Nub3dDYXJkMy5qcGdcIik7XG59XG4ud3JhcHBlcl9jYWxjIC5yZXN1bHRzIHRhYmxlIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4ud3JhcHBlcl9jYWxjIC5yZXN1bHRzIHRyLFxuLndyYXBwZXJfY2FsYyAucmVzdWx0cyB0aCxcbi53cmFwcGVyX2NhbGMgLnJlc3VsdHMgdGQge1xuICB3aWR0aDogMzMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcHBlcl9jYWxjIC5yZXN1bHRzIC53aW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRmZDhkO1xufVxuLndyYXBwZXJfY2FsYyAucmVzdWx0cyAubG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjgzODM7XG59XG4ud3JhcHBlcl9jYWxjIC5wYWlyIHtcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbSAwO1xufSIsIi5wYXJhZ3JhcGgge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3V0aWxzL3ZhcmlhYmxlcy9pbmRleFwiO1xyXG5cclxuJWNhcmRfYmFzZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDE5cHggMTJweCAkY19ibHVlX2xpZ2h0ZXN0O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIEBleHRlbmQgJWNhcmRfYmFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICYuLS1zbWFsbCB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICB9XHJcbiAgJi4tLWJpZyB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG4gICYuLS1iaWdnZXIge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5mZl9yYWxld2F5IHtcclxuICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICBjb2xvcjogIzAwNzliMztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy91dGlscy9pbmRleFwiO1xyXG5cclxuLndyYXBwZXJfY2FsYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY2FsYyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvU25vd0NhcmQzLmpwZ1wiKTtcclxuXHJcbiAgICAuY2FsY19ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5ib3hfbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaW5wdXRfdGltZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMnJlbSAwIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hyb25vIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvU25vd0NhcmQzLmpwZ1wiKTtcclxuICAgIHRhYmxlIHtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICB0cixcclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAud2luIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkZmQ4ZDtcclxuICAgIH1cclxuICAgIC5sb3NlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ODM4MztcclxuICAgIH1cclxuICB9XHJcbiAgLnBhaXIge1xyXG4gICAgbWFyZ2luOiAwIDFyZW0gMXJlbSAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculadoraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-calculadora',
          templateUrl: './calculadora.component.html',
          styleUrls: ['./calculadora.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/funcionalities/games/games-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/core/funcionalities/games/games-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: GamesRoutingModule */

  /***/
  function srcAppCoreFuncionalitiesGamesGamesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesRoutingModule", function () {
      return GamesRoutingModule;
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


    var _games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./games.component */
    "./src/app/core/funcionalities/games/games.component.ts");
    /* harmony import */


    var _calculadora_calculadora_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calculadora/calculadora.component */
    "./src/app/core/funcionalities/games/calculadora/calculadora.component.ts");

    var routes = [{
      path: 'games',
      component: _games_component__WEBPACK_IMPORTED_MODULE_2__["GamesComponent"],
      children: [{
        path: 'calculadora',
        component: _calculadora_calculadora_component__WEBPACK_IMPORTED_MODULE_3__["CalculadoraComponent"]
      }, {
        path: '**',
        redirectTo: 'calculadora',
        pathMatch: 'full'
      }]
    }];

    var GamesRoutingModule = function GamesRoutingModule() {
      _classCallCheck(this, GamesRoutingModule);
    };

    GamesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GamesRoutingModule
    });
    GamesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GamesRoutingModule_Factory(t) {
        return new (t || GamesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesRoutingModule, [{
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
  "./src/app/core/funcionalities/games/games.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/funcionalities/games/games.component.ts ***!
    \**************************************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppCoreFuncionalitiesGamesGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var GamesComponent =
    /*#__PURE__*/
    function () {
      function GamesComponent(router, translate) {
        _classCallCheck(this, GamesComponent);

        this.router = router;
        this.translate = translate;
      }

      _createClass(GamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GamesComponent;
    }();

    GamesComponent.ɵfac = function GamesComponent_Factory(t) {
      return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamesComponent,
      selectors: [["ns-games"]],
      decls: 1,
      vars: 0,
      template: function GamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".big[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mdW5jaW9uYWxpdGllcy9nYW1lcy9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxjb3JlXFxmdW5jaW9uYWxpdGllc1xcZ2FtZXNcXGdhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Z1bmNpb25hbGl0aWVzL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZnVuY2lvbmFsaXRpZXMvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn0iLCIuYmlnIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-games',
          templateUrl: './games.component.html',
          styleUrls: ['./games.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/funcionalities/games/games.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/funcionalities/games/games.module.ts ***!
    \***********************************************************/

  /*! exports provided: GamesModule */

  /***/
  function srcAppCoreFuncionalitiesGamesGamesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesModule", function () {
      return GamesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _games_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./games-routing.module */
    "./src/app/core/funcionalities/games/games-routing.module.ts");
    /* harmony import */


    var _games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./games.component */
    "./src/app/core/funcionalities/games/games.component.ts");
    /* harmony import */


    var _calculadora_calculadora_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calculadora/calculadora.component */
    "./src/app/core/funcionalities/games/calculadora/calculadora.component.ts");
    /* harmony import */


    var _shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/shared.module.ts/shared.module */
    "./src/app/shared/shared.module.ts/shared.module.ts");

    var GamesModule = function GamesModule() {
      _classCallCheck(this, GamesModule);
    };

    GamesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GamesModule
    });
    GamesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GamesModule_Factory(t) {
        return new (t || GamesModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamesModule, {
        declarations: [_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"], _calculadora_calculadora_component__WEBPACK_IMPORTED_MODULE_5__["CalculadoraComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shared_shared_module_ts_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          exports: [],
          declarations: [_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"], _calculadora_calculadora_component__WEBPACK_IMPORTED_MODULE_5__["CalculadoraComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/abstract/subscriptions-finisher.class.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/abstract/subscriptions-finisher.class.ts ***!
    \*****************************************************************/

  /*! exports provided: SubscriptionsFinisher */

  /***/
  function srcAppSharedAbstractSubscriptionsFinisherClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionsFinisher", function () {
      return SubscriptionsFinisher;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @usageNotes `default` If the child not use ngOnDestroy() this ngOnDestroy will finish `finishTakeUntil$`
     * in all  the takeUntils which use it;
     * @usageNotes If child component use ngOnDestroy then call in these ngOnDestroy `finishSubscriptions()`
     * @property finishTakeUntil$ Use in takeUntil for finish him
     * @method finishSubscriptions pass observables or subscriptions for finish him
     */


    var SubscriptionsFinisher =
    /*#__PURE__*/
    function () {
      function SubscriptionsFinisher() {
        _classCallCheck(this, SubscriptionsFinisher);

        /**
         * @param finishTakeUntil$ Usar para finalizar los takeUntil
         * @description finishTakeUntil$ emitirá un next para finalizar los takeUntil
         * @example this.mySubscription.pipe(takeUntil(this.finishTakeUntil$)).subscribe()
         */
        this.finishTakeUntil$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      }
      /**
       * @description Por defecto siempre se finaliza finishTakeUntil$
       * @param finishSubsList  Recibe un array de nombres de observables de los que finalizar las suscripciones.
       * @example
       * public firstSubscription: Observable<any>;
       * private secondSubscription: Subject<any>;
       * ngOnDestroy() { this.finishSubscriptions() };
       * ngOnDestroy() { this.finishSubscriptions(this.firstSubscription, this.secondSubscription) };
       */


      _createClass(SubscriptionsFinisher, [{
        key: "finishSubscriptions",
        value: function finishSubscriptions() {
          this.finishTakeUntil$.next('Finish all takeUntil subscriptions');
          this.finishTakeUntil$.complete();

          for (var _len = arguments.length, finishSubsList = new Array(_len), _key = 0; _key < _len; _key++) {
            finishSubsList[_key] = arguments[_key];
          }

          finishSubsList.forEach(function (el) {
            if (el && el['complete']) {
              el['complete']();
            }

            ;

            if (el && el['unsubscribe']) {
              el['unsubscribe']();
            }

            ;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.finishSubscriptions();
        }
      }]);

      return SubscriptionsFinisher;
    }();

    SubscriptionsFinisher.ɵfac = function SubscriptionsFinisher_Factory(t) {
      return new (t || SubscriptionsFinisher)();
    };

    SubscriptionsFinisher.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SubscriptionsFinisher
    });
    /***/
  },

  /***/
  "./src/app/shared/components/button/button.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/button/button.component.ts ***!
    \**************************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppSharedComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ButtonComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r16.label), " ");
      }
    }

    function ButtonComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.label, " ");
      }
    }

    var ButtonComponent = function ButtonComponent() {
      _classCallCheck(this, ButtonComponent);

      this.class = ''; // 'w_normal bg_red c_white'

      this.label = ''; // Texto en el botón

      this.translatable = true;
      this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)();
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["ns-button"]],
      inputs: {
        class: "class",
        label: "label",
        translatable: "translatable"
      },
      outputs: {
        clicked: "clicked"
      },
      decls: 3,
      vars: 5,
      consts: [[3, "click"], [4, "ngIf"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) {
            return ctx.clicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_1_Template, 3, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translatable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.translatable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".p_01[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n.p_02[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.p_03[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_04[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n.p_05[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.p_06[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n}\n.p_07[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n.p_08[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.p_09[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.p_1[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.paragraph[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1px 3px 19px 12px #c1d1ed;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: ghostwhite;\n}\n.card.--small[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.card.--big[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.--bigger[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.ff_raleway[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  color: #0079b3;\n  font-size: 1rem;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 8rem;\n  height: 1.8rem;\n  border-style: none;\n  color: #0219ba;\n  font-size: 1rem;\n  outline: none;\n  box-shadow: 0px 0px 8px 0px #3f51b5;\n}\nbutton[_ngcontent-%COMP%]:active {\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  box-shadow: none;\n}\nbutton.bg_blue[_ngcontent-%COMP%] {\n  background-color: #c1d1ed;\n}\nbutton.bg_red[_ngcontent-%COMP%] {\n  background-color: #ff482b;\n}\nbutton.c_white[_ngcontent-%COMP%] {\n  color: white;\n}\nbutton.w_full[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton.w_large[_ngcontent-%COMP%] {\n  width: 16rem;\n}\nbutton.w_normal[_ngcontent-%COMP%] {\n  width: 11rem;\n}\nbutton.w_small[_ngcontent-%COMP%] {\n  width: 6rem;\n}\nbutton[_ngcontent-%COMP%]:hover.bg_blue {\n  background-color: #9dc1ff;\n}\nbutton[_ngcontent-%COMP%]:hover.bg_red {\n  background-color: #e4482f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcc2l6ZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcdGV4dHMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcY2FyZHMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHN0eWxlc1xcdXRpbHNcXGdlbmVyaWNzXFxwYXJ0c1xcZm9udHMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0Q6XFxQcmFjdGljYXNcXEFuZ3VsYXJcXG15LXdlYlxcbmlnaHRza3kvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9EOlxcUHJhY3RpY2FzXFxBbmd1bGFyXFxteS13ZWJcXG5pZ2h0c2t5L3NyY1xcYXBwXFxzdHlsZXNcXHV0aWxzXFx2YXJpYWJsZXNcXHBhcnRzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxlQUFBO0FBQ0E7RUFDRSxlQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtBQ0VGO0FEQUE7RUFDRSxlQUFBO0FDR0Y7QUREQTtFQUNFLGVBQUE7QUNJRjtBREZBO0VBQ0UsZUFBQTtBQ0tGO0FESEE7RUFDRSxlQUFBO0FDTUY7QURKQTtFQUNFLGVBQUE7QUNPRjtBRExBO0VBQ0UsZUFBQTtBQ1FGO0FETkE7RUFDRSxlQUFBO0FDU0Y7QURQQTtFQUNFLGFBQUE7QUNVRjtBQzNDQTtFQUNFLGFBQUE7QUQ4Q0Y7QUU3Q0E7RUFDRSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FGZ0RGO0FFN0NBO0VBRUUsNEJBQUE7QUYrQ0Y7QUU5Q0U7RUFDRSxlQUFBO0FGZ0RKO0FFOUNFO0VBQ0UsZUFBQTtBRmdESjtBRTlDRTtFQUNFLGFBQUE7QUZnREo7QUduRUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FIc0VGO0FJdkVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0NNWTtFRExaLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUowRUY7QUl6RUU7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0JBQUE7QUoyRUo7QUl6RUU7RUFDRSx5QkNOYztBTGlGbEI7QUl6RUU7RUFDRSx5QkNEVTtBTDRFZDtBSXpFRTtFQUNFLFlDTU07QUxxRVY7QUl6RUU7RUFDRSxXQUFBO0FKMkVKO0FJekVFO0VBQ0UsWUFBQTtBSjJFSjtBSXpFRTtFQUNFLFlBQUE7QUoyRUo7QUl6RUU7RUFDRSxXQUFBO0FKMkVKO0FJeEVJO0VBQ0UseUJDMUJXO0FMb0dqQjtBSXhFSTtFQUNFLHlCQ3RCTztBTGdHYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqIFBBRERJTkdTICoqLyBcclxuLnBfMDEge1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcbi5wXzAyIHtcclxuICBwYWRkaW5nOiAuMnJlbTtcclxufVxyXG4ucF8wMyB7XHJcbiAgcGFkZGluZzogLjNyZW07XHJcbn1cclxuLnBfMDQge1xyXG4gIHBhZGRpbmc6IC40cmVtO1xyXG59XHJcbi5wXzA0IHtcclxuICBwYWRkaW5nOiAuNHJlbTtcclxufVxyXG4ucF8wNSB7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuLnBfMDYge1xyXG4gIHBhZGRpbmc6IC42cmVtO1xyXG59XHJcbi5wXzA3IHtcclxuICBwYWRkaW5nOiAuN3JlbTtcclxufVxyXG4ucF8wOCB7XHJcbiAgcGFkZGluZzogLjhyZW07XHJcbn1cclxuLnBfMDkge1xyXG4gIHBhZGRpbmc6IC45cmVtO1xyXG59XHJcbi5wXzEge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn0iLCIvKiogUEFERElOR1MgKiovXG4ucF8wMSB7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbn1cblxuLnBfMDIge1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG5cbi5wXzAzIHtcbiAgcGFkZGluZzogMC4zcmVtO1xufVxuXG4ucF8wNCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLnBfMDQge1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbi5wXzA1IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucF8wNiB7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cblxuLnBfMDcge1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbi5wXzA4IHtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG4ucF8wOSB7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLnBfMSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wYXJhZ3JhcGgge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTlweCAxMnB4ICNjMWQxZWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cbi5jYXJkLi0tc21hbGwge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY2FyZC4tLWJpZyB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5jYXJkLi0tYmlnZ2VyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmZmX3JhbGV3YXkge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgY29sb3I6ICMwMDc5YjM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwMjE5YmE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4ICMzZjUxYjU7XG59XG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5idXR0b24uYmdfYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWQxZWQ7XG59XG5idXR0b24uYmdfcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDgyYjtcbn1cbmJ1dHRvbi5jX3doaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuYnV0dG9uLndfZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uLndfbGFyZ2Uge1xuICB3aWR0aDogMTZyZW07XG59XG5idXR0b24ud19ub3JtYWwge1xuICB3aWR0aDogMTFyZW07XG59XG5idXR0b24ud19zbWFsbCB7XG4gIHdpZHRoOiA2cmVtO1xufVxuYnV0dG9uOmhvdmVyLmJnX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjMWZmO1xufVxuYnV0dG9uOmhvdmVyLmJnX3JlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDQ4MmY7XG59IiwiLnBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvdmFyaWFibGVzL2luZGV4XCI7XHJcblxyXG4lY2FyZF9iYXNlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTlweCAxMnB4ICRjX2JsdWVfbGlnaHRlc3Q7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgQGV4dGVuZCAlY2FyZF9iYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgJi4tLXNtYWxsIHtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gIH1cclxuICAmLi0tYmlnIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbiAgJi4tLWJpZ2dlciB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmZmX3JhbGV3YXkge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gIGNvbG9yOiAjMDA3OWIzO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3V0aWxzL2luZGV4XCI7XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogOHJlbTtcclxuICBoZWlnaHQ6IDEuOHJlbTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgY29sb3I6ICRjX2JsdWVfZGFyaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggJGNfYmx1ZV9wYWxlO1xyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgJi5iZ19ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjX2JsdWVfbGlnaHRlc3Q7XHJcbiAgfVxyXG4gICYuYmdfcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjX3JlZF9saWdodDtcclxuICB9XHJcbiAgJi5jX3doaXRlIHtcclxuICAgIGNvbG9yOiAkY193aGl0ZTtcclxuICB9XHJcbiAgJi53X2Z1bGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICYud19sYXJnZSB7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbiAgfVxyXG4gICYud19ub3JtYWwge1xyXG4gICAgd2lkdGg6IDExcmVtO1xyXG4gIH1cclxuICAmLndfc21hbGwge1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgJi5iZ19ibHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNfYmx1ZV9saWdodGVyO1xyXG4gICAgfVxyXG4gICAgJi5iZ19yZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19yZWRfZGFyaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIENvbG9yZXNcclxuXHJcbi8vIFNhbmRcclxuJGNfc2FuZF9saWdodDogI2ZhZmZlYztcclxuXHJcbi8vIEdyZWVuXHJcbiRjX2dyZWVuX2xpZ2h0OiAjZGNmZmRmO1xyXG5cclxuLy8gQmx1ZVxyXG4kY19ibHVlX2xpZ2h0ZXN0OiAjYzFkMWVkO1xyXG4kY19ibHVlX3BhbGU6ICMzZjUxYjU7XHJcbiRjX2JsdWVfbGlnaHRlcjogIzlkYzFmZjtcclxuJGNfYmx1ZV9kYXJrOiAjMDIxOWJhO1xyXG4kY19ibHVlX2RhcmtlcjogIzAxMDU4NjtcclxuJGNfYmx1ZV9kYXJrZXN0OiAjMDcwNDM0O1xyXG5cclxuLy8gUmVkXHJcbiRjX3JlZF9saWdodDogI2ZmNDgyYjtcclxuJGNfcmVkX2Rhcms6ICNlNDQ4MmY7XHJcblxyXG4vLyBHcmF5XHJcbiRjX2dyYXlfbGlnaHRlc3Q6ICNmNGY0ZjQ7XHJcbiRjX2dyYXlfbGlnaHQ6ICM4MzhkOTk7XHJcbiRjX2dyYXk6ICM5YzljOWM7XHJcblxyXG4vLyB3aGl0ZVxyXG4kY193aGl0ZV9saWdodGVzdDogZ2hvc3R3aGl0ZTtcclxuJGNfd2hpdGU6IHdoaXRlO1xyXG5cclxuLy8gQmxhY2tcclxuJGNfYmxhY2s6IGJsYWNrOyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-button',
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss']
        }]
      }], null, {
        class: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        translatable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(router, translate) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.translate = translate;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchLanguaje",
        value: function switchLanguaje() {
          if (this.translate.currentLang === 'es') {
            return this.translate.use('en');
          }

          if (this.translate.currentLang === 'en') {
            return this.translate.use('es');
          }

          console.log(this.translate.currentLang);
        }
      }, {
        key: "coincideWithRoute",
        value: function coincideWithRoute(route) {
          var result = this.router.url.includes(route);
          return result;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["ns-navbar"]],
      decls: 20,
      vars: 12,
      consts: [[1, "container_navbar"], [1, "navbar_item"], [1, "item_part"], [1, "part_item"], [1, "item_brand"], ["routerLink", "about", "routerLinkActive", "router_active"], ["routerLink", "games", "routerLinkActive", "router_active"], [3, "click"], ["routerLink", "curriculum", "routerLinkActive", "router_active"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h5_click_13_listener($event) {
            return ctx.switchLanguaje();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "NAVBAR.Labels.init"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "NAVBAR.Labels.games"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "NAVBAR.Labels.switchLanguaje"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "NAVBAR.Labels.curriculum"), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ns-navbar',
          templateUrl: './navbar.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/only-number/only-number.directive.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/directives/only-number/only-number.directive.ts ***!
    \************************************************************************/

  /*! exports provided: OnlyNumberDirective */

  /***/
  function srcAppSharedDirectivesOnlyNumberOnlyNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function () {
      return OnlyNumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Directiva que solo permite le uso de numeros, bacspace y el punto
     */


    var OnlyNumberDirective =
    /*#__PURE__*/
    function () {
      function OnlyNumberDirective(el) {
        _classCallCheck(this, OnlyNumberDirective);

        this.el = el;
        this.allowKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'];
      }

      _createClass(OnlyNumberDirective, [{
        key: "allowIfNumber",
        value: function allowIfNumber(ev) {
          if (this.el.nativeElement === ev.target) {
            if (this.allowKeys.some(function (el) {
              return el === ev.key;
            }) === false) {
              ev.preventDefault();
            }
          }
        }
      }]);

      return OnlyNumberDirective;
    }();

    OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) {
      return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: OnlyNumberDirective,
      selectors: [["", "nsOnlyNumber", ""]],
      hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlyNumberDirective_keydown_HostBindingHandler($event) {
            return ctx.allowIfNumber($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[nsOnlyNumber]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        allowIfNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/chrono-status-time.model.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/models/chrono-status-time.model.ts ***!
    \***********************************************************/

  /*! exports provided: ChronoStatusTime */

  /***/
  function srcAppSharedModelsChronoStatusTimeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChronoStatusTime", function () {
      return ChronoStatusTime;
    });

    var ChronoStatusTime = function ChronoStatusTime(chrono) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'seg';

      _classCallCheck(this, ChronoStatusTime);

      this.chrono = chrono;
      this.label = label;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/device-info.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/models/device-info.model.ts ***!
    \****************************************************/

  /*! exports provided: DeviceInfo */

  /***/
  function srcAppSharedModelsDeviceInfoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceInfo", function () {
      return DeviceInfo;
    });

    var DeviceInfo = function DeviceInfo() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, DeviceInfo);

      this.type = type;
      this.width = width;
    };
    /***/

  },

  /***/
  "./src/app/shared/services/utils/utils.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/utils/utils.service.ts ***!
    \********************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppSharedServicesUtilsUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_device_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/device-info.model */
    "./src/app/shared/models/device-info.model.ts");
    /* harmony import */


    var _abstract_subscriptions_finisher_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../abstract/subscriptions-finisher.class */
    "./src/app/shared/abstract/subscriptions-finisher.class.ts");

    var UtilsService =
    /*#__PURE__*/
    function (_abstract_subscriptio) {
      _inherits(UtilsService, _abstract_subscriptio);

      function UtilsService() {
        var _this5;

        _classCallCheck(this, UtilsService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(UtilsService).call(this));
        _this5.deviceType$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this5;
      }

      _createClass(UtilsService, [{
        key: "initObservables",
        value: function initObservables() {
          this.getWindowSize();
        }
      }, {
        key: "getWindowSize",
        value: function getWindowSize() {
          var _this6 = this;

          var checkWidth = function checkWidth(x) {
            if (x > 768) return "desktop";
            if (x <= 768 && x > 425) return "tablet";
            if (x <= 425) return "mobile";
          };

          var device = new _models_device_info_model__WEBPACK_IMPORTED_MODULE_3__["DeviceInfo"](checkWidth(window.innerWidth), window.innerWidth);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.finishTakeUntil$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('target'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref) {
            var innerWidth = _ref.innerWidth;
            device.width = innerWidth;
            device.type = checkWidth(innerWidth);

            _this6.deviceType$.next(device);
          })).subscribe();
        }
      }, {
        key: "capitalizeText",
        value: function capitalizeText(text) {
          var lowercased = text.toLowerCase();
          return lowercased.replace(lowercased[0], lowercased[0].toUpperCase());
        }
      }, {
        key: "checkIsNumber",
        value: function checkIsNumber(ev) {
          return ev >= 0 && ev > 10 ? ev : 0;
        }
      }]);

      return UtilsService;
    }(_abstract_subscriptions_finisher_class__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsFinisher"]);

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)();
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts/shared.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/shared.module.ts/shared.module.ts ***!
    \**********************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTsSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/button/button.component */
    "./src/app/shared/components/button/button.component.ts");
    /* harmony import */


    var _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../directives/only-number/only-number.directive */
    "./src/app/shared/directives/only-number/only-number.directive.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_3__["OnlyNumberDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
        exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_3__["OnlyNumberDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_3__["OnlyNumberDirective"]],
          exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_3__["OnlyNumberDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
          providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Practicas\Angular\my-web\nightsky\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map