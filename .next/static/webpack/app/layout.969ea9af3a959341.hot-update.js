"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"86b2a7101a31\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/YTgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg2YjJhNzEwMWEzMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Nav/Menu.js":
/*!********************************!*\
  !*** ./components/Nav/Menu.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Search_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Search/search */ \"(app-client)/./components/Search/search.js\");\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Menu = ()=>{\n    _s();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProducts() {\n            const res = await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_4__.getnavigationMenu)();\n            setMenu(res);\n            console.log(res);\n        }\n        fetchProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: \"block md:inline-block px-3 py-2 rounded-md text-white focus:outline-none focus:text-white hover:bg-orange-300 focus:bg-orange-500\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Nav/Menu.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/product\",\n                className: \"block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-orange-300 focus:outline-none focus:text-white focus:bg-orange-500\",\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Nav/Menu.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined),\n            menu.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/product\",\n                    className: \"block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-orange-300 focus:outline-none focus:text-white focus:bg-orange-500\",\n                    children: item.title\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Nav/Menu.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Nav/Menu.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Menu, \"TyRRGMBrOm8vv3j6nVy8yxLr7Sc=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXYvTWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ25CO0FBQ1M7QUFDWTtBQUtsRCxNQUFNTSxPQUFPLElBQU07O0lBRWpCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZU8sZ0JBQWdCO1lBQzdCLE1BQU1DLE1BQU0sTUFBTUwsK0RBQWlCQTtZQUNuQ0csUUFBUUU7WUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBRUFEO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNyQiw4REFBQ1gsa0RBQUlBO2dCQUNGWSxNQUFLO2dCQUNMRCxXQUFVOzBCQUNYOzs7Ozs7MEJBR0YsOERBQUNYLGtEQUFJQTtnQkFDRlksTUFBSztnQkFDTEQsV0FBVTswQkFDWDs7Ozs7O1lBS0NQLEtBQUtTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ2Ysa0RBQUlBO29CQUNMWSxNQUFLO29CQUNMRCxXQUFVOzhCQUVURyxLQUFLRSxLQUFLOzs7Ozs7Ozs7Ozs7QUFNbkI7R0F4Q01iO0tBQUFBO0FBMENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L01lbnUuanM/NTBlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL1NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IHsgZ2V0bmF2aWdhdGlvbk1lbnUgfSBmcm9tICdAL2xpYi9zaG9waWZ5JztcblxuXG4gIFxuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRuYXZpZ2F0aW9uTWVudSgpO1xuICAgICAgc2V0TWVudShyZXMpO1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgIH1cblxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgbWQ6cHgtMCBweS0zIHNwYWNlLXktMiBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC0yIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cbiAgIDxMaW5rXG4gICAgICBocmVmPVwiL1wiXG4gICAgICBjbGFzc05hbWU9XCJibG9jayBtZDppbmxpbmUtYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZSBob3ZlcjpiZy1vcmFuZ2UtMzAwIGZvY3VzOmJnLW9yYW5nZS01MDBcIlxuICAgID5cbiAgICAgIEhvbWVcbiAgICA8L0xpbms+XG4gICA8TGlua1xuICAgICAgaHJlZj1cIi9wcm9kdWN0XCJcbiAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1kOmlubGluZS1ibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLW9yYW5nZS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGUgZm9jdXM6Ymctb3JhbmdlLTUwMFwiXG4gICAgPlxuICAgICAgUHJvZHVjdHNcbiAgICA8L0xpbms+XG5cbiAgICB7XG4gICAgICBtZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPExpbmtcbiAgICAgICAgaHJlZj1cIi9wcm9kdWN0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aW5saW5lLWJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctb3JhbmdlLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZSBmb2N1czpiZy1vcmFuZ2UtNTAwXCJcbiAgICAgID5cbiAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICA8L0xpbms+XG4gICAgICApKVxuICAgIH1cbiAgIFxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJTZWFyY2giLCJnZXRuYXZpZ2F0aW9uTWVudSIsIk1lbnUiLCJtZW51Iiwic2V0TWVudSIsImZldGNoUHJvZHVjdHMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Nav/Menu.js\n"));

/***/ })

});