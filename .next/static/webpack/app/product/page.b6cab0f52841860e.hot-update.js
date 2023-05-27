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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/shopify */ \"(app-client)/./lib/shopify.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductGrid(param) {\n    let { collectionProductData  } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchProducts = async ()=>{\n        const res = await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductsData)();\n        setProducts(res);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProducts() {\n        // console.log(res)\n        }\n        fetchProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (collectionProductData.length > 0) {\n            setProducts(collectionProductData);\n        } else {}\n    }, [\n        collectionProductData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/product/\".concat(product.node.handle),\n                        className: \"group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.node.images.edges[0].node.originalSrc,\n                                    // alt={product.images.edges[0].node.altText}\n                                    className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-4 text-sm text-gray-700\",\n                                children: product.node.title\n                            }, void 0, false, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-1 text-lg font-medium text-gray-900\",\n                                children: [\n                                    product.node.priceRange.minVariantPrice.amount,\n                                    \" \",\n                                    product.node.priceRange.minVariantPrice.currencyCode\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/ProductGrid.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductGrid, \"yIMaXFJFJk3e4dtbshAaMPRShpc=\");\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3RHcmlkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSTtBQUNuQjtBQUVkLFNBQVNJLFlBQVksS0FBdUIsRUFBRTtRQUF6QixFQUFDQyxzQkFBcUIsRUFBQyxHQUF2Qjs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFHM0MsTUFBTVEsZ0JBQWdCLFVBQVM7UUFDN0IsTUFBTUMsTUFBTSxNQUFNUCw2REFBZUE7UUFDakNLLFlBQVlFO0lBQ2Q7SUFDQVIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVPLGdCQUFnQjtRQUU3QixtQkFBbUI7UUFDckI7UUFFQUE7SUFDRixHQUFHLEVBQUU7SUFDTFAsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUdJLHNCQUFzQkssTUFBTSxHQUFHLEdBQUU7WUFDbENILFlBQVlGO1FBQ2QsT0FBSyxDQUVMLENBQUM7SUFDSCxHQUFFO1FBQUNBO0tBQXNCO0lBRXpCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWk4sU0FBU08sR0FBRyxDQUFDLENBQUNDLHdCQUViLDhEQUFDWCxrREFBSUE7d0JBQWtCWSxNQUFNLFlBQWdDLE9BQXBCRCxRQUFRRSxJQUFJLENBQUNDLE1BQU07d0JBQUlMLFdBQVU7OzBDQUN4RSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNNO29DQUNDQyxLQUFLTCxRQUFRRSxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0wsSUFBSSxDQUFDTSxXQUFXO29DQUNsRCw2Q0FBNkM7b0NBQzdDVixXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ1c7Z0NBQUdYLFdBQVU7MENBQThCRSxRQUFRRSxJQUFJLENBQUNRLEtBQUs7Ozs7OzswQ0FDOUQsOERBQUNDO2dDQUFFYixXQUFVOztvQ0FDVkUsUUFBUUUsSUFBSSxDQUFDVSxVQUFVLENBQUNDLGVBQWUsQ0FBQ0MsTUFBTTtvQ0FBQztvQ0FBRWQsUUFBUUUsSUFBSSxDQUFDVSxVQUFVLENBQUNDLGVBQWUsQ0FBQ0UsWUFBWTs7Ozs7Ozs7dUJBVi9GZixRQUFRZ0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpDLENBQUM7R0FoRHVCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3RHcmlkLmpzeD9jY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c0RhdGEgfSBmcm9tICdAL2xpYi9zaG9waWZ5JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RHcmlkKHtjb2xsZWN0aW9uUHJvZHVjdERhdGF9KSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBcblxuICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMoKT0+e1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb2R1Y3RzRGF0YSgpO1xuICAgIHNldFByb2R1Y3RzKHJlcyk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG5cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoY29sbGVjdGlvblByb2R1Y3REYXRhLmxlbmd0aCA+IDApe1xuICAgICAgc2V0UHJvZHVjdHMoY29sbGVjdGlvblByb2R1Y3REYXRhKTtcbiAgICB9ZWxzZXtcblxuICAgIH1cbiAgfSxbY29sbGVjdGlvblByb2R1Y3REYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHgtNCBweS00IHNtOnB4LTYgc206cHktNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXgtNiBnYXAteS0xMCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGluayBrZXk9e3Byb2R1Y3QuaWR9IGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3Qubm9kZS5oYW5kbGV9YH0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtaC0xIGFzcGVjdC13LTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC1oLTggeGw6YXNwZWN0LXctN1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5ub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjfVxuICAgICAgICAgICAgICAgICAgLy8gYWx0PXtwcm9kdWN0LmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj57cHJvZHVjdC5ub2RlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3Qubm9kZS5wcmljZVJhbmdlLm1pblZhcmlhbnRQcmljZS5hbW91bnR9IHtwcm9kdWN0Lm5vZGUucHJpY2VSYW5nZS5taW5WYXJpYW50UHJpY2UuY3VycmVuY3lDb2RlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHNEYXRhIiwiTGluayIsIlByb2R1Y3RHcmlkIiwiY29sbGVjdGlvblByb2R1Y3REYXRhIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZldGNoUHJvZHVjdHMiLCJyZXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaHJlZiIsIm5vZGUiLCJoYW5kbGUiLCJpbWciLCJzcmMiLCJpbWFnZXMiLCJlZGdlcyIsIm9yaWdpbmFsU3JjIiwiaDMiLCJ0aXRsZSIsInAiLCJwcmljZVJhbmdlIiwibWluVmFyaWFudFByaWNlIiwiYW1vdW50IiwiY3VycmVuY3lDb2RlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Product/ProductGrid.jsx\n"));

/***/ })

});