function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/userform/userform.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/userform/userform.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUserformUserformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>userform works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table table-light\">\n    <thead class=\"table-light\">\n        <tr>\n            <th scope=\"col\">Id</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Address</th>\n            <th scope=\"col\">Country</th>\n            <th scope=\"col\"><button type=\"button\" class=\"btn btn-dark\" data-bs-toggle=\"modal\" data-bs-target=\"usersmodal\" (click)=\"addUser()\">Add User</button></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of (allUser$ | async)\">\n            <th scope=\"row\">{{ user.id }}</th>\n            <td>{{ user.firstname }}</td>\n            <td>{{ user.lastname }}</td>\n            <td>{{ user.useremail }}</td>\n            <!-- <td>{{ user.address }}</td> -->\n            <td>{{ user.country }}</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-warning\" data-bs-toggle=\"modal\" data-bs-target=\"usersmodal\" (click)=\"editUser(user.id)\">Edit</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser(user.id)\">Delete</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"modal fade\" id=\"usersmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"usersmodallabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\" role=\"form\">\n        <div class=\"modal-content\">\n            <app-userform></app-userform>\n        </div>\n    </div>\n    <div class=\"modal-footer\" class=\"btn btn-dark\" data-bs-dismiss=\"modal\">Back</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/users/userform/userform.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/users/userform/userform.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUserformUserformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJmb3JtL3VzZXJmb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/userform/userform.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/users/userform/userform.component.ts ***!
    \******************************************************/

  /*! exports provided: UserformComponent */

  /***/
  function srcAppUsersUserformUserformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserformComponent", function () {
      return UserformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserformComponent = /*#__PURE__*/function () {
      function UserformComponent() {
        _classCallCheck(this, UserformComponent);
      }

      _createClass(UserformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserformComponent;
    }();

    UserformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/userform/userform.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userform.component.css */
      "./src/app/users/userform/userform.component.css"))["default"]]
    })], UserformComponent);
    /***/
  },

  /***/
  "./src/app/users/users-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/users/users-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: UsersRoutingModule */

  /***/
  function srcAppUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
      return UsersRoutingModule;
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


    var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/users/users.component.ts");

    var routes = [{
      path: '',
      component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }];

    var UsersRoutingModule = function UsersRoutingModule() {
      _classCallCheck(this, UsersRoutingModule);
    };

    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersRoutingModule);
    /***/
  },

  /***/
  "./src/app/users/users.component.css":
  /*!*******************************************!*\
    !*** ./src/app/users/users.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/users/user.service.ts");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        _classCallCheck(this, UsersComponent);

        this.userService = userService;
        this.loading = true;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.userService.getAllUsers().subscribe(res => {
          //   // console.log("Http Response: ", res);
          //   // console.log(typeof res);
          //   // console.log("Http Response Body Type: ", typeof res.body);
          //   // console.log(typeof res.body);
          //   this.allUsers = JSON.stringify(res);
          //   // this.loading = res.loading;
          //   // this.errors = res.errors;
          // });
          this.loadAllUsers();
        }
      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          this.allUser$ = this.userService.getAllUsers();
          console.log(typeof this.allUser$, this.allUser$);
        } // These 3: Click -> send to Modal, sometimes populating form -> Action/Cancel btn
        // use the data-target thingy

      }, {
        key: "addUser",
        value: function addUser() {
          console.log("Add User triggered.");
        }
      }, {
        key: "editUser",
        value: function editUser(userId) {
          console.log("Edit User '$userId' triggered.");
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          console.log("Delete User '$userId' triggered.");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.userService.getAllUsers().unsubscribe();
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/users/users.component.css"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/users/users.module.ts":
  /*!***************************************!*\
    !*** ./src/app/users/users.module.ts ***!
    \***************************************/

  /*! exports provided: UsersModule */

  /***/
  function srcAppUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/users/user.service.ts");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/users/users-routing.module.ts");
    /* harmony import */


    var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _userform_userform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./userform/userform.component */
    "./src/app/users/userform/userform.component.ts");

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _userform_userform_component__WEBPACK_IMPORTED_MODULE_7__["UserformComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
      providers: [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
    })], UsersModule);
    /***/
  }
}]);
//# sourceMappingURL=users-users-module-es5.js.map