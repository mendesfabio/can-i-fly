webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_index_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/Header */ \"./components/index/Header.js\");\n/* harmony import */ var _components_index_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Footer */ \"./components/index/Footer.js\");\n/* harmony import */ var _data_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/countries */ \"./data/countries.js\");\n/* harmony import */ var _data_rawInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/rawInfo */ \"./data/rawInfo.js\");\n/* harmony import */ var _data_countryInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/countryInfo */ \"./data/countryInfo.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/joseribeiro/Projects/canifly/pages/index.js\",\n    _this3 = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n // import airlineInfo from \"../data/countryInfo\";\n\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HomePage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      originCountry: \"*\",\n      destinationCountry: \"*\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage, [{\n    key: \"handleDestinationChange\",\n    value: function handleDestinationChange(option) {\n      this.setState({\n        destinationCountry: option.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var countriesOptions = Object.entries(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (_ref) {\n        var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n            key = _ref2[0],\n            country = _ref2[1];\n\n        return {\n          value: key,\n          label: \"\".concat(country.flag, \" \").concat(country.name)\n        };\n      });\n      var destinationOption = countriesOptions.find(function (options) {\n        return options.value === _this2.state.destinationCountry;\n      });\n      var destination = _data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"][this.state.destinationCountry];\n      var destinationInfo = _data_countryInfo__WEBPACK_IMPORTED_MODULE_12__[\"default\"][this.state.destinationCountry];\n      return __jsx(\"main\", {\n        className: \"container mx-auto p-5 my-8\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 7\n        }\n      }, __jsx(_components_index_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"grid grid-cols-12 gap-4 my-10 mx-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      }, \"I am leaving from\"), __jsx(\"span\", {\n        className: \"italic text-gray-500 text-xs ml-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, \"(Coming soon)\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        defaultValue: countriesOptions[0],\n        isDisabled: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 md:col-span-6 lg:col-span-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      }, __jsx(\"h3\", {\n        className: \"font-medium mb-1 inline-block\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }\n      }, \"I want to go\"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        options: countriesOptions,\n        value: destinationOption,\n        onChange: this.handleDestinationChange.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"col-span-12 lg:col-span-8 lg:col-start-3 mt-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }\n      }, destinationOption.value === \"*\" ? __jsx(\"h4\", {\n        className: \"text-2xl font-medium text-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 15\n        }\n      }, \"Select a destination above to see more information about the country.\") : __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }\n      }, __jsx(\"h4\", {\n        className: \"text-5xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }\n      }, destination.flag), __jsx(\"h4\", {\n        className: \"text-2xl font-black tracking-tighter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }\n      }, destination.name), destinationInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(\"p\", {\n        className: \"text-gray-500 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, destinationInfo[0].updated_at), __jsx(\"p\", {\n        className: \"text mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, destinationInfo[0].certification_status), __jsx(\"p\", {\n        className: \"text-justify\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }\n      }, __jsx(Description, {\n        text: destinationInfo[0].info,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 23\n        }\n      }), \" \"), __jsx(\"p\", {\n        className: \"text-gray-500 my-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      }, \"Sources: \", destinationInfo[0].source)) : __jsx(\"p\", {\n        className: \"text-red-700 mb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 19\n        }\n      }, \"Seems like we don't information about this country yet. \\uD83D\\uDE15\")))), __jsx(_components_index_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar countryNames = Object.values(_data_countries__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).map(function (country) {\n  return country.name;\n});\n\nvar boldNameMapper = function boldNameMapper(word) {\n  var name = word.replace(/[\\W\\d_]/g, \"\");\n  return countryNames.includes(name) ? __jsx(\"b\", {\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 40\n    }\n  }, word, \" \") : \"\".concat(word, \" \");\n};\n\nvar Description = function Description(_ref3) {\n  var text = _ref3.text;\n  return text.reduce(function (acc, curr) {\n    return \"\".concat(acc, \"\\n\").concat(curr);\n  }).split(\" \").map(boldNameMapper);\n};\n\n_c = Description;\n\nvar _c;\n\n$RefreshReg$(_c, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm9yaWdpbkNvdW50cnkiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJvcHRpb24iLCJzZXRTdGF0ZSIsInZhbHVlIiwiY291bnRyaWVzT3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudHJpZXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5IiwibGFiZWwiLCJmbGFnIiwibmFtZSIsImRlc3RpbmF0aW9uT3B0aW9uIiwiZmluZCIsIm9wdGlvbnMiLCJkZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uSW5mbyIsImNvdW50cnlJbmZvIiwiaGFuZGxlRGVzdGluYXRpb25DaGFuZ2UiLCJiaW5kIiwidXBkYXRlZF9hdCIsImNlcnRpZmljYXRpb25fc3RhdHVzIiwiaW5mbyIsInNvdXJjZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY291bnRyeU5hbWVzIiwidmFsdWVzIiwiYm9sZE5hbWVNYXBwZXIiLCJ3b3JkIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiRGVzY3JpcHRpb24iLCJ0ZXh0IiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0lBRU1BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsRUFBRSxHQURKO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUZpQjtBQU1sQjs7Ozs0Q0FFdUJDLE0sRUFBUTtBQUM5QixXQUFLQyxRQUFMLENBQWM7QUFDWkYsMEJBQWtCLEVBQUVDLE1BQU0sQ0FBQ0U7QUFEZixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1D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SUFBdEIsSUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJa0IsSUFBSixNQUE5QixhQUFrREEsSUFBbEQsTUFBUDtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBYztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUNoQyxTQUFPQSxJQUFJLENBQ1JDLE1BREksQ0FDRyxVQUFDQyxHQUFELEVBQU1DLElBQU47QUFBQSxxQkFBa0JELEdBQWxCLGVBQTBCQyxJQUExQjtBQUFBLEdBREgsRUFFSkMsS0FGSSxDQUVFLEdBRkYsRUFHSi9CLEdBSEksQ0FHQXNCLGNBSEEsQ0FBUDtBQUlELENBTEQ7O0tBQU1JLFciLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4L0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleC9Gb290ZXJcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uL2RhdGEvY291bnRyaWVzXCI7XG5pbXBvcnQgcmF3SW5mbyBmcm9tIFwiLi4vZGF0YS9yYXdJbmZvXCI7XG5pbXBvcnQgY291bnRyeUluZm8gZnJvbSBcIi4uL2RhdGEvY291bnRyeUluZm9cIjtcbi8vIGltcG9ydCBhaXJsaW5lSW5mbyBmcm9tIFwiLi4vZGF0YS9jb3VudHJ5SW5mb1wiO1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcmlnaW5Db3VudHJ5OiBcIipcIixcbiAgICAgIGRlc3RpbmF0aW9uQ291bnRyeTogXCIqXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZURlc3RpbmF0aW9uQ2hhbmdlKG9wdGlvbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVzdGluYXRpb25Db3VudHJ5OiBvcHRpb24udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY291bnRyaWVzT3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKGNvdW50cmllcykubWFwKChba2V5LCBjb3VudHJ5XSkgPT4gKHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDogYCR7Y291bnRyeS5mbGFnfSAke2NvdW50cnkubmFtZX1gLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uT3B0aW9uID0gY291bnRyaWVzT3B0aW9ucy5maW5kKChvcHRpb25zKSA9PiBvcHRpb25zLnZhbHVlID09PSB0aGlzLnN0YXRlLmRlc3RpbmF0aW9uQ291bnRyeSk7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBjb3VudHJpZXNbdGhpcy5zdGF0ZS5kZXN0aW5hdGlvbkNvdW50cnldO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSW5mbyA9IGNvdW50cnlJbmZvW3RoaXMuc3RhdGUuZGVzdGluYXRpb25Db3VudHJ5XTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTUgbXktOFwiPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtNCBteS0xMCBteC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTQgbGc6Y29sLXN0YXJ0LTNcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0xIGlubGluZS1ibG9ja1wiPkkgYW0gbGVhdmluZyBmcm9tPC9oMz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0YWxpYyB0ZXh0LWdyYXktNTAwIHRleHQteHMgbWwtMlwiPihDb21pbmcgc29vbik8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2NvdW50cmllc09wdGlvbnN9IGRlZmF1bHRWYWx1ZT17Y291bnRyaWVzT3B0aW9uc1swXX0gaXNEaXNhYmxlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0xIGlubGluZS1ibG9ja1wiPkkgd2FudCB0byBnbzwvaDM+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvdW50cmllc09wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtkZXN0aW5hdGlvbk9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGVzdGluYXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggbGc6Y29sLXN0YXJ0LTMgbXQtNVwiPlxuICAgICAgICAgICAge2Rlc3RpbmF0aW9uT3B0aW9uLnZhbHVlID09PSBcIipcIiA/IChcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgZGVzdGluYXRpb24gYWJvdmUgdG8gc2VlIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdW50cnkuXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC01eGxcIj57ZGVzdGluYXRpb24uZmxhZ308L2g0PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0ZXJcIj57ZGVzdGluYXRpb24ubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgIHtkZXN0aW5hdGlvbkluZm8gPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1iLTVcIj57ZGVzdGluYXRpb25JbmZvWzBdLnVwZGF0ZWRfYXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IG1iLTVcIj57ZGVzdGluYXRpb25JbmZvWzBdLmNlcnRpZmljYXRpb25fc3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHRleHQ9e2Rlc3RpbmF0aW9uSW5mb1swXS5pbmZvfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG15LTVcIj5Tb3VyY2VzOiB7ZGVzdGluYXRpb25JbmZvWzBdLnNvdXJjZX08L3A+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwIG1iLTVcIj5TZWVtcyBsaWtlIHdlIGRvbid0IGluZm9ybWF0aW9uIGFib3V0IHRoaXMgY291bnRyeSB5ZXQuIPCfmJU8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbmNvbnN0IGNvdW50cnlOYW1lcyA9IE9iamVjdC52YWx1ZXMoY291bnRyaWVzKS5tYXAoKGNvdW50cnkpID0+IGNvdW50cnkubmFtZSk7XG5jb25zdCBib2xkTmFtZU1hcHBlciA9ICh3b3JkKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSB3b3JkLnJlcGxhY2UoL1tcXFdcXGRfXS9nLCBcIlwiKTtcbiAgcmV0dXJuIGNvdW50cnlOYW1lcy5pbmNsdWRlcyhuYW1lKSA/IDxiPnt3b3JkfSA8L2I+IDogYCR7d29yZH0gYDtcbn07XG5cbmNvbnN0IERlc2NyaXB0aW9uID0gKHsgdGV4dCB9KSA9PiB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBgJHthY2N9XFxuJHtjdXJyfWApXG4gICAgLnNwbGl0KFwiIFwiKVxuICAgIC5tYXAoYm9sZE5hbWVNYXBwZXIpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})