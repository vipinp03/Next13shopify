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

/***/ "(app-client)/./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserConsumer\": function() { return /* binding */ UserConsumer; },\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default,UserConsumer,UserContext auto */ \nvar _s = $RefreshSig$();\n\nimpoer;\n// import { createCheckout, updateCheckout } from '../lib/shopify'\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserProvider(param) {\n    let { children  } = param;\n    _s();\n    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.login_token) {\n            setLogin(true);\n        } else {\n        // api call\n        // localStorage.setItem(\"login_token\", JSON.stringify([newCart, newCheckout]))\n        }\n    }, []);\n    async function HandelLogin(token) {\n        setLogin(true);\n        localStorage.setItem(\"login_token\", JSON.stringify(token));\n        await router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            login,\n            setLogin,\n            HandelLogin\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vipinpandey/Desktop/project/context/userContext.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProvider, \"2+/fdd5WcFlGEWU5rNPG6iGT+gI=\");\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29udGV4dC91c2VyQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwRDtBQUMxREc7QUFDQSxrRUFBa0U7QUFFbEUsTUFBTUMsNEJBQWNKLG9EQUFhQTtBQUVsQixTQUFTSyxhQUFhLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUNuQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUd4Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLGFBQWFDLFdBQVcsRUFBRTtZQUM3QkYsU0FBUyxJQUFJO1FBQ2QsT0FBSztRQUNELFdBQVc7UUFDWCw4RUFBOEU7UUFDbEYsQ0FBQztJQUVILEdBQUcsRUFBRTtJQUNMLGVBQWVHLFlBQVlDLEtBQUssRUFBRTtRQUNoQ0osU0FBUyxJQUFJO1FBQ2JDLGFBQWFJLE9BQU8sQ0FBQyxlQUFlQyxLQUFLQyxTQUFTLENBQUNIO1FBQ25ELE1BQU1JLE9BQU9DLElBQUksQ0FBQztJQUNwQjtJQUVBLHFCQUNFLDhEQUFDYixZQUFZYyxRQUFRO1FBQUNDLE9BQU87WUFBQ1o7WUFBTUM7WUFBU0c7UUFBVztrQkFDckRMOzs7Ozs7QUFHUCxDQUFDO0dBeEJ1QkQ7S0FBQUE7QUEwQnhCLE1BQU1lLGVBQWVoQixZQUFZaUIsUUFBUTtBQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvdXNlckNvbnRleHQuanM/MjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb2VyIFxuLy8gaW1wb3J0IHsgY3JlYXRlQ2hlY2tvdXQsIHVwZGF0ZUNoZWNrb3V0IH0gZnJvbSAnLi4vbGliL3Nob3BpZnknXG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxvZ2luX3Rva2VuKSB7XG4gICAgIHNldExvZ2luKHRydWUpXG4gICAgfWVsc2V7XG4gICAgICAgIC8vIGFwaSBjYWxsXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5fdG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkoW25ld0NhcnQsIG5ld0NoZWNrb3V0XSkpXG4gICAgfVxuXG4gIH0sIFtdKVxuICBhc3luYyBmdW5jdGlvbiBIYW5kZWxMb2dpbih0b2tlbikge1xuICAgIHNldExvZ2luKHRydWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpbl90b2tlblwiLCBKU09OLnN0cmluZ2lmeSh0b2tlbikpXG4gICAgYXdhaXQgcm91dGVyLnB1c2goJy8nKTsgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2xvZ2luLHNldExvZ2luLEhhbmRlbExvZ2lufX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBVc2VyQ29uc3VtZXIgPSBVc2VyQ29udGV4dC5Db25zdW1lclxuXG5leHBvcnQgeyBVc2VyQ29uc3VtZXIsIFVzZXJDb250ZXh0IH0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW1wb2VyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvZ2luIiwic2V0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJsb2dpbl90b2tlbiIsIkhhbmRlbExvZ2luIiwidG9rZW4iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJvdXRlciIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwiVXNlckNvbnN1bWVyIiwiQ29uc3VtZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./context/userContext.js\n"));

/***/ })

});