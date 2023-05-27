"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-client)/./components/Profile/OrderHistory.js":
/*!********************************************!*\
  !*** ./components/Profile/OrderHistory.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst OrderHistory = (param)=>{\n    let { orders  } = param;\n    // const orders = [\n    //   {\n    //     id: 1,\n    //     product: {\n    //       title: 'Product 1',\n    //       price: 10.99,\n    //       quantity: 2,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-001',\n    //   },\n    //   {\n    //     id: 2,\n    //     product: {\n    //       title: 'Product 2',\n    //       price: 15.99,\n    //       quantity: 1,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-002',\n    //   },\n    //   {\n    //     id: 3,\n    //     product: {\n    //       title: 'Product 3',\n    //       price: 12.99,\n    //       quantity: 3,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-003',\n    //   },\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Order History\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            orders.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-6\",\n                children: orders.edges.map((order)=>order.node.lineItems.edges.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-lg shadow overflow-hidden flex items-center px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: order.product.image,\n                                    alt: order.product.title,\n                                    className: \"h-24 w-24 object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 flex flex-col justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-lg font-semibold\",\n                                                    children: order.product.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-gray-600\",\n                                                    children: [\n                                                        \"$\",\n                                                        order.product.price.toFixed(2)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-gray-600\",\n                                                    children: [\n                                                        \"Quantity: \",\n                                                        order.product.quantity\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-gray-500\",\n                                            children: [\n                                                \"Order ID: \",\n                                                order.orderId\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, order.id, true, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                            lineNumber: 46,\n                            columnNumber: 27\n                        }, undefined)))\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No orders found.\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9maWxlL09yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyxlQUFlLFNBQWM7UUFBYixFQUFDQyxPQUFNLEVBQUM7SUFFNUIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlHQUFpRztJQUNqRyxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpR0FBaUc7SUFDakcsU0FBUztJQUNULDBCQUEwQjtJQUMxQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUdBQWlHO0lBQ2pHLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4Qjs7Ozs7O1lBRTNDRixPQUFPSSxNQUFNLEdBQUcsa0JBQ2YsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaRixPQUFPSyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFDaEJBLE1BQU1DLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixLQUFLLENBQzFCQyxHQUFHLENBQUMsQ0FBQ0kscUJBQVMsOERBQUNUOzRCQUViQyxXQUFVOzs4Q0FFViw4REFBQ1M7b0NBQ0NDLEtBQUtMLE1BQU1NLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDeEJDLEtBQUtSLE1BQU1NLE9BQU8sQ0FBQ0csS0FBSztvQ0FDeEJkLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs7OERBQ0MsOERBQUNnQjtvREFBR2YsV0FBVTs4REFBeUJLLE1BQU1NLE9BQU8sQ0FBQ0csS0FBSzs7Ozs7OzhEQUMxRCw4REFBQ0U7b0RBQUVoQixXQUFVOzt3REFBZ0I7d0RBQUVLLE1BQU1NLE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7OERBQzNELDhEQUFDRjtvREFBRWhCLFdBQVU7O3dEQUFnQjt3REFBV0ssTUFBTU0sT0FBTyxDQUFDUSxRQUFROzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0g7NENBQUVoQixXQUFVOztnREFBd0I7Z0RBQVdLLE1BQU1lLE9BQU87Ozs7Ozs7Ozs7Ozs7OzJCQWQxRGYsTUFBTWdCLEVBQUU7Ozs7Ozs7OzswQ0FxQm5CLDhEQUFDTDswQkFBRTs7Ozs7eUJBQ0o7Ozs7Ozs7QUFHUDtLQXJFTW5CO0FBdUVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmlsZS9PcmRlckhpc3RvcnkuanM/ZDE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPcmRlckhpc3RvcnkgPSAoe29yZGVyc30pID0+IHtcblxuICAvLyBjb25zdCBvcmRlcnMgPSBbXG4gIC8vICAge1xuICAvLyAgICAgaWQ6IDEsXG4gIC8vICAgICBwcm9kdWN0OiB7XG4gIC8vICAgICAgIHRpdGxlOiAnUHJvZHVjdCAxJyxcbiAgLy8gICAgICAgcHJpY2U6IDEwLjk5LFxuICAvLyAgICAgICBxdWFudGl0eTogMixcbiAgLy8gICAgICAgaW1hZ2U6ICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDQtaW1hZ2UtY2FyZC0wMy5qcGcnLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIG9yZGVySWQ6ICdPUkQtMDAxJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAyLFxuICAvLyAgICAgcHJvZHVjdDoge1xuICAvLyAgICAgICB0aXRsZTogJ1Byb2R1Y3QgMicsXG4gIC8vICAgICAgIHByaWNlOiAxNS45OSxcbiAgLy8gICAgICAgcXVhbnRpdHk6IDEsXG4gIC8vICAgICAgIGltYWdlOiAnaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTA0LWltYWdlLWNhcmQtMDMuanBnJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBvcmRlcklkOiAnT1JELTAwMicsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpZDogMyxcbiAgLy8gICAgIHByb2R1Y3Q6IHtcbiAgLy8gICAgICAgdGl0bGU6ICdQcm9kdWN0IDMnLFxuICAvLyAgICAgICBwcmljZTogMTIuOTksXG4gIC8vICAgICAgIHF1YW50aXR5OiAzLFxuICAvLyAgICAgICBpbWFnZTogJ2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvY2F0ZWdvcnktcGFnZS0wNC1pbWFnZS1jYXJkLTAzLmpwZycsXG4gIC8vICAgICB9LFxuICAvLyAgICAgb3JkZXJJZDogJ09SRC0wMDMnLFxuICAvLyAgIH0sXG4gIC8vIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB5LThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5PcmRlciBIaXN0b3J5PC9oMT5cblxuICAgICAge29yZGVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTZcIj5cbiAgICAgICAgICB7b3JkZXJzLmVkZ2VzLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICBvcmRlci5ub2RlLmxpbmVJdGVtcy5lZGdlcy5cbiAgICAgICAgICAgIG1hcCgoaXRlbSk9PiggPGRpdlxuICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIgcHgtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e29yZGVyLnByb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtvcmRlci5wcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjQgdy0yNCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e29yZGVyLnByb2R1Y3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj4ke29yZGVyLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+UXVhbnRpdHk6IHtvcmRlci5wcm9kdWN0LnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5PcmRlciBJRDoge29yZGVyLm9yZGVySWR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PikpXG4gICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5vIG9yZGVycyBmb3VuZC48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJIaXN0b3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiT3JkZXJIaXN0b3J5Iiwib3JkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsZW5ndGgiLCJlZGdlcyIsIm1hcCIsIm9yZGVyIiwibm9kZSIsImxpbmVJdGVtcyIsIml0ZW0iLCJpbWciLCJzcmMiLCJwcm9kdWN0IiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgyIiwicCIsInByaWNlIiwidG9GaXhlZCIsInF1YW50aXR5Iiwib3JkZXJJZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Profile/OrderHistory.js\n"));

/***/ })

});