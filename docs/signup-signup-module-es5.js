function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/page/page.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/page/page.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupPagePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card login-form\">\n        <div class=\"card-body\">\n            <h3 class=\"card-title text-center text-danger text-underline\">Sign Up to Join Accenture</h3>\n            <app-signupform (PostData)=\"getRegisteredUser($event)\"></app-signupform>\n        </div>\n    </div>\n    <app-signuplist [userList]=\"formUsers\"></app-signuplist>\n    <button (click)=\"updateUser()\">View Updated Users</button>\n    <div class=\"row\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signupform/signupform.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signupform/signupform.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupformSignupformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-text\" (scroll)=\"onScroll($event)\" style=\"height: 250px;\">\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"handleSubmit()\">\n        <div class=\"form-group\">\n            <label>Firstname</label>\n            <input type=\"text\" id=\"firstname\" #fname class=\"form-control\"\n                formControlName=\"firstname\" [ngClass]=\"{'is-invalid': submitted && f.firstname.errors }\" />\n            <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstname.errors.required\">First Name should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Lastname</label>\n            <input type=\"text\" name=\"lastname\" class=\"form-control\"\n                formControlName=\"lastname\" [ngClass]=\"{'is-invalid': submitted && f.lastname.errors }\" />\n            <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastname.errors.required\">Last Name should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\"\n                formControlName=\"useremail\" [ngClass]=\"{'is-invalid': submitted && f.useremail.errors }\" />\n            <div *ngIf=\"submitted && f.useremail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.useremail.errors.required\">Email should not be empty!</div>\n                <div *ngIf=\"f.useremail.errors.email\">Please enter the valid email!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Country</label>\n            <select class=\"form-control\" formControlName=\"country\"\n                [ngClass]=\"{'is-invalid': submitted && f.country.errors }\">\n                <option value=\"\">...Select...</option>\n                <option value=\"SG\">Singapore</option>\n                <option value=\"IN\">India</option>\n                <option value=\"USA\">United States</option>\n            </select>\n            <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.country.errors.required\">Country should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Address</label>\n            <textarea class=\"form-control\" formControlName=\"address\"\n                [ngClass]=\"{'is-invalid': submitted && f.address.errors }\"></textarea>\n            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.address.errors.required\">Country should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" name=\"signup\" class=\"btn btn-danger float-end\" />\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signuplist/signuplist.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signuplist/signuplist.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignuplistSignuplistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>signuplist works!</p>\n\n<table class=\"table\" *ngIf=\"UserList.length>0\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Country</th>\n            <th scope=\"col\">Address</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of UserList; let i=index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{user.firstname}}</td>\n            <td>{{user.lastname}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.country}}</td>\n            <td>{{user.address}}</td>\n        </tr>\n    </tbody>\n</table>";
    /***/
  },

  /***/
  "./src/app/signup/page/page.component.css":
  /*!************************************************!*\
    !*** ./src/app/signup/page/page.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupPagePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/page/page.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/signup/page/page.component.ts ***!
    \***********************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppSignupPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageComponent = /*#__PURE__*/function () {
      // usersFromChild=[];
      // user = {
      //   name:"Alex"
      // }
      // @ViewChild(SignupformComponent,{static: true}) child;
      //@ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
      //@ViewChild('nameInput',{static: false,read:ElementRef}) someInput: ElementRef;
      function PageComponent() {
        _classCallCheck(this, PageComponent);
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//console.log(this.child.usersData);
          //this.firstname.nativeElement.style.border = "3px dashed green";
        }
      }, {
        key: "getRegisteredUser",
        value: function getRegisteredUser(event) {
          this.formUsers.push(event); // console.log('List of registedred users');
          // console.log(this.allUser);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.usersFromChild = this.child.message;
          //this.someInput.nativeElement.value = "Jugal";
          //this.firstname.nativeElement.style.border = "3px dashed green";
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {// this.usersFromChild = this.child.usersData;
          // console.log(this.usersFromChild);
        }
      }, {
        key: "updateUser",
        value: function updateUser() {// this.user.name = "Murali";
        }
      }]);

      return PageComponent;
    }();

    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/page/page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page.component.css */
      "./src/app/signup/page/page.component.css"))["default"]]
    })], PageComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function () {
      return SignupRoutingModule;
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


    var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/page.component */
    "./src/app/signup/page/page.component.ts");

    var routes = [{
      path: '',
      component: _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]
    }];

    var SignupRoutingModule = function SignupRoutingModule() {
      _classCallCheck(this, SignupRoutingModule);
    };

    SignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupModule", function () {
      return SignupModule;
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


    var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/page.component */
    "./src/app/signup/page/page.component.ts");
    /* harmony import */


    var _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signupform/signupform.component */
    "./src/app/signup/signupform/signupform.component.ts");
    /* harmony import */


    var _signuplist_signuplist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signuplist/signuplist.component */
    "./src/app/signup/signuplist/signuplist.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");

    var SignupModule = function SignupModule() {
      _classCallCheck(this, SignupModule);
    };

    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_4__["SignupformComponent"], _signuplist_signuplist_component__WEBPACK_IMPORTED_MODULE_5__["SignuplistComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_7__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], SignupModule);
    /***/
  },

  /***/
  "./src/app/signup/signupform/signupform.component.css":
  /*!************************************************************!*\
    !*** ./src/app/signup/signupform/signupform.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupformSignupformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXBmb3JtL3NpZ251cGZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/signupform/signupform.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/signup/signupform/signupform.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignupformComponent */

  /***/
  function srcAppSignupSignupformSignupformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupformComponent", function () {
      return SignupformComponent;
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

    var SignupformComponent = /*#__PURE__*/function () {
      // @ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
      function SignupformComponent(formBuilder) {
        _classCallCheck(this, SignupformComponent);

        this.formBuilder = formBuilder;
        this.message = "This is child Message";
        this.PostData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
      }

      _createClass(SignupformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            useremail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            country: ['SG', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          console.log("NgOnInit()");
        }
      }, {
        key: "f",
        get: function get() {
          return this.signUpForm.controls;
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit() {
          this.submitted = true; //console.log(this.registerForm.value);

          this.userData = this.signUpForm.value;
          this.message = "This is child Message Updated"; //console.log(this.usersData);

          this.PostData.emit(this.userData);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log("CHANGES");
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          console.log("DO CHECK");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.firstname.nativeElement.style.border = "3px dashed green";
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          console.log('On scroll in Signup Component');
        }
      }]);

      return SignupformComponent;
    }();

    SignupformComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SignupformComponent.prototype, "PostData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formuser')], SignupformComponent.prototype, "formuser", void 0);
    SignupformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signupform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signupform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signupform/signupform.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signupform.component.css */
      "./src/app/signup/signupform/signupform.component.css"))["default"]]
    })], SignupformComponent);
    /***/
  },

  /***/
  "./src/app/signup/signuplist/signuplist.component.css":
  /*!************************************************************!*\
    !*** ./src/app/signup/signuplist/signuplist.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignuplistSignuplistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXBsaXN0L3NpZ251cGxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/signuplist/signuplist.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/signup/signuplist/signuplist.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignuplistComponent */

  /***/
  function srcAppSignupSignuplistSignuplistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignuplistComponent", function () {
      return SignuplistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignuplistComponent = /*#__PURE__*/function () {
      function SignuplistComponent() {
        _classCallCheck(this, SignuplistComponent);

        console.log(this.UserList);
      }

      _createClass(SignuplistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//console.log(this.UserList);
          //alert('ngOnInit');
        } // To Edit
        // ngOnInit() {
        //   this.userService.getAllUsers().subscribe(res => {
        //     console.log("All Users ", res);
        //     this.allUsers = res;
        //     this.loading = res.loading;
        //     this.errors = res.errors;
        //   });
        // }
        // ngOnDestroy() {
        //   this.userService.getAllUsers().unsubscribe();
        // }

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          //alert('ngAfterViewChecked');
          if (this.UserList.length > 0) {
            console.log(this.UserList);
          }
        }
      }]);

      return SignuplistComponent;
    }();

    SignuplistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signuplist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signuplist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signuplist/signuplist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signuplist.component.css */
      "./src/app/signup/signuplist/signuplist.component.css"))["default"]]
    })], SignuplistComponent);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map