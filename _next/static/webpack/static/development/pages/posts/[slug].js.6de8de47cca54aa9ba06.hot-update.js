webpackHotUpdate("static/development/pages/posts/[slug].js",{

/***/ "./components/PostMetaTags/index.tsx":
/*!*******************************************!*\
  !*** ./components/PostMetaTags/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostMetaTags; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/heyde/Projects/me.heyde/components/PostMetaTags/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar domain = \"https://heyde.herokuapp.com\";\nfunction PostMetaTags(_ref) {\n  var data = _ref.data;\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, data.title, \" - Heyde\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: data.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: data.author.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"https:\".concat(data.coverImage.url),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: \"\".concat(domain, \"/posts/\").concat(data.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Heyde\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: data.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: data.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:image\",\n    content: data.coverImage.url,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:url\",\n    content: \"\".concat(domain, \"/posts/\").concat(data.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }));\n}\n_c = PostMetaTags;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostMetaTags\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RNZXRhVGFncy9pbmRleC50c3g/MWRjZiJdLCJuYW1lcyI6WyJkb21haW4iLCJQb3N0TWV0YVRhZ3MiLCJkYXRhIiwidGl0bGUiLCJleGNlcnB0IiwiYXV0aG9yIiwibmFtZSIsImNvdmVySW1hZ2UiLCJ1cmwiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBRyw2QkFBZjtBQUVlLFNBQVNDLFlBQVQsT0FBZ0M7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDN0MsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLElBQUksQ0FBQ0MsS0FBYixhQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVELElBQUksQ0FBQ0UsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUVGLElBQUksQ0FBQ0csTUFBTCxDQUFZQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBRUosSUFBSSxDQUFDQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sa0JBQVdELElBQUksQ0FBQ0ssVUFBTCxDQUFnQkMsR0FBM0IsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxZQUFRLEVBQUMsUUFBZjtBQUF3QixXQUFPLFlBQUtSLE1BQUwsb0JBQXFCRSxJQUFJLENBQUNPLElBQTFCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sWUFBUSxFQUFDLGNBQWY7QUFBOEIsV0FBTyxFQUFDLE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRVAsSUFBSSxDQUFDRSxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFNLFlBQVEsRUFBQyxTQUFmO0FBQXlCLFdBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBRUYsSUFBSSxDQUFDQyxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBRUQsSUFBSSxDQUFDSyxVQUFMLENBQWdCQyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sWUFBS1IsTUFBTCxvQkFBcUJFLElBQUksQ0FBQ08sSUFBMUIsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0U7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMsU0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQ7S0FuQnVCUixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0TWV0YVRhZ3MvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBkb21haW4gPSBcImh0dHBzOi8vaGV5ZGUuaGVyb2t1YXBwLmNvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TWV0YVRhZ3MoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57ZGF0YS50aXRsZX0gLSBIZXlkZTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLmV4Y2VycHR9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PXtkYXRhLmF1dGhvci5uYW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2RhdGEudGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YGh0dHBzOiR7ZGF0YS5jb3ZlckltYWdlLnVybH1gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtkb21haW59L3Bvc3RzLyR7ZGF0YS5zbHVnfWB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJIZXlkZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5leGNlcnB0fSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtkYXRhLnRpdGxlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtkYXRhLmNvdmVySW1hZ2UudXJsfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD17YCR7ZG9tYWlufS9wb3N0cy8ke2RhdGEuc2x1Z31gfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostMetaTags/index.tsx\n");

/***/ })

})