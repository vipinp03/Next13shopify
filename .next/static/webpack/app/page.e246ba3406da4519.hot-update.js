"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Product/productForm.js":
/*!*******************************************!*\
  !*** ./components/Product/productForm.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ \"(app-client)/./utils/helpers.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"(app-client)/./context/shopContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// import ProductOptions from \"./ProductOptions\"\n\n\n\n// setup inventory fetcher\nconst fetchInventory = (url, id)=>axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url, {\n        params: {\n            id: id\n        }\n    }).then((res)=>res.data);\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const { data: productInventory  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\n        \"/api/available\",\n        product.handle\n    ], (url, id)=>fetchInventory(url, id), {\n        errorRetryCount: 3\n    });\n    const [available, setAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__.CartContext);\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            options: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    const defaultValues = {};\n    product.options.map((item)=>{\n        defaultValues[item.name] = item.values[0];\n    });\n    //   const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    function setOptions(name, value) {\n        setSelectedOptions((prevState)=>{\n            return {\n                ...prevState,\n                [name]: value\n            };\n        });\n    // const selection = {\n    //   ...selectedOptions,\n    //   [name]: value\n    // }\n    // allVariantOptions.map(item => {\n    //   if (JSON.stringify(item.options) === JSON.stringify(selection)) {\n    //     setSelectedVariant(item)\n    //   }\n    // })\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (productInventory) {\n            var _checkAvailable_;\n            const checkAvailable = productInventory === null || productInventory === void 0 ? void 0 : productInventory.variants.edges.filter((item)=>item.node.id === selectedVariant.id);\n            if ((_checkAvailable_ = checkAvailable[0]) === null || _checkAvailable_ === void 0 ? void 0 : _checkAvailable_.node.availableForSale) {\n                setAvailable(true);\n            } else {\n                setAvailable(false);\n            }\n        }\n    }, [\n        productInventory,\n        selectedVariant\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pb-3\",\n                children: _utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatter.format(product.variants.edges[0].node.priceV2.amount)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    addToCart(selectedVariant);\n                },\n                className: \"px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800\",\n                children: \"Add To Card\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-2 py-3 mt-3 text-white bg-gray-800 rounded-lg cursor-not-allowed\",\n                children: \"Sold out!\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 112,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"fQLDWJkKqbdTYbsY75yvQ9voFbk=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9kdWN0L3Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDUjtBQUMvQyxnREFBZ0Q7QUFDTztBQUM5QjtBQUNEO0FBRXhCLDBCQUEwQjtBQUMxQixNQUFNTyxpQkFBaUIsQ0FBQ0MsS0FBS0MsS0FDM0JKLGlEQUNNLENBQUNHLEtBQUs7UUFDUkcsUUFBUTtZQUNORixJQUFJQTtRQUNOO0lBQ0YsR0FDQ0csSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFFWixTQUFTQyxZQUFZLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYO1FBWVJBOztJQVYxQixNQUFNLEVBQUVGLE1BQU1HLGlCQUFnQixFQUFFLEdBQUdYLCtDQUFNQSxDQUN2QztRQUFDO1FBQWtCVSxRQUFRRSxNQUFNO0tBQUMsRUFDbEMsQ0FBQ1YsS0FBS0MsS0FBT0YsZUFBZUMsS0FBS0MsS0FDakM7UUFBRVUsaUJBQWlCO0lBQUU7SUFHdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU0sRUFBRXNCLFVBQVMsRUFBRSxHQUFHcEIsaURBQVVBLENBQUNFLDZEQUFXQTtJQUU1QyxNQUFNbUIsb0JBQW9CUCxDQUFBQSwwQkFBQUEsUUFBUVEsUUFBUSxDQUFDQyxLQUFLLGNBQXRCVCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCVSxJQUFJQyxDQUFBQSxVQUFXO1lBV3REQTtRQVZULE1BQU1DLGFBQWEsQ0FBQztRQUVwQkQsUUFBUUUsSUFBSSxDQUFDQyxlQUFlLENBQUNKLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtZQUN2Q0gsVUFBVSxDQUFDRyxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS0UsS0FBSztRQUNwQztRQUVBLE9BQU87WUFDTHhCLElBQUlrQixRQUFRRSxJQUFJLENBQUNwQixFQUFFO1lBQ25CeUIsT0FBT2xCLFFBQVFrQixLQUFLO1lBQ3BCaEIsUUFBUUYsUUFBUUUsTUFBTTtZQUN0QmlCLE9BQU9SLENBQUFBLHNCQUFBQSxRQUFRRSxJQUFJLENBQUNNLEtBQUssY0FBbEJSLGlDQUFBQSxLQUFBQSxJQUFBQSxvQkFBb0JuQixHQUFHO1lBQzlCNEIsU0FBU1I7WUFDVFMsY0FBY1YsUUFBUUUsSUFBSSxDQUFDSyxLQUFLO1lBQ2hDSSxjQUFjWCxRQUFRRSxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBQ25CO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQztJQUN2QjFCLFFBQVFvQixPQUFPLENBQUNWLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtRQUMxQlcsYUFBYSxDQUFDWCxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS1ksTUFBTSxDQUFDLEVBQUU7SUFDM0M7SUFFRixpRkFBaUY7SUFDL0UsTUFBTSxDQUFDYixpQkFBaUJjLG1CQUFtQixHQUFHNUMsK0NBQVFBLENBQUMwQztJQUV2RCxTQUFTRyxXQUFXYixJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUMvQlcsbUJBQW1CRSxDQUFBQSxZQUFhO1lBQzlCLE9BQU87Z0JBQUUsR0FBR0EsU0FBUztnQkFBRSxDQUFDZCxLQUFLLEVBQUVDO1lBQU07UUFDdkM7SUFFQSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixJQUFJO0lBRUosa0NBQWtDO0lBQ2xDLHNFQUFzRTtJQUN0RSwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLEtBQUs7SUFDUDtJQUVBaEMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlnQixrQkFBa0I7Z0JBR2hCOEI7WUFGSixNQUFNQSxpQkFBaUI5Qiw2QkFBQUEsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFrQk8sUUFBUSxDQUFDQyxLQUFLLENBQUN1QixNQUFNLENBQUNqQixDQUFBQSxPQUFRQSxLQUFLRixJQUFJLENBQUNwQixFQUFFLEtBQUt3QyxnQkFBZ0J4QyxFQUFFLENBQUM7WUFFM0csSUFBSXNDLENBQUFBLG1CQUFBQSxjQUFjLENBQUMsRUFBRSxjQUFqQkEsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFtQmxCLEtBQUtxQixnQkFBZ0IsRUFBRTtnQkFDNUM3QixhQUFhLElBQUk7WUFDbkIsT0FBTztnQkFDTEEsYUFBYSxLQUFLO1lBQ3BCLENBQUM7UUFDSCxDQUFDO0lBQ0gsR0FBRztRQUFDSjtRQUFrQmdDO0tBQWdCO0lBRXRDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNCcEMsUUFBUWtCLEtBQUs7Ozs7OzswQkFDakQsOERBQUNvQjtnQkFBS0YsV0FBVTswQkFBUWpELDREQUFnQixDQUFDYSxRQUFRUSxRQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNJLElBQUksQ0FBQ1UsT0FBTyxDQUFDQyxNQUFNOzs7Ozs7WUFnQnBGcEIsMEJBQ0UsOERBQUNvQztnQkFDQ0MsU0FBUyxJQUFNO29CQUNibkMsVUFBVTJCO2dCQUNaO2dCQUNBRyxXQUFVOzBCQUFrRTs7Ozs7cUNBRTlFLDhEQUFDSTtnQkFDQ0osV0FBVTswQkFBc0U7Ozs7O29CQUV6RTs7Ozs7OztBQUtuQixDQUFDO0dBdEd1QnJDOztRQUVhVCwyQ0FBTUE7OztLQUZuQlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L3Byb2R1Y3RGb3JtLmpzPzY2MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBmb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJ1xuLy8gaW1wb3J0IFByb2R1Y3RPcHRpb25zIGZyb20gXCIuL1Byb2R1Y3RPcHRpb25zXCJcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuLy8gc2V0dXAgaW52ZW50b3J5IGZldGNoZXJcbmNvbnN0IGZldGNoSW52ZW50b3J5ID0gKHVybCwgaWQpID0+XG4gIGF4aW9zXG4gICAgLmdldCh1cmwsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogaWQsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHsgcHJvZHVjdCB9KSB7XG5cbiAgY29uc3QgeyBkYXRhOiBwcm9kdWN0SW52ZW50b3J5IH0gPSB1c2VTV1IoXG4gICAgWycvYXBpL2F2YWlsYWJsZScsIHByb2R1Y3QuaGFuZGxlXSxcbiAgICAodXJsLCBpZCkgPT4gZmV0Y2hJbnZlbnRvcnkodXJsLCBpZCksXG4gICAgeyBlcnJvclJldHJ5Q291bnQ6IDMgfVxuICApXG5cbiAgY29uc3QgW2F2YWlsYWJsZSwgc2V0QXZhaWxhYmxlXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgeyBhZGRUb0NhcnQgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG5cbiAgY29uc3QgYWxsVmFyaWFudE9wdGlvbnMgPSBwcm9kdWN0LnZhcmlhbnRzLmVkZ2VzPy5tYXAodmFyaWFudCA9PiB7XG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IHt9XG5cbiAgICB2YXJpYW50Lm5vZGUuc2VsZWN0ZWRPcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgIGFsbE9wdGlvbnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcbiAgICAgIGhhbmRsZTogcHJvZHVjdC5oYW5kbGUsXG4gICAgICBpbWFnZTogdmFyaWFudC5ub2RlLmltYWdlPy51cmwsXG4gICAgICBvcHRpb25zOiBhbGxPcHRpb25zLFxuICAgICAgdmFyaWFudFRpdGxlOiB2YXJpYW50Lm5vZGUudGl0bGUsXG4gICAgICB2YXJpYW50UHJpY2U6IHZhcmlhbnQubm9kZS5wcmljZVYyLmFtb3VudCxcbiAgICAgIHZhcmlhbnRRdWFudGl0eTogMVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBkZWZhdWx0VmFsdWVzID0ge31cbiAgcHJvZHVjdC5vcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICBkZWZhdWx0VmFsdWVzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlc1swXVxuICB9KVxuXG4vLyAgIGNvbnN0IFtzZWxlY3RlZFZhcmlhbnQsIHNldFNlbGVjdGVkVmFyaWFudF0gPSB1c2VTdGF0ZShhbGxWYXJpYW50T3B0aW9uc1swXSlcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0U2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZXMpXG5cbiAgZnVuY3Rpb24gc2V0T3B0aW9ucyhuYW1lLCB2YWx1ZSkge1xuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhwcmV2U3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IHZhbHVlIH1cbiAgICB9KVxuXG4gICAgLy8gY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgIC8vICAgLi4uc2VsZWN0ZWRPcHRpb25zLFxuICAgIC8vICAgW25hbWVdOiB2YWx1ZVxuICAgIC8vIH1cblxuICAgIC8vIGFsbFZhcmlhbnRPcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAvLyAgIGlmIChKU09OLnN0cmluZ2lmeShpdGVtLm9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3Rpb24pKSB7XG4gICAgLy8gICAgIHNldFNlbGVjdGVkVmFyaWFudChpdGVtKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0SW52ZW50b3J5KSB7XG4gICAgICBjb25zdCBjaGVja0F2YWlsYWJsZSA9IHByb2R1Y3RJbnZlbnRvcnk/LnZhcmlhbnRzLmVkZ2VzLmZpbHRlcihpdGVtID0+IGl0ZW0ubm9kZS5pZCA9PT0gc2VsZWN0ZWRWYXJpYW50LmlkKVxuXG4gICAgICBpZiAoY2hlY2tBdmFpbGFibGVbMF0/Lm5vZGUuYXZhaWxhYmxlRm9yU2FsZSkge1xuICAgICAgICBzZXRBdmFpbGFibGUodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEF2YWlsYWJsZShmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwcm9kdWN0SW52ZW50b3J5LCBzZWxlY3RlZFZhcmlhbnRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBwLTQgc2hhZG93LWxnIHJvdW5kZWQtMnhsIG1kOnctMS8zXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiLTNcIj57Zm9ybWF0dGVyLmZvcm1hdChwcm9kdWN0LnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2VWMi5hbW91bnQpfTwvc3Bhbj5cbiAgICAgIHsvKiB7XG4gICAgICAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8UHJvZHVjdE9wdGlvbnNcbiAgICAgICAgICAgIGtleT17YGtleS0ke25hbWV9YH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgc2V0T3B0aW9ucz17c2V0T3B0aW9uc31cbiAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudD17c2VsZWN0ZWRWYXJpYW50fVxuICAgICAgICAgICAgcHJvZHVjdEludmVudG9yeT17cHJvZHVjdEludmVudG9yeX1cbiAgICAgICAgICAgIGF2YWlsYWJsZT17YXZhaWxhYmxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9ICovfVxuICAgICAge1xuICAgICAgICBhdmFpbGFibGUgP1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWRkVG9DYXJ0KHNlbGVjdGVkVmFyaWFudClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTMgbXQtMyB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS04MDBcIj5BZGQgVG8gQ2FyZFxuICAgICAgICAgIDwvYnV0dG9uPiA6XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0zIG10LTMgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIGN1cnNvci1ub3QtYWxsb3dlZFwiPlxuICAgICAgICAgICAgICBTb2xkIG91dCFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiZm9ybWF0dGVyIiwiQ2FydENvbnRleHQiLCJheGlvcyIsInVzZVNXUiIsImZldGNoSW52ZW50b3J5IiwidXJsIiwiaWQiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlByb2R1Y3RGb3JtIiwicHJvZHVjdCIsInByb2R1Y3RJbnZlbnRvcnkiLCJoYW5kbGUiLCJlcnJvclJldHJ5Q291bnQiLCJhdmFpbGFibGUiLCJzZXRBdmFpbGFibGUiLCJhZGRUb0NhcnQiLCJhbGxWYXJpYW50T3B0aW9ucyIsInZhcmlhbnRzIiwiZWRnZXMiLCJtYXAiLCJ2YXJpYW50IiwiYWxsT3B0aW9ucyIsIm5vZGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJpdGVtIiwibmFtZSIsInZhbHVlIiwidGl0bGUiLCJpbWFnZSIsIm9wdGlvbnMiLCJ2YXJpYW50VGl0bGUiLCJ2YXJpYW50UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwidmFyaWFudFF1YW50aXR5IiwiZGVmYXVsdFZhbHVlcyIsInZhbHVlcyIsInNldFNlbGVjdGVkT3B0aW9ucyIsInNldE9wdGlvbnMiLCJwcmV2U3RhdGUiLCJjaGVja0F2YWlsYWJsZSIsImZpbHRlciIsInNlbGVjdGVkVmFyaWFudCIsImF2YWlsYWJsZUZvclNhbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJmb3JtYXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Product/productForm.js\n"));

/***/ })

});