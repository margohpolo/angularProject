function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["final-test-final-test-module"], {
  /***/
  "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js":
  /*!**********************************************************!*\
    !*** ./node_modules/ngx-echarts/fesm2015/ngx-echarts.js ***!
    \**********************************************************/

  /*! exports provided: NGX_ECHARTS_CONFIG, NgxEchartsDirective, NgxEchartsModule */

  /***/
  function node_modulesNgxEchartsFesm2015NgxEchartsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGX_ECHARTS_CONFIG", function () {
      return NGX_ECHARTS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxEchartsDirective", function () {
      return NgxEchartsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxEchartsModule", function () {
      return NgxEchartsModule;
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


    var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! resize-observer-polyfill */
    "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ChangeFilter = /*#__PURE__*/function () {
      function ChangeFilter(changes) {
        _classCallCheck(this, ChangeFilter);

        this.changes = changes;
      }

      _createClass(ChangeFilter, [{
        key: "notEmpty",
        value: function notEmpty(key) {
          if (this.changes[key]) {
            var value = this.changes[key].currentValue;

            if (value !== undefined && value !== null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "has",
        value: function has(key) {
          if (this.changes[key]) {
            var value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "notFirst",
        value: function notFirst(key) {
          if (this.changes[key] && !this.changes[key].isFirstChange()) {
            var value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "notFirstAndEmpty",
        value: function notFirstAndEmpty(key) {
          if (this.changes[key] && !this.changes[key].isFirstChange()) {
            var value = this.changes[key].currentValue;

            if (value !== undefined && value !== null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }], [{
        key: "of",
        value: function of(changes) {
          return new ChangeFilter(changes);
        }
      }]);

      return ChangeFilter;
    }();

    var NGX_ECHARTS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGX_ECHARTS_CONFIG');

    var NgxEchartsDirective = /*#__PURE__*/function () {
      function NgxEchartsDirective(config, el, ngZone) {
        _classCallCheck(this, NgxEchartsDirective);

        this.el = el;
        this.ngZone = ngZone;
        this.autoResize = true;
        this.loadingType = 'default'; // ngx-echarts events

        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.optionsError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // echarts mouse events

        this.chartClick = this.createLazyEvent('click');
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartMouseDown = this.createLazyEvent('mousedown');
        this.chartMouseMove = this.createLazyEvent('mousemove');
        this.chartMouseUp = this.createLazyEvent('mouseup');
        this.chartMouseOver = this.createLazyEvent('mouseover');
        this.chartMouseOut = this.createLazyEvent('mouseout');
        this.chartGlobalOut = this.createLazyEvent('globalout');
        this.chartContextMenu = this.createLazyEvent('contextmenu'); // echarts mouse events

        this.chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
        this.chartLegendSelected = this.createLazyEvent('legendselected');
        this.chartLegendUnselected = this.createLazyEvent('legendunselected');
        this.chartLegendScroll = this.createLazyEvent('legendscroll');
        this.chartDataZoom = this.createLazyEvent('datazoom');
        this.chartDataRangeSelected = this.createLazyEvent('datarangeselected');
        this.chartTimelineChanged = this.createLazyEvent('timelinechanged');
        this.chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
        this.chartRestore = this.createLazyEvent('restore');
        this.chartDataViewChanged = this.createLazyEvent('dataviewchanged');
        this.chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
        this.chartPieSelectChanged = this.createLazyEvent('pieselectchanged');
        this.chartPieSelected = this.createLazyEvent('pieselected');
        this.chartPieUnselected = this.createLazyEvent('pieunselected');
        this.chartMapSelectChanged = this.createLazyEvent('mapselectchanged');
        this.chartMapSelected = this.createLazyEvent('mapselected');
        this.chartMapUnselected = this.createLazyEvent('mapunselected');
        this.chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
        this.chartFocusNodeAdjacency = this.createLazyEvent('focusnodeadjacency');
        this.chartUnfocusNodeAdjacency = this.createLazyEvent('unfocusnodeadjacency');
        this.chartBrush = this.createLazyEvent('brush');
        this.chartBrushEnd = this.createLazyEvent('brushend');
        this.chartBrushSelected = this.createLazyEvent('brushselected');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartFinished = this.createLazyEvent('finished');
        this.animationFrameID = null;
        this.echarts = config.echarts;
      }

      _createClass(NgxEchartsDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this2 = this;

          var filter = ChangeFilter.of(changes);
          filter.notFirstAndEmpty('options').subscribe(function (opt) {
            return _this2.onOptionsChange(opt);
          });
          filter.notFirstAndEmpty('merge').subscribe(function (opt) {
            return _this2.setOption(opt);
          });
          filter.has('loading').subscribe(function (v) {
            return _this2.toggleLoading(!!v);
          });
          filter.notFirst('theme').subscribe(function () {
            return _this2.refreshChart();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.autoResize) {
            this.resizeSub = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function () {
              _this3.animationFrameID = window.requestAnimationFrame(function () {
                return _this3.resize();
              });
            });
            this.resizeSub.observe(this.el.nativeElement);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSub) {
            this.resizeSub.unobserve(this.el.nativeElement);
            window.cancelAnimationFrame(this.animationFrameID);
          }

          this.dispose();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          setTimeout(function () {
            return _this4.initChart();
          });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          if (this.chart) {
            this.chart.dispose();
            this.chart = null;
          }
        }
        /**
         * resize chart
         */

      }, {
        key: "resize",
        value: function resize() {
          if (this.chart) {
            this.chart.resize();
          }
        }
      }, {
        key: "toggleLoading",
        value: function toggleLoading(loading) {
          if (this.chart) {
            loading ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading();
          }
        }
      }, {
        key: "setOption",
        value: function setOption(option, opts) {
          if (this.chart) {
            try {
              this.chart.setOption(option, opts);
            } catch (e) {
              console.error(e);
              this.optionsError.emit(e);
            }
          }
        }
        /**
         * dispose old chart and create a new one.
         */

      }, {
        key: "refreshChart",
        value: function refreshChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dispose();
                    _context.next = 3;
                    return this.initChart();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "createChart",
        value: function createChart() {
          var _this5 = this;

          var dom = this.el.nativeElement;

          if (window && window.getComputedStyle) {
            var prop = window.getComputedStyle(dom, null).getPropertyValue('height');

            if ((!prop || prop === '0px') && (!dom.style.height || dom.style.height === '0px')) {
              dom.style.height = '400px';
            }
          } // here a bit tricky: we check if the echarts module is provided as function returning native import('...') then use the promise
          // otherwise create the function that imitates behaviour above with a provided as is module


          return this.ngZone.runOutsideAngular(function () {
            var load = typeof _this5.echarts === 'function' ? _this5.echarts : function () {
              return Promise.resolve(_this5.echarts);
            };
            return load().then(function (_ref) {
              var init = _ref.init;
              return init(dom, _this5.theme, _this5.initOpts);
            });
          });
        }
      }, {
        key: "initChart",
        value: function initChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.onOptionsChange(this.options);

                  case 2:
                    if (this.merge && this.chart) {
                      this.setOption(this.merge);
                    }

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onOptionsChange",
        value: function onOptionsChange(opt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (opt) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    if (!this.chart) {
                      _context3.next = 6;
                      break;
                    }

                    this.setOption(this.options, true);
                    _context3.next = 11;
                    break;

                  case 6:
                    _context3.next = 8;
                    return this.createChart();

                  case 8:
                    this.chart = _context3.sent;
                    this.chartInit.emit(this.chart);
                    this.setOption(this.options, true);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // allows to lazily bind to only those events that are requested through the `@Output` by parent components
        // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info

      }, {
        key: "createLazyEvent",
        value: function createLazyEvent(eventName) {
          var _this6 = this;

          return this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (chart) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              chart.on(eventName, function (data) {
                return _this6.ngZone.run(function () {
                  return observer.next(data);
                });
              });
              return function () {
                return chart.off(eventName);
              };
            });
          }));
        }
      }]);

      return NgxEchartsDirective;
    }();

    NgxEchartsDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGX_ECHARTS_CONFIG]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "initOpts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "merge", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "autoResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loadingType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loadingOpts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "optionsError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartGlobalOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataRangeSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartTimelineChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartTimelinePlayChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartRestore", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataViewChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMagicTypeChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartAxisAreaSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartFocusNodeAdjacency", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartUnfocusNodeAdjacency", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrush", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrushEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrushSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartRendered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartFinished", void 0);
    NgxEchartsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'echarts, [echarts]',
      exportAs: 'echarts'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_ECHARTS_CONFIG))], NgxEchartsDirective);
    var NgxEchartsModule_1;

    var NgxEchartsModule = NgxEchartsModule_1 = /*#__PURE__*/function () {
      function NgxEchartsModule() {
        _classCallCheck(this, NgxEchartsModule);
      }

      _createClass(NgxEchartsModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: NgxEchartsModule_1,
            providers: [{
              provide: NGX_ECHARTS_CONFIG,
              useValue: config
            }]
          };
        }
      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: NgxEchartsModule_1
          };
        }
      }]);

      return NgxEchartsModule;
    }();

    NgxEchartsModule = NgxEchartsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      declarations: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    })], NgxEchartsModule);
    /*
     * Public API Surface of ngx-echarts
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-echarts.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/final-test.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/final-test.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFinalTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-ft-login></app-ft-login>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-admin.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-admin.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtBoardAdminFtBoardAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <section class=\"row\">\r\n    <a>{{content}}</a>\r\n  </section>\r\n  <div class=\"row col-md-12\">\r\n    <h3>Admin Dashboard</h3>\r\n    <app-ft-board-chart></app-ft-board-chart>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtBoardAdminFtBoardChartFtBoardChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><em>Chart</em></h3>\n<br />\n<div echarts [options]=\"options\" class=\"demo-chart\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-user/ft-board-user.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-user/ft-board-user.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtBoardUserFtBoardUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <header class=\"jumbotron\">\r\n    <p>{{ content }}</p>\r\n  </header>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-login/ft-login.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-login/ft-login.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtLoginFtLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n    <div class=\"card card-container\">\n        <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n                    #username=\"ngModel\" />\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && username.invalid\">\n                    Username is required!\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required\n                    minlength=\"6\" #password=\"ngModel\" />\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">\n                        Password must be at least 6 characters\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary btn-block\">\n                    Login\n                </button>\n            </div>\n            <div class=\"sign-up\">\n                Don't have an account? <a href=\"#\" routerLink=\"/final-test/ft-signup\">Create One</a>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\">\n                    Login failed: {{ errorMessage }}\n                </div>\n            </div>\n        </form>\n\n        <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n            Logged in as {{ roles }}.\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-signupform/ft-signupform.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-signupform/ft-signupform.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtSignupformFtSignupformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n    <div class=\"card card-container\">\n        <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n                    minlength=\"3\" maxlength=\"20\" #username=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n                    <div *ngIf=\"username.errors.required\">Username is required</div>\n                    <div *ngIf=\"username.errors.minlength\">\n                        Username must be at least 3 characters\n                    </div>\n                    <div *ngIf=\"username.errors.maxlength\">\n                        Username must be at most 20 characters\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" required email\n                    #email=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                    <div *ngIf=\"email.errors.email\">\n                        Email must be a valid email address\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required\n                    minlength=\"6\" #password=\"ngModel\" />\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">\n                        Password must be at least 6 characters\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary btn-block\">Sign Up</button>\n            </div>\n\n            <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n                Signup failed!<br />{{ errorMessage }}\n            </div>\n        </form>\n\n        <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n            Your registration is successful!\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-users/users.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-users/users.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalTestFtUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table table-light\">\n    <thead class=\"table-light\">\n        <tr>\n            <th scope=\"col\">Id</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">UserName</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\"><button type=\"button\" class=\"btn btn-dark\" data-bs-toggle=\"modal\" data-bs-target=\"usersmodal\" (click)=\"addUser()\">Add User</button></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of (allUser$ | async)\">\n            <th scope=\"row\">{{ user.id }}</th>\n            <td>{{ user.name }}</td>\n            <td>{{ user.username }}</td>\n            <td>{{ user.email }}</td>\n            <!-- <td>{{ user.address }}</td> -->\n            <!-- <td>{{ user.country }}</td> -->\n            <td>\n                <button type=\"button\" class=\"btn btn-warning\" data-bs-toggle=\"modal\" data-bs-target=\"usersmodal\" (click)=\"editUser(user.id)\">Edit</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser(user.id)\">Delete</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"modal fade\" id=\"usersmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"usersmodallabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\" role=\"form\">\n        <div class=\"modal-content\">\n            <!-- Update/Delete Form in Modal -->\n        </div>\n    </div>\n    <div class=\"modal-footer\" class=\"btn btn-dark\" data-bs-dismiss=\"modal\">Back</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesResizeObserverPolyfillDistResizeObserverEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */

    /* eslint-disable require-jsdoc, valid-jsdoc */


    var MapShim = function () {
      if (typeof Map !== 'undefined') {
        return Map;
      }
      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */


      function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
          if (entry[0] === key) {
            result = index;
            return true;
          }

          return false;
        });
        return result;
      }

      return (
        /** @class */
        function () {
          function class_1() {
            this.__entries__ = [];
          }

          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function get() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          /**
           * @param {*} key
           * @returns {*}
           */

          class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
          };
          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */


          class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
              this.__entries__[index][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype["delete"] = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
              entries.splice(index, 1);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
          };
          /**
           * @returns {void}
           */


          class_1.prototype.clear = function () {
            this.__entries__.splice(0);
          };
          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */


          class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }

            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };

          return class_1;
        }()
      );
    }();
    /**
     * Detects whether window and document objects are available in current environment.
     */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

    var global$1 = function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
      } // eslint-disable-next-line no-new-func


      return Function('return this')();
    }();
    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */


    var requestAnimationFrame$1 = function () {
      if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
      }

      return function (callback) {
        return setTimeout(function () {
          return callback(Date.now());
        }, 1000 / 60);
      };
    }(); // Defines minimum timeout before adding a trailing call.


    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */

    function throttle(callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;
      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */

      function resolvePending() {
        if (leadingCall) {
          leadingCall = false;
          callback();
        }

        if (trailingCall) {
          proxy();
        }
      }
      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */


      function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
      }
      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */


      function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
          // Reject immediately following calls.
          if (timeStamp - lastCallTime < trailingTimeout) {
            return;
          } // Schedule new call to be in invoked when the pending one is resolved.
          // This is important for "transitions" which never actually start
          // immediately so there is a chance that we might miss one if change
          // happens amids the pending invocation.


          trailingCall = true;
        } else {
          leadingCall = true;
          trailingCall = false;
          setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
      }

      return proxy;
    } // Minimum delay before invoking the update of observers.


    var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.

    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */

    var ResizeObserverController =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserverController.
       *
       * @private
       */
      function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */

        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */

        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */

        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      /**
       * Adds observer to observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be added.
       * @returns {void}
       */


      ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        } // Add listeners if they haven't been added yet.


        if (!this.connected_) {
          this.connect_();
        }
      };
      /**
       * Removes observer from observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be removed.
       * @returns {void}
       */


      ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer); // Remove observer if it's present in registry.

        if (~index) {
          observers.splice(index, 1);
        } // Remove listeners if controller has no connected observers.


        if (!observers.length && this.connected_) {
          this.disconnect_();
        }
      };
      /**
       * Invokes the update of observers. It will continue running updates insofar
       * it detects changes.
       *
       * @returns {void}
       */


      ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.

        if (changesDetected) {
          this.refresh();
        }
      };
      /**
       * Updates every observer from observers list and notifies them of queued
       * entries.
       *
       * @private
       * @returns {boolean} Returns "true" if any observer has detected changes in
       *      dimensions of it's elements.
       */


      ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
        }); // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.

        activeObservers.forEach(function (observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      /**
       * Initializes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
          return;
        } // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.


        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);
          this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
      };
      /**
       * Removes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
          return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      /**
       * "Transitionend" event handler.
       *
       * @private
       * @param {TransitionEvent} event
       * @returns {void}
       */


      ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName,
            propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

        var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
          this.refresh();
        }
      };
      /**
       * Returns instance of the ResizeObserverController.
       *
       * @returns {ResizeObserverController}
       */


      ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
      };
      /**
       * Holds reference to the controller's instance.
       *
       * @private {ResizeObserverController}
       */


      ResizeObserverController.instance_ = null;
      return ResizeObserverController;
    }();
    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */


    var defineConfigurable = function defineConfigurable(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }

      return target;
    };
    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */


    var getWindowOf = function getWindowOf(target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
      // provided element.

      return ownerGlobal || global$1;
    }; // Placeholder of an empty content rectangle.


    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */

    function toFloat(value) {
      return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */


    function getBordersSize(styles) {
      var positions = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
      }

      return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
      }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */


    function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
      }

      return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */


    function getSVGContentRect(target) {
      var bbox = target.getBBox();
      return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */


    function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth,
          clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.

      if (!clientWidth && !clientHeight) {
        return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.

      var width = toFloat(styles.width),
          height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).

      if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
          width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
          height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
      } // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.


      if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.

        if (Math.abs(vertScrollbar) !== 1) {
          width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
          height -= horizScrollbar;
        }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    var isSVGGraphicsElement = function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      } // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens


      return function (target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
      };
    }();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */


    function getContentRect(target) {
      if (!isBrowser) {
        return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */


    function createReadOnlyRect(_a) {
      var x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

      defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
      });
      return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */


    function createRectInit(x, y, width, height) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */


    var ResizeObservation =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObservation.
       *
       * @param {Element} target - Element to be observed.
       */
      function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */

        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */

        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      /**
       * Updates content rectangle and tells whether it's width or height properties
       * have changed since the last broadcast.
       *
       * @returns {boolean}
       */


      ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      /**
       * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
       * from the corresponding properties of the last observed content rectangle.
       *
       * @returns {DOMRectInit} Last observed content rectangle.
       */


      ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };

      return ResizeObservation;
    }();

    var ResizeObserverEntry =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObserverEntry.
       *
       * @param {Element} target - Element that is being observed.
       * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
       */
      function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.

        defineConfigurable(this, {
          target: target,
          contentRect: contentRect
        });
      }

      return ResizeObserverEntry;
    }();

    var ResizeObserverSPI =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback function that is invoked
       *      when one of the observed elements changes it's content dimensions.
       * @param {ResizeObserverController} controller - Controller instance which
       *      is responsible for the updates of observer.
       * @param {ResizeObserver} callbackCtx - Reference to the public
       *      ResizeObserver instance which will be passed to callback function.
       */
      function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */

        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      /**
       * Starts observing provided element.
       *
       * @param {Element} target - Element to be observed.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is already being observed.

        if (observations.has(target)) {
          return;
        }

        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this); // Force the update of observations.

        this.controller_.refresh();
      };
      /**
       * Stops observing provided element.
       *
       * @param {Element} target - Element to stop observing.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is not being observed.

        if (!observations.has(target)) {
          return;
        }

        observations["delete"](target);

        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      /**
       * Stops observing all elements.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      /**
       * Collects observation instances the associated element of which has changed
       * it's content rectangle.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;

        this.clearActive();
        this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      /**
       * Invokes initial callback function with a list of ResizeObserverEntry
       * instances collected from active resize observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
          return;
        }

        var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

        var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      /**
       * Clears the collection of active observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      };
      /**
       * Tells whether observer has active observations.
       *
       * @returns {boolean}
       */


      ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      };

      return ResizeObserverSPI;
    }(); // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.


    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */

    var ResizeObserver =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback that is invoked when
       *      dimensions of the observed elements change.
       */
      function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
        }

        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }

      return ResizeObserver;
    }(); // Expose public methods of ResizeObserver.


    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
        var _a;

        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });

    var index = function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
      }

      return ResizeObserver;
    }();
    /* harmony default export */


    __webpack_exports__["default"] = index;
    /***/
  },

  /***/
  "./src/app/final-test/final-test-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/final-test/final-test-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FinalTestRoutingModule */

  /***/
  function srcAppFinalTestFinalTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalTestRoutingModule", function () {
      return FinalTestRoutingModule;
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


    var _final_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./final-test.component */
    "./src/app/final-test/final-test.component.ts");
    /* harmony import */


    var _ft_board_admin_ft_board_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ft-board-admin/ft-board-admin.component */
    "./src/app/final-test/ft-board-admin/ft-board-admin.component.ts");
    /* harmony import */


    var _ft_login_ft_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ft-login/ft-login.component */
    "./src/app/final-test/ft-login/ft-login.component.ts");
    /* harmony import */


    var _ft_signupform_ft_signupform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ft-signupform/ft-signupform.component */
    "./src/app/final-test/ft-signupform/ft-signupform.component.ts");
    /* harmony import */


    var _ft_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ft-users/users.component */
    "./src/app/final-test/ft-users/users.component.ts");

    var routes = [{
      path: '',
      component: _final_test_component__WEBPACK_IMPORTED_MODULE_3__["FinalTestComponent"]
    }, {
      path: 'ft-login',
      component: _ft_login_ft_login_component__WEBPACK_IMPORTED_MODULE_5__["FtLoginComponent"]
    }, {
      path: 'ft-signup',
      component: _ft_signupform_ft_signupform_component__WEBPACK_IMPORTED_MODULE_6__["FTSignupformComponent"]
    }, {
      path: 'admin',
      component: _ft_board_admin_ft_board_admin_component__WEBPACK_IMPORTED_MODULE_4__["FTBoardAdminComponent"]
    }, {
      path: 'users',
      component: _ft_users_users_component__WEBPACK_IMPORTED_MODULE_7__["FTUsersComponent"]
    }];

    var FinalTestRoutingModule = function FinalTestRoutingModule() {
      _classCallCheck(this, FinalTestRoutingModule);
    };

    FinalTestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinalTestRoutingModule);
    /***/
  },

  /***/
  "./src/app/final-test/final-test.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/final-test/final-test.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFinalTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZmluYWwtdGVzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/final-test/final-test.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/final-test/final-test.component.ts ***!
    \****************************************************/

  /*! exports provided: FinalTestComponent */

  /***/
  function srcAppFinalTestFinalTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalTestComponent", function () {
      return FinalTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FinalTestComponent = /*#__PURE__*/function () {
      function FinalTestComponent() {
        _classCallCheck(this, FinalTestComponent);
      }

      _createClass(FinalTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FinalTestComponent;
    }();

    FinalTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-final-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./final-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/final-test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./final-test.component.css */
      "./src/app/final-test/final-test.component.css"))["default"]]
    })], FinalTestComponent);
    /***/
  },

  /***/
  "./src/app/final-test/final-test.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/final-test/final-test.module.ts ***!
    \*************************************************/

  /*! exports provided: FinalTestModule */

  /***/
  function srcAppFinalTestFinalTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalTestModule", function () {
      return FinalTestModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _final_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./final-test-routing.module */
    "./src/app/final-test/final-test-routing.module.ts");
    /* harmony import */


    var _final_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./final-test.component */
    "./src/app/final-test/final-test.component.ts");
    /* harmony import */


    var _ft_board_admin_ft_board_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ft-board-admin/ft-board-admin.component */
    "./src/app/final-test/ft-board-admin/ft-board-admin.component.ts");
    /* harmony import */


    var _ft_board_user_ft_board_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ft-board-user/ft-board-user.component */
    "./src/app/final-test/ft-board-user/ft-board-user.component.ts");
    /* harmony import */


    var _ft_login_ft_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ft-login/ft-login.component */
    "./src/app/final-test/ft-login/ft-login.component.ts");
    /* harmony import */


    var _ft_signupform_ft_signupform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ft-signupform/ft-signupform.component */
    "./src/app/final-test/ft-signupform/ft-signupform.component.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _ft_board_admin_ft_board_chart_ft_board_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ft-board-admin/ft-board-chart/ft-board-chart.component */
    "./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.ts");
    /* harmony import */


    var _ft_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ft-users/users.component */
    "./src/app/final-test/ft-users/users.component.ts");

    var FinalTestModule = function FinalTestModule() {
      _classCallCheck(this, FinalTestModule);
    };

    FinalTestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_final_test_component__WEBPACK_IMPORTED_MODULE_6__["FinalTestComponent"], _ft_login_ft_login_component__WEBPACK_IMPORTED_MODULE_9__["FtLoginComponent"], _ft_board_admin_ft_board_admin_component__WEBPACK_IMPORTED_MODULE_7__["FTBoardAdminComponent"], _ft_board_user_ft_board_user_component__WEBPACK_IMPORTED_MODULE_8__["FTBoardUserComponent"], _ft_signupform_ft_signupform_component__WEBPACK_IMPORTED_MODULE_10__["FTSignupformComponent"], _ft_board_admin_ft_board_chart_ft_board_chart_component__WEBPACK_IMPORTED_MODULE_12__["FtBoardChartComponent"], _ft_users_users_component__WEBPACK_IMPORTED_MODULE_13__["FTUsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _final_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalTestRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsModule"].forRoot({
        echarts: function echarts() {
          return __webpack_require__.e(
          /*! import() | echarts */
          "echarts").then(__webpack_require__.bind(null,
          /*! echarts */
          "./node_modules/echarts/index.js"));
        }
      })],
      providers: [// UserService
      ]
    })], FinalTestModule);
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-admin/ft-board-admin.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/final-test/ft-board-admin/ft-board-admin.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtBoardAdminFtBoardAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZnQtYm9hcmQtYWRtaW4vZnQtYm9hcmQtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-admin/ft-board-admin.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/final-test/ft-board-admin/ft-board-admin.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FTBoardAdminComponent */

  /***/
  function srcAppFinalTestFtBoardAdminFtBoardAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTBoardAdminComponent", function () {
      return FTBoardAdminComponent;
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


    var _ft_loginservices_ft_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ft-loginservices/ft-user.service */
    "./src/app/final-test/ft-loginservices/ft-user.service.ts");

    var FTBoardAdminComponent = /*#__PURE__*/function () {
      function FTBoardAdminComponent(userService) {
        _classCallCheck(this, FTBoardAdminComponent);

        this.userService = userService;
        this.content = '';
      }

      _createClass(FTBoardAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userService.getAdminBoard().subscribe(function (data) {
            _this7.content = data;
          }, function (err) {
            _this7.content = JSON.parse(err.error).message;
          });
        }
      }]);

      return FTBoardAdminComponent;
    }();

    FTBoardAdminComponent.ctorParameters = function () {
      return [{
        type: _ft_loginservices_ft_user_service__WEBPACK_IMPORTED_MODULE_2__["FTUserService"]
      }];
    };

    FTBoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ft-board-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ft-board-admin.component.css */
      "./src/app/final-test/ft-board-admin/ft-board-admin.component.css"))["default"]]
    })], FTBoardAdminComponent);
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtBoardAdminFtBoardChartFtBoardChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZnQtYm9hcmQtYWRtaW4vZnQtYm9hcmQtY2hhcnQvZnQtYm9hcmQtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: FtBoardChartComponent */

  /***/
  function srcAppFinalTestFtBoardAdminFtBoardChartFtBoardChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FtBoardChartComponent", function () {
      return FtBoardChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FtBoardChartComponent = /*#__PURE__*/function () {
      function FtBoardChartComponent() {
        _classCallCheck(this, FtBoardChartComponent);

        this.options = {};
        this.xAxisData = [];
        this.data1 = [];
        this.data2 = [];
      }

      _createClass(FtBoardChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < 100; i++) {
            this.xAxisData.push('category' + i);
            this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
          }

          this.options = {
            legend: {
              data: ['bar', 'bar2'],
              align: 'left'
            },
            tooltip: {},
            xAxis: {
              data: this.xAxisData,
              silent: false,
              splitLine: {
                show: false
              }
            },
            yAxis: {},
            series: [{
              name: 'bar',
              type: 'bar',
              data: this.data1,
              animationDelay: function animationDelay(idx) {
                return idx * 10;
              }
            }, {
              name: 'bar2',
              type: 'bar',
              data: this.data2,
              animationDelay: function animationDelay(idx) {
                return idx * 10 + 100;
              }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function animationDelayUpdate(idx) {
              return idx * 5;
            }
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return FtBoardChartComponent;
    }();

    FtBoardChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ft-board-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ft-board-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ft-board-chart.component.css */
      "./src/app/final-test/ft-board-admin/ft-board-chart/ft-board-chart.component.css"))["default"]]
    })], FtBoardChartComponent);
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-user/ft-board-user.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/final-test/ft-board-user/ft-board-user.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtBoardUserFtBoardUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZnQtYm9hcmQtdXNlci9mdC1ib2FyZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-board-user/ft-board-user.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/final-test/ft-board-user/ft-board-user.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FTBoardUserComponent */

  /***/
  function srcAppFinalTestFtBoardUserFtBoardUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTBoardUserComponent", function () {
      return FTBoardUserComponent;
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


    var _ft_loginservices_ft_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ft-loginservices/ft-user.service */
    "./src/app/final-test/ft-loginservices/ft-user.service.ts");

    var FTBoardUserComponent = /*#__PURE__*/function () {
      function FTBoardUserComponent(userService) {
        _classCallCheck(this, FTBoardUserComponent);

        this.userService = userService;
        this.content = '';
      }

      _createClass(FTBoardUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.userService.getUserBoard().subscribe(function (data) {
            _this8.content = data;
          }, function (err) {
            _this8.content = JSON.parse(err.error).message;
          });
        }
      }]);

      return FTBoardUserComponent;
    }();

    FTBoardUserComponent.ctorParameters = function () {
      return [{
        type: _ft_loginservices_ft_user_service__WEBPACK_IMPORTED_MODULE_2__["FTUserService"]
      }];
    };

    FTBoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ft-board-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-board-user/ft-board-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ft-board-user.component.css */
      "./src/app/final-test/ft-board-user/ft-board-user.component.css"))["default"]]
    })], FTBoardUserComponent);
    /***/
  },

  /***/
  "./src/app/final-test/ft-login/ft-login.component.css":
  /*!************************************************************!*\
    !*** ./src/app/final-test/ft-login/ft-login.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtLoginFtLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZnQtbG9naW4vZnQtbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-login/ft-login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/final-test/ft-login/ft-login.component.ts ***!
    \***********************************************************/

  /*! exports provided: FtLoginComponent */

  /***/
  function srcAppFinalTestFtLoginFtLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FtLoginComponent", function () {
      return FtLoginComponent;
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


    var _ft_loginservices_ft_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ft-loginservices/ft-auth.service */
    "./src/app/final-test/ft-loginservices/ft-auth.service.ts");
    /* harmony import */


    var _ft_loginservices_ft_token_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ft-loginservices/ft-token-service.service */
    "./src/app/final-test/ft-loginservices/ft-token-service.service.ts");

    var FtLoginComponent = /*#__PURE__*/function () {
      function FtLoginComponent(authService, tokenStorage) {
        _classCallCheck(this, FtLoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
      }

      _createClass(FtLoginComponent, [{
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
          var _this9 = this;

          this.authService.login(this.form).subscribe(function (data) {
            _this9.tokenStorage.saveToken(data.accessToken);

            _this9.tokenStorage.saveUser(data);

            _this9.isLoginFailed = false;
            _this9.isLoggedIn = true;
            _this9.roles = _this9.tokenStorage.getUser().roles;

            _this9.reloadPage();
          }, function (err) {
            _this9.errorMsg = err.error.message;
            _this9.isLoginFailed = true;
          });
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          window.location.reload();
        }
      }]);

      return FtLoginComponent;
    }();

    FtLoginComponent.ctorParameters = function () {
      return [{
        type: _ft_loginservices_ft_auth_service__WEBPACK_IMPORTED_MODULE_2__["FTAuthService"]
      }, {
        type: _ft_loginservices_ft_token_service_service__WEBPACK_IMPORTED_MODULE_3__["FTTokenStorageService"]
      }];
    };

    FtLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ft-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ft-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-login/ft-login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ft-login.component.css */
      "./src/app/final-test/ft-login/ft-login.component.css"))["default"]]
    })], FtLoginComponent);
    /***/
  },

  /***/
  "./src/app/final-test/ft-loginservices/ft-auth.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/final-test/ft-loginservices/ft-auth.service.ts ***!
    \****************************************************************/

  /*! exports provided: FTAuthService */

  /***/
  function srcAppFinalTestFtLoginservicesFtAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTAuthService", function () {
      return FTAuthService;
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

    var FTAuthService = /*#__PURE__*/function () {
      function FTAuthService(http) {
        _classCallCheck(this, FTAuthService);

        this.http = http;
      }

      _createClass(FTAuthService, [{
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

      return FTAuthService;
    }();

    FTAuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FTAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FTAuthService);
    /***/
  },

  /***/
  "./src/app/final-test/ft-loginservices/ft-token-service.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/final-test/ft-loginservices/ft-token-service.service.ts ***!
    \*************************************************************************/

  /*! exports provided: FTTokenStorageService */

  /***/
  function srcAppFinalTestFtLoginservicesFtTokenServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTTokenStorageService", function () {
      return FTTokenStorageService;
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

    var FTTokenStorageService = /*#__PURE__*/function () {
      function FTTokenStorageService() {
        _classCallCheck(this, FTTokenStorageService);
      }

      _createClass(FTTokenStorageService, [{
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

      return FTTokenStorageService;
    }();

    FTTokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FTTokenStorageService);
    /***/
  },

  /***/
  "./src/app/final-test/ft-loginservices/ft-user.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/final-test/ft-loginservices/ft-user.service.ts ***!
    \****************************************************************/

  /*! exports provided: FTUserService */

  /***/
  function srcAppFinalTestFtLoginservicesFtUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTUserService", function () {
      return FTUserService;
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

    var API_URL = 'http://localhost:8080/api/test/';

    var FTUserService = /*#__PURE__*/function () {
      function FTUserService(http) {
        _classCallCheck(this, FTUserService);

        this.http = http;
      }

      _createClass(FTUserService, [{
        key: "getPublicContent",
        value: function getPublicContent() {
          return this.http.get(API_URL + 'all', {
            responseType: 'text'
          });
        }
      }, {
        key: "getUserBoard",
        value: function getUserBoard() {
          return this.http.get(API_URL + 'user', {
            responseType: 'text'
          });
        }
      }, {
        key: "getAdminBoard",
        value: function getAdminBoard() {
          return this.http.get(API_URL + 'admin', {
            responseType: 'text'
          });
        }
      }]);

      return FTUserService;
    }();

    FTUserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FTUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FTUserService);
    /***/
  },

  /***/
  "./src/app/final-test/ft-signupform/ft-signupform.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/final-test/ft-signupform/ft-signupform.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtSignupformFtSignupformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtdGVzdC9mdC1zaWdudXBmb3JtL2Z0LXNpZ251cGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmluYWwtdGVzdC9mdC1zaWdudXBmb3JtL2Z0LXNpZ251cGZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-signupform/ft-signupform.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/final-test/ft-signupform/ft-signupform.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FTSignupformComponent */

  /***/
  function srcAppFinalTestFtSignupformFtSignupformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTSignupformComponent", function () {
      return FTSignupformComponent;
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


    var _ft_loginservices_ft_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ft-loginservices/ft-auth.service */
    "./src/app/final-test/ft-loginservices/ft-auth.service.ts");

    var FTSignupformComponent = /*#__PURE__*/function () {
      function FTSignupformComponent(authService) {
        _classCallCheck(this, FTSignupformComponent);

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

      _createClass(FTSignupformComponent, [{
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
          var _this10 = this;

          this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            _this10.isSuccessful = true;
            _this10.isSignUpFailed = false;
          }, function (err) {
            _this10.errorMsg = err.error.message;
            _this10.isSignUpFailed = true;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onScroll",
        value: function onScroll() {
          console.log('On scroll in Signup Component');
        }
      }]);

      return FTSignupformComponent;
    }();

    FTSignupformComponent.ctorParameters = function () {
      return [{
        type: _ft_loginservices_ft_auth_service__WEBPACK_IMPORTED_MODULE_2__["FTAuthService"]
      }];
    };

    FTSignupformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ft-signupform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ft-signupform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-signupform/ft-signupform.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ft-signupform.component.css */
      "./src/app/final-test/ft-signupform/ft-signupform.component.css"))["default"]]
    })], FTSignupformComponent);
    /***/
  },

  /***/
  "./src/app/final-test/ft-users/user.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/final-test/ft-users/user.service.ts ***!
    \*****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppFinalTestFtUsersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.myAppUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].typiCodeUrl;
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
  "./src/app/final-test/ft-users/users.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/final-test/ft-users/users.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalTestFtUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXRlc3QvZnQtdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final-test/ft-users/users.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/final-test/ft-users/users.component.ts ***!
    \********************************************************/

  /*! exports provided: FTUsersComponent */

  /***/
  function srcAppFinalTestFtUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FTUsersComponent", function () {
      return FTUsersComponent;
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
    "./src/app/final-test/ft-users/user.service.ts");

    var FTUsersComponent = /*#__PURE__*/function () {
      function FTUsersComponent(userService) {
        _classCallCheck(this, FTUsersComponent);

        this.userService = userService;
        this.loading = true;
      }

      _createClass(FTUsersComponent, [{
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

      return FTUsersComponent;
    }();

    FTUsersComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    FTUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-test/ft-users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/final-test/ft-users/users.component.css"))["default"]]
    })], FTUsersComponent);
    /***/
  }
}]);
//# sourceMappingURL=final-test-final-test-module-es5.js.map