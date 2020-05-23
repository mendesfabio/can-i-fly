webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_index_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/Header */ \"./components/index/Header.js\");\n/* harmony import */ var _components_index_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Footer */ \"./components/index/Footer.js\");\n/* harmony import */ var _data_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/countries */ \"./data/countries.js\");\n/* harmony import */ var _data_rawInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/rawInfo */ \"./data/rawInfo.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/joseribeiro/Projects/canifly/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HomePage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      originCountry: \"*\",\n      destinationCountry: \"*\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, [{\n    key: \"handleDestinationChange\",\n    value: function handleDestinationChange(option) {\n      this.setState({\n        destinationCountry: option.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var countriesOptions = Object.entries(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (_ref) {\n        var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n            key = _ref2[0],\n            country = _ref2[1];\n\n        return {\n          value: key,\n          label: \"\".concat(country.flag, \" \").concat(country.name)\n        };\n      });\n      var destinationOption = countriesOptions.find(function (options) {\n        return options.value === _this2.state.destinationCountry;\n      });\n      var destination = _data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"][this.state.destinationCountry];\n      var destinationInfo = _data_rawInfo__WEBPACK_IMPORTED_MODULE_11__[\"default\"][this.state.destinationCountry];\n      return __jsx(\"main\", {\n        className: \"container mx-auto p-5 my-8\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }\n      }, __jsx(_components_index_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"grid grid-cols-12 gap-4 my-10 mx-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      }, \"I am leaving from\"), __jsx(\"span\", {\n        className: \"italic text-gray-500 text-xs ml-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }, \"(Coming soon)\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        defaultValue: countriesOptions[0],\n        isDisabled: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }\n      }, \"I want to go\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        value: destinationOption,\n        onChange: this.handleDestinationChange.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 lg:col-span-8 lg:col-start-3 mt-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      }, destinationOption.value === \"*\" ? __jsx(\"h4\", {\n        className: \"text-2xl font-medium text-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, \"Select a destination above to see more information about the country.\") : __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 15\n        }\n      }, __jsx(\"h4\", {\n        className: \"text-5xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 17\n        }\n      }, destination.flag), __jsx(\"h4\", {\n        className: \"text-2xl font-black tracking-tighter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, destination.name), destinationInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n        className: \"text-gray-500 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }\n      }, destinationInfo.updated_at), __jsx(\"p\", {\n        className: \"text-justify\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }\n      }, destinationInfo.description)) : __jsx(\"p\", {\n        className: \"text-red-700 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 19\n        }\n      }, \"Seems like we don't information about this country yet. \\uD83D\\uDE15\")))), __jsx(_components_index_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm9yaWdpbkNvdW50cnkiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJvcHRpb24iLCJzZXRTdGF0ZSIsInZhbHVlIiwiY291bnRyaWVzT3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudHJpZXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5IiwibGFiZWwiLCJmbGFnIiwibmFtZSIsImRlc3RpbmF0aW9uT3B0aW9uIiwiZmluZCIsIm9wdGlvbnMiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uSW5mbyIsInJhd0luZm8iLCJoYW5kbGVEZXN0aW5hdGlvbkNoYW5nZSIsImJpbmQiLCJ1cGRhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEVBQUUsR0FESjtBQUVYQyx3QkFBa0IsRUFBRTtBQUZULEtBQWI7QUFGaUI7QUFNbEI7Ozs7NENBRXVCQyxNLEVBQVE7QUFDOUIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLDBCQUFrQixFQUFFQyxNQUFNLENBQUNFO0FBRGYsT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVDLHdEQUFmLEVBQTBCQyxHQUExQixDQUE4QjtBQUFBO0FBQUEsWUFBRUMsR0FBRjtBQUFBLFlBQU9DLE9BQVA7O0FBQUEsZUFBcUI7QUFDMUVQLGVBQUssRUFBRU0sR0FEbUU7QUFFMUVFLGVBQUssWUFBS0QsT0FBTyxD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QUFBLGdGQVRKLENBTkosQ0FoQkYsQ0FIRixFQXlDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF6Q0YsQ0FERjtBQTZDRDs7OztFQXRFb0JDLDRDQUFLLENBQUNDLFM7O0FBeUVkN0IsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4L0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleC9Gb290ZXJcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uL2RhdGEvY291bnRyaWVzXCI7XG5pbXBvcnQgcmF3SW5mbyBmcm9tIFwiLi4vZGF0YS9yYXdJbmZvXCI7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9yaWdpbkNvdW50cnk6IFwiKlwiLFxuICAgICAgZGVzdGluYXRpb25Db3VudHJ5OiBcIipcIixcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlRGVzdGluYXRpb25DaGFuZ2Uob3B0aW9uKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZXN0aW5hdGlvbkNvdW50cnk6IG9wdGlvbi52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb3VudHJpZXNPcHRpb25zID0gT2JqZWN0LmVudHJpZXMoY291bnRyaWVzKS5tYXAoKFtrZXksIGNvdW50cnldKSA9PiAoe1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBgJHtjb3VudHJ5LmZsYWd9ICR7Y291bnRyeS5uYW1lfWAsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25PcHRpb24gPSBjb3VudHJpZXNPcHRpb25zLmZpbmQoKG9wdGlvbnMpID0+IG9wdGlvbnMudmFsdWUgPT09IHRoaXMuc3RhdGUuZGVzdGluYXRpb25Db3VudHJ5KTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGNvdW50cmllc1t0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeV07XG4gICAgY29uc3QgZGVzdGluYXRpb25JbmZvID0gcmF3SW5mb1t0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC01IG15LThcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgbXktMTAgbXgtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tNiBsZzpjb2wtc3Bhbi00IGxnOmNvbC1zdGFydC0zXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbWItMSBpbmxpbmUtYmxvY2tcIj5JIGFtIGxlYXZpbmcgZnJvbTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC1ncmF5LTUwMCB0ZXh0LXhzIG1sLTJcIj4oQ29taW5nIHNvb24pPC9zcGFuPlxuICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtjb3VudHJpZXNPcHRpb25zfSBkZWZhdWx0VmFsdWU9e2NvdW50cmllc09wdGlvbnNbMF19IGlzRGlzYWJsZWQgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tNiBsZzpjb2wtc3Bhbi00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbWItMSBpbmxpbmUtYmxvY2tcIj5JIHdhbnQgdG8gZ288L2gzPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXtjb3VudHJpZXNPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzdGluYXRpb25PcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURlc3RpbmF0aW9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi04IGxnOmNvbC1zdGFydC0zIG10LTVcIj5cbiAgICAgICAgICAgIHtkZXN0aW5hdGlvbk9wdGlvbi52YWx1ZSA9PT0gXCIqXCIgPyAoXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIGRlc3RpbmF0aW9uIGFib3ZlIHRvIHNlZSBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb3VudHJ5LlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtNXhsXCI+e2Rlc3RpbmF0aW9uLmZsYWd9PC9oND5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ibGFjayB0cmFja2luZy10aWdodGVyXCI+e2Rlc3RpbmF0aW9uLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICB7ZGVzdGluYXRpb25JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYi01XCI+e2Rlc3RpbmF0aW9uSW5mby51cGRhdGVkX2F0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+e2Rlc3RpbmF0aW9uSW5mby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwIG1iLTVcIj5TZWVtcyBsaWtlIHdlIGRvbid0IGluZm9ybWF0aW9uIGFib3V0IHRoaXMgY291bnRyeSB5ZXQuIPCfmJU8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})