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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a1d07ee34db7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/YTgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImExZDA3ZWUzNGRiN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Search/search.js":
/*!*************************************!*\
  !*** ./components/Search/search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = async ()=>{\n        // Perform your search logic here based on the searchQuery\n        // For simplicity, let's assume the results are fetched from an API\n        // You can replace this with your own API integration code\n        // Example API call\n        await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductBysearch)(searchQuery).then((res)=>{\n            setResults(res.products.edges);\n            console.log(\"data\", res.products.edges);\n        });\n    // fetch(`https://api.example.com/search?query=${searchQuery}`)\n    //   .then(response => response.json())\n    //   .then(data => setResults(data.results))\n    //   .catch(error => console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border border-gray-300 rounded-l text-xs px-4 py-2 w-34 h-10 focus:outline-none focus:ring-1 focus:ring-orange-500\",\n                        placeholder: \"Enter your search query\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        onKeyPress: (e)=>{\n                            if (e.key === \"Enter\") {\n                                handleSearch();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-orange-500 text-white text-sm px-4 py-2 rounded-r h-10\",\n                        onClick: handleSearch,\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            searchQuery !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" max-w-xl  bg-red-500 relative\",\n                children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" max-w-xl bg-slate-400 h-60 rounded-sm p-2 absolute\",\n                    children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-sm\",\n                                    src: result.node.featuredImage.originalSrc,\n                                    alt: result.node.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" text-\",\n                                    children: result.node.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"i2pc+yBtl94VsQcGozvkvdvN2iA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TZWFyY2gvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVztBQUVuRCxNQUFNRyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNTyxlQUFlLFVBQVc7UUFDOUIsMERBQTBEO1FBQzFELG1FQUFtRTtRQUNuRSwwREFBMEQ7UUFFMUQsbUJBQW1CO1FBQ25CLE1BQU1OLGdFQUFrQkEsQ0FBQ0UsYUFDeEJLLElBQUksQ0FBQyxDQUFDQyxNQUFNO1lBQ1hILFdBQVdHLElBQUlDLFFBQVEsQ0FBQ0MsS0FBSztZQUM3QkMsUUFBUUMsR0FBRyxDQUFDLFFBQU9KLElBQUlDLFFBQVEsQ0FBQ0MsS0FBSztRQUN2QztJQUNBLCtEQUErRDtJQUMvRCx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLHlDQUF5QztJQUMzQztJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xGLFdBQVU7d0JBQ1ZHLGFBQVk7d0JBQ1pDLE9BQU9oQjt3QkFDUGlCLFVBQVVDLENBQUFBLElBQUtqQixlQUFlaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM1Q0ksWUFBWUYsQ0FBQUEsSUFBSzs0QkFDZixJQUFJQSxFQUFFRyxHQUFHLEtBQUssU0FBUztnQ0FDckJqQjs0QkFDRixDQUFDO3dCQUNIOzs7Ozs7a0NBRUYsOERBQUNrQjt3QkFDQ1YsV0FBVTt3QkFDVlcsU0FBU25CO2tDQUNWOzs7Ozs7Ozs7Ozs7WUFJRkosZ0JBQWdCLG9CQUNqQiw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ1pWLFFBQVFzQixNQUFNLEdBQUcsa0JBQ2hCLDhEQUFDYjtvQkFBSUMsV0FBVTs4QkFDWlYsUUFBUXVCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNoQjs0QkFBZ0JDLFdBQVU7OzhDQUN6Qiw4REFBQ2dCO29DQUFJaEIsV0FBVTtvQ0FBdUJpQixLQUFLSCxPQUFPSSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsV0FBVztvQ0FBRUMsS0FBS1AsT0FBT0ksSUFBSSxDQUFDSSxLQUFLOzs7Ozs7OENBQ3hHLDhEQUFDQztvQ0FBR3ZCLFdBQVU7OENBQVVjLE9BQU9JLElBQUksQ0FBQ0ksS0FBSzs7Ozs7OzsyQkFGakNQOzs7Ozs7Ozs7OENBT2QsOERBQUNTOzhCQUFFOzs7Ozs2QkFDSjs7Ozs7Ozs7Ozs7O0FBS1Q7R0E3RE1yQztLQUFBQTtBQStETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC9zZWFyY2guanM/ZmQ1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlzZWFyY2ggfSBmcm9tICdAL2xpYi9zaG9waWZ5JztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0geW91ciBzZWFyY2ggbG9naWMgaGVyZSBiYXNlZCBvbiB0aGUgc2VhcmNoUXVlcnlcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSwgbGV0J3MgYXNzdW1lIHRoZSByZXN1bHRzIGFyZSBmZXRjaGVkIGZyb20gYW4gQVBJXG4gICAgLy8gWW91IGNhbiByZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBBUEkgaW50ZWdyYXRpb24gY29kZVxuXG4gICAgLy8gRXhhbXBsZSBBUEkgY2FsbFxuICAgIGF3YWl0IGdldFByb2R1Y3RCeXNlYXJjaChzZWFyY2hRdWVyeSlcbiAgICAudGhlbigocmVzKT0+e1xuICAgICAgc2V0UmVzdWx0cyhyZXMucHJvZHVjdHMuZWRnZXMpXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIixyZXMucHJvZHVjdHMuZWRnZXMpXG4gICAgfSlcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vc2VhcmNoP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YClcbiAgICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKGRhdGEgPT4gc2V0UmVzdWx0cyhkYXRhLnJlc3VsdHMpKVxuICAgIC8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwgdGV4dC14cyBweC00IHB5LTIgdy0zNCBoLTEwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgc2VhcmNoIHF1ZXJ5XCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgdGV4dC1zbSBweC00IHB5LTIgcm91bmRlZC1yIGgtMTBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgPlxuICAgICAgICAgIEdvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoUXVlcnkgIT09IFwiXCIgICYmXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYXgtdy14bCAgYmctcmVkLTUwMCByZWxhdGl2ZVwiPlxuICAgICAgICB7cmVzdWx0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1heC13LXhsIGJnLXNsYXRlLTQwMCBoLTYwIHJvdW5kZWQtc20gcC0yIGFic29sdXRlXCI+XG4gICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy0xMCBoLTEwIHJvdW5kZWQtc20nIHNyYz17cmVzdWx0Lm5vZGUuZmVhdHVyZWRJbWFnZS5vcmlnaW5hbFNyY30gYWx0PXtyZXN1bHQubm9kZS50aXRsZX0vPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9JyB0ZXh0LSc+e3Jlc3VsdC5ub2RlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZC48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0UHJvZHVjdEJ5c2VhcmNoIiwiU2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlU2VhcmNoIiwidGhlbiIsInJlcyIsInByb2R1Y3RzIiwiZWRnZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJpbWciLCJzcmMiLCJub2RlIiwiZmVhdHVyZWRJbWFnZSIsIm9yaWdpbmFsU3JjIiwiYWx0IiwidGl0bGUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Search/search.js\n"));

/***/ })

});