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

/***/ "(app-client)/./lib/shopify.js":
/*!************************!*\
  !*** ./lib/shopify.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductByHandle\": function() { return /* binding */ getProductByHandle; },\n/* harmony export */   \"getProductsData\": function() { return /* binding */ getProductsData; },\n/* harmony export */   \"getProductsInCollection\": function() { return /* binding */ getProductsInCollection; },\n/* harmony export */   \"getnavigationMenu\": function() { return /* binding */ getnavigationMenu; },\n/* harmony export */   \"userLogin\": function() { return /* binding */ userLogin; }\n/* harmony export */ });\nconst domain = \"dbiswa.myshopify.com\";\nconst storefrontAccessToken = \"c747a21a957066bd8cf9fbcbc0cb5617\";\nasync function ShopifyData(query) {\n    const URL = \"https://\".concat(domain, \"/api/2022-10/graphql.json\");\n    console.log(\"URL\", URL);\n    const options = {\n        endpoint: URL,\n        method: \"POST\",\n        headers: {\n            \"X-Shopify-Storefront-Access-Token\": storefrontAccessToken,\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    };\n    try {\n        const data = await fetch(URL, options).then((response)=>{\n            return response.json();\n        });\n        return data;\n    } catch (error) {\n        return \"err\", URL;\n    }\n}\n_c = ShopifyData;\nasync function getProductsInCollection() {\n    console.log(\"hhhh\");\n    const query = \"\\n    {\\n      collections(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            products(first: 25) {\\n              edges {\\n                node {\\n                  id\\n                  title\\n                  handle\\n                  priceRange {\\n                    minVariantPrice {\\n                      amount\\n                    }\\n                  }\\n                  images(first: 5) {\\n                    edges {\\n                      node {\\n                        originalSrc\\n                        altText\\n                      }\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n    \";\n    const response = await ShopifyData(query);\n    return response.data.collections.edges;\n}\nasync function getProductsData() {\n    const query = \"{\\n      products(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            description\\n            priceRange {\\n              minVariantPrice {\\n                amount\\n                currencyCode\\n              }\\n            }\\n            images(first: 1) {\\n              edges {\\n                node {\\n                  originalSrc\\n                  altText\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\";\n    const response = await ShopifyData(query);\n    console.log(response.data.products.edges);\n    return response.data.products.edges;\n}\nasync function getnavigationMenu() {\n    const query = '{\\n    menu(handle: \"main-menu\") {\\n      title\\n      items {\\n        id\\n        title\\n      }\\n    }\\n    }';\n    const response = await ShopifyData(query);\n    console.log(\"response\", response.data.menu.items);\n    return response.data.menu.items;\n}\nasync function getProductByHandle(handle) {\n    console.log(\"My Handle Server\", handle);\n    const query = ' {\\n    productByHandle(handle: \"'.concat(handle, '\") {\\n      id\\n      title\\n      description\\n      variants(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            priceV2 {\\n              amount\\n              currencyCode\\n            }\\n            sku\\n            compareAtPriceV2 {\\n              amount\\n              currencyCode\\n            }\\n            availableForSale\\n            selectedOptions {\\n              name\\n              value\\n            }\\n          }\\n        }\\n      }\\n      images(first: 10) {\\n        edges {\\n          node {\\n            id\\n            originalSrc\\n            altText\\n          }\\n        }\\n      }\\n      priceRange {\\n        minVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n        maxVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n      }\\n      metafield(namespace: \"ratings\", key: \"rating\") {\\n        value\\n      }\\n    }\\n  }\\n  ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(response.data.productByHandle);\n        return response.data.productByHandle;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userLogin() {\n    const query = 'mutation{\\n    customerCreate(input: {\\n    acceptsMarketing: true,\\n    email: \"biswarup@deardigital.com\",\\n    firstName: \"Biswarup\",\\n    lastName: \"Das\",\\n    password: \"123456\",\\n    phone: \"+91986543210\"\\n   }) {\\n    customer {\\n       id\\n    firstName\\n    lastName\\n    acceptsMarketing\\n    email\\n    phone\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }\\n   ';\n}\nvar _c;\n$RefreshReg$(_c, \"ShopifyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL3Nob3BpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTQyxzQkFBZ0M7QUFDL0MsTUFBTUcsd0JBQXdCSCxrQ0FBMEM7QUFFeEUsZUFBZUssWUFBWUMsS0FBSyxFQUFFO0lBQ2hDLE1BQU1DLE1BQU0sV0FBa0IsT0FBUFIsUUFBTztJQUM5QlMsUUFBUUMsR0FBRyxDQUFDLE9BQU9GO0lBRW5CLE1BQU1HLFVBQVU7UUFDZEMsVUFBVUo7UUFDVkssUUFBUTtRQUNSQyxTQUFTO1lBQ1AscUNBQXFDVjtZQUNyQ1csUUFBUTtZQUNSLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRVg7UUFBTTtJQUMvQjtJQUVBLElBQUk7UUFDRixNQUFNWSxPQUFPLE1BQU1DLE1BQU1aLEtBQUtHLFNBQVNVLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ3hELE9BQU9BLFNBQVNDLElBQUk7UUFDdEI7UUFFQSxPQUFPSjtJQUNULEVBQUUsT0FBT0ssT0FBTztRQUNkLE9BQVEsT0FBT2hCLEdBQUc7SUFDcEI7QUFDRjtLQXhCZUY7QUE2QlIsZUFBZW1CLDBCQUEwQjtJQUM5Q2hCLFFBQVFDLEdBQUcsQ0FBQztJQUNaLE1BQU1ILFFBQVM7SUFvQ2YsTUFBTWUsV0FBVyxNQUFNaEIsWUFBWUM7SUFFbkMsT0FBT2UsU0FBU0gsSUFBSSxDQUFDTyxXQUFXLENBQUNDLEtBQUs7QUFFeEMsQ0FBQztBQUdNLGVBQWVDLGtCQUFrQjtJQUN0QyxNQUFNckIsUUFBUztJQTBCYixNQUFNZSxXQUFXLE1BQU1oQixZQUFZQztJQUN2Q0UsUUFBUUMsR0FBRyxDQUFDWSxTQUFTSCxJQUFJLENBQUNVLFFBQVEsQ0FBQ0YsS0FBSztJQUN0QyxPQUFPTCxTQUFTSCxJQUFJLENBQUNVLFFBQVEsQ0FBQ0YsS0FBSztBQUNyQyxDQUFDO0FBR00sZUFBZUcsb0JBQW1CO0lBQ3ZDLE1BQU12QixRQUFTO0lBU2IsTUFBTWUsV0FBVyxNQUFNaEIsWUFBWUM7SUFDbkNFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWSxTQUFTSCxJQUFJLENBQUNZLElBQUksQ0FBQ0MsS0FBSztJQUNoRCxPQUFPVixTQUFTSCxJQUFJLENBQUNZLElBQUksQ0FBQ0MsS0FBSztBQUNuQyxDQUFDO0FBR00sZUFBZUMsbUJBQW1CQyxNQUFNLEVBQUU7SUFDL0N6QixRQUFRQyxHQUFHLENBQUMsb0JBQW9Cd0I7SUFDaEMsTUFBTTNCLFFBQVEsb0NBQ3NCLE9BQVAyQixRQUFPO0lBb0RwQyxJQUFJO1FBQ0YsTUFBTVosV0FBVyxNQUFNaEIsWUFBWUM7UUFDckNFLFFBQVFDLEdBQUcsQ0FBQ1ksU0FBU0gsSUFBSSxDQUFDZ0IsZUFBZTtRQUN6QyxPQUFPYixTQUFTSCxJQUFJLENBQUNnQixlQUFlO0lBQ3BDLEVBQUUsT0FBT1gsT0FBTztRQUNkZixRQUFRQyxHQUFHLENBQUNjO0lBQ2Q7QUFFRixDQUFDO0FBRU0sZUFBZVksWUFBWTtJQUVoQyxNQUFNN0IsUUFBUTtBQXVCaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvc2hvcGlmeS5qcz9lZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOO1xuY29uc3Qgc3RvcmVmcm9udEFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRUZST05UX0FDQ0VTU1RPS0VOO1xuXG5hc3luYyBmdW5jdGlvbiBTaG9waWZ5RGF0YShxdWVyeSkge1xuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly8ke2RvbWFpbn0vYXBpLzIwMjItMTAvZ3JhcGhxbC5qc29uYDtcbiAgY29uc29sZS5sb2coXCJVUkxcIiwgVVJMKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZW5kcG9pbnQ6IFVSTCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuXCI6IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goVVJMLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAoXCJlcnJcIiwgVVJMKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwiaGhoaFwiKVxuICBjb25zdCBxdWVyeSA9IGBcbiAgICB7XG4gICAgICBjb2xsZWN0aW9ucyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICAgIHByb2R1Y3RzKGZpcnN0OiAyNSkge1xuICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGltYWdlcyhmaXJzdDogNSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzO1xuXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzRGF0YSgpIHtcbiAgY29uc3QgcXVlcnkgPSBge1xuICAgICAgcHJvZHVjdHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xuICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzLmVkZ2VzKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cy5lZGdlc1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRuYXZpZ2F0aW9uTWVudSgpe1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgbWVudShoYW5kbGU6IFwibWFpbi1tZW51XCIpIHtcbiAgICAgIHRpdGxlXG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICAgIH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZS5kYXRhLm1lbnUuaXRlbXMpXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubWVudS5pdGVtc1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0QnlIYW5kbGUoaGFuZGxlKSB7XG4gIGNvbnNvbGUubG9nKFwiTXkgSGFuZGxlIFNlcnZlclwiLCBoYW5kbGUpXG4gIGNvbnN0IHF1ZXJ5ID0gYCB7XG4gICAgcHJvZHVjdEJ5SGFuZGxlKGhhbmRsZTogXCIke2hhbmRsZX1cIikge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgdmFyaWFudHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgcHJpY2VWMiB7XG4gICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNrdVxuICAgICAgICAgICAgY29tcGFyZUF0UHJpY2VWMiB7XG4gICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2YWlsYWJsZUZvclNhbGVcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltYWdlcyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgbWluVmFyaWFudFByaWNlIHtcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgfVxuICAgICAgICBtYXhWYXJpYW50UHJpY2Uge1xuICAgICAgICAgIGFtb3VudFxuICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZXRhZmllbGQobmFtZXNwYWNlOiBcInJhdGluZ3NcIiwga2V5OiBcInJhdGluZ1wiKSB7XG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGBcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3RCeUhhbmRsZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvZHVjdEJ5SGFuZGxlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlckxvZ2luKCkge1xuICBcbiAgY29uc3QgcXVlcnkgPWBtdXRhdGlvbntcbiAgICBjdXN0b21lckNyZWF0ZShpbnB1dDoge1xuICAgIGFjY2VwdHNNYXJrZXRpbmc6IHRydWUsXG4gICAgZW1haWw6IFwiYmlzd2FydXBAZGVhcmRpZ2l0YWwuY29tXCIsXG4gICAgZmlyc3ROYW1lOiBcIkJpc3dhcnVwXCIsXG4gICAgbGFzdE5hbWU6IFwiRGFzXCIsXG4gICAgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsXG4gICAgcGhvbmU6IFwiKzkxOTg2NTQzMjEwXCJcbiAgIH0pIHtcbiAgICBjdXN0b21lciB7XG4gICAgICAgaWRcbiAgICBmaXJzdE5hbWVcbiAgICBsYXN0TmFtZVxuICAgIGFjY2VwdHNNYXJrZXRpbmdcbiAgICBlbWFpbFxuICAgIHBob25lXG4gICAgfVxuICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgfVxuICAgfVxuICAgYFxufSJdLCJuYW1lcyI6WyJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiU0hPUElGWV9TVE9SRV9ET01BSU4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU4iLCJTaG9waWZ5RGF0YSIsInF1ZXJ5IiwiVVJMIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJlbmRwb2ludCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImdldFByb2R1Y3RzSW5Db2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJlZGdlcyIsImdldFByb2R1Y3RzRGF0YSIsInByb2R1Y3RzIiwiZ2V0bmF2aWdhdGlvbk1lbnUiLCJtZW51IiwiaXRlbXMiLCJnZXRQcm9kdWN0QnlIYW5kbGUiLCJoYW5kbGUiLCJwcm9kdWN0QnlIYW5kbGUiLCJ1c2VyTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/shopify.js\n"));

/***/ })

});