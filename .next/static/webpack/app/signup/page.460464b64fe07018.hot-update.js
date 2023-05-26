"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-client)/./components/SignUp/SignUp.js":
/*!*************************************!*\
  !*** ./components/SignUp/SignUp.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/userContext */ \"(app-client)/./context/userContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SignUp() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { login , setLogin , HandelLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Validate the form\n        const validationErrors = [];\n        if (!email) {\n            validationErrors.push(\"Email is required.\");\n        }\n        if (!password) {\n            validationErrors.push(\"Password is required.\");\n        }\n        if (!confirmPassword) {\n            validationErrors.push(\"Confirm Password is required.\");\n        }\n        if (password !== confirmPassword) {\n            validationErrors.push(\"Passwords do not match.\");\n        }\n        if (validationErrors.length > 0) {\n            setErrors(validationErrors);\n            return;\n        }\n        // Form is valid, proceed with submission\n        setErrors([]);\n        setLogin(true);\n        HandelLogin(\"token\");\n    // submit logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            class: \"bg-[#f7d4d9]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        class: \"flex items-center mb-6 text-2xl font-semibold text-gray-900 \",\n                        children: \"dear digital\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    class: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                                    children: \"Create and account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                errors.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-red-200 text-red-700 p-2 mb-4\",\n                                    children: errors.map((error, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: error\n                                        }, index, false, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    class: \"space-y-4 md:space-y-6\",\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    for: \"email\",\n                                                    class: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                    children: \"Your email\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"email\",\n                                                    name: \"email\",\n                                                    id: \"email\",\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value),\n                                                    class: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                                    placeholder: \"name@company.com\",\n                                                    required: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    for: \"password\",\n                                                    class: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                    children: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"password\",\n                                                    name: \"password\",\n                                                    id: \"password\",\n                                                    value: password,\n                                                    onChange: (e)=>setPassword(e.target.value),\n                                                    placeholder: \"••••••••\",\n                                                    class: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      \",\n                                                    required: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    for: \"confirm-password\",\n                                                    class: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                    children: \"Confirm password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"password\",\n                                                    id: \"confirmPassword\",\n                                                    value: confirmPassword,\n                                                    onChange: (e)=>setConfirmPassword(e.target.value),\n                                                    placeholder: \"••••••••\",\n                                                    class: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      \",\n                                                    required: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            class: \"w-full text-white bg-[#4b148b] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                                            children: \"Create an account\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"text-sm font-light text-gray-600\",\n                                            children: [\n                                                \"Already have an account?\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/login\",\n                                                    class: \"font-medium text-gray-600 hover:underline \",\n                                                    children: \"Login here\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vipinpandey/Desktop/project/components/SignUp/SignUp.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"q0tlqlkrxwpsYFE+FxArOnLabhU=\");\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TaWduVXAvU2lnblVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNnRDtBQUNuQjtBQUMyQjtBQUV4RCxTQUFTSyxTQUFTOztJQUNoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsaUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxFQUFFYSxNQUFLLEVBQUNDLFNBQVEsRUFBRUMsWUFBVyxFQUFDLEdBQUdkLGlEQUFVQSxDQUFDRSw2REFBV0E7SUFDN0QsTUFBTWEsZUFBZSxPQUFNQyxJQUFNO1FBQy9CQSxFQUFFQyxjQUFjO1FBRWhCLG9CQUFvQjtRQUNwQixNQUFNQyxtQkFBbUIsRUFBRTtRQUUzQixJQUFJLENBQUNkLE9BQU87WUFDVmMsaUJBQWlCQyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUVELElBQUksQ0FBQ2IsVUFBVTtZQUNiWSxpQkFBaUJDLElBQUksQ0FBQztRQUN4QixDQUFDO1FBRUQsSUFBSSxDQUFDWCxpQkFBaUI7WUFDcEJVLGlCQUFpQkMsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJYixhQUFhRSxpQkFBaUI7WUFDaENVLGlCQUFpQkMsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJRCxpQkFBaUJFLE1BQU0sR0FBRyxHQUFHO1lBQy9CVCxVQUFVTztZQUNWO1FBQ0YsQ0FBQztRQUNELHlDQUF5QztRQUN6Q1AsVUFBVSxFQUFFO1FBQ1pFLFNBQVMsSUFBSTtRQUNiQyxZQUFZO0lBQ1osb0JBQW9CO0lBR3RCO0lBQ0EscUJBQ0UsOERBQUNPO2tCQUNDLDRFQUFDQztZQUFRQyxPQUFNO3NCQUNiLDRFQUFDRjtnQkFBSUUsT0FBTTs7a0NBQ1QsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMRixPQUFNO2tDQUU0Rzs7Ozs7O2tDQUdwSCw4REFBQ0Y7d0JBQUlFLE9BQU07a0NBQ1QsNEVBQUNGOzRCQUFJRSxPQUFNOzs4Q0FDVCw4REFBQ0c7b0NBQUdILE9BQU07OENBQTRFOzs7Ozs7Z0NBR3JGYixPQUFPVSxNQUFNLEdBQUcsbUJBQ2YsOERBQUNDO29DQUFJTSxXQUFVOzhDQUNaakIsT0FBT2tCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNDO3NEQUFlRjsyQ0FBUkM7Ozs7Ozs7Ozs7OENBS2QsOERBQUNFO29DQUFLVCxPQUFNO29DQUF5QlUsVUFBVWxCOztzREFDN0MsOERBQUNNOzs4REFDQyw4REFBQ2E7b0RBQ0NDLEtBQUk7b0RBQ0paLE9BQU07OERBQ1A7Ozs7Ozs4REFHRCw4REFBQ2E7b0RBQ0NDLE1BQUs7b0RBQ0xDLE1BQUs7b0RBQ0xDLElBQUc7b0RBQ0hDLE9BQU9wQztvREFDUHFDLFVBQVUsQ0FBQ3pCLElBQU1YLFNBQVNXLEVBQUUwQixNQUFNLENBQUNGLEtBQUs7b0RBQ3hDakIsT0FBTTtvREFDTm9CLGFBQVk7b0RBQ1pDLFVBQVM7Ozs7Ozs7Ozs7OztzREFHYiw4REFBQ3ZCOzs4REFDQyw4REFBQ2E7b0RBQ0NDLEtBQUk7b0RBQ0paLE9BQU07OERBQ1A7Ozs7Ozs4REFHRCw4REFBQ2E7b0RBQ0NDLE1BQUs7b0RBQ0xDLE1BQUs7b0RBQ0xDLElBQUc7b0RBQ0hDLE9BQU9sQztvREFDUG1DLFVBQVUsQ0FBQ3pCLElBQU1ULFlBQVlTLEVBQUUwQixNQUFNLENBQUNGLEtBQUs7b0RBQzNDRyxhQUFZO29EQUNacEIsT0FBTTtvREFDTnFCLFVBQVM7Ozs7Ozs7Ozs7OztzREFHYiw4REFBQ3ZCOzs4REFDQyw4REFBQ2E7b0RBQ0NDLEtBQUk7b0RBQ0paLE9BQU07OERBQ1A7Ozs7Ozs4REFHRCw4REFBQ2E7b0RBQ0NDLE1BQUs7b0RBQ0xFLElBQUc7b0RBQ0hDLE9BQU9oQztvREFDUGlDLFVBQVUsQ0FBQ3pCLElBQU1QLG1CQUFtQk8sRUFBRTBCLE1BQU0sQ0FBQ0YsS0FBSztvREFDbERHLGFBQVk7b0RBQ1pwQixPQUFNO29EQUNOcUIsVUFBUzs7Ozs7Ozs7Ozs7O3NEQVdiLDhEQUFDQzs0Q0FDQ1IsTUFBSzs0Q0FDTGQsT0FBTTtzREFDUDs7Ozs7O3NEQUdELDhEQUFDUTs0Q0FBRVIsT0FBTTs7Z0RBQW1DO2dEQUNqQjs4REFDekIsOERBQUN0QixrREFBSUE7b0RBQ0h3QixNQUFLO29EQUNMRixPQUFNOzhEQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0FwSlNwQjtLQUFBQTtBQXNKVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ25VcC9TaWduVXAuanM/YjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvdXNlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2lnblVwKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29uZmlybVBhc3N3b3JkLCBzZXRDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgbG9naW4sc2V0TG9naW4gLEhhbmRlbExvZ2lufSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBWYWxpZGF0ZSB0aGUgZm9ybVxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnMgPSBbXTtcblxuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChcIkVtYWlsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goXCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChcIkNvbmZpcm0gUGFzc3dvcmQgaXMgcmVxdWlyZWQuXCIpO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRFcnJvcnModmFsaWRhdGlvbkVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZvcm0gaXMgdmFsaWQsIHByb2NlZWQgd2l0aCBzdWJtaXNzaW9uXG4gICAgc2V0RXJyb3JzKFtdKTtcbiAgICBzZXRMb2dpbih0cnVlKVxuICAgIEhhbmRlbExvZ2luKFwidG9rZW5cIilcbiAgICAvLyBzdWJtaXQgbG9naWMgaGVyZVxuXG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmctWyNmN2Q0ZDldXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTggbXgtYXV0byBtZDpoLXNjcmVlbiBsZzpweS0wXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGltZyBjbGFzcz1cInctOCBoLTggbXItMlwiIHNyYz1cImh0dHBzOi8vZmxvd2JpdGUuczMuYW1hem9uYXdzLmNvbS9ibG9ja3MvbWFya2V0aW5nLXVpL2xvZ28uc3ZnXCIgYWx0PVwibG9nb1wiPiAqL31cbiAgICAgICAgICAgIGRlYXIgZGlnaXRhbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6Ym9yZGVyIG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC02IHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBtZDp0ZXh0LTJ4bCBcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgYW5kIGFjY291bnRcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAge2Vycm9ycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC0yMDAgdGV4dC1yZWQtNzAwIHAtMiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZXJyb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntlcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVAY29tcGFueS5jb21cIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNSAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb25maXJtIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNSAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGgtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGVybXNcIiBhcmlhLWRlc2NyaWJlZGJ5PVwidGVybXNcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInctNCBoLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGJnLWdyYXktNTAgZm9jdXM6cmluZy0zIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgICBkYXJrOmZvY3VzOnJpbmctcHJpbWFyeS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMFwiIHJlcXVpcmVkPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0zIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZXJtc1wiIGNsYXNzPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPkkgYWNjZXB0IHRoZSA8YSBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1wcmltYXJ5LTUwMFwiIGhyZWY9XCIjXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIHRleHQtd2hpdGUgYmctWyM0YjE0OGJdIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9sb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTG9naW4gaGVyZVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJMaW5rIiwiVXNlckNvbnRleHQiLCJTaWduVXAiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsImxvZ2luIiwic2V0TG9naW4iLCJIYW5kZWxMb2dpbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRpb25FcnJvcnMiLCJwdXNoIiwibGVuZ3RoIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzIiwiYSIsImhyZWYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImVycm9yIiwiaW5kZXgiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/SignUp/SignUp.js\n"));

/***/ })

});