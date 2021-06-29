function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["local-itemlist-local-itemlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocalItemlistEditItemEditItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" style=\"padding-bottom: 5px;\">\n    <div class=\"row form-group\">\n        <div class=\"row\">\n            <div class=\"float-start\">\n                <label for=\"item\">Item</label>\n                <input type=\"text\" id=\"Item\" class=\"form-control\" name=\"Item\" ngModel required />\n            </div>\n            <div class=\"float-end\">\n                <label for=\"quantity\">Quantity</label>\n                <input type=\"number\" id=\"Quantity\" class=\"form-control\" name=\"Quantity\" ngModel required pattern=\"^[1-9]+[0-9]*$\" />\n            </div>\n        </div>\n        <div class=\"row\" style=\"padding-top: 15px;\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n            <button class=\"btn btn-dark\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n        \n\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocalItemlistLocalItemlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col-md-12\">\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey; padding-left: 25px;\">\r\n        <h3>Item List:</h3>\r\n        <ul class=\"list-group\">\r\n            <a class=\"list-group-item\" style=\"cursor: pointer;\" *ngFor=\"let item of items; let i = index\" (click)=\"onEditItem(i)\">\r\n                {{ item.item }} - {{ item.quantity }}\r\n            </a>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey; \">\r\n        <app-edit-item></app-edit-item>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey;\">\r\n        <h3>Item List From Session Storage:</h3>\r\n        <br />\r\n        <ul>\r\n            <li *ngFor=\"let item of seshItems\">\r\n                {{ item.item }} - {{ item.quantity }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/local-itemlist/edit-item/edit-item.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/local-itemlist/edit-item/edit-item.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocalItemlistEditItemEditItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsLWl0ZW1saXN0L2VkaXQtaXRlbS9lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/local-itemlist/edit-item/edit-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/local-itemlist/edit-item/edit-item.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditItemComponent */

  /***/
  function srcAppLocalItemlistEditItemEditItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditItemComponent", function () {
      return EditItemComponent;
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


    var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../local-itemlist.service */
    "./src/app/local-itemlist/local-itemlist.service.ts");

    var EditItemComponent = /*#__PURE__*/function () {
      function EditItemComponent(localItemListService) {
        _classCallCheck(this, EditItemComponent);

        this.localItemListService = localItemListService;
        this.editMode = false;
      }

      _createClass(EditItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.localItemListService.startedEditing.subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.localItemListService.getItem(index);

            _this.editForm.setValue({
              Item: _this.editedItem.item,
              Quantity: _this.editedItem.quantity
            });
          });
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.editForm.reset();
          this.editMode = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var value = form.value;
          var newItem = new _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["Item"](value.Item, value.Quantity);

          if (this.editMode) {
            this.localItemListService.updateItem(this.editedItemIndex, newItem);
          } else {
            // console.log(typeof newItem, newItem);
            this.localItemListService.addItem(newItem);
          }

          this.onClear();
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.localItemListService.deleteItem(this.editedItemIndex);
          this.onClear();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return EditItemComponent;
    }();

    EditItemComponent.ctorParameters = function () {
      return [{
        type: _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      "static": false
    })], EditItemComponent.prototype, "editForm", void 0);
    EditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-item.component.css */
      "./src/app/local-itemlist/edit-item/edit-item.component.css"))["default"]]
    })], EditItemComponent);
    /***/
  },

  /***/
  "./src/app/local-itemlist/local-itemlist-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/local-itemlist/local-itemlist-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: LocalItemListRoutingModule */

  /***/
  function srcAppLocalItemlistLocalItemlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalItemListRoutingModule", function () {
      return LocalItemListRoutingModule;
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


    var _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./local-itemlist.component */
    "./src/app/local-itemlist/local-itemlist.component.ts");

    var routes = [{
      path: '',
      component: _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__["LocalItemListComponent"]
    }];

    var LocalItemListRoutingModule = function LocalItemListRoutingModule() {
      _classCallCheck(this, LocalItemListRoutingModule);
    };

    LocalItemListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LocalItemListRoutingModule);
    /***/
  },

  /***/
  "./src/app/local-itemlist/local-itemlist.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/local-itemlist/local-itemlist.component.ts ***!
    \************************************************************/

  /*! exports provided: LocalItemListComponent */

  /***/
  function srcAppLocalItemlistLocalItemlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalItemListComponent", function () {
      return LocalItemListComponent;
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


    var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./local-itemlist.service */
    "./src/app/local-itemlist/local-itemlist.service.ts");

    var LocalItemListComponent = /*#__PURE__*/function () {
      function LocalItemListComponent(localItemListService) {
        _classCallCheck(this, LocalItemListComponent);

        this.localItemListService = localItemListService;
      }

      _createClass(LocalItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.items = this.localItemListService.getItems();
          this.subscription = this.localItemListService.itemsChanged.subscribe(function (itemList) {
            _this2.items = itemList;
          });
          this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
          console.log("seshItems:", this.seshItems);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          sessionStorage.setItem("Items", JSON.stringify(this.items));
          console.log("seshStorage:", JSON.parse(sessionStorage.getItem("Items")));
          this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
          console.log("seshItems:", this.seshItems);
        }
      }, {
        key: "onEditItem",
        value: function onEditItem(index) {
          this.localItemListService.startedEditing.next(index);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return LocalItemListComponent;
    }();

    LocalItemListComponent.ctorParameters = function () {
      return [{
        type: _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"]
      }];
    };

    LocalItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-local-itemlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./local-itemlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html"))["default"],
      providers: [_local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"]]
    })], LocalItemListComponent);
    /***/
  },

  /***/
  "./src/app/local-itemlist/local-itemlist.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/local-itemlist/local-itemlist.module.ts ***!
    \*********************************************************/

  /*! exports provided: LocalItemlistModule */

  /***/
  function srcAppLocalItemlistLocalItemlistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalItemlistModule", function () {
      return LocalItemlistModule;
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


    var _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./local-itemlist.component */
    "./src/app/local-itemlist/local-itemlist.component.ts");
    /* harmony import */


    var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-item/edit-item.component */
    "./src/app/local-itemlist/edit-item/edit-item.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./local-itemlist.service */
    "./src/app/local-itemlist/local-itemlist.service.ts");
    /* harmony import */


    var _local_itemlist_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./local-itemlist-routing.module */
    "./src/app/local-itemlist/local-itemlist-routing.module.ts");

    var LocalItemlistModule = function LocalItemlistModule() {
      _classCallCheck(this, LocalItemlistModule);
    };

    LocalItemlistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__["LocalItemListComponent"], _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__["EditItemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _local_itemlist_routing_module__WEBPACK_IMPORTED_MODULE_7__["LocalItemListRoutingModule"]],
      providers: [_local_itemlist_service__WEBPACK_IMPORTED_MODULE_6__["LocalItemListService"]]
    })], LocalItemlistModule);
    /***/
  },

  /***/
  "./src/app/local-itemlist/local-itemlist.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/local-itemlist/local-itemlist.service.ts ***!
    \**********************************************************/

  /*! exports provided: Item, LocalItemListService */

  /***/
  function srcAppLocalItemlistLocalItemlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Item", function () {
      return Item;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalItemListService", function () {
      return LocalItemListService;
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

    var Item = function Item(item, quantity) {
      _classCallCheck(this, Item);

      this.item = item;
      this.quantity = quantity;
    };

    var LocalItemListService = /*#__PURE__*/function () {
      function LocalItemListService() {
        _classCallCheck(this, LocalItemListService);

        this.itemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = [new Item('Item One', 1), new Item('Item Two', 2)]; // constructor() {}
      }

      _createClass(LocalItemListService, [{
        key: "getItems",
        value: function getItems() {
          return this.items.slice();
        }
      }, {
        key: "getItem",
        value: function getItem(index) {
          return this.items[index];
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          this.items.push(item);
          this.itemsChanged.next(this.items.slice());
        }
      }, {
        key: "updateItem",
        value: function updateItem(index, newItem) {
          this.items[index] = newItem;
          this.itemsChanged.next(this.items.slice());
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(index) {
          this.items.splice(index, 1);
          this.itemsChanged.next(this.items.slice());
        }
      }]);

      return LocalItemListService;
    }();

    LocalItemListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LocalItemListService);
    /***/
  }
}]);
//# sourceMappingURL=local-itemlist-local-itemlist-module-es5.js.map