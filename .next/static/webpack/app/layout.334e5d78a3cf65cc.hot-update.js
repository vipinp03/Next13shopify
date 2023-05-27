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

/***/ "(app-client)/./lib/shopify.js":
/*!************************!*\
  !*** ./lib/shopify.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCheckout\": function() { return /* binding */ createCheckout; },\n/* harmony export */   \"getCollections\": function() { return /* binding */ getCollections; },\n/* harmony export */   \"getCollectionsByHandle\": function() { return /* binding */ getCollectionsByHandle; },\n/* harmony export */   \"getProductByHandle\": function() { return /* binding */ getProductByHandle; },\n/* harmony export */   \"getProductBysearch\": function() { return /* binding */ getProductBysearch; },\n/* harmony export */   \"getProductsByFilter\": function() { return /* binding */ getProductsByFilter; },\n/* harmony export */   \"getProductsData\": function() { return /* binding */ getProductsData; },\n/* harmony export */   \"getProductsInCollection\": function() { return /* binding */ getProductsInCollection; },\n/* harmony export */   \"getUserDetails\": function() { return /* binding */ getUserDetails; },\n/* harmony export */   \"getnavigationMenu\": function() { return /* binding */ getnavigationMenu; },\n/* harmony export */   \"updateCheckout\": function() { return /* binding */ updateCheckout; },\n/* harmony export */   \"userLogin\": function() { return /* binding */ userLogin; },\n/* harmony export */   \"userRegister\": function() { return /* binding */ userRegister; }\n/* harmony export */ });\nconst domain = \"dbiswa.myshopify.com\";\nconst storefrontAccessToken = \"c747a21a957066bd8cf9fbcbc0cb5617\";\nasync function ShopifyData(query) {\n    const URL = \"https://\".concat(domain, \"/api/2022-10/graphql.json\");\n    const options = {\n        endpoint: URL,\n        method: \"POST\",\n        headers: {\n            \"X-Shopify-Storefront-Access-Token\": storefrontAccessToken,\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    };\n    try {\n        const data = await fetch(URL, options).then((response)=>{\n            return response.json();\n        });\n        return data;\n    } catch (error) {\n        return \"err\", error;\n    }\n}\n_c = ShopifyData;\nasync function getProductsInCollection() {\n    const query = \"\\n    {\\n      collections(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            products(first: 25) {\\n              edges {\\n                node {\\n                  id\\n                  title\\n                  handle\\n                  priceRange {\\n                    minVariantPrice {\\n                      amount\\n                    }\\n                  }\\n                  images(first: 5) {\\n                    edges {\\n                      node {\\n                        originalSrc\\n                        altText\\n                      }\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n    \";\n    const response = await ShopifyData(query);\n    return response.data.collections.edges;\n}\nasync function getProductsData() {\n    const query = \"{\\n      products(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            description\\n            priceRange {\\n              minVariantPrice {\\n                amount\\n                currencyCode\\n              }\\n            }\\n            images(first: 1) {\\n              edges {\\n                node {\\n                  originalSrc\\n                  altText\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\";\n    const response = await ShopifyData(query);\n    console.log(response.data.products.edges);\n    return response.data.products.edges;\n}\nasync function getnavigationMenu() {\n    const query = '{\\n    menu(handle: \"main-menu\") {\\n      title\\n      items {\\n        id\\n        title\\n        url \\n      }\\n    }\\n    }';\n    const response = await ShopifyData(query);\n    console.log(\"Menu\", response);\n    return response.data.menu.items;\n}\nasync function getProductByHandle(handle) {\n    console.log(\"My Handle Server\", handle);\n    const query = ' {\\n    productByHandle(handle: \"'.concat(handle, '\") {\\n      id\\n      title\\n      description\\n      variants(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            priceV2 {\\n              amount\\n              currencyCode\\n            }\\n            sku\\n            compareAtPriceV2 {\\n              amount\\n              currencyCode\\n            }\\n            availableForSale\\n            selectedOptions {\\n              name\\n              value\\n            }\\n          }\\n        }\\n      }\\n      images(first: 10) {\\n        edges {\\n          node {\\n            id\\n            originalSrc\\n            altText\\n          }\\n        }\\n      }\\n      priceRange {\\n        minVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n        maxVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n      }\\n      metafield(namespace: \"ratings\", key: \"rating\") {\\n        value\\n      }\\n    }\\n  }\\n  ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"getProductByHandle\", response.data.productByHandle);\n        return response.data.productByHandle;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userRegister(email, firstName, lastName, password, phone) {\n    const query = 'mutation{\\n    customerCreate(input: {\\n    acceptsMarketing: true,\\n    email: \"'.concat(email, '\",\\n    firstName: \"').concat(firstName, '\",\\n    lastName: \"').concat(lastName, '\",\\n    password: \"').concat(password, '\",\\n    phone: \"').concat(phone, '\"\\n   }) {\\n    customer {\\n       id\\n    firstName\\n    lastName\\n    acceptsMarketing\\n    email\\n    phone\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }\\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"resgister\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userLogin(email, password) {\n    const query = 'mutation {\\n    customerAccessTokenCreate(input: {\\n    email: \"'.concat(email, '\",\\n    password: \"').concat(password, '\"\\n   }) {\\n    customerAccessToken {\\n        accessToken\\n        expiresAt\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }   \\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"userLogin\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function createCheckout(id, quantity) {\n    const query = '\\n    mutation {\\n      checkoutCreate(input: {\\n        lineItems: [{ variantId: \"'.concat(id, '\", quantity: ').concat(quantity, \"}]\\n      }) {\\n        checkout {\\n          id\\n          webUrl\\n        }\\n      }\\n    }\");\n    const response = await ShopifyData(query);\n    const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : [];\n    return checkout;\n}\nasync function updateCheckout(id, lineItems) {\n    const lineItemsObject = lineItems.map((item)=>{\n        return '{\\n      variantId: \"'.concat(item.id, '\",\\n      quantity:  ').concat(item.variantQuantity, \"\\n    }\");\n    });\n    const query = \"\\n  mutation {\\n    checkoutLineItemsReplace(lineItems: [\".concat(lineItemsObject, '], checkoutId: \"').concat(id, '\") {\\n      checkout {\\n        id\\n        webUrl\\n        lineItems(first: 25) {\\n          edges {\\n            node {\\n              id\\n              title\\n              quantity\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"update checkout\", response);\n    const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : [];\n    return checkout;\n}\nasync function getUserDetails(token) {\n    console.log(token, \"token hai bhai\", typeof token);\n    const query = '{\\n    customer(customerAccessToken: \"'.concat(token, '\") {\\n      id\\n      firstName\\n      lastName\\n      acceptsMarketing\\n      email\\n      phone\\n      orders(first: 10) {\\n        edges {\\n          node {\\n            id\\n            orderNumber\\n            totalPrice {\\n              amount\\n              currencyCode\\n            }\\n            \\n            lineItems(first: 5) {\\n              edges {\\n                node {\\n                  title\\n                  variant {\\n                    image {\\n                      originalSrc\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"getUserDetails\", response);\n    return response.data;\n}\nasync function getProductsByFilter(handle) {}\nasync function getCollections() {\n    const query = \"{\\n    collections(first: 10) {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n        }\\n      }\\n    }\\n}\";\n    const response = await ShopifyData(query);\n    console.log(\"getCollections\", response.data);\n    return response.data;\n}\nasync function getProductBysearch(params) {\n    const query = '{\\n    products(first: 10, query: \"'.concat(params, '\") {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n          description\\n          featuredImage {\\n            originalSrc\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"search results\", response.data);\n    return response.data;\n}\nasync function getCollectionsByHandle(handel) {\n    const query = 'collections(query: \"Collection1\", first: 1) {\\n    edges {\\n      node {\\n        id\\n        title\\n        handle\\n        products(first: 10) {\\n          edges {\\n            node {\\n              id\\n              title\\n              handle\\n              description\\n              priceRange {\\n                minVariantPrice {\\n                  amount\\n                  currencyCode\\n                }\\n              }\\n              images(first: 1) {\\n                edges {\\n                  node {\\n                    originalSrc\\n                    altText\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }';\n    const response = await ShopifyData(query);\n    console.log(\"getCollectionsByHandle\", response.data);\n    return response.data;\n}\nvar _c;\n$RefreshReg$(_c, \"ShopifyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0gsSUFBSTtBQUN0QixDQUFDO0FBRU0sZUFBZXdDLG9CQUFvQnZCLE1BQU0sRUFBQyxDQUVqRCxDQUFDO0FBRU0sZUFBZXdCLGlCQUFnQjtJQUNwQyxNQUFNbkQsUUFBUztJQVdqQixNQUFNYSxXQUFXLE1BQU1kLFlBQVlDO0lBRW5Db0IsUUFBUUMsR0FBRyxDQUFDLGtCQUFpQlIsU0FBU0gsSUFBSTtJQUMxQyxPQUFPRyxTQUFTSCxJQUFJO0FBQ3BCLENBQUM7QUFHTSxlQUFlMEMsbUJBQW1CQyxNQUFNLEVBQUU7SUFDL0MsTUFBTXJELFFBQU8sc0NBQzBCLE9BQVBxRCxRQUFPO0lBY3ZDLE1BQU14QyxXQUFXLE1BQU1kLFlBQVlDO0lBQ3JDb0IsUUFBUUMsR0FBRyxDQUFDLGtCQUFpQlIsU0FBU0gsSUFBSTtJQUMxQyxPQUFPRyxTQUFTSCxJQUFJO0FBRXBCLENBQUM7QUFFTSxlQUFlNEMsdUJBQXVCQyxNQUFNLEVBQUU7SUFDbkQsTUFBTXZELFFBQVE7SUFpQ2QsTUFBTWEsV0FBVyxNQUFNZCxZQUFZQztJQUNuQ29CLFFBQVFDLEdBQUcsQ0FBQywwQkFBeUJSLFNBQVNILElBQUk7SUFDbEQsT0FBT0csU0FBU0gsSUFBSTtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9zaG9waWZ5LmpzP2VmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9tYWluID0gcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRV9ET01BSU47XG5jb25zdCBzdG9yZWZyb250QWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU47XG5cblxuYXN5bmMgZnVuY3Rpb24gU2hvcGlmeURhdGEocXVlcnkpIHtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vJHtkb21haW59L2FwaS8yMDIyLTEwL2dyYXBocWwuanNvbmA7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZW5kcG9pbnQ6IFVSTCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuXCI6IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goVVJMLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAoXCJlcnJcIiwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbigpIHtcbiBcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAge1xuICAgICAgY29sbGVjdGlvbnMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICBwcm9kdWN0cyhmaXJzdDogMjUpIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW5WYXJpYW50UHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbWFnZXMoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9ucy5lZGdlcztcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNEYXRhKCkge1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgICBwcm9kdWN0cyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgbWluVmFyaWFudFByaWNlIHtcbiAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbmNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMuZWRnZXMpXG4gIHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3RzLmVkZ2VzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRuYXZpZ2F0aW9uTWVudSgpe1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgbWVudShoYW5kbGU6IFwibWFpbi1tZW51XCIpIHtcbiAgICAgIHRpdGxlXG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIHVybCBcbiAgICAgIH1cbiAgICB9XG4gICAgfWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhcIk1lbnVcIiwgcmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubWVudS5pdGVtc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SGFuZGxlKGhhbmRsZSkge1xuICBjb25zb2xlLmxvZyhcIk15IEhhbmRsZSBTZXJ2ZXJcIiwgaGFuZGxlKVxuICBjb25zdCBxdWVyeSA9IGAge1xuICAgIHByb2R1Y3RCeUhhbmRsZShoYW5kbGU6IFwiJHtoYW5kbGV9XCIpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHZhcmlhbnRzKGZpcnN0OiAxMCkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHByaWNlVjIge1xuICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBza3VcbiAgICAgICAgICAgIGNvbXBhcmVBdFByaWNlVjIge1xuICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmFpbGFibGVGb3JTYWxlXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWFnZXMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgYW1vdW50XG4gICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFyaWFudFByaWNlIHtcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWV0YWZpZWxkKG5hbWVzcGFjZTogXCJyYXRpbmdzXCIsIGtleTogXCJyYXRpbmdcIikge1xuICAgICAgICB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJnZXRQcm9kdWN0QnlIYW5kbGVcIixyZXNwb25zZS5kYXRhLnByb2R1Y3RCeUhhbmRsZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvZHVjdEJ5SGFuZGxlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlclJlZ2lzdGVyKGVtYWlsLGZpcnN0TmFtZSxsYXN0TmFtZSxwYXNzd29yZCxwaG9uZSkge1xuICBcbiAgY29uc3QgcXVlcnkgPWBtdXRhdGlvbntcbiAgICBjdXN0b21lckNyZWF0ZShpbnB1dDoge1xuICAgIGFjY2VwdHNNYXJrZXRpbmc6IHRydWUsXG4gICAgZW1haWw6IFwiJHtlbWFpbH1cIixcbiAgICBmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsXG4gICAgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIixcbiAgICBwYXNzd29yZDogXCIke3Bhc3N3b3JkfVwiLFxuICAgIHBob25lOiBcIiR7cGhvbmV9XCJcbiAgIH0pIHtcbiAgICBjdXN0b21lciB7XG4gICAgICAgaWRcbiAgICBmaXJzdE5hbWVcbiAgICBsYXN0TmFtZVxuICAgIGFjY2VwdHNNYXJrZXRpbmdcbiAgICBlbWFpbFxuICAgIHBob25lXG4gICAgfVxuICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgfVxuICAgfVxuICAgYFxuICAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJyZXNnaXN0ZXJcIixyZXNwb25zZS5kYXRhKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VyTG9naW4oZW1haWwscGFzc3dvcmQpIHtcbiAgXG4gIGNvbnN0IHF1ZXJ5ID1gbXV0YXRpb24ge1xuICAgIGN1c3RvbWVyQWNjZXNzVG9rZW5DcmVhdGUoaW5wdXQ6IHtcbiAgICBlbWFpbDogXCIke2VtYWlsfVwiLFxuICAgIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCJcbiAgIH0pIHtcbiAgICBjdXN0b21lckFjY2Vzc1Rva2VuIHtcbiAgICAgICAgYWNjZXNzVG9rZW5cbiAgICAgICAgZXhwaXJlc0F0XG4gICAgfVxuICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgfVxuICAgfSAgIFxuICAgYFxuICAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJ1c2VyTG9naW5cIixyZXNwb25zZS5kYXRhKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGVja291dChpZCwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgbXV0YXRpb24ge1xuICAgICAgY2hlY2tvdXRDcmVhdGUoaW5wdXQ6IHtcbiAgICAgICAgbGluZUl0ZW1zOiBbeyB2YXJpYW50SWQ6IFwiJHtpZH1cIiwgcXVhbnRpdHk6ICR7cXVhbnRpdHl9fV1cbiAgICAgIH0pIHtcbiAgICAgICAgY2hlY2tvdXQge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgd2ViVXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcblxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcbiAgICA/IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcbiAgICA6IFtdO1xuXG4gIHJldHVybiBjaGVja291dDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNoZWNrb3V0KGlkLCBsaW5lSXRlbXMpIHtcbiAgY29uc3QgbGluZUl0ZW1zT2JqZWN0ID0gbGluZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBge1xuICAgICAgdmFyaWFudElkOiBcIiR7aXRlbS5pZH1cIixcbiAgICAgIHF1YW50aXR5OiAgJHtpdGVtLnZhcmlhbnRRdWFudGl0eX1cbiAgICB9YDtcbiAgfSk7XG5cbiAgY29uc3QgcXVlcnkgPSBgXG4gIG11dGF0aW9uIHtcbiAgICBjaGVja291dExpbmVJdGVtc1JlcGxhY2UobGluZUl0ZW1zOiBbJHtsaW5lSXRlbXNPYmplY3R9XSwgY2hlY2tvdXRJZDogXCIke2lkfVwiKSB7XG4gICAgICBjaGVja291dCB7XG4gICAgICAgIGlkXG4gICAgICAgIHdlYlVybFxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDI1KSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coXCJ1cGRhdGUgY2hlY2tvdXRcIixyZXNwb25zZSlcblxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlLmNoZWNrb3V0XG4gICAgPyByZXNwb25zZS5kYXRhLmNoZWNrb3V0TGluZUl0ZW1zUmVwbGFjZS5jaGVja291dFxuICAgIDogW107XG5cbiAgcmV0dXJuIGNoZWNrb3V0O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRGV0YWlscyh0b2tlbil7XG4gIGNvbnNvbGUubG9nKHRva2VuLCBcInRva2VuIGhhaSBiaGFpXCIsIHR5cGVvZih0b2tlbikpXG4gIGNvbnN0IHF1ZXJ5ID0gYHtcbiAgICBjdXN0b21lcihjdXN0b21lckFjY2Vzc1Rva2VuOiBcIiR7dG9rZW59XCIpIHtcbiAgICAgIGlkXG4gICAgICBmaXJzdE5hbWVcbiAgICAgIGxhc3ROYW1lXG4gICAgICBhY2NlcHRzTWFya2V0aW5nXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICAgIG9yZGVycyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG9yZGVyTnVtYmVyXG4gICAgICAgICAgICB0b3RhbFByaWNlIHtcbiAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0VXNlckRldGFpbHNcIixyZXNwb25zZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlGaWx0ZXIoaGFuZGxlKXtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbnMoKXtcbiAgY29uc3QgcXVlcnkgPSBge1xuICAgIGNvbGxlY3Rpb25zKGZpcnN0OiAxMCkge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59YFxuY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5cbmNvbnNvbGUubG9nKFwiZ2V0Q29sbGVjdGlvbnNcIixyZXNwb25zZS5kYXRhKVxucmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5c2VhcmNoKHBhcmFtcykge1xuICBjb25zdCBxdWVyeSA9YHtcbiAgICBwcm9kdWN0cyhmaXJzdDogMTAsIHF1ZXJ5OiBcIiR7cGFyYW1zfVwiKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuY29uc29sZS5sb2coXCJzZWFyY2ggcmVzdWx0c1wiLHJlc3BvbnNlLmRhdGEpXG5yZXR1cm4gcmVzcG9uc2UuZGF0YVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uc0J5SGFuZGxlKGhhbmRlbCkge1xuICBjb25zdCBxdWVyeSA9YGNvbGxlY3Rpb25zKHF1ZXJ5OiBcIkNvbGxlY3Rpb24xXCIsIGZpcnN0OiAxKSB7XG4gICAgZWRnZXMge1xuICAgICAgbm9kZSB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBwcm9kdWN0cyhmaXJzdDogMTApIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0Q29sbGVjdGlvbnNCeUhhbmRsZVwiLHJlc3BvbnNlLmRhdGEpXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG59Il0sIm5hbWVzIjpbImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJTSE9QSUZZX1NUT1JFX0RPTUFJTiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNIT1BJRllfU1RPUkVGUk9OVF9BQ0NFU1NUT0tFTiIsIlNob3BpZnlEYXRhIiwicXVlcnkiLCJVUkwiLCJvcHRpb25zIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJnZXRQcm9kdWN0c0luQ29sbGVjdGlvbiIsImNvbGxlY3Rpb25zIiwiZWRnZXMiLCJnZXRQcm9kdWN0c0RhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJnZXRuYXZpZ2F0aW9uTWVudSIsIm1lbnUiLCJpdGVtcyIsImdldFByb2R1Y3RCeUhhbmRsZSIsImhhbmRsZSIsInByb2R1Y3RCeUhhbmRsZSIsInVzZXJSZWdpc3RlciIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwYXNzd29yZCIsInBob25lIiwidXNlckxvZ2luIiwiY3JlYXRlQ2hlY2tvdXQiLCJpZCIsInF1YW50aXR5IiwiY2hlY2tvdXQiLCJjaGVja291dENyZWF0ZSIsInVwZGF0ZUNoZWNrb3V0IiwibGluZUl0ZW1zIiwibGluZUl0ZW1zT2JqZWN0IiwibWFwIiwiaXRlbSIsInZhcmlhbnRRdWFudGl0eSIsImNoZWNrb3V0TGluZUl0ZW1zUmVwbGFjZSIsImdldFVzZXJEZXRhaWxzIiwidG9rZW4iLCJnZXRQcm9kdWN0c0J5RmlsdGVyIiwiZ2V0Q29sbGVjdGlvbnMiLCJnZXRQcm9kdWN0QnlzZWFyY2giLCJwYXJhbXMiLCJnZXRDb2xsZWN0aW9uc0J5SGFuZGxlIiwiaGFuZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./lib/shopify.js\n"));

/***/ })

});