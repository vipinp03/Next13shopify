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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"de7567b24810\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/YTgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImRlNzU2N2IyNDgxMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Search/search.js":
/*!*************************************!*\
  !*** ./components/Search/search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = async ()=>{\n        // Perform your search logic here based on the searchQuery\n        // For simplicity, let's assume the results are fetched from an API\n        // You can replace this with your own API integration code\n        // Example API call\n        await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductBysearch)(searchQuery).then((res)=>{\n            setResults(res.products.edges);\n            console.log(\"data\", res.products.edges);\n        });\n    // fetch(`https://api.example.com/search?query=${searchQuery}`)\n    //   .then(response => response.json())\n    //   .then(data => setResults(data.results))\n    //   .catch(error => console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border border-gray-300 rounded-l text-xs px-4 py-2 w-34 h-10 focus:outline-none focus:ring-1 focus:ring-orange-500\",\n                        placeholder: \"Enter your search query\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        onKeyPress: (e)=>{\n                            if (e.key === \"Enter\") {\n                                handleSearch();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-orange-500 text-white text-sm px-4 py-2 rounded-r h-10\",\n                        onClick: handleSearch,\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            searchQuery !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"list-disc pl-8\",\n                    children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: result.node.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"i2pc+yBtl94VsQcGozvkvdvN2iA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TZWFyY2gvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVztBQUVuRCxNQUFNRyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNTyxlQUFlLFVBQVc7UUFDOUIsMERBQTBEO1FBQzFELG1FQUFtRTtRQUNuRSwwREFBMEQ7UUFFMUQsbUJBQW1CO1FBQ25CLE1BQU1OLGdFQUFrQkEsQ0FBQ0UsYUFDeEJLLElBQUksQ0FBQyxDQUFDQyxNQUFNO1lBQ1hILFdBQVdHLElBQUlDLFFBQVEsQ0FBQ0MsS0FBSztZQUM3QkMsUUFBUUMsR0FBRyxDQUFDLFFBQU9KLElBQUlDLFFBQVEsQ0FBQ0MsS0FBSztRQUN2QztJQUNBLCtEQUErRDtJQUMvRCx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLHlDQUF5QztJQUMzQztJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xGLFdBQVU7d0JBQ1ZHLGFBQVk7d0JBQ1pDLE9BQU9oQjt3QkFDUGlCLFVBQVVDLENBQUFBLElBQUtqQixlQUFlaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM1Q0ksWUFBWUYsQ0FBQUEsSUFBSzs0QkFDZixJQUFJQSxFQUFFRyxHQUFHLEtBQUssU0FBUztnQ0FDckJqQjs0QkFDRixDQUFDO3dCQUNIOzs7Ozs7a0NBRUYsOERBQUNrQjt3QkFDQ1YsV0FBVTt3QkFDVlcsU0FBU25CO2tDQUNWOzs7Ozs7Ozs7Ozs7WUFJRkosZ0JBQWdCLG9CQUNqQiw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ1pWLFFBQVFzQixNQUFNLEdBQUcsa0JBQ2hCLDhEQUFDYjtvQkFBSUMsV0FBVTs4QkFDWlYsUUFBUXVCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNoQjs7OENBQ0MsOERBQUNpQjtvQ0FBSUMsS0FBSTtvQ0FBR0MsS0FBSTs7Ozs7OzhDQUNoQiw4REFBQ0M7OENBQUlMLE9BQU9NLElBQUksQ0FBQ0MsS0FBSzs7Ozs7OzsyQkFGZE47Ozs7Ozs7Ozs4Q0FPZCw4REFBQ087OEJBQUU7Ozs7OzZCQUNKOzs7Ozs7Ozs7Ozs7QUFLVDtHQTdETW5DO0tBQUFBO0FBK0ROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoL3NlYXJjaC5qcz9mZDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFByb2R1Y3RCeXNlYXJjaCB9IGZyb20gJ0AvbGliL3Nob3BpZnknO1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMoKSA9PiB7XG4gICAgLy8gUGVyZm9ybSB5b3VyIHNlYXJjaCBsb2dpYyBoZXJlIGJhc2VkIG9uIHRoZSBzZWFyY2hRdWVyeVxuICAgIC8vIEZvciBzaW1wbGljaXR5LCBsZXQncyBhc3N1bWUgdGhlIHJlc3VsdHMgYXJlIGZldGNoZWQgZnJvbSBhbiBBUElcbiAgICAvLyBZb3UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgb3duIEFQSSBpbnRlZ3JhdGlvbiBjb2RlXG5cbiAgICAvLyBFeGFtcGxlIEFQSSBjYWxsXG4gICAgYXdhaXQgZ2V0UHJvZHVjdEJ5c2VhcmNoKHNlYXJjaFF1ZXJ5KVxuICAgIC50aGVuKChyZXMpPT57XG4gICAgICBzZXRSZXN1bHRzKHJlcy5wcm9kdWN0cy5lZGdlcylcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLHJlcy5wcm9kdWN0cy5lZGdlcylcbiAgICB9KVxuICAgIC8vIGZldGNoKGBodHRwczovL2FwaS5leGFtcGxlLmNvbS9zZWFyY2g/cXVlcnk9JHtzZWFyY2hRdWVyeX1gKVxuICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgLnRoZW4oZGF0YSA9PiBzZXRSZXN1bHRzKGRhdGEucmVzdWx0cykpXG4gICAgLy8gICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbCB0ZXh0LXhzIHB4LTQgcHktMiB3LTM0IGgtMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW9yYW5nZS01MDBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBzZWFyY2ggcXVlcnlcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIHB4LTQgcHktMiByb3VuZGVkLXIgaC0xMFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxuICAgICAgICA+XG4gICAgICAgICAgR29cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2hRdWVyeSAhPT0gXCJcIiAgJiZcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICB7cmVzdWx0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLThcIj5cbiAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxoMT57cmVzdWx0Lm5vZGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5ObyByZXN1bHRzIGZvdW5kLjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRQcm9kdWN0QnlzZWFyY2giLCJTZWFyY2giLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYW5kbGVTZWFyY2giLCJ0aGVuIiwicmVzIiwicHJvZHVjdHMiLCJlZGdlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImgxIiwibm9kZSIsInRpdGxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Search/search.js\n"));

/***/ })

});