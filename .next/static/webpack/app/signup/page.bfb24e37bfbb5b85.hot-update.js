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

/***/ "(app-client)/./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserConsumer\": function() { return /* binding */ UserConsumer; },\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-client)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,UserConsumer,UserContext auto */ \nvar _s = $RefreshSig$();\n\n\n// import { createCheckout, updateCheckout } from '../lib/shopify'\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserProvider(param) {\n    let { children  } = param;\n    _s();\n    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.login_token) {\n            setLogin(true);\n        } else {\n        // api call\n        // localStorage.setItem(\"login_token\", JSON.stringify([newCart, newCheckout]))\n        }\n    }, []);\n    async function HandelLogin(token) {\n        setLogin(true);\n        localStorage.setItem(\"login_token\", JSON.stringify(token));\n        await router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            login,\n            setLogin,\n            HandelLogin\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vipinpandey/Desktop/project/context/userContext.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProvider, \"p4LaQ8mKWD4P14puBhUusvtY5N8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29udGV4dC91c2VyQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ2xCO0FBQ3hDLGtFQUFrRTtBQUVsRSxNQUFNSSw0QkFBY0osb0RBQWFBO0FBRWxCLFNBQVNLLGFBQWEsS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBQ25DLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUd4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLGFBQWFDLFdBQVcsRUFBRTtZQUM3QkgsU0FBUyxJQUFJO1FBQ2QsT0FBSztRQUNELFdBQVc7UUFDWCw4RUFBOEU7UUFDbEYsQ0FBQztJQUVILEdBQUcsRUFBRTtJQUNMLGVBQWVJLFlBQVlDLEtBQUssRUFBRTtRQUNoQ0wsU0FBUyxJQUFJO1FBQ2JFLGFBQWFJLE9BQU8sQ0FBQyxlQUFlQyxLQUFLQyxTQUFTLENBQUNIO1FBQ25ELE1BQU1KLE9BQU9RLElBQUksQ0FBQztJQUNwQjtJQUVBLHFCQUNFLDhEQUFDYixZQUFZYyxRQUFRO1FBQUNDLE9BQU87WUFBQ1o7WUFBTUM7WUFBU0k7UUFBVztrQkFDckROOzs7Ozs7QUFHUCxDQUFDO0dBekJ1QkQ7O1FBRVBGLGtEQUFTQTs7O0tBRkZFO0FBMkJ4QixNQUFNZSxlQUFlaEIsWUFBWWlCLFFBQVE7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzPzI3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIGltcG9ydCB7IGNyZWF0ZUNoZWNrb3V0LCB1cGRhdGVDaGVja291dCB9IGZyb20gJy4uL2xpYi9zaG9waWZ5J1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubG9naW5fdG9rZW4pIHtcbiAgICAgc2V0TG9naW4odHJ1ZSlcbiAgICB9ZWxzZXtcbiAgICAgICAgLy8gYXBpIGNhbGxcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpbl90b2tlblwiLCBKU09OLnN0cmluZ2lmeShbbmV3Q2FydCwgbmV3Q2hlY2tvdXRdKSlcbiAgICB9XG5cbiAgfSwgW10pXG4gIGFzeW5jIGZ1bmN0aW9uIEhhbmRlbExvZ2luKHRva2VuKSB7XG4gICAgc2V0TG9naW4odHJ1ZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luX3Rva2VuXCIsIEpTT04uc3RyaW5naWZ5KHRva2VuKSlcbiAgICBhd2FpdCByb3V0ZXIucHVzaCgnLycpOyBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bG9naW4sc2V0TG9naW4sSGFuZGVsTG9naW59fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IFVzZXJDb25zdW1lciA9IFVzZXJDb250ZXh0LkNvbnN1bWVyXG5cbmV4cG9ydCB7IFVzZXJDb25zdW1lciwgVXNlckNvbnRleHQgfSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwibG9naW4iLCJzZXRMb2dpbiIsInJvdXRlciIsImxvY2FsU3RvcmFnZSIsImxvZ2luX3Rva2VuIiwiSGFuZGVsTG9naW4iLCJ0b2tlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiLCJVc2VyQ29uc3VtZXIiLCJDb25zdW1lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./context/userContext.js\n"));

/***/ })

});