webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_index_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/Header */ \"./components/index/Header.js\");\n/* harmony import */ var _components_index_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Footer */ \"./components/index/Footer.js\");\n/* harmony import */ var _data_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/countries */ \"./data/countries.js\");\n/* harmony import */ var _data_countryInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/countryInfo */ \"./data/countryInfo.js\");\n/* harmony import */ var _data_airlineInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/airlineInfo */ \"./data/airlineInfo.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/joseribeiro/Projects/canifly/pages/index.js\",\n    _this3 = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HomePage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      originCountry: \"*\",\n      destinationCountry: \"*\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, [{\n    key: \"handleDestinationChange\",\n    value: function handleDestinationChange(option) {\n      this.setState({\n        destinationCountry: option.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var countriesOptions = Object.entries(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (_ref) {\n        var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n            key = _ref2[0],\n            country = _ref2[1];\n\n        return {\n          value: key,\n          label: \"\".concat(country.flag, \" \").concat(country.name)\n        };\n      });\n      var destinationOption = countriesOptions.find(function (options) {\n        return options.value === _this2.state.destinationCountry;\n      });\n      var destination = _data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"][this.state.destinationCountry];\n      var destinationInfo = _data_countryInfo__WEBPACK_IMPORTED_MODULE_11__[\"default\"][this.state.destinationCountry];\n      var destinationAirlineInfo = _data_airlineInfo__WEBPACK_IMPORTED_MODULE_12__[\"default\"][this.state.destinationCountry];\n      console.log(this.state.destinationCountry);\n      return __jsx(\"main\", {\n        className: \"container mx-auto p-5 my-8\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 7\n        }\n      }, __jsx(_components_index_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"grid grid-cols-12 gap-4 my-10 mx-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      }, \"I am leaving from\"), __jsx(\"span\", {\n        className: \"italic text-gray-500 text-xs ml-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, \"(Coming soon)\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        defaultValue: countriesOptions[0],\n        isDisabled: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }\n      }, \"I want to go\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        value: destinationOption,\n        onChange: this.handleDestinationChange.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 lg:col-span-8 lg:col-start-3 mt-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }\n      }, destinationOption.value === \"*\" ? __jsx(\"h4\", {\n        className: \"text-2xl font-medium text-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 15\n        }\n      }, \"Select a destination above to see more information about the country.\") : __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }\n      }, __jsx(\"h4\", {\n        className: \"text-5xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }\n      }, destination.flag), __jsx(\"h4\", {\n        className: \"text-2xl font-black tracking-tighter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }\n      }, destination.name), destinationInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n        className: \"text-gray-500 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, destinationInfo.updated_at), __jsx(Description, {\n        data: destinationInfo,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }), \" \", __jsx(AirlineInfo, {\n        data: destinationAirlineInfo,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 60\n        }\n      })) : __jsx(\"p\", {\n        className: \"text-red-700 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 19\n        }\n      }, \"Seems like we don't information about this country yet. \\uD83D\\uDE15\")))), __jsx(_components_index_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar countryNames = Object.values(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (country) {\n  return country.name;\n});\n\nvar boldNameMapper = function boldNameMapper(word) {\n  var name = word.replace(/[\\W\\d_]/g, \"\");\n  return countryNames.includes(name) ? __jsx(\"b\", {\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 40\n    }\n  }, word, \" \") : \"\".concat(word, \" \");\n};\n\nvar Description = function Description(_ref3) {\n  var data = _ref3.data;\n\n  var prepareText = function prepareText(input) {\n    return input ? input.split(\" \").map(boldNameMapper) : \"\";\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n    className: \"text-xl mt-5 tracking-tighter\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, \"Latest info\"), __jsx(\"p\", {\n    className: \"text-justify\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, prepareText(data.info)), __jsx(\"p\", {\n    className: \"text-xl mt-5 tracking-tighter\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, \"Travel restrictions\"), __jsx(\"p\", {\n    className: \"text-justify\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, prepareText(data.restrictions)));\n  return;\n};\n\n_c = Description;\n\nvar AirlineInfo = function AirlineInfo(_ref4) {\n  var data = _ref4.data;\n  return data ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"h4\", {\n    className: \"text-2xl mt-5 font-black tracking-tighter\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, \"Latest airline news\"), data.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n      className: \"text-xl mt-5 tracking-tighter\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }\n    }, item.airline), __jsx(\"p\", {\n      className: \"text-gray-500 mb-5\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 11\n      }\n    }, item.updated_at), __jsx(\"p\", {\n      className: \"text-justify\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 11\n      }\n    }, item.info), __jsx(\"a\", {\n      className: \"no-underline\",\n      href: item.source,\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 11\n      }\n    }, \"Source\"));\n  })) : \"\";\n};\n\n_c2 = AirlineInfo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Description\");\n$RefreshReg$(_c2, \"AirlineInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm9yaWdpbkNvdW50cnkiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJvcHRpb24iLCJzZXRTdGF0ZSIsInZhbHVlIiwiY291bnRyaWVzT3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudHJpZXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5IiwibGFiZWwiLCJmbGFnIiwibmFtZSIsImRlc3RpbmF0aW9uT3B0aW9uIiwiZmluZCIsIm9wdGlvbnMiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uSW5mbyIsImNvdW50cnlJbmZvIiwiZGVzdGluYXRpb25BaXJsaW5lSW5mbyIsImFpcmxpbmVJbmZvIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlc3RpbmF0aW9uQ2hhbmdlIiwiYmluZCIsInVwZGF0ZWRfYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvdW50cnlOYW1lcyIsInZhbHVlcyIsImJvbGROYW1lTWFwcGVyIiwid29yZCIsInJlcGxhY2UiLCJpbmNsdWRlcyIsIkRlc2NyaXB0aW9uIiwiZGF0YSIsInByZXBhcmVUZXh0IiwiaW5wdXQiLCJzcGxpdCIsImluZm8iLCJyZXN0cmljdGlvbnMiLCJBaXJsaW5lSW5mbyIsIml0ZW0iLCJhaXJsaW5lIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsRUFBRSxHQURKO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUZpQjtBQU1sQjs7Ozs0Q0FFdUJDLE0sRUFBUTtBQUM5QixXQUFLQyxR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QUFBQSxPQUE4Q0EsSUFBSSxDQUFDQyxPQUFuRCxDQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0QsSUFBSSxDQUFDakIsVUFBeEMsQ0FGRixFQUdFO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QmlCLElBQUksQ0FBQ0gsSUFBbEMsQ0FIRixFQUlFO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBNEIsVUFBSSxFQUFFRyxJQUFJLENBQUNFLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsQ0FEUTtBQUFBLEdBQVQsQ0FGSCxDQURTLEdBZVQsRUFmRjtBQWlCRCxDQWxCRDs7TUFBTUgsVyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXgvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4L0Zvb3RlclwiO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tIFwiLi4vZGF0YS9jb3VudHJpZXNcIjtcbmltcG9ydCBjb3VudHJ5SW5mbyBmcm9tIFwiLi4vZGF0YS9jb3VudHJ5SW5mb1wiO1xuaW1wb3J0IGFpcmxpbmVJbmZvIGZyb20gXCIuLi9kYXRhL2FpcmxpbmVJbmZvXCI7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9yaWdpbkNvdW50cnk6IFwiKlwiLFxuICAgICAgZGVzdGluYXRpb25Db3VudHJ5OiBcIipcIixcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlRGVzdGluYXRpb25DaGFuZ2Uob3B0aW9uKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZXN0aW5hdGlvbkNvdW50cnk6IG9wdGlvbi52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb3VudHJpZXNPcHRpb25zID0gT2JqZWN0LmVudHJpZXMoY291bnRyaWVzKS5tYXAoKFtrZXksIGNvdW50cnldKSA9PiAoe1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBgJHtjb3VudHJ5LmZsYWd9ICR7Y291bnRyeS5uYW1lfWAsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25PcHRpb24gPSBjb3VudHJpZXNPcHRpb25zLmZpbmQoKG9wdGlvbnMpID0+IG9wdGlvbnMudmFsdWUgPT09IHRoaXMuc3RhdGUuZGVzdGluYXRpb25Db3VudHJ5KTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGNvdW50cmllc1t0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeV07XG4gICAgY29uc3QgZGVzdGluYXRpb25JbmZvID0gY291bnRyeUluZm9bdGhpcy5zdGF0ZS5kZXN0aW5hdGlvbkNvdW50cnldO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQWlybGluZUluZm8gPSBhaXJsaW5lSW5mb1t0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeV07XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXN0aW5hdGlvbkNvdW50cnkpO1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTUgbXktOFwiPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtNCBteS0xMCBteC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTQgbGc6Y29sLXN0YXJ0LTNcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0xIGlubGluZS1ibG9ja1wiPkkgYW0gbGVhdmluZyBmcm9tPC9oMz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0YWxpYyB0ZXh0LWdyYXktNTAwIHRleHQteHMgbWwtMlwiPihDb21pbmcgc29vbik8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2NvdW50cmllc09wdGlvbnN9IGRlZmF1bHRWYWx1ZT17Y291bnRyaWVzT3B0aW9uc1swXX0gaXNEaXNhYmxlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0xIGlubGluZS1ibG9ja1wiPkkgd2FudCB0byBnbzwvaDM+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvdW50cmllc09wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtkZXN0aW5hdGlvbk9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGVzdGluYXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggbGc6Y29sLXN0YXJ0LTMgbXQtNVwiPlxuICAgICAgICAgICAge2Rlc3RpbmF0aW9uT3B0aW9uLnZhbHVlID09PSBcIipcIiA/IChcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgZGVzdGluYXRpb24gYWJvdmUgdG8gc2VlIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdW50cnkuXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC01eGxcIj57ZGVzdGluYXRpb24uZmxhZ308L2g0PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0ZXJcIj57ZGVzdGluYXRpb24ubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgIHtkZXN0aW5hdGlvbkluZm8gPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1iLTVcIj57ZGVzdGluYXRpb25JbmZvLnVwZGF0ZWRfYXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gZGF0YT17ZGVzdGluYXRpb25JbmZvfSAvPiA8QWlybGluZUluZm8gZGF0YT17ZGVzdGluYXRpb25BaXJsaW5lSW5mb30gLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDAgbWItNVwiPlNlZW1zIGxpa2Ugd2UgZG9uJ3QgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjb3VudHJ5IHlldC4g8J+YlTwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuY29uc3QgY291bnRyeU5hbWVzID0gT2JqZWN0LnZhbHVlcyhjb3VudHJpZXMpLm1hcCgoY291bnRyeSkgPT4gY291bnRyeS5uYW1lKTtcbmNvbnN0IGJvbGROYW1lTWFwcGVyID0gKHdvcmQpID0+IHtcbiAgY29uc3QgbmFtZSA9IHdvcmQucmVwbGFjZSgvW1xcV1xcZF9dL2csIFwiXCIpO1xuICByZXR1cm4gY291bnRyeU5hbWVzLmluY2x1ZGVzKG5hbWUpID8gPGI+e3dvcmR9IDwvYj4gOiBgJHt3b3JkfSBgO1xufTtcblxuY29uc3QgRGVzY3JpcHRpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgcHJlcGFyZVRleHQgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gaW5wdXQgPyBpbnB1dC5zcGxpdChcIiBcIikubWFwKGJvbGROYW1lTWFwcGVyKSA6IFwiXCI7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbXQtNSB0cmFja2luZy10aWdodGVyXCI+TGF0ZXN0IGluZm88L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj57cHJlcGFyZVRleHQoZGF0YS5pbmZvKX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTUgdHJhY2tpbmctdGlnaHRlclwiPlRyYXZlbCByZXN0cmljdGlvbnM8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj57cHJlcGFyZVRleHQoZGF0YS5yZXN0cmljdGlvbnMpfTwvcD5cbiAgICA8Lz5cbiAgKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgQWlybGluZUluZm8gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIGRhdGEgPyAoXG4gICAgPD5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtdC01IGZvbnQtYmxhY2sgdHJhY2tpbmctdGlnaHRlclwiPkxhdGVzdCBhaXJsaW5lIG5ld3M8L2g0PlxuICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtdC01IHRyYWNraW5nLXRpZ2h0ZXJcIj57aXRlbS5haXJsaW5lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1iLTVcIj57aXRlbS51cGRhdGVkX2F0fTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj57aXRlbS5pbmZvfTwvcD5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuby11bmRlcmxpbmVcIiBocmVmPXtpdGVtLnNvdXJjZX0+XG4gICAgICAgICAgICBTb3VyY2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICkgOiAoXG4gICAgXCJcIlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})