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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ \"(app-client)/./utils/helpers.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"(app-client)/./context/shopContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// import ProductOptions from \"./ProductOptions\"\n\n\n\n// setup inventory fetcher\nconst fetchInventory = (url, id)=>axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url, {\n        params: {\n            id: id\n        }\n    }).then((res)=>res.data);\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const { data: productInventory  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\n        \"/api/available\",\n        product.handle\n    ], (url, id)=>fetchInventory(url, id), {\n        errorRetryCount: 3\n    });\n    const [available, setAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__.CartContext);\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            options: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    //   const defaultValues = {}\n    //   product.options.map(item => {\n    //     defaultValues[item.name] = item.values[0]\n    //   })\n    //   const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    function setOptions(name, value) {\n        setSelectedOptions((prevState)=>{\n            return {\n                ...prevState,\n                [name]: value\n            };\n        });\n    // const selection = {\n    //   ...selectedOptions,\n    //   [name]: value\n    // }\n    // allVariantOptions.map(item => {\n    //   if (JSON.stringify(item.options) === JSON.stringify(selection)) {\n    //     setSelectedVariant(item)\n    //   }\n    // })\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (productInventory) {\n            var _checkAvailable_;\n            const checkAvailable = productInventory === null || productInventory === void 0 ? void 0 : productInventory.variants.edges.filter((item)=>item.node.id === selectedVariant.id);\n            if ((_checkAvailable_ = checkAvailable[0]) === null || _checkAvailable_ === void 0 ? void 0 : _checkAvailable_.node.availableForSale) {\n                setAvailable(true);\n            } else {\n                setAvailable(false);\n            }\n        }\n    }, [\n        productInventory,\n        selectedVariant\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pb-3\",\n                children: _utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatter.format(product.variants.edges[0].node.priceV2.amount)\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    addToCart(selectedVariant);\n                },\n                className: \"px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800\",\n                children: \"Add To Card\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-2 py-3 mt-3 text-white bg-gray-800 rounded-lg cursor-not-allowed\",\n                children: \"Sold out!\"\n            }, void 0, false, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n                lineNumber: 112,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/Product/productForm.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"fQLDWJkKqbdTYbsY75yvQ9voFbk=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9kdWN0L3Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDUjtBQUMvQyxnREFBZ0Q7QUFDTztBQUM5QjtBQUNEO0FBRXhCLDBCQUEwQjtBQUMxQixNQUFNTyxpQkFBaUIsQ0FBQ0MsS0FBS0MsS0FDM0JKLGlEQUNNLENBQUNHLEtBQUs7UUFDUkcsUUFBUTtZQUNORixJQUFJQTtRQUNOO0lBQ0YsR0FDQ0csSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFFWixTQUFTQyxZQUFZLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYO1FBWVJBOztJQVYxQixNQUFNLEVBQUVGLE1BQU1HLGlCQUFnQixFQUFFLEdBQUdYLCtDQUFNQSxDQUN2QztRQUFDO1FBQWtCVSxRQUFRRSxNQUFNO0tBQUMsRUFDbEMsQ0FBQ1YsS0FBS0MsS0FBT0YsZUFBZUMsS0FBS0MsS0FDakM7UUFBRVUsaUJBQWlCO0lBQUU7SUFHdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU0sRUFBRXNCLFVBQVMsRUFBRSxHQUFHcEIsaURBQVVBLENBQUNFLDZEQUFXQTtJQUU1QyxNQUFNbUIsb0JBQW9CUCxDQUFBQSwwQkFBQUEsUUFBUVEsUUFBUSxDQUFDQyxLQUFLLGNBQXRCVCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCVSxJQUFJQyxDQUFBQSxVQUFXO1lBV3REQTtRQVZULE1BQU1DLGFBQWEsQ0FBQztRQUVwQkQsUUFBUUUsSUFBSSxDQUFDQyxlQUFlLENBQUNKLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtZQUN2Q0gsVUFBVSxDQUFDRyxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS0UsS0FBSztRQUNwQztRQUVBLE9BQU87WUFDTHhCLElBQUlrQixRQUFRRSxJQUFJLENBQUNwQixFQUFFO1lBQ25CeUIsT0FBT2xCLFFBQVFrQixLQUFLO1lBQ3BCaEIsUUFBUUYsUUFBUUUsTUFBTTtZQUN0QmlCLE9BQU9SLENBQUFBLHNCQUFBQSxRQUFRRSxJQUFJLENBQUNNLEtBQUssY0FBbEJSLGlDQUFBQSxLQUFBQSxJQUFBQSxvQkFBb0JuQixHQUFHO1lBQzlCNEIsU0FBU1I7WUFDVFMsY0FBY1YsUUFBUUUsSUFBSSxDQUFDSyxLQUFLO1lBQ2hDSSxjQUFjWCxRQUFRRSxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBQ25CO0lBQ0Y7SUFFRiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLGdEQUFnRDtJQUNoRCxPQUFPO0lBRVAsaUZBQWlGO0lBQy9FLE1BQU0sQ0FBQ1gsaUJBQWlCWSxtQkFBbUIsR0FBRzFDLCtDQUFRQSxDQUFDMkM7SUFFdkQsU0FBU0MsV0FBV1osSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDL0JTLG1CQUFtQkcsQ0FBQUEsWUFBYTtZQUM5QixPQUFPO2dCQUFFLEdBQUdBLFNBQVM7Z0JBQUUsQ0FBQ2IsS0FBSyxFQUFFQztZQUFNO1FBQ3ZDO0lBRUEsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsSUFBSTtJQUVKLGtDQUFrQztJQUNsQyxzRUFBc0U7SUFDdEUsK0JBQStCO0lBQy9CLE1BQU07SUFDTixLQUFLO0lBQ1A7SUFFQWhDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJZ0Isa0JBQWtCO2dCQUdoQjZCO1lBRkosTUFBTUEsaUJBQWlCN0IsNkJBQUFBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JPLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDc0IsTUFBTSxDQUFDaEIsQ0FBQUEsT0FBUUEsS0FBS0YsSUFBSSxDQUFDcEIsRUFBRSxLQUFLdUMsZ0JBQWdCdkMsRUFBRSxDQUFDO1lBRTNHLElBQUlxQyxDQUFBQSxtQkFBQUEsY0FBYyxDQUFDLEVBQUUsY0FBakJBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBbUJqQixLQUFLb0IsZ0JBQWdCLEVBQUU7Z0JBQzVDNUIsYUFBYSxJQUFJO1lBQ25CLE9BQU87Z0JBQ0xBLGFBQWEsS0FBSztZQUNwQixDQUFDO1FBQ0gsQ0FBQztJQUNILEdBQUc7UUFBQ0o7UUFBa0IrQjtLQUFnQjtJQUV0QyxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQm5DLFFBQVFrQixLQUFLOzs7Ozs7MEJBQ2pELDhEQUFDbUI7Z0JBQUtGLFdBQVU7MEJBQVFoRCw0REFBZ0IsQ0FBQ2EsUUFBUVEsUUFBUSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDSSxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsTUFBTTs7Ozs7O1lBZ0JwRnBCLDBCQUNFLDhEQUFDbUM7Z0JBQ0NDLFNBQVMsSUFBTTtvQkFDYmxDLFVBQVUwQjtnQkFDWjtnQkFDQUcsV0FBVTswQkFBa0U7Ozs7O3FDQUU5RSw4REFBQ0k7Z0JBQ0NKLFdBQVU7MEJBQXNFOzs7OztvQkFFekU7Ozs7Ozs7QUFLbkIsQ0FBQztHQXRHdUJwQzs7UUFFYVQsMkNBQU1BOzs7S0FGbkJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC9wcm9kdWN0Rm9ybS5qcz82NjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVycydcbi8vIGltcG9ydCBQcm9kdWN0T3B0aW9ucyBmcm9tIFwiLi9Qcm9kdWN0T3B0aW9uc1wiXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3Nob3BDb250ZXh0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbi8vIHNldHVwIGludmVudG9yeSBmZXRjaGVyXG5jb25zdCBmZXRjaEludmVudG9yeSA9ICh1cmwsIGlkKSA9PlxuICBheGlvc1xuICAgIC5nZXQodXJsLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7IHByb2R1Y3QgfSkge1xuXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdEludmVudG9yeSB9ID0gdXNlU1dSKFxuICAgIFsnL2FwaS9hdmFpbGFibGUnLCBwcm9kdWN0LmhhbmRsZV0sXG4gICAgKHVybCwgaWQpID0+IGZldGNoSW52ZW50b3J5KHVybCwgaWQpLFxuICAgIHsgZXJyb3JSZXRyeUNvdW50OiAzIH1cbiAgKVxuXG4gIGNvbnN0IFthdmFpbGFibGUsIHNldEF2YWlsYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHsgYWRkVG9DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuXG4gIGNvbnN0IGFsbFZhcmlhbnRPcHRpb25zID0gcHJvZHVjdC52YXJpYW50cy5lZGdlcz8ubWFwKHZhcmlhbnQgPT4ge1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSB7fVxuXG4gICAgdmFyaWFudC5ub2RlLnNlbGVjdGVkT3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICBhbGxPcHRpb25zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogdmFyaWFudC5ub2RlLmlkLFxuICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICBoYW5kbGU6IHByb2R1Y3QuaGFuZGxlLFxuICAgICAgaW1hZ2U6IHZhcmlhbnQubm9kZS5pbWFnZT8udXJsLFxuICAgICAgb3B0aW9uczogYWxsT3B0aW9ucyxcbiAgICAgIHZhcmlhbnRUaXRsZTogdmFyaWFudC5ub2RlLnRpdGxlLFxuICAgICAgdmFyaWFudFByaWNlOiB2YXJpYW50Lm5vZGUucHJpY2VWMi5hbW91bnQsXG4gICAgICB2YXJpYW50UXVhbnRpdHk6IDFcbiAgICB9XG4gIH0pXG5cbi8vICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHt9XG4vLyAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4vLyAgICAgZGVmYXVsdFZhbHVlc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZXNbMF1cbi8vICAgfSlcblxuLy8gICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGUoYWxsVmFyaWFudE9wdGlvbnNbMF0pXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWVzKVxuXG4gIGZ1bmN0aW9uIHNldE9wdGlvbnMobmFtZSwgdmFsdWUpIHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbnMocHJldlN0YXRlID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgW25hbWVdOiB2YWx1ZSB9XG4gICAgfSlcblxuICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAvLyAgIC4uLnNlbGVjdGVkT3B0aW9ucyxcbiAgICAvLyAgIFtuYW1lXTogdmFsdWVcbiAgICAvLyB9XG5cbiAgICAvLyBhbGxWYXJpYW50T3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgLy8gICBpZiAoSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKSA9PT0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0aW9uKSkge1xuICAgIC8vICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoaXRlbSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdEludmVudG9yeSkge1xuICAgICAgY29uc3QgY2hlY2tBdmFpbGFibGUgPSBwcm9kdWN0SW52ZW50b3J5Py52YXJpYW50cy5lZGdlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5vZGUuaWQgPT09IHNlbGVjdGVkVmFyaWFudC5pZClcblxuICAgICAgaWYgKGNoZWNrQXZhaWxhYmxlWzBdPy5ub2RlLmF2YWlsYWJsZUZvclNhbGUpIHtcbiAgICAgICAgc2V0QXZhaWxhYmxlKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRBdmFpbGFibGUoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9LCBbcHJvZHVjdEludmVudG9yeSwgc2VsZWN0ZWRWYXJpYW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC00IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBtZDp3LTEvM1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYi0zXCI+e2Zvcm1hdHRlci5mb3JtYXQocHJvZHVjdC52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlVjIuYW1vdW50KX08L3NwYW4+XG4gICAgICB7Lyoge1xuICAgICAgICBwcm9kdWN0Lm9wdGlvbnMubWFwKCh7IG5hbWUsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RPcHRpb25zXG4gICAgICAgICAgICBrZXk9e2BrZXktJHtuYW1lfWB9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cbiAgICAgICAgICAgIHNldE9wdGlvbnM9e3NldE9wdGlvbnN9XG4gICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQ9e3NlbGVjdGVkVmFyaWFudH1cbiAgICAgICAgICAgIHByb2R1Y3RJbnZlbnRvcnk9e3Byb2R1Y3RJbnZlbnRvcnl9XG4gICAgICAgICAgICBhdmFpbGFibGU9e2F2YWlsYWJsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfSAqL31cbiAgICAgIHtcbiAgICAgICAgYXZhaWxhYmxlID9cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZFRvQ2FydChzZWxlY3RlZFZhcmlhbnQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0zIG10LTMgdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktODAwXCI+QWRkIFRvIENhcmRcbiAgICAgICAgICA8L2J1dHRvbj4gOlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMyBtdC0zIHRleHQtd2hpdGUgYmctZ3JheS04MDAgcm91bmRlZC1sZyBjdXJzb3Itbm90LWFsbG93ZWRcIj5cbiAgICAgICAgICAgICAgU29sZCBvdXQhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICB9XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImZvcm1hdHRlciIsIkNhcnRDb250ZXh0IiwiYXhpb3MiLCJ1c2VTV1IiLCJmZXRjaEludmVudG9yeSIsInVybCIsImlkIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJQcm9kdWN0Rm9ybSIsInByb2R1Y3QiLCJwcm9kdWN0SW52ZW50b3J5IiwiaGFuZGxlIiwiZXJyb3JSZXRyeUNvdW50IiwiYXZhaWxhYmxlIiwic2V0QXZhaWxhYmxlIiwiYWRkVG9DYXJ0IiwiYWxsVmFyaWFudE9wdGlvbnMiLCJ2YXJpYW50cyIsImVkZ2VzIiwibWFwIiwidmFyaWFudCIsImFsbE9wdGlvbnMiLCJub2RlIiwic2VsZWN0ZWRPcHRpb25zIiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsInRpdGxlIiwiaW1hZ2UiLCJvcHRpb25zIiwidmFyaWFudFRpdGxlIiwidmFyaWFudFByaWNlIiwicHJpY2VWMiIsImFtb3VudCIsInZhcmlhbnRRdWFudGl0eSIsInNldFNlbGVjdGVkT3B0aW9ucyIsImRlZmF1bHRWYWx1ZXMiLCJzZXRPcHRpb25zIiwicHJldlN0YXRlIiwiY2hlY2tBdmFpbGFibGUiLCJmaWx0ZXIiLCJzZWxlY3RlZFZhcmlhbnQiLCJhdmFpbGFibGVGb3JTYWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcGFuIiwiZm9ybWF0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Product/productForm.js\n"));

/***/ })

});