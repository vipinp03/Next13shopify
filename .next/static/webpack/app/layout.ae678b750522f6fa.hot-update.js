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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"51464504afb1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/YTgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjUxNDY0NTA0YWZiMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Search/search.js":
/*!*************************************!*\
  !*** ./components/Search/search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = async ()=>{\n        // Perform your search logic here based on the searchQuery\n        // For simplicity, let's assume the results are fetched from an API\n        // You can replace this with your own API integration code\n        // Example API call\n        await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductBysearch)().then;\n        fetch(\"https://api.example.com/search?query=\".concat(searchQuery)).then((response)=>response.json()).then((data)=>setResults(data.results)).catch((error)=>console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border border-gray-300 rounded-l text-xs px-4 py-2 w-34 h-10 focus:outline-none focus:ring-1 focus:ring-orange-500\",\n                        placeholder: \"Enter your search query\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        onKeyPress: (e)=>{\n                            if (e.key === \"Enter\") {\n                                handleSearch();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-orange-500 text-white text-sm px-4 py-2 rounded-r h-10\",\n                        onClick: handleSearch,\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            searchQuery !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: results.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc pl-8\",\n                    children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: result\n                        }, index, false, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Search/search.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"i2pc+yBtl94VsQcGozvkvdvN2iA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TZWFyY2gvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVztBQUVuRCxNQUFNRyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNTyxlQUFlLFVBQVc7UUFDOUIsMERBQTBEO1FBQzFELG1FQUFtRTtRQUNuRSwwREFBMEQ7UUFFMUQsbUJBQW1CO1FBQ25CLE1BQU1OLGdFQUFrQkEsR0FDdkJPLElBQUk7UUFDTEMsTUFBTSx3Q0FBb0QsT0FBWk4sY0FDM0NLLElBQUksQ0FBQ0UsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkgsSUFBSSxDQUFDSSxDQUFBQSxPQUFRTixXQUFXTSxLQUFLUCxPQUFPLEdBQ3BDUSxLQUFLLENBQUNDLENBQUFBLFFBQVNDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMRixXQUFVO3dCQUNWRyxhQUFZO3dCQUNaQyxPQUFPbkI7d0JBQ1BvQixVQUFVQyxDQUFBQSxJQUFLcEIsZUFBZW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDNUNJLFlBQVlGLENBQUFBLElBQUs7NEJBQ2YsSUFBSUEsRUFBRUcsR0FBRyxLQUFLLFNBQVM7Z0NBQ3JCcEI7NEJBQ0YsQ0FBQzt3QkFDSDs7Ozs7O2tDQUVGLDhEQUFDcUI7d0JBQ0NWLFdBQVU7d0JBQ1ZXLFNBQVN0QjtrQ0FDVjs7Ozs7Ozs7Ozs7O1lBSUZKLGdCQUFnQixvQkFDakIsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNaYixRQUFReUIsTUFBTSxHQUFHLGtCQUNoQiw4REFBQ0M7b0JBQUdiLFdBQVU7OEJBQ1hiLFFBQVEyQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3BCLDhEQUFDQztzQ0FBZ0JGOzJCQUFSQzs7Ozs7Ozs7OzhDQUliLDhEQUFDRTs4QkFBRTs7Ozs7NkJBQ0o7Ozs7Ozs7Ozs7OztBQUtUO0dBdkRNbEM7S0FBQUE7QUF5RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gvc2VhcmNoLmpzP2ZkNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5c2VhcmNoIH0gZnJvbSAnQC9saWIvc2hvcGlmeSc7XG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYygpID0+IHtcbiAgICAvLyBQZXJmb3JtIHlvdXIgc2VhcmNoIGxvZ2ljIGhlcmUgYmFzZWQgb24gdGhlIHNlYXJjaFF1ZXJ5XG4gICAgLy8gRm9yIHNpbXBsaWNpdHksIGxldCdzIGFzc3VtZSB0aGUgcmVzdWx0cyBhcmUgZmV0Y2hlZCBmcm9tIGFuIEFQSVxuICAgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggeW91ciBvd24gQVBJIGludGVncmF0aW9uIGNvZGVcblxuICAgIC8vIEV4YW1wbGUgQVBJIGNhbGxcbiAgICBhd2FpdCBnZXRQcm9kdWN0QnlzZWFyY2goKVxuICAgIC50aGVuXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3NlYXJjaD9xdWVyeT0ke3NlYXJjaFF1ZXJ5fWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldFJlc3VsdHMoZGF0YS5yZXN1bHRzKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sIHRleHQteHMgcHgtNCBweS0yIHctMzQgaC0xMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctb3JhbmdlLTUwMFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHNlYXJjaCBxdWVyeVwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICBoYW5kbGVTZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTUwMCB0ZXh0LXdoaXRlIHRleHQtc20gcHgtNCBweS0yIHJvdW5kZWQtciBoLTEwXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgID5cbiAgICAgICAgICBHb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaFF1ZXJ5ICE9PSBcIlwiICAmJlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgIHtyZXN1bHRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC04XCI+XG4gICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntyZXN1bHR9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZC48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0UHJvZHVjdEJ5c2VhcmNoIiwiU2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlU2VhcmNoIiwidGhlbiIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Search/search.js\n"));

/***/ })

});