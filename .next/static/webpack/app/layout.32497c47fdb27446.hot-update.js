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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6e185433ba26\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/YTgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjZlMTg1NDMzYmEyNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Search/search.js":
/*!*************************************!*\
  !*** ./components/Search/search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = async ()=>{\n        // Perform your search logic here based on the searchQuery\n        // For simplicity, let's assume the results are fetched from an API\n        // You can replace this with your own API integration code\n        // Example API call\n        await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductBysearch)(searchQuery).then((res)=>{\n            console.log(res.products.edges);\n        });\n    // fetch(`https://api.example.com/search?query=${searchQuery}`)\n    //   .then(response => response.json())\n    //   .then(data => setResults(data.results))\n    //   .catch(error => console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border border-gray-300 rounded-l text-xs px-4 py-2 w-34 h-10 focus:outline-none focus:ring-1 focus:ring-orange-500\",\n                        placeholder: \"Enter your search query\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        onKeyPress: (e)=>{\n                            if (e.key === \"Enter\") {\n                                handleSearch();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-orange-500 text-white text-sm px-4 py-2 rounded-r h-10\",\n                        onClick: handleSearch,\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            searchQuery !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc pl-8\",\n                    children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: result\n                        }, index, false, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"h1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"i2pc+yBtl94VsQcGozvkvdvN2iA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TZWFyY2gvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVztBQUVuRCxNQUFNRyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNTyxlQUFlLFVBQVc7UUFDOUIsMERBQTBEO1FBQzFELG1FQUFtRTtRQUNuRSwwREFBMEQ7UUFFMUQsbUJBQW1CO1FBQ25CLE1BQU1OLGdFQUFrQkEsQ0FBQ0UsYUFDeEJLLElBQUksQ0FBQyxDQUFDQyxNQUFNO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsUUFBUSxDQUFDQyxLQUFLO1FBQ2hDO0lBQ0EsK0RBQStEO0lBQy9ELHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMseUNBQXlDO0lBQzNDO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEYsV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkMsT0FBT2hCO3dCQUNQaUIsVUFBVUMsQ0FBQUEsSUFBS2pCLGVBQWVpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzVDSSxZQUFZRixDQUFBQSxJQUFLOzRCQUNmLElBQUlBLEVBQUVHLEdBQUcsS0FBSyxTQUFTO2dDQUNyQmpCOzRCQUNGLENBQUM7d0JBQ0g7Ozs7OztrQ0FFRiw4REFBQ2tCO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFTbkI7a0NBQ1Y7Ozs7Ozs7Ozs7OztZQUlGSixnQkFBZ0Isb0JBQ2pCLDhEQUFDVztnQkFBSUMsV0FBVTswQkFDWlYsUUFBUXNCLE1BQU0sR0FBRyxrQkFDaEIsOERBQUNDO29CQUFHYixXQUFVOzhCQUNYVixRQUFRd0IsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ0M7c0NBQWdCRjsyQkFBUkM7Ozs7Ozs7Ozs4Q0FJYiw4REFBQ2pCOztzQ0FDQyw4REFBQ0E7c0NBQUk7Ozs7OztzQ0FDSCw4REFBQ21CO3NDQUFHOzs7Ozs7Ozs7Ozs2QkFHVDs7Ozs7Ozs7Ozs7O0FBS1Q7R0E3RE0vQjtLQUFBQTtBQStETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC9zZWFyY2guanM/ZmQ1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlzZWFyY2ggfSBmcm9tICdAL2xpYi9zaG9waWZ5JztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0geW91ciBzZWFyY2ggbG9naWMgaGVyZSBiYXNlZCBvbiB0aGUgc2VhcmNoUXVlcnlcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSwgbGV0J3MgYXNzdW1lIHRoZSByZXN1bHRzIGFyZSBmZXRjaGVkIGZyb20gYW4gQVBJXG4gICAgLy8gWW91IGNhbiByZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBBUEkgaW50ZWdyYXRpb24gY29kZVxuXG4gICAgLy8gRXhhbXBsZSBBUEkgY2FsbFxuICAgIGF3YWl0IGdldFByb2R1Y3RCeXNlYXJjaChzZWFyY2hRdWVyeSlcbiAgICAudGhlbigocmVzKT0+e1xuICAgICAgY29uc29sZS5sb2cocmVzLnByb2R1Y3RzLmVkZ2VzICAgICAgICApXG4gICAgfSlcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vc2VhcmNoP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YClcbiAgICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKGRhdGEgPT4gc2V0UmVzdWx0cyhkYXRhLnJlc3VsdHMpKVxuICAgIC8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwgdGV4dC14cyBweC00IHB5LTIgdy0zNCBoLTEwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgc2VhcmNoIHF1ZXJ5XCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgdGV4dC1zbSBweC00IHB5LTIgcm91bmRlZC1yIGgtMTBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgPlxuICAgICAgICAgIEdvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoUXVlcnkgIT09IFwiXCIgICYmXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAge3Jlc3VsdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLThcIj5cbiAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e3Jlc3VsdH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5pbWc8L2Rpdj5cbiAgICAgICAgICAgICAgPGgxPmgxPC9oMT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0UHJvZHVjdEJ5c2VhcmNoIiwiU2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlU2VhcmNoIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsImVkZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImxpIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Search/search.js\n"));

/***/ })

});