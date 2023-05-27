"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/page",{

/***/ "(app-client)/./components/Product/ProductGrid.jsx":
/*!********************************************!*\
  !*** ./components/Product/ProductGrid.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductGrid(param) {\n    let { collectionProductData  } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProducts() {\n            const res = await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductsData)();\n            setProducts(res);\n        // console.log(res)\n        }\n        fetchProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (collectionProductData.length > 0) {}\n        console.log(\"collectionProductData\", collectionProductData);\n    }, [\n        collectionProductData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/product/\".concat(product.node.handle),\n                        className: \"group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.node.images.edges[0].node.originalSrc,\n                                    // alt={product.images.edges[0].node.altText}\n                                    className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-4 text-sm text-gray-700\",\n                                children: product.node.title\n                            }, void 0, false, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-1 text-lg font-medium text-gray-900\",\n                                children: [\n                                    product.node.priceRange.minVariantPrice.amount,\n                                    \" \",\n                                    product.node.priceRange.minVariantPrice.currencyCode\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductGrid, \"yIMaXFJFJk3e4dtbshAaMPRShpc=\");\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3RHcmlkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSTtBQUNuQjtBQUVkLFNBQVNJLFlBQVksS0FBdUIsRUFBRTtRQUF6QixFQUFDQyxzQkFBcUIsRUFBQyxHQUF2Qjs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFJM0NDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlTyxnQkFBZ0I7WUFDN0IsTUFBTUMsTUFBTSxNQUFNUCw2REFBZUE7WUFDakNLLFlBQVlFO1FBQ1osbUJBQW1CO1FBQ3JCO1FBRUFEO0lBQ0YsR0FBRyxFQUFFO0lBQ0xQLGdEQUFTQSxDQUFDLElBQUk7UUFDWixJQUFHSSxzQkFBc0JLLE1BQU0sR0FBRyxHQUFFLENBRXBDLENBQUM7UUFDREMsUUFBUUMsR0FBRyxDQUFDLHlCQUF3QlA7SUFDdEMsR0FBRTtRQUFDQTtLQUFzQjtJQUV6QixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLFNBQVNTLEdBQUcsQ0FBQyxDQUFDQyx3QkFFYiw4REFBQ2Isa0RBQUlBO3dCQUFrQmMsTUFBTSxZQUFnQyxPQUFwQkQsUUFBUUUsSUFBSSxDQUFDQyxNQUFNO3dCQUFJTCxXQUFVOzswQ0FDeEUsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDTTtvQ0FDQ0MsS0FBS0wsUUFBUUUsSUFBSSxDQUFDSSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNMLElBQUksQ0FBQ00sV0FBVztvQ0FDbEQsNkNBQTZDO29DQUM3Q1YsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNXO2dDQUFHWCxXQUFVOzBDQUE4QkUsUUFBUUUsSUFBSSxDQUFDUSxLQUFLOzs7Ozs7MENBQzlELDhEQUFDQztnQ0FBRWIsV0FBVTs7b0NBQ1ZFLFFBQVFFLElBQUksQ0FBQ1UsVUFBVSxDQUFDQyxlQUFlLENBQUNDLE1BQU07b0NBQUM7b0NBQUVkLFFBQVFFLElBQUksQ0FBQ1UsVUFBVSxDQUFDQyxlQUFlLENBQUNFLFlBQVk7Ozs7Ozs7O3VCQVYvRmYsUUFBUWdCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqQyxDQUFDO0dBN0N1QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0R3JpZC5qc3g/Y2NlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNEYXRhIH0gZnJvbSAnQC9saWIvc2hvcGlmeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0R3JpZCh7Y29sbGVjdGlvblByb2R1Y3REYXRhfSkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG5cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb2R1Y3RzRGF0YSgpO1xuICAgICAgc2V0UHJvZHVjdHMocmVzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG5cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoY29sbGVjdGlvblByb2R1Y3REYXRhLmxlbmd0aCA+IDApe1xuICAgICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvblByb2R1Y3REYXRhXCIsY29sbGVjdGlvblByb2R1Y3REYXRhKVxuICB9LFtjb2xsZWN0aW9uUHJvZHVjdERhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweC00IHB5LTQgc206cHgtNiBzbTpweS02IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxMaW5rIGtleT17cHJvZHVjdC5pZH0gaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5ub2RlLmhhbmRsZX1gfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1oLTEgYXNwZWN0LXctMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LWgtOCB4bDphc3BlY3Qtdy03XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0Lm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmN9XG4gICAgICAgICAgICAgICAgICAvLyBhbHQ9e3Byb2R1Y3QuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntwcm9kdWN0Lm5vZGUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5ub2RlLnByaWNlUmFuZ2UubWluVmFyaWFudFByaWNlLmFtb3VudH0ge3Byb2R1Y3Qubm9kZS5wcmljZVJhbmdlLm1pblZhcmlhbnRQcmljZS5jdXJyZW5jeUNvZGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0c0RhdGEiLCJMaW5rIiwiUHJvZHVjdEdyaWQiLCJjb2xsZWN0aW9uUHJvZHVjdERhdGEiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0cyIsInJlcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaHJlZiIsIm5vZGUiLCJoYW5kbGUiLCJpbWciLCJzcmMiLCJpbWFnZXMiLCJlZGdlcyIsIm9yaWdpbmFsU3JjIiwiaDMiLCJ0aXRsZSIsInAiLCJwcmljZVJhbmdlIiwibWluVmFyaWFudFByaWNlIiwiYW1vdW50IiwiY3VycmVuY3lDb2RlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Product/ProductGrid.jsx\n"));

/***/ })

});