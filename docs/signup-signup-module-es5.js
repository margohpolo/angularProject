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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card login-form\">\n        <div class=\"card-body\">\n            <h3 class=\"card-title text-center text-danger text-underline\">Sign Up to Join Accenture</h3>\n            <app-signupform (PostData)=\"getRegisteredUser($event)\"></app-signupform>\n        </div>\n    </div>\n    <!-- <app-signuplist [userList]=\"formUsers\"></app-signuplist> -->\n    <button (click)=\"updateUser()\">View Updated Users</button>\n    <div class=\"row\">\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<!-- <div class=\"card-text\" (scroll)=\"onScroll($event)\" style=\"height: 250px;\">\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"handleSubmit()\">\n        <div class=\"form-group\">\n            <label>Firstname</label>\n            <input type=\"text\" id=\"firstname\" #fname class=\"form-control\"\n                formControlName=\"firstname\" [ngClass]=\"{'is-invalid': submitted && f.firstname.errors }\" />\n            <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstname.errors.required\">First Name should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Lastname</label>\n            <input type=\"text\" name=\"lastname\" class=\"form-control\"\n                formControlName=\"lastname\" [ngClass]=\"{'is-invalid': submitted && f.lastname.errors }\" />\n            <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastname.errors.required\">Last Name should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\"\n                formControlName=\"useremail\" [ngClass]=\"{'is-invalid': submitted && f.useremail.errors }\" />\n            <div *ngIf=\"submitted && f.useremail.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.useremail.errors.required\">Email should not be empty!</div>\n                <div *ngIf=\"f.useremail.errors.email\">Please enter the valid email!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Country</label>\n            <select class=\"form-control\" formControlName=\"country\"\n                [ngClass]=\"{'is-invalid': submitted && f.country.errors }\">\n                <option value=\"\">...Select...</option>\n                <option value=\"SG\">Singapore</option>\n                <option value=\"IN\">India</option>\n                <option value=\"USA\">United States</option>\n            </select>\n            <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.country.errors.required\">Country should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Address</label>\n            <textarea class=\"form-control\" formControlName=\"address\"\n                [ngClass]=\"{'is-invalid': submitted && f.address.errors }\"></textarea>\n            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.address.errors.required\">Country should not be empty!</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" name=\"signup\" class=\"btn btn-danger float-end\" />\n        </div>\n    </form>\n</div> -->\n\n\n\n\n<div class=\"col-md-12\">\n    <div class=\"card card-container\">\n        <!-- <img id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" class=\"profile-img-card\" /> -->\n        <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n                    minlength=\"3\" maxlength=\"20\" #username=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n                    <div *ngIf=\"username.errors.required\">Username is required</div>\n                    <div *ngIf=\"username.errors.minlength\">\n                        Username must be at least 3 characters\n                    </div>\n                    <div *ngIf=\"username.errors.maxlength\">\n                        Username must be at most 20 characters\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" required email\n                    #email=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                    <div *ngIf=\"email.errors.email\">\n                        Email must be a valid email address\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required\n                    minlength=\"6\" #password=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">\n                        Password must be at least 6 characters\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary btn-block\">Sign Up</button>\n            </div>\n\n            <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n                Signup failed!<br />{{ errorMessage }}\n            </div>\n        </form>\n\n        <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n            Your registration is successful!\n        </div>\n    </div>\n</div>";
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
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_7__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
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


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cGZvcm0vc2lnbnVwZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFHZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwZm9ybS9zaWdudXBmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWctY2FyZCB7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */";
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


    var src_app_helpers_loginservices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_helpers/loginservices/auth.service */
    "./src/app/_helpers/loginservices/auth.service.ts");

    var SignupformComponent = /*#__PURE__*/function () {
      function SignupformComponent(authService) {
        _classCallCheck(this, SignupformComponent);

        this.authService = authService; // signUpForm: FormGroup;
        // submitted:boolean;
        // userData: FormUser;
        // message: string = "This is child Message";
        // @Output() PostData = new EventEmitter<FormUser>();
        // @Input('formuser') formuser;
        // @ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
        // constructor(private formBuilder: FormBuilder) {
        //   this.submitted = false;
        //  }

        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMsg = '';
      }

      _createClass(SignupformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.signUpForm = this.formBuilder.group({
          //   username:['',Validators.required],
          //   email:['',[Validators.required,Validators.email]],
          //   password:['',Validators.required]
          // });
          // console.log("NgOnInit()");
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            _this.isSuccessful = true;
            _this.isSignUpFailed = false;
          }, function (err) {
            _this.errorMsg = err.error.message;
            _this.isSignUpFailed = true;
          });
        } // handleSubmit(){
        //   this.submitted = true;
        //   //console.log(this.registerForm.value);
        //   this.userData = this.signUpForm.value;
        //   this.message = "This is child Message Updated";
        //   //console.log(this.usersData);
        //   this.PostData.emit(this.userData)
        // }

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
        type: src_app_helpers_loginservices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

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