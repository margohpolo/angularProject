(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["local-itemlist-local-itemlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" style=\"padding-bottom: 5px;\">\n    <div class=\"row form-group\">\n        <div class=\"row\">\n            <div class=\"float-start\">\n                <label for=\"item\">Item</label>\n                <input type=\"text\" id=\"Item\" class=\"form-control\" name=\"Item\" ngModel required />\n            </div>\n            <div class=\"float-end\">\n                <label for=\"quantity\">Quantity</label>\n                <input type=\"number\" id=\"Quantity\" class=\"form-control\" name=\"Quantity\" ngModel required pattern=\"^[1-9]+[0-9]*$\" />\n            </div>\n        </div>\n        <div class=\"row\" style=\"padding-top: 15px;\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n            <button class=\"btn btn-dark\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n        \n\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row col-md-12\">\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey; padding-left: 25px;\">\r\n        <h3>Item List:</h3>\r\n        <ul class=\"list-group\">\r\n            <a class=\"list-group-item\" style=\"cursor: pointer;\" *ngFor=\"let item of items; let i = index\" (click)=\"onEditItem(i)\">\r\n                {{ item.item }} - {{ item.quantity }}\r\n            </a>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey; \">\r\n        <app-edit-item></app-edit-item>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"border:1px solid grey;\">\r\n        <h3>Item List From Session Storage:</h3>\r\n        <br />\r\n        <ul>\r\n            <li *ngFor=\"let item of seshItems\">\r\n                {{ item.item }} - {{ item.quantity }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/local-itemlist/edit-item/edit-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/local-itemlist/edit-item/edit-item.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsLWl0ZW1saXN0L2VkaXQtaXRlbS9lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/local-itemlist/edit-item/edit-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/local-itemlist/edit-item/edit-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-itemlist.service */ "./src/app/local-itemlist/local-itemlist.service.ts");



let EditItemComponent = class EditItemComponent {
    constructor(localItemListService) {
        this.localItemListService = localItemListService;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.localItemListService.startedEditing.subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.localItemListService.getItem(index);
            this.editForm.setValue({ Item: this.editedItem.item, Quantity: this.editedItem.quantity });
        });
    }
    onClear() {
        this.editForm.reset();
        this.editMode = false;
    }
    onSubmit(form) {
        const value = form.value;
        const newItem = new _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["Item"](value.Item, value.Quantity);
        if (this.editMode) {
            this.localItemListService.updateItem(this.editedItemIndex, newItem);
        }
        else {
            // console.log(typeof newItem, newItem);
            this.localItemListService.addItem(newItem);
        }
        this.onClear();
    }
    onDelete() {
        this.localItemListService.deleteItem(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() { this.subscription.unsubscribe(); }
};
EditItemComponent.ctorParameters = () => [
    { type: _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], EditItemComponent.prototype, "editForm", void 0);
EditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/edit-item/edit-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-item.component.css */ "./src/app/local-itemlist/edit-item/edit-item.component.css")).default]
    })
], EditItemComponent);



/***/ }),

/***/ "./src/app/local-itemlist/local-itemlist-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/local-itemlist/local-itemlist-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LocalItemListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalItemListRoutingModule", function() { return LocalItemListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-itemlist.component */ "./src/app/local-itemlist/local-itemlist.component.ts");




const routes = [
    {
        path: '', component: _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__["LocalItemListComponent"]
    }
];
let LocalItemListRoutingModule = class LocalItemListRoutingModule {
};
LocalItemListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LocalItemListRoutingModule);



/***/ }),

/***/ "./src/app/local-itemlist/local-itemlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/local-itemlist/local-itemlist.component.ts ***!
  \************************************************************/
/*! exports provided: LocalItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalItemListComponent", function() { return LocalItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-itemlist.service */ "./src/app/local-itemlist/local-itemlist.service.ts");



let LocalItemListComponent = class LocalItemListComponent {
    constructor(localItemListService) {
        this.localItemListService = localItemListService;
    }
    ngOnInit() {
        this.items = this.localItemListService.getItems();
        this.subscription = this.localItemListService.itemsChanged.subscribe((itemList) => { this.items = itemList; });
        this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
        console.log("seshItems:", this.seshItems);
    }
    ngDoCheck() {
        sessionStorage.setItem("Items", JSON.stringify(this.items));
        console.log("seshStorage:", JSON.parse(sessionStorage.getItem("Items")));
        this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
        console.log("seshItems:", this.seshItems);
    }
    onEditItem(index) {
        this.localItemListService.startedEditing.next(index);
    }
    ngOnDestroy() { this.subscription.unsubscribe(); }
};
LocalItemListComponent.ctorParameters = () => [
    { type: _local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"] }
];
LocalItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-local-itemlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./local-itemlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/local-itemlist/local-itemlist.component.html")).default,
        providers: [_local_itemlist_service__WEBPACK_IMPORTED_MODULE_2__["LocalItemListService"]]
    })
], LocalItemListComponent);



/***/ }),

/***/ "./src/app/local-itemlist/local-itemlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/local-itemlist/local-itemlist.module.ts ***!
  \*********************************************************/
/*! exports provided: LocalItemlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalItemlistModule", function() { return LocalItemlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-itemlist.component */ "./src/app/local-itemlist/local-itemlist.component.ts");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "./src/app/local-itemlist/edit-item/edit-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _local_itemlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-itemlist.service */ "./src/app/local-itemlist/local-itemlist.service.ts");
/* harmony import */ var _local_itemlist_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-itemlist-routing.module */ "./src/app/local-itemlist/local-itemlist-routing.module.ts");








let LocalItemlistModule = class LocalItemlistModule {
};
LocalItemlistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_local_itemlist_component__WEBPACK_IMPORTED_MODULE_3__["LocalItemListComponent"], _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__["EditItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _local_itemlist_routing_module__WEBPACK_IMPORTED_MODULE_7__["LocalItemListRoutingModule"]
        ],
        providers: [
            _local_itemlist_service__WEBPACK_IMPORTED_MODULE_6__["LocalItemListService"]
        ]
    })
], LocalItemlistModule);



/***/ }),

/***/ "./src/app/local-itemlist/local-itemlist.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/local-itemlist/local-itemlist.service.ts ***!
  \**********************************************************/
/*! exports provided: Item, LocalItemListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalItemListService", function() { return LocalItemListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class Item {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
}
let LocalItemListService = class LocalItemListService {
    constructor() {
        this.itemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = [
            new Item('Item One', 1),
            new Item('Item Two', 2),
        ];
        // constructor() {}
    }
    getItems() {
        return this.items.slice();
    }
    getItem(index) { return this.items[index]; }
    addItem(item) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }
    updateItem(index, newItem) {
        this.items[index] = newItem;
        this.itemsChanged.next(this.items.slice());
    }
    deleteItem(index) {
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    }
};
LocalItemListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LocalItemListService);



/***/ })

}]);
//# sourceMappingURL=local-itemlist-local-itemlist-module-es2015.js.map