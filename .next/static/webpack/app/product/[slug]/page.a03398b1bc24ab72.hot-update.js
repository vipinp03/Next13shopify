"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[slug]/page",{

/***/ "(app-client)/./components/Product/productForm.js":
/*!*******************************************!*\
  !*** ./components/Product/productForm.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ \"(app-client)/./utils/helpers.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"(app-client)/./context/shopContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// import ProductOptions from \"./ProductOptions\"\n\n\n\n// setup inventory fetcher\nconst fetchInventory = (url, id)=>axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url, {\n        params: {\n            id: id\n        }\n    }).then((res)=>res.data);\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const { data: productInventory  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\n        \"/api/available\",\n        product.handle\n    ], (url, id)=>fetchInventory(url, id), {\n        errorRetryCount: 3\n    });\n    const [available, setAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__.CartContext);\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: product.images.edges[0].node.originalSrc,\n            options: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    //   const defaultValues = {}\n    //   product.options.map(item => {\n    //     defaultValues[item.name] = item.values[0]\n    //   })\n    const [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allVariantOptions[0]);\n    //   const [selectedOptions, setSelectedOptions] = useState(defaultValues)\n    function setOptions(name, value) {\n        setSelectedOptions((prevState)=>{\n            return {\n                ...prevState,\n                [name]: value\n            };\n        });\n    // const selection = {\n    //   ...selectedOptions,\n    //   [name]: value\n    // }\n    // allVariantOptions.map(item => {\n    //   if (JSON.stringify(item.options) === JSON.stringify(selection)) {\n    //     setSelectedVariant(item)\n    //   }\n    // })\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"productInventory\", selectedVariant);\n        if (productInventory) {\n            var _checkAvailable_;\n            const checkAvailable = productInventory === null || productInventory === void 0 ? void 0 : productInventory.variants.edges.filter((item)=>item.node.id === selectedVariant.id);\n            if ((_checkAvailable_ = checkAvailable[0]) === null || _checkAvailable_ === void 0 ? void 0 : _checkAvailable_.node.availableForSale) {\n                setAvailable(true);\n            } else {\n                setAvailable(false);\n            }\n        }\n    }, [\n        productInventory,\n        selectedVariant\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pb-3\",\n                children: _utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatter.format(product.variants.edges[0].node.priceV2.amount)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    addToCart(selectedVariant);\n                },\n                className: \"px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800\",\n                children: \"Add To Card\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 107,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-2 py-3 mt-3 text-white bg-gray-800 rounded-lg cursor-not-allowed\",\n                children: \"Sold out!\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 113,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"TAbSmBWHwdRVIO0Y5UHIooiQ9GI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9kdWN0L3Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDUjtBQUMvQyxnREFBZ0Q7QUFDTztBQUM5QjtBQUNEO0FBRXhCLDBCQUEwQjtBQUMxQixNQUFNTyxpQkFBaUIsQ0FBQ0MsS0FBS0MsS0FDM0JKLGlEQUNNLENBQUNHLEtBQUs7UUFDUkcsUUFBUTtZQUNORixJQUFJQTtRQUNOO0lBQ0YsR0FDQ0csSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFFWixTQUFTQyxZQUFZLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYO1FBWVJBOztJQVYxQixNQUFNLEVBQUVGLE1BQU1HLGlCQUFnQixFQUFFLEdBQUdYLCtDQUFNQSxDQUN2QztRQUFDO1FBQWtCVSxRQUFRRSxNQUFNO0tBQUMsRUFDbEMsQ0FBQ1YsS0FBS0MsS0FBT0YsZUFBZUMsS0FBS0MsS0FDakM7UUFBRVUsaUJBQWlCO0lBQUU7SUFHdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU0sRUFBRXNCLFVBQVMsRUFBRSxHQUFHcEIsaURBQVVBLENBQUNFLDZEQUFXQTtJQUU1QyxNQUFNbUIsb0JBQW9CUCxDQUFBQSwwQkFBQUEsUUFBUVEsUUFBUSxDQUFDQyxLQUFLLGNBQXRCVCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCVSxJQUFJQyxDQUFBQSxVQUFXO1FBQy9ELE1BQU1DLGFBQWEsQ0FBQztRQUVwQkQsUUFBUUUsSUFBSSxDQUFDQyxlQUFlLENBQUNKLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtZQUN2Q0gsVUFBVSxDQUFDRyxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS0UsS0FBSztRQUNwQztRQUVBLE9BQU87WUFDTHhCLElBQUlrQixRQUFRRSxJQUFJLENBQUNwQixFQUFFO1lBQ25CeUIsT0FBT2xCLFFBQVFrQixLQUFLO1lBQ3BCaEIsUUFBUUYsUUFBUUUsTUFBTTtZQUN0QmlCLE9BQU9uQixRQUFRb0IsTUFBTSxDQUFDWCxLQUFLLENBQUMsRUFBRSxDQUFDSSxJQUFJLENBQUNRLFdBQVc7WUFDL0NDLFNBQVNWO1lBQ1RXLGNBQWNaLFFBQVFFLElBQUksQ0FBQ0ssS0FBSztZQUNoQ00sY0FBY2IsUUFBUUUsSUFBSSxDQUFDWSxPQUFPLENBQUNDLE1BQU07WUFDekNDLGlCQUFpQjtRQUNuQjtJQUNGO0lBRUYsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxnREFBZ0Q7SUFDaEQsT0FBTztJQUVMLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBRzdDLCtDQUFRQSxDQUFDdUIsaUJBQWlCLENBQUMsRUFBRTtJQUM3RSwwRUFBMEU7SUFFeEUsU0FBU3VCLFdBQVdkLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQy9CYyxtQkFBbUJDLENBQUFBLFlBQWE7WUFDOUIsT0FBTztnQkFBRSxHQUFHQSxTQUFTO2dCQUFFLENBQUNoQixLQUFLLEVBQUVDO1lBQU07UUFDdkM7SUFFQSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixJQUFJO0lBRUosa0NBQWtDO0lBQ2xDLHNFQUFzRTtJQUN0RSwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLEtBQUs7SUFDUDtJQUVBaEMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0QsUUFBUUMsR0FBRyxDQUFDLG9CQUFtQk47UUFDL0IsSUFBSTNCLGtCQUFrQjtnQkFHaEJrQztZQUZKLE1BQU1BLGlCQUFpQmxDLDZCQUFBQSw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCTyxRQUFRLENBQUNDLEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ3JCLENBQUFBLE9BQVFBLEtBQUtGLElBQUksQ0FBQ3BCLEVBQUUsS0FBS21DLGdCQUFnQm5DLEVBQUUsQ0FBQztZQUUzRyxJQUFJMEMsQ0FBQUEsbUJBQUFBLGNBQWMsQ0FBQyxFQUFFLGNBQWpCQSw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQW1CdEIsS0FBS3dCLGdCQUFnQixFQUFFO2dCQUM1Q2hDLGFBQWEsSUFBSTtZQUNuQixPQUFPO2dCQUNMQSxhQUFhLEtBQUs7WUFDcEIsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHO1FBQUNKO1FBQWtCMkI7S0FBZ0I7SUFFdEMscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0J2QyxRQUFRa0IsS0FBSzs7Ozs7OzBCQUNqRCw4REFBQ3VCO2dCQUFLRixXQUFVOzBCQUFRcEQsNERBQWdCLENBQUNhLFFBQVFRLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0ksSUFBSSxDQUFDWSxPQUFPLENBQUNDLE1BQU07Ozs7OztZQWdCcEZ0QiwwQkFDRSw4REFBQ3VDO2dCQUNDQyxTQUFTLElBQU07b0JBQ2J0QyxVQUFVc0I7Z0JBQ1o7Z0JBQ0FXLFdBQVU7MEJBQWtFOzs7OztxQ0FFOUUsOERBQUNJO2dCQUNDSixXQUFVOzBCQUFzRTs7Ozs7b0JBRXpFOzs7Ozs7O0FBS25CLENBQUM7R0F2R3VCeEM7O1FBRWFULDJDQUFNQTs7O0tBRm5CUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3QvcHJvZHVjdEZvcm0uanM/NjYxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnXG4vLyBpbXBvcnQgUHJvZHVjdE9wdGlvbnMgZnJvbSBcIi4vUHJvZHVjdE9wdGlvbnNcIlxuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9zaG9wQ29udGV4dFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG4vLyBzZXR1cCBpbnZlbnRvcnkgZmV0Y2hlclxuY29uc3QgZmV0Y2hJbnZlbnRvcnkgPSAodXJsLCBpZCkgPT5cbiAgYXhpb3NcbiAgICAuZ2V0KHVybCwge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEZvcm0oeyBwcm9kdWN0IH0pIHtcblxuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RJbnZlbnRvcnkgfSA9IHVzZVNXUihcbiAgICBbJy9hcGkvYXZhaWxhYmxlJywgcHJvZHVjdC5oYW5kbGVdLFxuICAgICh1cmwsIGlkKSA9PiBmZXRjaEludmVudG9yeSh1cmwsIGlkKSxcbiAgICB7IGVycm9yUmV0cnlDb3VudDogMyB9XG4gIClcblxuICBjb25zdCBbYXZhaWxhYmxlLCBzZXRBdmFpbGFibGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB7IGFkZFRvQ2FydCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcblxuICBjb25zdCBhbGxWYXJpYW50T3B0aW9ucyA9IHByb2R1Y3QudmFyaWFudHMuZWRnZXM/Lm1hcCh2YXJpYW50ID0+IHtcbiAgICBjb25zdCBhbGxPcHRpb25zID0ge31cblxuICAgIHZhcmlhbnQubm9kZS5zZWxlY3RlZE9wdGlvbnMubWFwKGl0ZW0gPT4ge1xuICAgICAgYWxsT3B0aW9uc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgaGFuZGxlOiBwcm9kdWN0LmhhbmRsZSxcbiAgICAgIGltYWdlOiBwcm9kdWN0LmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjLFxuICAgICAgb3B0aW9uczogYWxsT3B0aW9ucyxcbiAgICAgIHZhcmlhbnRUaXRsZTogdmFyaWFudC5ub2RlLnRpdGxlLFxuICAgICAgdmFyaWFudFByaWNlOiB2YXJpYW50Lm5vZGUucHJpY2VWMi5hbW91bnQsXG4gICAgICB2YXJpYW50UXVhbnRpdHk6IDFcbiAgICB9XG4gIH0pXG5cbi8vICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHt9XG4vLyAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4vLyAgICAgZGVmYXVsdFZhbHVlc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZXNbMF1cbi8vICAgfSlcblxuICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGUoYWxsVmFyaWFudE9wdGlvbnNbMF0pXG4vLyAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWVzKVxuXG4gIGZ1bmN0aW9uIHNldE9wdGlvbnMobmFtZSwgdmFsdWUpIHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbnMocHJldlN0YXRlID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgW25hbWVdOiB2YWx1ZSB9XG4gICAgfSlcblxuICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAvLyAgIC4uLnNlbGVjdGVkT3B0aW9ucyxcbiAgICAvLyAgIFtuYW1lXTogdmFsdWVcbiAgICAvLyB9XG5cbiAgICAvLyBhbGxWYXJpYW50T3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgLy8gICBpZiAoSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKSA9PT0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0aW9uKSkge1xuICAgIC8vICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoaXRlbSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInByb2R1Y3RJbnZlbnRvcnlcIixzZWxlY3RlZFZhcmlhbnQpXG4gICAgaWYgKHByb2R1Y3RJbnZlbnRvcnkpIHtcbiAgICAgIGNvbnN0IGNoZWNrQXZhaWxhYmxlID0gcHJvZHVjdEludmVudG9yeT8udmFyaWFudHMuZWRnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5ub2RlLmlkID09PSBzZWxlY3RlZFZhcmlhbnQuaWQpXG5cbiAgICAgIGlmIChjaGVja0F2YWlsYWJsZVswXT8ubm9kZS5hdmFpbGFibGVGb3JTYWxlKSB7XG4gICAgICAgIHNldEF2YWlsYWJsZSh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QXZhaWxhYmxlKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Byb2R1Y3RJbnZlbnRvcnksIHNlbGVjdGVkVmFyaWFudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtNCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgbWQ6dy0xLzNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGItM1wiPntmb3JtYXR0ZXIuZm9ybWF0KHByb2R1Y3QudmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZVYyLmFtb3VudCl9PC9zcGFuPlxuICAgICAgey8qIHtcbiAgICAgICAgcHJvZHVjdC5vcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0T3B0aW9uc1xuICAgICAgICAgICAga2V5PXtga2V5LSR7bmFtZX1gfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICBzZXRPcHRpb25zPXtzZXRPcHRpb25zfVxuICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50PXtzZWxlY3RlZFZhcmlhbnR9XG4gICAgICAgICAgICBwcm9kdWN0SW52ZW50b3J5PXtwcm9kdWN0SW52ZW50b3J5fVxuICAgICAgICAgICAgYXZhaWxhYmxlPXthdmFpbGFibGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH0gKi99XG4gICAgICB7XG4gICAgICAgIGF2YWlsYWJsZSA/XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhZGRUb0NhcnQoc2VsZWN0ZWRWYXJpYW50KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMyBtdC0zIHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTgwMFwiPkFkZCBUbyBDYXJkXG4gICAgICAgICAgPC9idXR0b24+IDpcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTMgbXQtMyB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWQtbGcgY3Vyc29yLW5vdC1hbGxvd2VkXCI+XG4gICAgICAgICAgICAgIFNvbGQgb3V0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJmb3JtYXR0ZXIiLCJDYXJ0Q29udGV4dCIsImF4aW9zIiwidXNlU1dSIiwiZmV0Y2hJbnZlbnRvcnkiLCJ1cmwiLCJpZCIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiUHJvZHVjdEZvcm0iLCJwcm9kdWN0IiwicHJvZHVjdEludmVudG9yeSIsImhhbmRsZSIsImVycm9yUmV0cnlDb3VudCIsImF2YWlsYWJsZSIsInNldEF2YWlsYWJsZSIsImFkZFRvQ2FydCIsImFsbFZhcmlhbnRPcHRpb25zIiwidmFyaWFudHMiLCJlZGdlcyIsIm1hcCIsInZhcmlhbnQiLCJhbGxPcHRpb25zIiwibm9kZSIsInNlbGVjdGVkT3B0aW9ucyIsIml0ZW0iLCJuYW1lIiwidmFsdWUiLCJ0aXRsZSIsImltYWdlIiwiaW1hZ2VzIiwib3JpZ2luYWxTcmMiLCJvcHRpb25zIiwidmFyaWFudFRpdGxlIiwidmFyaWFudFByaWNlIiwicHJpY2VWMiIsImFtb3VudCIsInZhcmlhbnRRdWFudGl0eSIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsInNldE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tBdmFpbGFibGUiLCJmaWx0ZXIiLCJhdmFpbGFibGVGb3JTYWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcGFuIiwiZm9ybWF0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Product/productForm.js\n"));

/***/ })

});