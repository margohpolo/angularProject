(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row w-100\" style=\"display:flex;\">\n    <div *ngFor=\"let post of (allPost$ | async)\" class=\"card\" style=\"width: 18rem;\">\n        <h3>Post ID: {{post.id}}</h3>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Title: {{post.title}}</h5>\n            <a [routerLink]=\"['/blog', post.id]\" routerLinkActive=\"active\" class=\"btn btn-primary\"\n                id=\"{{post.id}}\" [ngStyle]=\"{'background-color': 'red'}\" (click)=\"componentRedirect(post.id)\">\n                Read More</a>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/singlepost/singlepost.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/singlepost/singlepost.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: grid; grid-gap: 20px;\">\n    <h2>{{ post.title | String }}</h2>\n    <br />\n    <div style=\"text-align: left;\">\n        <p>{{ post.body | String }}</p>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/blog/singlepost/singlepost.component.ts");




// import { PostResolver } from "./postresolver.service";

const routes = [
    {
        path: '', component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
    },
    {
        // path:':postId', component: SinglepostComponent, resolve: {post: PostResolver}
        path: ':postId', component: _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_4__["SinglepostComponent"]
    }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BlogRoutingModule);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");




let BlogComponent = class BlogComponent {
    // allPost$: Subscription;
    constructor(blogService, _router) {
        this.blogService = blogService;
        this._router = _router;
    }
    // @Output() postIdEmitter = new EventEmitter<number>();
    ngOnInit() {
        // this.allPost$ = this.blogService.getAllPosts().pipe(map(res => res)).subscribe(res => res);
        this.allPost$ = this.blogService.getAllPosts();
        console.log(typeof this.allPost$, this.allPost$);
    }
    componentRedirect(postId) {
        event.preventDefault();
        this._router.navigate(['blog/', postId]);
        // console.log(this.svcId, this.title, this.heading, this.description);
        // this.articleEmitter.emit(this.service);
    }
};
BlogComponent.ctorParameters = () => [
    { type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
        providers: [_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/blog/singlepost/singlepost.component.ts");






let BlogModule = class BlogModule {
};
BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_5__["SinglepostComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlogRoutingModule"]
        ],
        providers: []
    })
], BlogModule);



/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let BlogService = class BlogService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myAppUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mockendBlogUrl;
        this.myApiUrl = '/posts';
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    getAllPosts() {
        // return this.http.get<User[]>(environment.mockendUsersUrl + "users", {observe: 'response'});
        return this.http.get(this.myAppUrl + this.myApiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    getPostById(postId) {
        // return this.http.get<User>(`${environment.mockendUsersUrl}/users/${userId}`, {observe: 'response'}).pipe(map(res => res));
        return this.http.get(this.myAppUrl + this.myApiUrl + '/' + postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    createPost(postDetails) {
        // return this.http.post<User>(`${environment.mockendUsersUrl}/users`, userDetails);
        return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(postDetails), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    updatePost(postId, postUpdate) {
        // const httpOptions = {
        // method: 'PUT',
        // body: JSON.stringify(userUpdate),
        // headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        // })
        // };
        // return this.http.put<User>(`${environment.mockendUsersUrl}/users/${userId}`, JSON.stringify(userUpdate), httpOptions);
        return this.http.put(this.myAppUrl + this.myApiUrl + '/' + postId, JSON.stringify(postUpdate), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    deletePost(postId) {
        // return this.http.delete<User>(`${environment.mockendUsersUrl}/users/${userId}`);
        return this.http.delete(this.myAppUrl + this.myApiUrl + '/' + postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
};
BlogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ "./src/app/blog/singlepost/singlepost.component.css":
/*!**********************************************************!*\
  !*** ./src/app/blog/singlepost/singlepost.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvc2luZ2xlcG9zdC9zaW5nbGVwb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/blog/singlepost/singlepost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/blog/singlepost/singlepost.component.ts ***!
  \*********************************************************/
/*! exports provided: SinglepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function() { return SinglepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog/blog.service.ts");




let SinglepostComponent = class SinglepostComponent {
    // @Input('postIdEmitter') postId: number;
    constructor(blogService, route) {
        this.blogService = blogService;
        this.route = route;
    }
    ngOnInit() {
        // this.blogService.getPostById(this.postId).subscribe(res => this.post = res);
        // this.blogService.getPostById(Number(this.route.snapshot.paramMap.get('postId'))).pipe(map(res => {this.post = res})).subscribe();
        // // Add Resolver
        // this.route.data.subscribe(
        //   (data: Data) => {
        //     this.post = data['post'];
        //   }
        // );
        console.log(this.post);
    }
};
SinglepostComponent.ctorParameters = () => [
    { type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SinglepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-singlepost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./singlepost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/singlepost/singlepost.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./singlepost.component.css */ "./src/app/blog/singlepost/singlepost.component.css")).default]
    })
], SinglepostComponent);



/***/ })

}]);
//# sourceMappingURL=blog-blog-module-es2015.js.map