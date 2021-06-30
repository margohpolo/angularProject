function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"container\">\r\n  <section class=\"row\" [ngSwitch]=\"angularversion\">\r\n    <h3>Example for ngSwitch - Directive</h3>\r\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular2'\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"././assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Angular 2.0</h5>\r\n          <p class=\"card-text\">2.0</p>\r\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\r\n            Explore</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular4'\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"././assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Angular 4.0</h5>\r\n          <p class=\"card-text\">4.0</p>\r\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': isgold ? 'red' : 'gold' }\">\r\n            Explore</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular8'\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"././assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Angular 8.0</h5>\r\n          <p class=\"card-text\">8.0</p>\r\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\r\n            Explore</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"col-md-3\" *ngSwitchDefault>\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"././assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Angular 12.0</h5>\r\n          <p class=\"card-text\">12.0</p>\r\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\r\n            Explore</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"col-md-3\">\r\n      <img src=\"././assets/images/angular-icon.png\" appRotateAnimation alt=\"Angular Icon\" />\r\n    </section>\r\n  </section>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <section class=\"row\">\r\n    <h3>Example for Custom For Loop - Directive</h3>\r\n    <section class=\"col-md-3\" *appCustomLoop=\"8\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"././assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Angular 2.0</h5>\r\n          <p class=\"card-text\">2.0</p>\r\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\r\n            Explore</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-slider></app-slider>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCareersCareersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>careers works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-text\" (scroll)=\"onScroll($event)\" style=\"height: 250px;\">\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"handleSubmit()\">\n        <div class=\" form-group\">\n            <label>Username</label>\n            <input type=\"text\" userName name=\"username\" class=\"form-control\"\n                formControlName=\"username\" [ngClass]=\"{'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Last Name should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" eMail name=\"email\" class=\"form-control\"\n                formControlName=\"useremail\" [ngClass]=\"{'is-invalid': submitted && f.useremail.errors }\" />\n            <div *ngIf=\"submitted && f.useremail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.useremail.errors.required\">Email should not be empty!</div>\n                <div *ngIf=\"f.useremail.errors.email\">Please enter the valid email!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Message</label>\n            <textarea class=\"form-control\" formControlName=\"contactMsg\"\n                [ngClass]=\"{'is-invalid': submitted && f.contactMsg.errors }\"></textarea>\n            <div *ngIf=\"submitted && f.contactMsg.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.contactMsg.errors.required\">Message should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" name=\"contact\" class=\"btn btn-danger float-end\" />\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"container-fluid p-0 bg-dark\">\r\n  <div class=\"row w-100\">\r\n    <div class=\"col col-md-3 p-5\">\r\n      <img src=\"././assets/images/logo.png\" alt=\"Accenture\" class=\"w-100\" />\r\n      <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\r\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\r\n        scrambled it to make a type specimen book. </p>\r\n    </div>\r\n    <div class=\"col col-md-3 p-5\">\r\n      <ul class=\"list-unstyled\">\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Home</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">About</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4 \">Services</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Clients</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Blog</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col col-md-3 p-5\">\r\n      <ul class=\"list-unstyled\">\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Facebook</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Twitter</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4 \">LinkedIn</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Instagram</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Pinterest</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Youtube</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col col-md-3 p-5\">\r\n      <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62222.96541253389!2d77.59297932600656!3d12.91187747337624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b32a12864f%3A0x40d1865bca6244d2!2sAccenture!5e0!3m2!1sen!2sin!4v1623645080651!5m2!1sen!2sin\"\r\n        class=\"w-100\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\r\n    </div>\r\n  </div>\r\n  <div class=\"row w-100\">\r\n    <div class=\"col-md-12\">\r\n      <p class=\"text-center text-light\">All Rights Reserved &copy; 2021 <a href=\"www.accenture.com\">Accenture</a></p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"row bg-dark p-3 mx-0\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container-fluid\">\r\n      <a class=\"navbar-brand\" routerLink=\"\">\r\n        <img src=\"./assets/images/logo.png\" alt=\"Accenture\" class=\"w-50\" />\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" routerLink=\"/insights\">Insight</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\"\r\n              aria-expanded=\"false\">\r\n              Services\r\n            </a>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/supply-chain\">Supply Chain</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/banking\">Banking</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/ai\">Artificial Intelligence</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/business\">Business Strategy</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"/final-test\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              <strong>Final Test</strong>\r\n            </a>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/final-test/admin\">Admin Dashboard Chart</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/final-test/users\">Users From API</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/industries\">Industries</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/contact\">Contact</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/signup\">SignUp</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/users\">Users</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/local-itemlist\">Local-ItemList</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/blog\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/material\">Material Design Examples</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/custom-pipes\">Custom Pipes</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/search-posts\">Search Posts</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron text-center p-2\">\n  <h1>Voices of Change</h1>\n  <p>From insights to action, the path to 360° value starts here.</p>\n</div>\n<app-services></app-services>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndustriesIndustriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>industries works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsightsInsightsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>insights works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"global-container\">\n  <div class=\"card login-form\">\n    <div class=\"card-body\">\n      <h3 class=\"card-title text-center\">Log in to Accenture</h3>\n      <div class=\"card-text\">\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control form-control-sm\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"user\"\n              [ngClass]=\"{'is-invalid': f.submitted && username.invalid}\" required minlength=\"6\">\n            <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-feedback\">\n              <p *ngIf=\"username.errors.required\">\n                Username field can't be blank\n              </p>\n              <div *ngIf=\"username.errors.minlength\">Username should be min of 6 characters.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <a href=\"#\" style=\"float:right;font-size:12px;\">Forgot password?</a>\n            <input type=\"password\" class=\"form-control form-control-sm\" id=\"exampleInputPassword1\" #password=\"ngModel\"\n              [(ngModel)]=\"pass\" name=\"password\" [ngClass]=\"{'is-invalid': f.submitted && password.invalid}\" required>\n            <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"password.errors.required\">\n                Password field can't be blank\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\n\n          \n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <!-- <img id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" class=\"profile-img-card\" /> -->\n    <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n          #username=\"ngModel\" />\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && username.invalid\">\n          Username is required!\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required minlength=\"6\"\n          #password=\"ngModel\" />\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">\n          Login\n        </button>\n      </div>\n      <div class=\"sign-up\">\n        Don't have an account? <a href=\"#\" routerLink=\"/signup\">Create One</a>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\">\n          Login failed: {{ errorMessage }}\n        </div>\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n      Logged in as {{ roles }}.\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <a routerLink=\"\">\r\n        <img src=\"././assets/images/404.jpg\" alt=\"404 Page not found\" />\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rxjs-operators/rxjs-operators.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rxjs-operators/rxjs-operators.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRxjsOperatorsRxjsOperatorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>rxjs-operators works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/servicecard/servicecard.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/servicecard/servicecard.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicecardServicecardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" style=\"width: 18rem;\">\r\n    <img src=\"././assets/images/{{service.svcId}}.jpg\" class=\"card-img-top\" alt=\"{{service.title}}\">\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{service.title}}</h5>\r\n        <h3>{{service.heading}}</h3>\r\n        <p class=\"card-text\">{{service.description}}</p>\r\n        <a [routerLink]=\"['/services', service.svcId]\" routerLinkActive=\"active\" class=\"btn btn-primary\" id=\"{{service.title}}\"\r\n            [ngStyle]=\"{'background-color': 'red'}\" (click)=\"componentRedirect(service.svcId)\">\r\n            Read More</a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"container row w-100\">\n  <!-- <app-servicecard \n  *ngFor=\"let service of allServices,trackBy: trackByFn\" [service]=\"service\" [svcId]=\"service.svcId\"\n  [title]=\"service.title\" [heading]=\"service.heading\" [description]=\"service.description\" class=\"col-md-3\"\n  >\n</app-servicecard> -->\n  <div style=\"display:flex;\">\n    <section style=\"display: inline-flex;\">\n      <ng-template appPlaceholder style=\"padding-left: 5%;\"></ng-template>\n    </section>\n  </div>\n\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n  <div class=\"carousel-indicators\">\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\"\r\n      aria-current=\"true\" aria-label=\"Slide 1\"></button>\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\r\n  </div>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img src=\"././assets/images/apj/cropped-kalam-quote-22.jpg\" class=\"d-block w-100\" alt=\"..\">\r\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\r\n        <h5>First slide label</h5>\r\n        <p>Some representative placeholder content for the first slide.</p>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img src=\"././assets/images/apj/cropped-kalam-quote-23.jpg\" class=\"d-block w-100\" alt=\"..\">\r\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\r\n        <h5>Second slide label</h5>\r\n        <p>Some representative placeholder content for the second slide.</p>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img src=\"././assets/images/apj/cropped-kalam-quote-25.jpg\" class=\"d-block w-100\" alt=\"..\">\r\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\r\n        <h5>Third slide label</h5>\r\n        <p>Some representative placeholder content for the third slide.</p>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Previous</span>\r\n  </button>\r\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Next</span>\r\n  </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/_directives/custom-loop.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/_directives/custom-loop.directive.ts ***!
    \******************************************************/

  /*! exports provided: CustomLoopDirective */

  /***/
  function srcApp_directivesCustomLoopDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomLoopDirective", function () {
      return CustomLoopDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomLoopDirective = /*#__PURE__*/function () {
      function CustomLoopDirective(templateRef, viewContainerRef) {
        _classCallCheck(this, CustomLoopDirective);

        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
      }

      _createClass(CustomLoopDirective, [{
        key: "loop",
        set: function set(num) {
          for (var i = 0; i < num; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        }
      }]);

      return CustomLoopDirective;
    }();

    CustomLoopDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCustomLoop')], CustomLoopDirective.prototype, "loop", null);
    CustomLoopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appCustomLoop]'
    })], CustomLoopDirective);
    /***/
  },

  /***/
  "./src/app/_directives/highlight.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/_directives/highlight.directive.ts ***!
    \****************************************************/

  /*! exports provided: HighlightDirective */

  /***/
  function srcApp_directivesHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HighlightDirective = /*#__PURE__*/function () {
      function HighlightDirective(el) {
        _classCallCheck(this, HighlightDirective);

        this.el = el;
        el.nativeElement.style.border = '3px dotted red'; //console.log(el.nativeElement);
      }

      _createClass(HighlightDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.el.nativeElement.style.backgroundColor = this.highlighter;
          this.el.nativeElement.style.borderRadius = '10px';
        }
      }]);

      return HighlightDirective;
    }();

    HighlightDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('highlighter')], HighlightDirective.prototype, "highlighter", void 0);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHighlight]'
    })], HighlightDirective);
    /***/
  },

  /***/
  "./src/app/_directives/rotate-animation.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/_directives/rotate-animation.directive.ts ***!
    \***********************************************************/

  /*! exports provided: RotateAnimationDirective */

  /***/
  function srcApp_directivesRotateAnimationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RotateAnimationDirective", function () {
      return RotateAnimationDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RotateAnimationDirective = function RotateAnimationDirective(el) {
      _classCallCheck(this, RotateAnimationDirective);

      this.el = el;
      this.el.nativeElement.classList = 'imgRotate';
    };

    RotateAnimationDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    RotateAnimationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appRotateAnimation]'
    })], RotateAnimationDirective);
    /***/
  },

  /***/
  "./src/app/_guards/login.service.ts":
  /*!******************************************!*\
    !*** ./src/app/_guards/login.service.ts ***!
    \******************************************/

  /*! exports provided: Login */

  /***/
  function srcApp_guardsLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Login = /*#__PURE__*/function () {
      function Login() {
        _classCallCheck(this, Login);
      }

      _createClass(Login, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (sessionStorage.getItem('Username') == 'Avensys' && sessionStorage.getItem('Password') == 'Avensys123') {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return Login;
    }();

    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Login);
    /***/
  },

  /***/
  "./src/app/_guards/un-saved-changes-guard.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/_guards/un-saved-changes-guard.service.ts ***!
    \***********************************************************/

  /*! exports provided: UnsavedChangesGuard */

  /***/
  function srcApp_guardsUnSavedChangesGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function () {
      return UnsavedChangesGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // Consider using this interface for all CanDeactivate guards,
    // and have your components implement this interface, too.
    //
    //   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    //
    // export interface CanComponentDeactivate {
    // canDeactivate: () => any;
    // }


    var UnsavedChangesGuard = /*#__PURE__*/function () {
      function UnsavedChangesGuard() {
        _classCallCheck(this, UnsavedChangesGuard);
      }

      _createClass(UnsavedChangesGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component, currentRoute, currentState) {
          console.log(component);
          console.log(currentRoute);
          console.log(currentState);

          if (component.form.username == undefined && component.form.Password == undefined) {
            return window.confirm('You have not loggedin , would you like to leave?');
          } else {
            return true;
          }
        }
      }]);

      return UnsavedChangesGuard;
    }();

    UnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UnsavedChangesGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/loginservices/auth.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/_helpers/loginservices/auth.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_helpersLoginservicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AUTH_API = 'http://localhost:8080/api/auth/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
          }, httpOptions);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
          }, httpOptions);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/_helpers/loginservices/token-service.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/_helpers/loginservices/token-service.service.ts ***!
    \*****************************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcApp_helpersLoginservicesTokenServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenStorageService);
    /***/
  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgRotate {\r\n  width: 250px;\r\n  height: 250px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  -webkit-animation-name: rotateImg;\r\n          animation-name: rotateImg;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-duration: 5s;\r\n          animation-duration: 5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n@-webkit-keyframes rotateImg {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotateImg {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdSb3RhdGUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUltZztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlSW1nIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.angularversion = 'angular4';
          this.isgold = true;
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css"))["default"]]
    })], AboutComponent);
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


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./careers/careers.component */
    "./src/app/careers/careers.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _industries_industries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./industries/industries.component */
    "./src/app/industries/industries.component.ts");
    /* harmony import */


    var _insights_insights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./insights/insights.component */
    "./src/app/insights/insights.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _rxjs_operators_rxjs_operators_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./rxjs-operators/rxjs-operators.component */
    "./src/app/rxjs-operators/rxjs-operators.component.ts");
    /* harmony import */


    var _guards_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_guards/login.service */
    "./src/app/_guards/login.service.ts");
    /* harmony import */


    var _guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_guards/un-saved-changes-guard.service */
    "./src/app/_guards/un-saved-changes-guard.service.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'insights',
      component: _insights_insights_component__WEBPACK_IMPORTED_MODULE_8__["InsightsComponent"]
    }, {
      path: 'final-test',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | final-test-final-test-module */
        "final-test-final-test-module").then(__webpack_require__.bind(null,
        /*! ./final-test/final-test.module */
        "./src/app/final-test/final-test.module.ts")).then(function (m) {
          return m.FinalTestModule;
        });
      }
    }, {
      path: 'services',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | services-services-module */
        "services-services-module").then(__webpack_require__.bind(null,
        /*! ./services/services.module */
        "./src/app/services/services.module.ts")).then(function (m) {
          return m.ServicesModule;
        });
      }
    }, {
      path: 'careers',
      component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"]
    }, {
      path: 'industries',
      component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_7__["IndustriesComponent"],
      canActivate: [_guards_login_service__WEBPACK_IMPORTED_MODULE_12__["Login"]]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
      canDeactivate: [_guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_13__["UnsavedChangesGuard"]]
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-signup-module */
        "signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupModule;
        });
      }
    }, {
      path: 'users',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | users-users-module */
        "users-users-module").then(__webpack_require__.bind(null,
        /*! ./users/users.module */
        "./src/app/users/users.module.ts")).then(function (m) {
          return m.UsersModule;
        });
      }
    }, {
      path: 'rxjs-operators',
      component: _rxjs_operators_rxjs_operators_component__WEBPACK_IMPORTED_MODULE_11__["RxjsOperatorsComponent"]
    }, {
      path: 'local-itemlist',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | local-itemlist-local-itemlist-module */
        "local-itemlist-local-itemlist-module").then(__webpack_require__.bind(null,
        /*! ./local-itemlist/local-itemlist.module */
        "./src/app/local-itemlist/local-itemlist.module.ts")).then(function (m) {
          return m.LocalItemlistModule;
        });
      }
    }, {
      path: 'blog',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | blog-blog-module */
        "blog-blog-module").then(__webpack_require__.bind(null,
        /*! ./blog/blog.module */
        "./src/app/blog/blog.module.ts")).then(function (m) {
          return m.BlogModule;
        });
      }
    }, {
      path: 'material',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | _material-material-module */
        "_material-material-module").then(__webpack_require__.bind(null,
        /*! ./_material/material.module */
        "./src/app/_material/material.module.ts")).then(function (m) {
          return m.MaterialModule;
        });
      }
    }, {
      path: 'custom-pipes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | custom-pipes-custom-pipes-module */
        "custom-pipes-custom-pipes-module").then(__webpack_require__.bind(null,
        /*! ./custom-pipes/custom-pipes.module */
        "./src/app/custom-pipes/custom-pipes.module.ts")).then(function (m) {
          return m.CustomPipesModule;
        });
      }
    }, {
      path: 'search-posts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-posts-search-posts-module */
        "search-posts-search-posts-module").then(__webpack_require__.bind(null,
        /*! ./search-posts/search-posts.module */
        "./src/app/search-posts/search-posts.module.ts")).then(function (m) {
          return m.SearchPostsModule;
        });
      }
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header,\r\nheader nav ul {\r\n  display: flex;\r\n}\r\n\r\nheader div {\r\n  flex: 1;\r\n}\r\n\r\nheader nav {\r\n  flex: 11;\r\n}\r\n\r\nheader nav li {\r\n  flex: 1;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  font-size: 26px;\r\n  color: gold;\r\n}\r\n\r\nnav ul {\r\n  margin-top: 35px;\r\n}\r\n\r\nheader {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUNBO0VBQ0UsT0FBTztBQUNUOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLFxyXG5oZWFkZXIgbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oZWFkZXIgZGl2IHtcclxuICBmbGV4OiAxO1xyXG59XHJcbmhlYWRlciBuYXYge1xyXG4gIGZsZXg6IDExO1xyXG59XHJcbmhlYWRlciBuYXYgbGkge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxubmF2IHVsIGxpIGEge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG5uYXYgdWwge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG4iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angularAccenture';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/slider/slider.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _insights_insights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./insights/insights.component */
    "./src/app/insights/insights.component.ts");
    /* harmony import */


    var _industries_industries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./industries/industries.component */
    "./src/app/industries/industries.component.ts");
    /* harmony import */


    var _careers_careers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./careers/careers.component */
    "./src/app/careers/careers.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_guards/un-saved-changes-guard.service */
    "./src/app/_guards/un-saved-changes-guard.service.ts");
    /* harmony import */


    var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./_directives/highlight.directive */
    "./src/app/_directives/highlight.directive.ts");
    /* harmony import */


    var _directives_custom_loop_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_directives/custom-loop.directive */
    "./src/app/_directives/custom-loop.directive.ts");
    /* harmony import */


    var _directives_rotate_animation_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./_directives/rotate-animation.directive */
    "./src/app/_directives/rotate-animation.directive.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _services_servicecard_servicecard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/servicecard/servicecard.component */
    "./src/app/services/servicecard/servicecard.component.ts");
    /* harmony import */


    var _services_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/placeholder/placeholder.directive */
    "./src/app/services/placeholder/placeholder.directive.ts");
    /* harmony import */


    var _services_serviceresolver_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/serviceresolver.service */
    "./src/app/services/serviceresolver.service.ts");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _contact_contact_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./contact/contact.service */
    "./src/app/contact/contact.service.ts");
    /* harmony import */


    var _contact_username_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./contact/username.directive */
    "./src/app/contact/username.directive.ts");
    /* harmony import */


    var _contact_email_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./contact/email.directive */
    "./src/app/contact/email.directive.ts");
    /* harmony import */


    var _rxjs_operators_rxjs_operators_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./rxjs-operators/rxjs-operators.component */
    "./src/app/rxjs-operators/rxjs-operators.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js"); // lazy laoded Service module
    //Loading UnsavedChangesGuard


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _insights_insights_component__WEBPACK_IMPORTED_MODULE_9__["InsightsComponent"], _industries_industries_component__WEBPACK_IMPORTED_MODULE_10__["IndustriesComponent"], _careers_careers_component__WEBPACK_IMPORTED_MODULE_11__["CareersComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"], _services_servicecard_servicecard_component__WEBPACK_IMPORTED_MODULE_22__["ServicecardComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_18__["HighlightDirective"], _directives_custom_loop_directive__WEBPACK_IMPORTED_MODULE_19__["CustomLoopDirective"], _directives_rotate_animation_directive__WEBPACK_IMPORTED_MODULE_20__["RotateAnimationDirective"], _services_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_23__["PlaceholderDirective"], _contact_username_directive__WEBPACK_IMPORTED_MODULE_27__["UsernameDirective"], _contact_email_directive__WEBPACK_IMPORTED_MODULE_28__["EmailDirective"], _rxjs_operators_rxjs_operators_component__WEBPACK_IMPORTED_MODULE_29__["RxjsOperatorsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"]],
      providers: [_guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_17__["UnsavedChangesGuard"], _services_services_service__WEBPACK_IMPORTED_MODULE_25__["ServiceSvc"], _services_serviceresolver_service__WEBPACK_IMPORTED_MODULE_24__["ServiceResolver"], _contact_contact_service__WEBPACK_IMPORTED_MODULE_26__["ContactService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_services_servicecard_servicecard_component__WEBPACK_IMPORTED_MODULE_22__["ServicecardComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/careers/careers.component.css":
  /*!***********************************************!*\
    !*** ./src/app/careers/careers.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCareersCareersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/careers/careers.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/careers/careers.component.ts ***!
    \**********************************************/

  /*! exports provided: CareersComponent */

  /***/
  function srcAppCareersCareersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareersComponent", function () {
      return CareersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CareersComponent = /*#__PURE__*/function () {
      function CareersComponent() {
        _classCallCheck(this, CareersComponent);
      }

      _createClass(CareersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CareersComponent;
    }();

    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-careers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./careers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./careers.component.css */
      "./src/app/careers/careers.component.css"))["default"]]
    })], CareersComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(formBuilder) {
        _classCallCheck(this, ContactComponent);

        this.formBuilder = formBuilder;
        this.message = "This is child Message";
        this.PostData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //debugger;
          this.contactForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            useremail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            contactMsg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          console.log("NgOnInit()");
        }
      }, {
        key: "f",
        get: function get() {
          return this.contactForm.controls;
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit() {
          this.submitted = true; //console.log(this.contactForm.value);

          this.userData = this.contactForm.value;
          this.message = "handleSubmit()"; //console.log(this.usersData);

          this.PostData.emit(this.userData);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log("OnChanges");
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          console.log("DoCheck");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.firstname.nativeElement.style.border = "3px dashed green";
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          console.log('On scroll in Contact Component');
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactComponent.prototype, "PostData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user')], ContactComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fname', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ContactComponent.prototype, "username", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.service.ts":
  /*!********************************************!*\
    !*** ./src/app/contact/contact.service.ts ***!
    \********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppContactContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactService = /*#__PURE__*/function () {
      function ContactService() {
        _classCallCheck(this, ContactService);

        this.ForbiddenUsernames = ['Mark', 'Lucifer'];
      }

      _createClass(ContactService, [{
        key: "forbiddenNames",
        value: function forbiddenNames(control) {
          if (this.ForbiddenUsernames.indexOf(control.value) !== -1) {
            return {
              'nameIsForbidden': true
            };
          }

          return null;
        }
      }, {
        key: "forbiddenEmails",
        value: function forbiddenEmails(control) {
          var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              if (control.value === 'test@test.com') {
                resolve({
                  'emailIsForbidden': true
                });
              } else {
                resolve(null);
              }
            }, 1500);
          });
          return promise;
        }
      }]);

      return ContactService;
    }();

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ContactService);
    /***/
  },

  /***/
  "./src/app/contact/email.directive.ts":
  /*!********************************************!*\
    !*** ./src/app/contact/email.directive.ts ***!
    \********************************************/

  /*! exports provided: EmailDirective */

  /***/
  function srcAppContactEmailDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailDirective", function () {
      return EmailDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EmailDirective = /*#__PURE__*/function () {
      function EmailDirective() {
        _classCallCheck(this, EmailDirective);
      }

      _createClass(EmailDirective, [{
        key: "forbiddenEmails",
        value: function forbiddenEmails(control) {
          var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              if (control.value === 'test@test.com') {
                resolve({
                  'emailIsForbidden': true
                });
              } else {
                resolve(null);
              }
            }, 1500);
          });
          return promise;
        }
      }]);

      return EmailDirective;
    }();

    EmailDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[eMail]'
    })], EmailDirective);
    /***/
  },

  /***/
  "./src/app/contact/username.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/contact/username.directive.ts ***!
    \***********************************************/

  /*! exports provided: UsernameDirective */

  /***/
  function srcAppContactUsernameDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsernameDirective", function () {
      return UsernameDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsernameDirective = /*#__PURE__*/function () {
      function UsernameDirective() {
        _classCallCheck(this, UsernameDirective);

        this.ForbiddenUsernames = ['Mark', 'Lucifer'];
      }

      _createClass(UsernameDirective, [{
        key: "forbiddenNames",
        value: function forbiddenNames(control) {
          if (this.ForbiddenUsernames.indexOf(control.value) !== -1) {
            return {
              'nameIsForbidden': true
            };
          }

          return null;
        }
      }]);

      return UsernameDirective;
    }();

    UsernameDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[userName]'
    })], UsernameDirective);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav #services {\r\n  display: block !important;\r\n}\r\n\r\n#services {\r\n  position: absolute;\r\n  top: 67px;\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav li {\r\n  flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgI3NlcnZpY2VzIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2VydmljZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY3cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubmF2YmFyLW5hdiBsaSB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/industries/industries.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/industries/industries.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndustriesIndustriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/industries/industries.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/industries/industries.component.ts ***!
    \****************************************************/

  /*! exports provided: IndustriesComponent */

  /***/
  function srcAppIndustriesIndustriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function () {
      return IndustriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndustriesComponent = /*#__PURE__*/function () {
      function IndustriesComponent() {
        _classCallCheck(this, IndustriesComponent);
      }

      _createClass(IndustriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndustriesComponent;
    }();

    IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-industries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./industries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./industries.component.css */
      "./src/app/industries/industries.component.css"))["default"]]
    })], IndustriesComponent);
    /***/
  },

  /***/
  "./src/app/insights/insights.component.css":
  /*!*************************************************!*\
    !*** ./src/app/insights/insights.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsightsInsightsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHRzL2luc2lnaHRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/insights/insights.component.ts":
  /*!************************************************!*\
    !*** ./src/app/insights/insights.component.ts ***!
    \************************************************/

  /*! exports provided: InsightsComponent */

  /***/
  function srcAppInsightsInsightsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsightsComponent", function () {
      return InsightsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InsightsComponent = /*#__PURE__*/function () {
      function InsightsComponent() {
        _classCallCheck(this, InsightsComponent);
      }

      _createClass(InsightsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InsightsComponent;
    }();

    InsightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-insights',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./insights.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./insights.component.css */
      "./src/app/insights/insights.component.css"))["default"]]
    })], InsightsComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".global-container {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nform {\r\n  padding-top: 10px;\r\n  font-size: 14px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.card-title {\r\n  font-weight: 300;\r\n}\r\n\r\n.btn {\r\n  font-size: 14px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-form {\r\n  width: 330px;\r\n  margin: 20px;\r\n}\r\n\r\n.sign-up {\r\n  text-align: center;\r\n  padding: 20px 0 0;\r\n}\r\n\r\n.alert {\r\n  margin-bottom: -30px;\r\n  font-size: 13px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWwtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _helpers_loginservices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_helpers/loginservices/auth.service */
    "./src/app/_helpers/loginservices/auth.service.ts");
    /* harmony import */


    var _helpers_loginservices_token_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_helpers/loginservices/token-service.service */
    "./src/app/_helpers/loginservices/token-service.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, tokenStorage) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          // event.preventDefault();
          // console.log(this.user);
          // console.log(this.pass);
          // sessionStorage.setItem('Username',this.user);
          // sessionStorage.setItem('Password',this.pass);
          this.authService.login(this.form).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);

            _this.tokenStorage.saveUser(data);

            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;

            _this.reloadPage();
          }, function (err) {
            _this.errorMsg = err.error.message;
            _this.isLoginFailed = true;
          });
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          window.location.reload();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _helpers_loginservices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _helpers_loginservices_token_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/rxjs-operators/rxjs-operators.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/rxjs-operators/rxjs-operators.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRxjsOperatorsRxjsOperatorsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J4anMtb3BlcmF0b3JzL3J4anMtb3BlcmF0b3JzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/rxjs-operators/rxjs-operators.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/rxjs-operators/rxjs-operators.component.ts ***!
    \************************************************************/

  /*! exports provided: RxjsOperatorsComponent */

  /***/
  function srcAppRxjsOperatorsRxjsOperatorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxjsOperatorsComponent", function () {
      return RxjsOperatorsComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../users/user.service */
    "./src/app/users/user.service.ts");

    var RxjsOperatorsComponent = /*#__PURE__*/function () {
      function RxjsOperatorsComponent(userService) {
        _classCallCheck(this, RxjsOperatorsComponent);

        this.userService = userService;
        this.count = 0;
        this.startClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(RxjsOperatorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // const obs$1 = fromEvent(document, 'click');
          // const obs$1 = interval(1000);
          // const finalObs$ = obs$1.pipe(
          //   switchMap(event => obs$2)
          // );
          var i = 0;
          var j = 0;
          var k = 0;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("mergeMap res", i += 1, ": ", res);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("switchMap res", j += 1, ": ", res);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("concatMap res", k += 1, ": ", res);
          });
          var m = 0;
          var n = 0;
          var r = 0;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("mergeMap NO DELAY res", m += 1, ": ", res);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("switchMap NO DELAY res", n += 1, ": ", res);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (el) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (num) {
              return el + num;
            }));
          })).subscribe(function (res) {
            return console.log("concatMap NO DELAY res", r += 1, ": ", res);
          }); //switchMap

          var switchMapSample = this.userService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            return _this2.userService.getUserById(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (singleUser) {
              console.log(users);
              console.log(singleUser);
            }));
          })).subscribe(function (res) {
            return console.log("switchMap res: ", res);
          });
          var sourceForFirstOperator = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
          sourceForFirstOperator.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function () {
            console.log('Document is clicked only once.');
          });
          var sourceTakeWhile = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
          sourceTakeWhile.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () {
            return _this2.count < 3;
          })).subscribe(function () {
            // console.log('Document is only allowed to be clicked on 3 times.');
            console.log("There have been $this.count clicks");
            _this2.count++;
          });
          var sourceTakeLast = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Angular', 'ReactJS', 'VueJS');
          sourceTakeLast.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(1)).subscribe(function (res) {
            return console.log("sourceTakeLast res: ", res);
          }); // sourceClick.pipe(takeUntil(this.startClick))

          var sourceTakeWhile2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
          this.counter = sourceTakeWhile2.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () {
            return _this2.count > 0;
          })).subscribe(function () {
            console.log("There have been $this.count clicks");
            _this2.count++;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.counter.unsubscribe();
        }
      }]);

      return RxjsOperatorsComponent;
    }();

    RxjsOperatorsComponent.ctorParameters = function () {
      return [{
        type: _users_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    RxjsOperatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rxjs-operators',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rxjs-operators.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rxjs-operators/rxjs-operators.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rxjs-operators.component.css */
      "./src/app/rxjs-operators/rxjs-operators.component.css"))["default"]]
    })], RxjsOperatorsComponent);
    /***/
  },

  /***/
  "./src/app/services/placeholder/placeholder.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/placeholder/placeholder.directive.ts ***!
    \***************************************************************/

  /*! exports provided: PlaceholderDirective */

  /***/
  function srcAppServicesPlaceholderPlaceholderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function () {
      return PlaceholderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlaceholderDirective = function PlaceholderDirective(viewContainerRef) {
      _classCallCheck(this, PlaceholderDirective);

      this.viewContainerRef = viewContainerRef;
    };

    PlaceholderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    PlaceholderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appPlaceholder]'
    })], PlaceholderDirective);
    /***/
  },

  /***/
  "./src/app/services/servicecard/servicecard.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/services/servicecard/servicecard.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicecardServicecardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VjYXJkL3NlcnZpY2VjYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/servicecard/servicecard.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/servicecard/servicecard.component.ts ***!
    \***************************************************************/

  /*! exports provided: ServicecardComponent */

  /***/
  function srcAppServicesServicecardServicecardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicecardComponent", function () {
      return ServicecardComponent;
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

    var ServicecardComponent = /*#__PURE__*/function () {
      function ServicecardComponent(_router) {
        _classCallCheck(this, ServicecardComponent);

        this._router = _router; // @Input('svcId') svcId: string;
        // @Input('title') title: string;
        // @Input('heading') heading: string;
        // @Input('description') description: string;

        this.articleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ServicecardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Card: ", this.service);
        }
      }, {
        key: "componentRedirect",
        value: function componentRedirect(svcId) {
          event.preventDefault();

          this._router.navigate(['services/', this.service.svcId]); // console.log(this.svcId, this.title, this.heading, this.description);
          // this.articleEmitter.emit(this.service);

        }
      }]);

      return ServicecardComponent;
    }();

    ServicecardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service')], ServicecardComponent.prototype, "service", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ServicecardComponent.prototype, "articleEmitter", void 0);
    ServicecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-servicecard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./servicecard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/servicecard/servicecard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./servicecard.component.css */
      "./src/app/services/servicecard/servicecard.component.css"))["default"]]
    })], ServicecardComponent);
    /***/
  },

  /***/
  "./src/app/services/serviceresolver.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/serviceresolver.service.ts ***!
    \*****************************************************/

  /*! exports provided: ServiceResolver */

  /***/
  function srcAppServicesServiceresolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceResolver", function () {
      return ServiceResolver;
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


    var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services.service */
    "./src/app/services/services.service.ts");

    var ServiceResolver = /*#__PURE__*/function () {
      function ServiceResolver(serviceSvc) {
        _classCallCheck(this, ServiceResolver);

        this.serviceSvc = serviceSvc;
      }

      _createClass(ServiceResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.serviceSvc.getServiceById(route.params['svcId']);
        }
      }]);

      return ServiceResolver;
    }();

    ServiceResolver.ctorParameters = function () {
      return [{
        type: _services_service__WEBPACK_IMPORTED_MODULE_2__["ServiceSvc"]
      }];
    };

    ServiceResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServiceResolver);
    /***/
  },

  /***/
  "./src/app/services/services.component.css":
  /*!*************************************************!*\
    !*** ./src/app/services/services.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
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


    var _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./placeholder/placeholder.directive */
    "./src/app/services/placeholder/placeholder.directive.ts");
    /* harmony import */


    var _servicecard_servicecard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./servicecard/servicecard.component */
    "./src/app/services/servicecard/servicecard.component.ts");
    /* harmony import */


    var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services.service */
    "./src/app/services/services.service.ts");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent(serviceSvc, componentFactoryResolver) {
        _classCallCheck(this, ServicesComponent);

        this.serviceSvc = serviceSvc;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(ServicesComponent, [{
        key: "GenerateCards",
        value: function GenerateCards(allServices, placeholder) {
          var cardComponentFactory = this.componentFactoryResolver.resolveComponentFactory(_servicecard_servicecard_component__WEBPACK_IMPORTED_MODULE_3__["ServicecardComponent"]);
          var hostViewContainerRef = placeholder.viewContainerRef; // hostViewContainerRef.clear();
          // var allCards;

          var _iterator = _createForOfIteratorHelper(this.allServices),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var svc = _step.value;
              var componentRef = hostViewContainerRef.createComponent(cardComponentFactory);
              componentRef.instance.service = svc; // allCards.push(componentRef);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allServices = this.serviceSvc.getAllServices();
          console.log("Services: ", this.allServices);
          console.log("Placeholder: ", this.serviceCardsPlaceholder);
          this.GenerateCards(this.allServices, this.serviceCardsPlaceholder);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index) {
          return index;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.serviceCardsPlaceholder.viewContainerRef.clear();
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: _services_service__WEBPACK_IMPORTED_MODULE_4__["ServiceSvc"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__["PlaceholderDirective"], {
      "static": true
    })], ServicesComponent.prototype, "serviceCardsPlaceholder", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html"))["default"],
      providers: [_services_service__WEBPACK_IMPORTED_MODULE_4__["ServiceSvc"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/services/services.component.css"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/services/services.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/services.service.ts ***!
    \**********************************************/

  /*! exports provided: ServiceSvc */

  /***/
  function srcAppServicesServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSvc", function () {
      return ServiceSvc;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServiceSvc = /*#__PURE__*/function () {
      function ServiceSvc() {
        _classCallCheck(this, ServiceSvc);

        this.svcSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allServices = [{
          svcId: 'supply-chain',
          title: 'Supply Chain',
          heading: 'Lorem Ipsum is simply dummy',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book."
        }, {
          svcId: 'banking',
          title: 'banking',
          heading: 'Lorem Ipsum is simply dummy',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book."
        }, {
          svcId: 'ai',
          title: 'Artificial intelligence',
          heading: 'Lorem Ipsum is simply dummy',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book."
        }, {
          svcId: 'business',
          title: 'Business Strategy',
          heading: 'Lorem Ipsum is simply dummy',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book."
        }];
      }

      _createClass(ServiceSvc, [{
        key: "getAllServices",
        value: function getAllServices() {
          return this.allServices;
        }
      }, {
        key: "getServiceById",
        value: function getServiceById(sId) {
          return this.allServices.find(function (p) {
            return p.svcId == sId;
          });
        }
      }]);

      return ServiceSvc;
    }();

    ServiceSvc = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServiceSvc);
    /***/
  },

  /***/
  "./src/app/slider/slider.component.css":
  /*!*********************************************!*\
    !*** ./src/app/slider/slider.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSliderSliderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/slider/slider.component.ts":
  /*!********************************************!*\
    !*** ./src/app/slider/slider.component.ts ***!
    \********************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.component.css */
      "./src/app/slider/slider.component.css"))["default"]]
    })], SliderComponent);
    /***/
  },

  /***/
  "./src/app/users/user.service.ts":
  /*!***************************************!*\
    !*** ./src/app/users/user.service.ts ***!
    \***************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUsersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8'
          })
        };
        this.myAppUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mockendUsersUrl;
        this.myApiUrl = '/users';
      }

      _createClass(UserService, [{
        key: "errorHandler",
        value: function errorHandler(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          // return this.http.get<User[]>(environment.mockendUsersUrl + "users", {observe: 'response'});
          return this.http.get(this.myAppUrl + this.myApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          // return this.http.get<User>(`${environment.mockendUsersUrl}/users/${userId}`, {observe: 'response'}).pipe(map(res => res));
          return this.http.get(this.myAppUrl + this.myApiUrl + '/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "createUser",
        value: function createUser(userDetails) {
          // return this.http.post<User>(`${environment.mockendUsersUrl}/users`, userDetails);
          return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(userDetails), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "updateUser",
        value: function updateUser(userId, userUpdate) {
          // const httpOptions = {
          // method: 'PUT',
          // body: JSON.stringify(userUpdate),
          // headers: new HttpHeaders({
          //     'Content-Type':  'application/json'
          // })
          // };
          // return this.http.put<User>(`${environment.mockendUsersUrl}/users/${userId}`, JSON.stringify(userUpdate), httpOptions);
          return this.http.put(this.myAppUrl + this.myApiUrl + '/' + userId, JSON.stringify(userUpdate), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          // return this.http.delete<User>(`${environment.mockendUsersUrl}/users/${userId}`);
          return this.http["delete"](this.myAppUrl + this.myApiUrl + '/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      mockendUsersUrl: 'https://mockend.com/margohpolo/angularProjectAPI',
      mockendBlogUrl: 'https://mockend.com/margohpolo/angularProjectBlogAPI',
      typiCodeUrl: 'https://jsonplaceholder.typicode.com'
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! D:\Git2\AngularCourse\homework18\angularProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map