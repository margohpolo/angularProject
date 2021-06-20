function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/service/service.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/service/service.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServiceServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: grid; grid-gap: 20px;\">\n    <h2>{{ selectedService.title }}</h2>\n    <br />\n    <div style=\"text-align: left;\">\n        <p>{{ selectedService.description }}</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/services/service/service.component.css":
  /*!********************************************************!*\
    !*** ./src/app/services/service/service.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServiceServiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/services/service/service.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/service/service.component.ts ***!
    \*******************************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppServicesServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services.service */
    "./src/app/services/services.service.ts");

    var ServiceComponent = /*#__PURE__*/function () {
      function ServiceComponent(serviceSvc, route, router) {
        _classCallCheck(this, ServiceComponent);

        this.serviceSvc = serviceSvc;
        this.route = route;
        this.router = router;
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.serviceSvc.svcSelected.subscribe(
          //   (service: Service) => {
          //     this.selectedService = service;
          //   });
          this.route.data.subscribe(function (data) {
            _this.selectedService = data['svc'];
          });
          console.log(this.selectedService);
          console.log(this.selectedService.svcId, this.selectedService.title, this.selectedService.heading, this.selectedService.description);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.serviceSvc.svcSelected.unsubscribe();
        }
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ctorParameters = function () {
      return [{
        type: _services_service__WEBPACK_IMPORTED_MODULE_3__["ServiceSvc"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/service/service.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service.component.css */
      "./src/app/services/service/service.component.css"))["default"]]
    })], ServiceComponent);
    /***/
  },

  /***/
  "./src/app/services/services-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/services-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ServicesRoutingModule */

  /***/
  function srcAppServicesServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function () {
      return ServicesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/services/service/service.component.ts");
    /* harmony import */


    var _serviceresolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./serviceresolver.service */
    "./src/app/services/serviceresolver.service.ts");

    var routes = [{
      path: ':svcId',
      component: _service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"],
      resolve: {
        svc: _serviceresolver_service__WEBPACK_IMPORTED_MODULE_4__["ServiceResolver"]
      }
    }];

    var ServicesRoutingModule = function ServicesRoutingModule() {
      _classCallCheck(this, ServicesRoutingModule);
    };

    ServicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicesRoutingModule);
    /***/
  },

  /***/
  "./src/app/services/services.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/services.module.ts ***!
    \*********************************************/

  /*! exports provided: ServicesModule */

  /***/
  function srcAppServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
      return ServicesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/services/service/service.component.ts");
    /* harmony import */


    var _services_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services-routing.module */
    "./src/app/services/services-routing.module.ts");

    var ServicesModule = function ServicesModule() {
      _classCallCheck(this, ServicesModule);
    };

    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServicesRoutingModule"]]
    })], ServicesModule);
    /***/
  }
}]);
//# sourceMappingURL=services-services-module-es5.js.map