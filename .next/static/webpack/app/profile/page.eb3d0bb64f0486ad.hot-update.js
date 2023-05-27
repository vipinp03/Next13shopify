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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst OrderHistory = (param)=>{\n    let { orders  } = param;\n    // const orders = [\n    //   {\n    //     id: 1,\n    //     product: {\n    //       title: 'Product 1',\n    //       price: 10.99,\n    //       quantity: 2,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-001',\n    //   },\n    //   {\n    //     id: 2,\n    //     product: {\n    //       title: 'Product 2',\n    //       price: 15.99,\n    //       quantity: 1,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-002',\n    //   },\n    //   {\n    //     id: 3,\n    //     product: {\n    //       title: 'Product 3',\n    //       price: 12.99,\n    //       quantity: 3,\n    //       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',\n    //     },\n    //     orderId: 'ORD-003',\n    //   },\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Order History\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            orders.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-6\",\n                children: orders.edgesmap((order)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-lg shadow overflow-hidden flex items-center px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: order.product.image,\n                                alt: order.product.title,\n                                className: \"h-24 w-24 object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-lg font-semibold\",\n                                                children: order.product.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    \"$\",\n                                                    order.product.price.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    \"Quantity: \",\n                                                    order.product.quantity\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-500\",\n                                        children: [\n                                            \"Order ID: \",\n                                            order.orderId\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, order.id, true, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No orders found.\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Profile/OrderHistory.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9maWxlL09yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyxlQUFlLFNBQWM7UUFBYixFQUFDQyxPQUFNLEVBQUM7SUFFNUIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlHQUFpRztJQUNqRyxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpR0FBaUc7SUFDakcsU0FBUztJQUNULDBCQUEwQjtJQUMxQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUdBQWlHO0lBQ2pHLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4Qjs7Ozs7O1lBRTNDRixPQUFPSSxNQUFNLEdBQUcsa0JBQ2YsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaRixPQUFPSyxRQUFRLENBQUNDLENBQUFBLHNCQUNmLDhEQUFDTDt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNLO2dDQUNDQyxLQUFLRixNQUFNRyxPQUFPLENBQUNDLEtBQUs7Z0NBQ3hCQyxLQUFLTCxNQUFNRyxPQUFPLENBQUNHLEtBQUs7Z0NBQ3hCVixXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7OzBEQUNDLDhEQUFDWTtnREFBR1gsV0FBVTswREFBeUJJLE1BQU1HLE9BQU8sQ0FBQ0csS0FBSzs7Ozs7OzBEQUMxRCw4REFBQ0U7Z0RBQUVaLFdBQVU7O29EQUFnQjtvREFBRUksTUFBTUcsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE9BQU8sQ0FBQzs7Ozs7OzswREFDM0QsOERBQUNGO2dEQUFFWixXQUFVOztvREFBZ0I7b0RBQVdJLE1BQU1HLE9BQU8sQ0FBQ1EsUUFBUTs7Ozs7Ozs7Ozs7OztrREFFaEUsOERBQUNIO3dDQUFFWixXQUFVOzs0Q0FBd0I7NENBQVdJLE1BQU1ZLE9BQU87Ozs7Ozs7Ozs7Ozs7O3VCQWQxRFosTUFBTWEsRUFBRTs7Ozs7Ozs7OzBDQW9CbkIsOERBQUNMOzBCQUFFOzs7Ozt5QkFDSjs7Ozs7OztBQUdQO0tBbkVNZjtBQXFFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2ZpbGUvT3JkZXJIaXN0b3J5LmpzP2QxOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT3JkZXJIaXN0b3J5ID0gKHtvcmRlcnN9KSA9PiB7XG5cbiAgLy8gY29uc3Qgb3JkZXJzID0gW1xuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAxLFxuICAvLyAgICAgcHJvZHVjdDoge1xuICAvLyAgICAgICB0aXRsZTogJ1Byb2R1Y3QgMScsXG4gIC8vICAgICAgIHByaWNlOiAxMC45OSxcbiAgLy8gICAgICAgcXVhbnRpdHk6IDIsXG4gIC8vICAgICAgIGltYWdlOiAnaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTA0LWltYWdlLWNhcmQtMDMuanBnJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBvcmRlcklkOiAnT1JELTAwMScsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpZDogMixcbiAgLy8gICAgIHByb2R1Y3Q6IHtcbiAgLy8gICAgICAgdGl0bGU6ICdQcm9kdWN0IDInLFxuICAvLyAgICAgICBwcmljZTogMTUuOTksXG4gIC8vICAgICAgIHF1YW50aXR5OiAxLFxuICAvLyAgICAgICBpbWFnZTogJ2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvY2F0ZWdvcnktcGFnZS0wNC1pbWFnZS1jYXJkLTAzLmpwZycsXG4gIC8vICAgICB9LFxuICAvLyAgICAgb3JkZXJJZDogJ09SRC0wMDInLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWQ6IDMsXG4gIC8vICAgICBwcm9kdWN0OiB7XG4gIC8vICAgICAgIHRpdGxlOiAnUHJvZHVjdCAzJyxcbiAgLy8gICAgICAgcHJpY2U6IDEyLjk5LFxuICAvLyAgICAgICBxdWFudGl0eTogMyxcbiAgLy8gICAgICAgaW1hZ2U6ICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDQtaW1hZ2UtY2FyZC0wMy5qcGcnLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIG9yZGVySWQ6ICdPUkQtMDAzJyxcbiAgLy8gICB9LFxuICAvLyBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweS04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+T3JkZXIgSGlzdG9yeTwvaDE+XG5cbiAgICAgIHtvcmRlcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02XCI+XG4gICAgICAgICAge29yZGVycy5lZGdlc21hcChvcmRlciA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17b3JkZXIuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IG92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBweC00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17b3JkZXIucHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e29yZGVyLnByb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57b3JkZXIucHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPiR7b3JkZXIucHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5RdWFudGl0eToge29yZGVyLnByb2R1Y3QucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk9yZGVyIElEOiB7b3JkZXIub3JkZXJJZH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gb3JkZXJzIGZvdW5kLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlckhpc3Rvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJPcmRlckhpc3RvcnkiLCJvcmRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCIsImVkZ2VzbWFwIiwib3JkZXIiLCJpbWciLCJzcmMiLCJwcm9kdWN0IiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgyIiwicCIsInByaWNlIiwidG9GaXhlZCIsInF1YW50aXR5Iiwib3JkZXJJZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Profile/OrderHistory.js\n"));

/***/ })

});