(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-pipes-custom-pipes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-pipes/custom-pipes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-pipes/custom-pipes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>custom-pipes works!</p>\n\n<p>{{ inputStr | manyTypes }}</p>\n<br />\n<p>{{ inputNum | manyTypes }}</p>\n<br />\n<p>{{ inputDate | manyTypes }}</p>\n");

/***/ }),

/***/ "./src/app/custom-pipes/custom-pipes-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomPipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipesRoutingModule", function() { return CustomPipesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _custom_pipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-pipes.component */ "./src/app/custom-pipes/custom-pipes.component.ts");




const routes = [
    {
        path: '', component: _custom_pipes_component__WEBPACK_IMPORTED_MODULE_3__["CustomPipesComponent"]
    }
];
let CustomPipesRoutingModule = class CustomPipesRoutingModule {
};
CustomPipesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomPipesRoutingModule);



/***/ }),

/***/ "./src/app/custom-pipes/custom-pipes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1waXBlcy9jdXN0b20tcGlwZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/custom-pipes/custom-pipes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.component.ts ***!
  \********************************************************/
/*! exports provided: CustomPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipesComponent", function() { return CustomPipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomPipesComponent = class CustomPipesComponent {
    constructor() {
        this.inputDate = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);
    }
    ngOnInit() {
        this.inputStr = "Input String";
        this.inputNum = 4000;
        console.log(typeof this.inputDate.getDate, String(this.inputDate.getDate));
    }
};
CustomPipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-pipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-pipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-pipes/custom-pipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-pipes.component.css */ "./src/app/custom-pipes/custom-pipes.component.css")).default]
    })
], CustomPipesComponent);



/***/ }),

/***/ "./src/app/custom-pipes/custom-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-pipes/custom-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipesModule", function() { return CustomPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _custom_pipes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-pipes-routing.module */ "./src/app/custom-pipes/custom-pipes-routing.module.ts");
/* harmony import */ var _custom_pipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-pipes.component */ "./src/app/custom-pipes/custom-pipes.component.ts");
/* harmony import */ var _many_types_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./many-types.pipe */ "./src/app/custom-pipes/many-types.pipe.ts");






let CustomPipesModule = class CustomPipesModule {
};
CustomPipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_custom_pipes_component__WEBPACK_IMPORTED_MODULE_4__["CustomPipesComponent"], _many_types_pipe__WEBPACK_IMPORTED_MODULE_5__["ManyTypesPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _custom_pipes_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomPipesRoutingModule"]],
        providers: []
    })
], CustomPipesModule);



/***/ }),

/***/ "./src/app/custom-pipes/many-types.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-pipes/many-types.pipe.ts ***!
  \*************************************************/
/*! exports provided: ManyTypesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyTypesPipe", function() { return ManyTypesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManyTypesPipe = class ManyTypesPipe {
    transform(value, ...args) {
        let resType = "Unknown Type";
        if (value instanceof Date) {
            resType = "Date Object";
        }
        else if (typeof value === 'string') {
            resType = "string";
        }
        else if (typeof value === 'number') {
            resType = "number";
        }
        else if (typeof value === 'object') {
            resType = "object";
        }
        return `Value is a ${resType}: ${value}`;
    }
};
ManyTypesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'manyTypes'
    })
], ManyTypesPipe);



/***/ })

}]);
//# sourceMappingURL=custom-pipes-custom-pipes-module-es2015.js.map