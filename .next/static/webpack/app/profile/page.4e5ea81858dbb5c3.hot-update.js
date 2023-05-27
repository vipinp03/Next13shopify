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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst OrderHistory = (param)=>{\n    let { orders  } = param;\n    // const orders = [\n    //   {\n    //     id: 1,\n    //     product: {\n    //       title: 'Product 1',\n    //       price: 10.99,\n    //       quantity: 2,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-001',\n    //   },\n    //   {\n    //     id: 2,\n    //     product: {\n    //       title: 'Product 2',\n    //       price: 15.99,\n    //       quantity: 1,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-002',\n    //   },\n    //   {\n    //     id: 3,\n    //     product: {\n    //       title: 'Product 3',\n    //       price: 12.99,\n    //       quantity: 3,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-003',\n    //   },\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Order History\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            (orders === null || orders === void 0 ? void 0 : orders.edges.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: orders.edges.map((order)=>order.node.lineItems.edges.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white rounded-lg shadow overflow-hidden flex items-center px-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.node.variant.image.originalSrc,\n                                        alt: item.node.title,\n                                        className: \"h-24 w-24 object-cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4 flex flex-col justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-lg font-semibold\",\n                                                    children: item.node.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm text-gray-500\",\n                                                children: [\n                                                    \"Order ID: \",\n                                                    item.node.orderNumber\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, order.id, true, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)))\n                }, void 0, false, {\n                    fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No orders found.\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9maWxlL09yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyxlQUFlLFNBQWdCO1FBQWYsRUFBRUMsT0FBTSxFQUFFO0lBQzlCLG1CQUFtQjtJQUNuQixNQUFNO0lBQ04sYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpR0FBaUc7SUFDakcsU0FBUztJQUNULDBCQUEwQjtJQUMxQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUdBQWlHO0lBQ2pHLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlHQUFpRztJQUNqRyxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBOEI7Ozs7OztZQUUzQ0YsQ0FBQUEsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRSSxLQUFLLENBQUNDLE1BQU0sSUFBRyxrQkFDdEIsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDs4QkFDQUQsT0FBT0ksS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsUUFDakJBLE1BQU1DLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDSSxxQkFDOUIsOERBQUNUO2dDQUVDQyxXQUFVOztrREFFViw4REFBQ1M7d0NBQ0NDLEtBQUtGLEtBQUtGLElBQUksQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLENBQUNDLFdBQVc7d0NBQ3hDQyxLQUFLTixLQUFLRixJQUFJLENBQUNTLEtBQUs7d0NBQ3BCZixXQUFVOzs7Ozs7a0RBRVosOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7MERBQ0MsNEVBQUNpQjtvREFBR2hCLFdBQVU7OERBQXlCUSxLQUFLRixJQUFJLENBQUNTLEtBQUs7Ozs7Ozs7Ozs7OzBEQU14RCw4REFBQ0U7Z0RBQUVqQixXQUFVOztvREFBd0I7b0RBQ3hCUSxLQUFLRixJQUFJLENBQUNZLFdBQVc7Ozs7Ozs7Ozs7Ozs7OytCQWpCL0JiLE1BQU1jLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzBDQTJCckIsOERBQUNGOzBCQUFFOzs7Ozt5QkFDSjs7Ozs7OztBQUdQO0tBM0VNcEI7QUE2RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL09yZGVySGlzdG9yeS5qcz9kMTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT3JkZXJIaXN0b3J5ID0gKHsgb3JkZXJzIH0pID0+IHtcbiAgLy8gY29uc3Qgb3JkZXJzID0gW1xuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAxLFxuICAvLyAgICAgcHJvZHVjdDoge1xuICAvLyAgICAgICB0aXRsZTogJ1Byb2R1Y3QgMScsXG4gIC8vICAgICAgIHByaWNlOiAxMC45OSxcbiAgLy8gICAgICAgcXVhbnRpdHk6IDIsXG4gIC8vICAgICAgIGltYWdlOiAnaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTA0LWltYWdlLWNhcmQtMDMuanBnJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBvcmRlcklkOiAnT1JELTAwMScsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpZDogMixcbiAgLy8gICAgIHByb2R1Y3Q6IHtcbiAgLy8gICAgICAgdGl0bGU6ICdQcm9kdWN0IDInLFxuICAvLyAgICAgICBwcmljZTogMTUuOTksXG4gIC8vICAgICAgIHF1YW50aXR5OiAxLFxuICAvLyAgICAgICBpbWFnZTogJ2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvY2F0ZWdvcnktcGFnZS0wNC1pbWFnZS1jYXJkLTAzLmpwZycsXG4gIC8vICAgICB9LFxuICAvLyAgICAgb3JkZXJJZDogJ09SRC0wMDInLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWQ6IDMsXG4gIC8vICAgICBwcm9kdWN0OiB7XG4gIC8vICAgICAgIHRpdGxlOiAnUHJvZHVjdCAzJyxcbiAgLy8gICAgICAgcHJpY2U6IDEyLjk5LFxuICAvLyAgICAgICBxdWFudGl0eTogMyxcbiAgLy8gICAgICAgaW1hZ2U6ICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDQtaW1hZ2UtY2FyZC0wMy5qcGcnLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIG9yZGVySWQ6ICdPUkQtMDAzJyxcbiAgLy8gICB9LFxuICAvLyBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweS04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+T3JkZXIgSGlzdG9yeTwvaDE+XG5cbiAgICAgIHtvcmRlcnM/LmVkZ2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAge29yZGVycy5lZGdlcy5tYXAoKG9yZGVyKSA9PlxuICAgICAgICAgICAgb3JkZXIubm9kZS5saW5lSXRlbXMuZWRnZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IG92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBweC00XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5ub2RlLnZhcmlhbnQuaW1hZ2Uub3JpZ2luYWxTcmN9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjQgdy0yNCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57aXRlbS5ub2RlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBRdWFudGl0eToge29yZGVyLnByb2R1Y3QucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBPcmRlciBJRDoge2l0ZW0ubm9kZS5vcmRlck51bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBvcmRlcnMgZm91bmQuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVySGlzdG9yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk9yZGVySGlzdG9yeSIsIm9yZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZWRnZXMiLCJsZW5ndGgiLCJtYXAiLCJvcmRlciIsIm5vZGUiLCJsaW5lSXRlbXMiLCJpdGVtIiwiaW1nIiwic3JjIiwidmFyaWFudCIsImltYWdlIiwib3JpZ2luYWxTcmMiLCJhbHQiLCJ0aXRsZSIsImgyIiwicCIsIm9yZGVyTnVtYmVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Profile/OrderHistory.js\n"));

/***/ })

});