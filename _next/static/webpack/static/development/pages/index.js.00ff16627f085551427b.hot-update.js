webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_index_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/Header */ \"./components/index/Header.js\");\n/* harmony import */ var _components_index_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Footer */ \"./components/index/Footer.js\");\n/* harmony import */ var _data_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/countries */ \"./data/countries.js\");\n/* harmony import */ var _data_countryInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/countryInfo */ \"./data/countryInfo.js\");\n/* harmony import */ var _data_airlineInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/airlineInfo */ \"./data/airlineInfo.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/joseribeiro/Projects/canifly/pages/index.js\",\n    _this3 = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HomePage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      originCountry: \"*\",\n      destinationCountry: \"*\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, [{\n    key: \"handleDestinationChange\",\n    value: function handleDestinationChange(option) {\n      this.setState({\n        destinationCountry: option.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var countriesOptions = Object.entries(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (_ref) {\n        var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n            key = _ref2[0],\n            country = _ref2[1];\n\n        return {\n          value: key,\n          label: \"\".concat(country.flag, \" \").concat(country.name)\n        };\n      });\n      var destinationOption = countriesOptions.find(function (options) {\n        return options.value === _this2.state.destinationCountry;\n      });\n      var destination = _data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"][this.state.destinationCountry];\n      var destinationInfo = _data_countryInfo__WEBPACK_IMPORTED_MODULE_11__[\"default\"][this.state.destinationCountry];\n      var destinationAirlineInfo = _data_airlineInfo__WEBPACK_IMPORTED_MODULE_12__[\"default\"][this.state.destinationCountry];\n      console.log(this.state.destinationCountry);\n      return __jsx(\"main\", {\n        className: \"container mx-auto p-5 my-8\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 7\n        }\n      }, __jsx(_components_index_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"grid grid-cols-12 gap-4 my-10 mx-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      }, \"I am leaving from\"), __jsx(\"span\", {\n        className: \"italic text-gray-500 text-xs ml-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, \"(Coming soon)\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        defaultValue: countriesOptions[0],\n        isDisabled: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }\n      }, \"I want to go\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        value: destinationOption,\n        onChange: this.handleDestinationChange.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 lg:col-span-8 lg:col-start-3 mt-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }\n      }, destinationOption.value === \"*\" ? __jsx(\"h4\", {\n        className: \"text-2xl font-medium text-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 15\n        }\n      }, \"Select a destination above to see more information about the country.\") : __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }\n      }, __jsx(\"h4\", {\n        className: \"text-5xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }\n      }, destination.flag), __jsx(\"h4\", {\n        className: \"text-2xl font-black tracking-tighter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }\n      }, destination.name), destinationInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n        className: \"text-gray-500 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, destinationInfo.updated_at), __jsx(\"p\", {\n        className: \"text mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, destinationInfo.certification_status), __jsx(\"p\", {\n        className: \"text-justify\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }\n      }, __jsx(Description, {\n        text: destinationInfo.info,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 23\n        }\n      }), \" \"), __jsx(AirlineInfo, {\n        data: destinationAirlineInfo,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      })) : __jsx(\"p\", {\n        className: \"text-red-700 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 19\n        }\n      }, \"Seems like we don't information about this country yet. \\uD83D\\uDE15\")))), __jsx(_components_index_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar countryNames = Object.values(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (country) {\n  return country.name;\n});\n\nvar boldNameMapper = function boldNameMapper(word) {\n  var name = word.replace(/[\\W\\d_]/g, \"\");\n  return countryNames.includes(name) ? __jsx(\"b\", {\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 40\n    }\n  }, word, \" \") : \"\".concat(word, \" \");\n};\n\nvar Description = function Description(_ref3) {\n  var text = _ref3.text;\n  return text.split(\" \").map(boldNameMapper);\n};\n\n_c = Description;\n\nvar AirlineInfo = function AirlineInfo(_ref4) {\n  var data = _ref4.data;\n  return data ? __jsx(\"h4\", {\n    className: \"text-2xl font-black tracking-tighter\",\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, \"Latest airline news\", data.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"h6\", {\n      className: \"text-l font-black tracking-tighter\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }\n    }, item.airline), __jsx(\"p\", {\n      className: \"text-gray-500 mb-5\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }\n    }, item.updated_at), __jsx(\"p\", {\n      className: \"text mb-5\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }\n    }, item.info), __jsx(\"p\", {\n      className: \"text-justify\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }\n    }, item.source));\n  })) : \"\";\n};\n\n_c2 = AirlineInfo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Description\");\n$RefreshReg$(_c2, \"AirlineInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm9yaWdpbkNvdW50cnkiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJvcHRpb24iLCJzZXRTdGF0ZSIsInZhbHVlIiwiY291bnRyaWVzT3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudHJpZXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5IiwibGFiZWwiLCJmbGFnIiwibmFtZSIsImRlc3RpbmF0aW9uT3B0aW9uIiwiZmluZCIsIm9wdGlvbnMiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uSW5mbyIsImNvdW50cnlJbmZvIiwiZGVzdGluYXRpb25BaXJsaW5lSW5mbyIsImFpcmxpbmVJbmZvIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlc3RpbmF0aW9uQ2hhbmdlIiwiYmluZCIsInVwZGF0ZWRfYXQiLCJjZXJ0aWZpY2F0aW9uX3N0YXR1cyIsImluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvdW50cnlOYW1lcyIsInZhbHVlcyIsImJvbGROYW1lTWFwcGVyIiwid29yZCIsInJlcGxhY2UiLCJpbmNsdWRlcyIsIkRlc2NyaXB0aW9uIiwidGV4dCIsInNwbGl0IiwiQWlybGluZUluZm8iLCJkYXRhIiwiaXRlbSIsImFpcmxpbmUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxFQUFFLEdBREo7QUFFWEMsd0JBQWtCLEVBQUU7QUFGVCxLQUFiO0FBRmlCO0FBTWxCOzs7OzRDQUV1QkMsTSxFQUFRO0FBQzlCLFdBQUtDLFFBQUwsQ0FB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QUNFLE1BQWxDLENBSkYsQ0FEUTtBQUFBLEdBQVQsQ0FGSCxDQURTLEdBYVQsRUFiRjtBQWVELENBaEJEOztNQUFNSixXIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleC9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXgvRm9vdGVyXCI7XG5pbXBvcnQgY291bnRyaWVzIGZyb20gXCIuLi9kYXRhL2NvdW50cmllc1wiO1xuaW1wb3J0IGNvdW50cnlJbmZvIGZyb20gXCIuLi9kYXRhL2NvdW50cnlJbmZvXCI7XG5pbXBvcnQgYWlybGluZUluZm8gZnJvbSBcIi4uL2RhdGEvYWlybGluZUluZm9cIjtcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3JpZ2luQ291bnRyeTogXCIqXCIsXG4gICAgICBkZXN0aW5hdGlvbkNvdW50cnk6IFwiKlwiLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVEZXN0aW5hdGlvbkNoYW5nZShvcHRpb24pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlc3RpbmF0aW9uQ291bnRyeTogb3B0aW9uLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvdW50cmllc09wdGlvbnMgPSBPYmplY3QuZW50cmllcyhjb3VudHJpZXMpLm1hcCgoW2tleSwgY291bnRyeV0pID0+ICh7XG4gICAgICB2YWx1ZToga2V5LFxuICAgICAgbGFiZWw6IGAke2NvdW50cnkuZmxhZ30gJHtjb3VudHJ5Lm5hbWV9YCxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbk9wdGlvbiA9IGNvdW50cmllc09wdGlvbnMuZmluZCgob3B0aW9ucykgPT4gb3B0aW9ucy52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5kZXN0aW5hdGlvbkNvdW50cnkpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gY291bnRyaWVzW3RoaXMuc3RhdGUuZGVzdGluYXRpb25Db3VudHJ5XTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkluZm8gPSBjb3VudHJ5SW5mb1t0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeV07XG4gICAgY29uc3QgZGVzdGluYXRpb25BaXJsaW5lSW5mbyA9IGFpcmxpbmVJbmZvW3RoaXMuc3RhdGUuZGVzdGluYXRpb25Db3VudHJ5XTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNSBteS04XCI+XG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IG15LTEwIG14LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTYgbGc6Y29sLXNwYW4tNCBsZzpjb2wtc3RhcnQtM1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTEgaW5saW5lLWJsb2NrXCI+SSBhbSBsZWF2aW5nIGZyb208L2gzPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljIHRleHQtZ3JheS01MDAgdGV4dC14cyBtbC0yXCI+KENvbWluZyBzb29uKTwvc3Bhbj5cbiAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17Y291bnRyaWVzT3B0aW9uc30gZGVmYXVsdFZhbHVlPXtjb3VudHJpZXNPcHRpb25zWzBdfSBpc0Rpc2FibGVkIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTYgbGc6Y29sLXNwYW4tNFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTEgaW5saW5lLWJsb2NrXCI+SSB3YW50IHRvIGdvPC9oMz5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgb3B0aW9ucz17Y291bnRyaWVzT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc3RpbmF0aW9uT3B0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXN0aW5hdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tOCBsZzpjb2wtc3RhcnQtMyBtdC01XCI+XG4gICAgICAgICAgICB7ZGVzdGluYXRpb25PcHRpb24udmFsdWUgPT09IFwiKlwiID8gKFxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYSBkZXN0aW5hdGlvbiBhYm92ZSB0byBzZWUgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY291bnRyeS5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPntkZXN0aW5hdGlvbi5mbGFnfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgdHJhY2tpbmctdGlnaHRlclwiPntkZXN0aW5hdGlvbi5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItNVwiPntkZXN0aW5hdGlvbkluZm8udXBkYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgbWItNVwiPntkZXN0aW5hdGlvbkluZm8uY2VydGlmaWNhdGlvbl9zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gdGV4dD17ZGVzdGluYXRpb25JbmZvLmluZm99IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxBaXJsaW5lSW5mbyBkYXRhPXtkZXN0aW5hdGlvbkFpcmxpbmVJbmZvfSAvPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTcwMCBtYi01XCI+U2VlbXMgbGlrZSB3ZSBkb24ndCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIGNvdW50cnkgeWV0LiDwn5iVPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuXG5jb25zdCBjb3VudHJ5TmFtZXMgPSBPYmplY3QudmFsdWVzKGNvdW50cmllcykubWFwKChjb3VudHJ5KSA9PiBjb3VudHJ5Lm5hbWUpO1xuY29uc3QgYm9sZE5hbWVNYXBwZXIgPSAod29yZCkgPT4ge1xuICBjb25zdCBuYW1lID0gd29yZC5yZXBsYWNlKC9bXFxXXFxkX10vZywgXCJcIik7XG4gIHJldHVybiBjb3VudHJ5TmFtZXMuaW5jbHVkZXMobmFtZSkgPyA8Yj57d29yZH0gPC9iPiA6IGAke3dvcmR9IGA7XG59O1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IHRleHQgfSkgPT4ge1xuICByZXR1cm4gdGV4dC5zcGxpdChcIiBcIikubWFwKGJvbGROYW1lTWFwcGVyKTtcbn07XG5cbmNvbnN0IEFpcmxpbmVJbmZvID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiBkYXRhID8gKFxuICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0ZXJcIj5cbiAgICAgIExhdGVzdCBhaXJsaW5lIG5ld3NcbiAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWwgZm9udC1ibGFjayB0cmFja2luZy10aWdodGVyXCI+e2l0ZW0uYWlybGluZX08L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItNVwiPntpdGVtLnVwZGF0ZWRfYXR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgbWItNVwiPntpdGVtLmluZm99PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPntpdGVtLnNvdXJjZX08L3A+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC9oND5cbiAgKSA6IChcbiAgICBcIlwiXG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})