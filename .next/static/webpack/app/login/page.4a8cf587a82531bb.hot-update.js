"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./lib/shopify.js":
/*!************************!*\
  !*** ./lib/shopify.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCheckout\": function() { return /* binding */ createCheckout; },\n/* harmony export */   \"getCollections\": function() { return /* binding */ getCollections; },\n/* harmony export */   \"getCollectionsByHandle\": function() { return /* binding */ getCollectionsByHandle; },\n/* harmony export */   \"getProductByHandle\": function() { return /* binding */ getProductByHandle; },\n/* harmony export */   \"getProductBysearch\": function() { return /* binding */ getProductBysearch; },\n/* harmony export */   \"getProductsByFilter\": function() { return /* binding */ getProductsByFilter; },\n/* harmony export */   \"getProductsData\": function() { return /* binding */ getProductsData; },\n/* harmony export */   \"getProductsInCollection\": function() { return /* binding */ getProductsInCollection; },\n/* harmony export */   \"getUserDetails\": function() { return /* binding */ getUserDetails; },\n/* harmony export */   \"getnavigationMenu\": function() { return /* binding */ getnavigationMenu; },\n/* harmony export */   \"updateCheckout\": function() { return /* binding */ updateCheckout; },\n/* harmony export */   \"userLogin\": function() { return /* binding */ userLogin; },\n/* harmony export */   \"userRegister\": function() { return /* binding */ userRegister; }\n/* harmony export */ });\nconst domain = \"dbiswa.myshopify.com\";\nconst storefrontAccessToken = \"c747a21a957066bd8cf9fbcbc0cb5617\";\nasync function ShopifyData(query) {\n    const URL = \"https://\".concat(domain, \"/api/2022-10/graphql.json\");\n    const options = {\n        endpoint: URL,\n        method: \"POST\",\n        headers: {\n            \"X-Shopify-Storefront-Access-Token\": storefrontAccessToken,\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    };\n    try {\n        const data = await fetch(URL, options).then((response)=>{\n            return response.json();\n        });\n        return data;\n    } catch (error) {\n        return \"err\", error;\n    }\n}\n_c = ShopifyData;\nasync function getProductsInCollection() {\n    const query = \"\\n    {\\n      collections(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            products(first: 25) {\\n              edges {\\n                node {\\n                  id\\n                  title\\n                  handle\\n                  priceRange {\\n                    minVariantPrice {\\n                      amount\\n                    }\\n                  }\\n                  images(first: 5) {\\n                    edges {\\n                      node {\\n                        originalSrc\\n                        altText\\n                      }\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n    \";\n    const response = await ShopifyData(query);\n    return response.data.collections.edges;\n}\nasync function getProductsData() {\n    const query = \"{\\n      products(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            description\\n            priceRange {\\n              minVariantPrice {\\n                amount\\n                currencyCode\\n              }\\n            }\\n            images(first: 1) {\\n              edges {\\n                node {\\n                  originalSrc\\n                  altText\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\";\n    const response = await ShopifyData(query);\n    console.log(\"product data\", response.data.products.edges);\n    return response.data.products.edges;\n}\nasync function getnavigationMenu() {\n    const query = '{\\n    menu(handle: \"main-menu\") {\\n      title\\n      items {\\n        id\\n        title\\n        url \\n      }\\n    }\\n    }';\n    const response = await ShopifyData(query);\n    console.log(\"Menu\", response);\n    return response.data.menu.items;\n}\nasync function getProductByHandle(handle) {\n    console.log(\"My Handle Server\", handle);\n    const query = ' {\\n    productByHandle(handle: \"'.concat(handle, '\") {\\n      id\\n      title\\n      description\\n      variants(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            priceV2 {\\n              amount\\n              currencyCode\\n            }\\n            sku\\n            compareAtPriceV2 {\\n              amount\\n              currencyCode\\n            }\\n            availableForSale\\n            selectedOptions {\\n              name\\n              value\\n            }\\n          }\\n        }\\n      }\\n      images(first: 10) {\\n        edges {\\n          node {\\n            id\\n            originalSrc\\n            altText\\n          }\\n        }\\n      }\\n      priceRange {\\n        minVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n        maxVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n      }\\n      metafield(namespace: \"ratings\", key: \"rating\") {\\n        value\\n      }\\n    }\\n  }\\n  ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"getProductByHandle\", response.data.productByHandle);\n        return response.data.productByHandle;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userRegister(email, firstName, lastName, password, phone) {\n    const query = 'mutation{\\n    customerCreate(input: {\\n    acceptsMarketing: true,\\n    email: \"'.concat(email, '\",\\n    firstName: \"').concat(firstName, '\",\\n    lastName: \"').concat(lastName, '\",\\n    password: \"').concat(password, '\",\\n    phone: \"').concat(phone, '\"\\n   }) {\\n    customer {\\n       id\\n    firstName\\n    lastName\\n    acceptsMarketing\\n    email\\n    phone\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }\\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"resgister\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userLogin(email, password) {\n    const query = 'mutation {\\n    customerAccessTokenCreate(input: {\\n    email: \"'.concat(email, '\",\\n    password: \"').concat(password, '\"\\n   }) {\\n    customerAccessToken {\\n        accessToken\\n        expiresAt\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }   \\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"userLogin\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function createCheckout(id, quantity) {\n    const query = '\\n    mutation {\\n      checkoutCreate(input: {\\n        lineItems: [{ variantId: \"'.concat(id, '\", quantity: ').concat(quantity, \"}]\\n      }) {\\n        checkout {\\n          id\\n          webUrl\\n        }\\n      }\\n    }\");\n    const response = await ShopifyData(query);\n    const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : [];\n    return checkout;\n}\nasync function updateCheckout(id, lineItems) {\n    const lineItemsObject = lineItems.map((item)=>{\n        return '{\\n      variantId: \"'.concat(item.id, '\",\\n      quantity:  ').concat(item.variantQuantity, \"\\n    }\");\n    });\n    const query = \"\\n  mutation {\\n    checkoutLineItemsReplace(lineItems: [\".concat(lineItemsObject, '], checkoutId: \"').concat(id, '\") {\\n      checkout {\\n        id\\n        webUrl\\n        lineItems(first: 25) {\\n          edges {\\n            node {\\n              id\\n              title\\n              quantity\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"update checkout\", response);\n    const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : [];\n    return checkout;\n}\nasync function getUserDetails(token) {\n    console.log(token, \"token hai bhai\", typeof token);\n    const query = '{\\n    customer(customerAccessToken: \"'.concat(token, '\") {\\n      id\\n      firstName\\n      lastName\\n      acceptsMarketing\\n      email\\n      phone\\n      orders(first: 10) {\\n        edges {\\n          node {\\n            id\\n            orderNumber\\n            totalPrice {\\n              amount\\n              currencyCode\\n            }\\n            \\n            lineItems(first: 5) {\\n              edges {\\n                node {\\n                  title\\n                  variant {\\n                    image {\\n                      originalSrc\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"getUserDetails\", response);\n    return response.data;\n}\nasync function getProductsByFilter(handle) {}\nasync function getCollections() {\n    const query = \"{\\n    collections(first: 10) {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n        }\\n      }\\n    }\\n}\";\n    const response = await ShopifyData(query);\n    console.log(\"getCollections\", response.data);\n    return response.data;\n}\nasync function getProductBysearch(params) {\n    const query = '{\\n    products(first: 10, query: \"'.concat(params, '\") {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n          description\\n          featuredImage {\\n            originalSrc\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"search results\", response.data);\n    return response.data;\n}\nasync function getCollectionsByHandle(collection) {\n    console.log(\"collection\", collection);\n    const query = '{collections(query: \"'.concat(collection, '\", first: 1) {\\n    edges {\\n      node {\\n        id\\n        title\\n        handle\\n        products(first: 10) {\\n          edges {\\n            node {\\n              id\\n              title\\n              handle\\n              description\\n              priceRange {\\n                minVariantPrice {\\n                  amount\\n                  currencyCode\\n                }\\n              }\\n              images(first: 1) {\\n                edges {\\n                  node {\\n                    originalSrc\\n                    altText\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}');\n    const response = await ShopifyData(query);\n    console.log(\"getCollectionsByHandle\", response.data);\n    return response.data;\n}\nvar _c;\n$RefreshReg$(_c, \"ShopifyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0EsU0FBU0gsSUFBSTtBQUN0QixDQUFDO0FBRU0sZUFBZXdDLG9CQUFvQnZCLE1BQU0sRUFBQyxDQUVqRCxDQUFDO0FBRU0sZUFBZXdCLGlCQUFnQjtJQUNwQyxNQUFNbkQsUUFBUztJQVdqQixNQUFNYSxXQUFXLE1BQU1kLFlBQVlDO0lBRW5Db0IsUUFBUUMsR0FBRyxDQUFDLGtCQUFpQlIsU0FBU0gsSUFBSTtJQUMxQyxPQUFPRyxTQUFTSCxJQUFJO0FBQ3BCLENBQUM7QUFHTSxlQUFlMEMsbUJBQW1CQyxNQUFNLEVBQUU7SUFDL0MsTUFBTXJELFFBQU8sc0NBQzBCLE9BQVBxRCxRQUFPO0lBY3ZDLE1BQU14QyxXQUFXLE1BQU1kLFlBQVlDO0lBQ3JDb0IsUUFBUUMsR0FBRyxDQUFDLGtCQUFpQlIsU0FBU0gsSUFBSTtJQUMxQyxPQUFPRyxTQUFTSCxJQUFJO0FBRXBCLENBQUM7QUFFTSxlQUFlNEMsdUJBQXVCQyxVQUFVLEVBQUU7SUFDdkRuQyxRQUFRQyxHQUFHLENBQUMsY0FBYWtDO0lBQ3pCLE1BQU12RCxRQUFPLHdCQUFtQyxPQUFYdUQsWUFBVztJQWtDaEQsTUFBTTFDLFdBQVcsTUFBTWQsWUFBWUM7SUFDbkNvQixRQUFRQyxHQUFHLENBQUMsMEJBQXlCUixTQUFTSCxJQUFJO0lBQ2xELE9BQU9HLFNBQVNILElBQUk7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvc2hvcGlmeS5qcz9lZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOO1xuY29uc3Qgc3RvcmVmcm9udEFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRUZST05UX0FDQ0VTU1RPS0VOO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIFNob3BpZnlEYXRhKHF1ZXJ5KSB7XG4gIGNvbnN0IFVSTCA9IGBodHRwczovLyR7ZG9tYWlufS9hcGkvMjAyMi0xMC9ncmFwaHFsLmpzb25gO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGVuZHBvaW50OiBVUkwsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtU2hvcGlmeS1TdG9yZWZyb250LUFjY2Vzcy1Ub2tlblwiOiBzdG9yZWZyb250QWNjZXNzVG9rZW4sXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFVSTCwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFwiZXJyXCIsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24oKSB7XG4gXG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIHtcbiAgICAgIGNvbGxlY3Rpb25zKGZpcnN0OiAxMCkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgcHJvZHVjdHMoZmlyc3Q6IDI1KSB7XG4gICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFyaWFudFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbnMuZWRnZXM7XG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzRGF0YSgpIHtcbiAgY29uc3QgcXVlcnkgPSBge1xuICAgICAgcHJvZHVjdHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xuICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5jb25zb2xlLmxvZyhcInByb2R1Y3QgZGF0YVwiLHJlc3BvbnNlLmRhdGEucHJvZHVjdHMuZWRnZXMpXG4gIHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3RzLmVkZ2VzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRuYXZpZ2F0aW9uTWVudSgpe1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgbWVudShoYW5kbGU6IFwibWFpbi1tZW51XCIpIHtcbiAgICAgIHRpdGxlXG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIHVybCBcbiAgICAgIH1cbiAgICB9XG4gICAgfWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhcIk1lbnVcIiwgcmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubWVudS5pdGVtc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SGFuZGxlKGhhbmRsZSkge1xuICBjb25zb2xlLmxvZyhcIk15IEhhbmRsZSBTZXJ2ZXJcIiwgaGFuZGxlKVxuICBjb25zdCBxdWVyeSA9IGAge1xuICAgIHByb2R1Y3RCeUhhbmRsZShoYW5kbGU6IFwiJHtoYW5kbGV9XCIpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHZhcmlhbnRzKGZpcnN0OiAxMCkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHByaWNlVjIge1xuICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBza3VcbiAgICAgICAgICAgIGNvbXBhcmVBdFByaWNlVjIge1xuICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmFpbGFibGVGb3JTYWxlXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWFnZXMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgYW1vdW50XG4gICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFyaWFudFByaWNlIHtcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWV0YWZpZWxkKG5hbWVzcGFjZTogXCJyYXRpbmdzXCIsIGtleTogXCJyYXRpbmdcIikge1xuICAgICAgICB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJnZXRQcm9kdWN0QnlIYW5kbGVcIixyZXNwb25zZS5kYXRhLnByb2R1Y3RCeUhhbmRsZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvZHVjdEJ5SGFuZGxlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlclJlZ2lzdGVyKGVtYWlsLGZpcnN0TmFtZSxsYXN0TmFtZSxwYXNzd29yZCxwaG9uZSkge1xuICBcbiAgY29uc3QgcXVlcnkgPWBtdXRhdGlvbntcbiAgICBjdXN0b21lckNyZWF0ZShpbnB1dDoge1xuICAgIGFjY2VwdHNNYXJrZXRpbmc6IHRydWUsXG4gICAgZW1haWw6IFwiJHtlbWFpbH1cIixcbiAgICBmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsXG4gICAgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIixcbiAgICBwYXNzd29yZDogXCIke3Bhc3N3b3JkfVwiLFxuICAgIHBob25lOiBcIiR7cGhvbmV9XCJcbiAgIH0pIHtcbiAgICBjdXN0b21lciB7XG4gICAgICAgaWRcbiAgICBmaXJzdE5hbWVcbiAgICBsYXN0TmFtZVxuICAgIGFjY2VwdHNNYXJrZXRpbmdcbiAgICBlbWFpbFxuICAgIHBob25lXG4gICAgfVxuICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgfVxuICAgfVxuICAgYFxuICAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJyZXNnaXN0ZXJcIixyZXNwb25zZS5kYXRhKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VyTG9naW4oZW1haWwscGFzc3dvcmQpIHtcbiAgXG4gIGNvbnN0IHF1ZXJ5ID1gbXV0YXRpb24ge1xuICAgIGN1c3RvbWVyQWNjZXNzVG9rZW5DcmVhdGUoaW5wdXQ6IHtcbiAgICBlbWFpbDogXCIke2VtYWlsfVwiLFxuICAgIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCJcbiAgIH0pIHtcbiAgICBjdXN0b21lckFjY2Vzc1Rva2VuIHtcbiAgICAgICAgYWNjZXNzVG9rZW5cbiAgICAgICAgZXhwaXJlc0F0XG4gICAgfVxuICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgfVxuICAgfSAgIFxuICAgYFxuICAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJ1c2VyTG9naW5cIixyZXNwb25zZS5kYXRhKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGVja291dChpZCwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgbXV0YXRpb24ge1xuICAgICAgY2hlY2tvdXRDcmVhdGUoaW5wdXQ6IHtcbiAgICAgICAgbGluZUl0ZW1zOiBbeyB2YXJpYW50SWQ6IFwiJHtpZH1cIiwgcXVhbnRpdHk6ICR7cXVhbnRpdHl9fV1cbiAgICAgIH0pIHtcbiAgICAgICAgY2hlY2tvdXQge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgd2ViVXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcblxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcbiAgICA/IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcbiAgICA6IFtdO1xuXG4gIHJldHVybiBjaGVja291dDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNoZWNrb3V0KGlkLCBsaW5lSXRlbXMpIHtcbiAgY29uc3QgbGluZUl0ZW1zT2JqZWN0ID0gbGluZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBge1xuICAgICAgdmFyaWFudElkOiBcIiR7aXRlbS5pZH1cIixcbiAgICAgIHF1YW50aXR5OiAgJHtpdGVtLnZhcmlhbnRRdWFudGl0eX1cbiAgICB9YDtcbiAgfSk7XG5cbiAgY29uc3QgcXVlcnkgPSBgXG4gIG11dGF0aW9uIHtcbiAgICBjaGVja291dExpbmVJdGVtc1JlcGxhY2UobGluZUl0ZW1zOiBbJHtsaW5lSXRlbXNPYmplY3R9XSwgY2hlY2tvdXRJZDogXCIke2lkfVwiKSB7XG4gICAgICBjaGVja291dCB7XG4gICAgICAgIGlkXG4gICAgICAgIHdlYlVybFxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDI1KSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJ1cGRhdGUgY2hlY2tvdXRcIixyZXNwb25zZSlcblxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlLmNoZWNrb3V0XG4gICAgPyByZXNwb25zZS5kYXRhLmNoZWNrb3V0TGluZUl0ZW1zUmVwbGFjZS5jaGVja291dFxuICAgIDogW107XG5cbiAgcmV0dXJuIGNoZWNrb3V0O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRGV0YWlscyh0b2tlbil7XG4gIGNvbnNvbGUubG9nKHRva2VuLCBcInRva2VuIGhhaSBiaGFpXCIsIHR5cGVvZih0b2tlbikpXG4gIGNvbnN0IHF1ZXJ5ID0gYHtcbiAgICBjdXN0b21lcihjdXN0b21lckFjY2Vzc1Rva2VuOiBcIiR7dG9rZW59XCIpIHtcbiAgICAgIGlkXG4gICAgICBmaXJzdE5hbWVcbiAgICAgIGxhc3ROYW1lXG4gICAgICBhY2NlcHRzTWFya2V0aW5nXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICAgIG9yZGVycyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG9yZGVyTnVtYmVyXG4gICAgICAgICAgICB0b3RhbFByaWNlIHtcbiAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0VXNlckRldGFpbHNcIixyZXNwb25zZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlGaWx0ZXIoaGFuZGxlKXtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbnMoKXtcbiAgY29uc3QgcXVlcnkgPSBge1xuICAgIGNvbGxlY3Rpb25zKGZpcnN0OiAxMCkge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59YFxuY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5cbmNvbnNvbGUubG9nKFwiZ2V0Q29sbGVjdGlvbnNcIixyZXNwb25zZS5kYXRhKVxucmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5c2VhcmNoKHBhcmFtcykge1xuICBjb25zdCBxdWVyeSA9YHtcbiAgICBwcm9kdWN0cyhmaXJzdDogMTAsIHF1ZXJ5OiBcIiR7cGFyYW1zfVwiKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuY29uc29sZS5sb2coXCJzZWFyY2ggcmVzdWx0c1wiLHJlc3BvbnNlLmRhdGEpXG5yZXR1cm4gcmVzcG9uc2UuZGF0YVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uc0J5SGFuZGxlKGNvbGxlY3Rpb24pIHtcbiAgY29uc29sZS5sb2coXCJjb2xsZWN0aW9uXCIsY29sbGVjdGlvbilcbiAgY29uc3QgcXVlcnkgPWB7Y29sbGVjdGlvbnMocXVlcnk6IFwiJHtjb2xsZWN0aW9ufVwiLCBmaXJzdDogMSkge1xuICAgIGVkZ2VzIHtcbiAgICAgIG5vZGUge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgcHJvZHVjdHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICBtaW5WYXJpYW50UHJpY2Uge1xuICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcImdldENvbGxlY3Rpb25zQnlIYW5kbGVcIixyZXNwb25zZS5kYXRhKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufSJdLCJuYW1lcyI6WyJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiU0hPUElGWV9TVE9SRV9ET01BSU4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU4iLCJTaG9waWZ5RGF0YSIsInF1ZXJ5IiwiVVJMIiwib3B0aW9ucyIsImVuZHBvaW50IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsImVkZ2VzIiwiZ2V0UHJvZHVjdHNEYXRhIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIiwiZ2V0bmF2aWdhdGlvbk1lbnUiLCJtZW51IiwiaXRlbXMiLCJnZXRQcm9kdWN0QnlIYW5kbGUiLCJoYW5kbGUiLCJwcm9kdWN0QnlIYW5kbGUiLCJ1c2VyUmVnaXN0ZXIiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGFzc3dvcmQiLCJwaG9uZSIsInVzZXJMb2dpbiIsImNyZWF0ZUNoZWNrb3V0IiwiaWQiLCJxdWFudGl0eSIsImNoZWNrb3V0IiwiY2hlY2tvdXRDcmVhdGUiLCJ1cGRhdGVDaGVja291dCIsImxpbmVJdGVtcyIsImxpbmVJdGVtc09iamVjdCIsIm1hcCIsIml0ZW0iLCJ2YXJpYW50UXVhbnRpdHkiLCJjaGVja291dExpbmVJdGVtc1JlcGxhY2UiLCJnZXRVc2VyRGV0YWlscyIsInRva2VuIiwiZ2V0UHJvZHVjdHNCeUZpbHRlciIsImdldENvbGxlY3Rpb25zIiwiZ2V0UHJvZHVjdEJ5c2VhcmNoIiwicGFyYW1zIiwiZ2V0Q29sbGVjdGlvbnNCeUhhbmRsZSIsImNvbGxlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/shopify.js\n"));

/***/ })

});