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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCheckout\": function() { return /* binding */ createCheckout; },\n/* harmony export */   \"getCollections\": function() { return /* binding */ getCollections; },\n/* harmony export */   \"getCollectionsByHandle\": function() { return /* binding */ getCollectionsByHandle; },\n/* harmony export */   \"getProductByHandle\": function() { return /* binding */ getProductByHandle; },\n/* harmony export */   \"getProductBysearch\": function() { return /* binding */ getProductBysearch; },\n/* harmony export */   \"getProductsByFilter\": function() { return /* binding */ getProductsByFilter; },\n/* harmony export */   \"getProductsData\": function() { return /* binding */ getProductsData; },\n/* harmony export */   \"getProductsInCollection\": function() { return /* binding */ getProductsInCollection; },\n/* harmony export */   \"getUserDetails\": function() { return /* binding */ getUserDetails; },\n/* harmony export */   \"getnavigationMenu\": function() { return /* binding */ getnavigationMenu; },\n/* harmony export */   \"retriveChekoutCart\": function() { return /* binding */ retriveChekoutCart; },\n/* harmony export */   \"updateCheckout\": function() { return /* binding */ updateCheckout; },\n/* harmony export */   \"userLogin\": function() { return /* binding */ userLogin; },\n/* harmony export */   \"userRegister\": function() { return /* binding */ userRegister; }\n/* harmony export */ });\nconst domain = \"dbiswa.myshopify.com\";\nconst storefrontAccessToken = \"c747a21a957066bd8cf9fbcbc0cb5617\";\nasync function ShopifyData(query) {\n    const URL = \"https://\".concat(domain, \"/api/2022-10/graphql.json\");\n    const options = {\n        endpoint: URL,\n        method: \"POST\",\n        headers: {\n            \"X-Shopify-Storefront-Access-Token\": storefrontAccessToken,\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    };\n    try {\n        const data = await fetch(URL, options).then((response)=>{\n            return response.json();\n        });\n        return data;\n    } catch (error) {\n        return \"err\", error;\n    }\n}\n_c = ShopifyData;\nasync function getProductsInCollection() {\n    const query = \"\\n    {\\n      collections(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            products(first: 25) {\\n              edges {\\n                node {\\n                  id\\n                  title\\n                  handle\\n                  priceRange {\\n                    minVariantPrice {\\n                      amount\\n                    }\\n                  }\\n                  images(first: 5) {\\n                    edges {\\n                      node {\\n                        originalSrc\\n                        altText\\n                      }\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n    \";\n    const response = await ShopifyData(query);\n    return response.data.collections.edges;\n}\nasync function getProductsData() {\n    const query = \"{\\n      products(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            handle\\n            description\\n            priceRange {\\n              minVariantPrice {\\n                amount\\n                currencyCode\\n              }\\n            }\\n            images(first: 1) {\\n              edges {\\n                node {\\n                  originalSrc\\n                  altText\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\";\n    const response = await ShopifyData(query);\n    console.log(\"product data\", response.data.products.edges);\n    return response.data.products.edges;\n}\nasync function getnavigationMenu() {\n    const query = '{\\n    menu(handle: \"main-menu\") {\\n      title\\n      items {\\n        id\\n        title\\n        url \\n      }\\n    }\\n    }';\n    const response = await ShopifyData(query);\n    console.log(\"Menu\", response);\n    return response.data.menu.items;\n}\nasync function getProductByHandle(handle) {\n    console.log(\"My Handle Server\", handle);\n    const query = ' {\\n    productByHandle(handle: \"'.concat(handle, '\") {\\n      id\\n      title\\n      description\\n      variants(first: 10) {\\n        edges {\\n          node {\\n            id\\n            title\\n            priceV2 {\\n              amount\\n              currencyCode\\n            }\\n            sku\\n            compareAtPriceV2 {\\n              amount\\n              currencyCode\\n            }\\n            availableForSale\\n            selectedOptions {\\n              name\\n              value\\n            }\\n          }\\n        }\\n      }\\n      images(first: 10) {\\n        edges {\\n          node {\\n            id\\n            originalSrc\\n            altText\\n          }\\n        }\\n      }\\n      priceRange {\\n        minVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n        maxVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n      }\\n      metafield(namespace: \"ratings\", key: \"rating\") {\\n        value\\n      }\\n    }\\n  }\\n  ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"getProductByHandle\", response.data.productByHandle);\n        return response.data.productByHandle;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userRegister(email, firstName, lastName, password, phone) {\n    const query = 'mutation{\\n    customerCreate(input: {\\n    acceptsMarketing: true,\\n    email: \"'.concat(email, '\",\\n    firstName: \"').concat(firstName, '\",\\n    lastName: \"').concat(lastName, '\",\\n    password: \"').concat(password, '\",\\n    phone: \"').concat(phone, '\"\\n   }) {\\n    customer {\\n       id\\n    firstName\\n    lastName\\n    acceptsMarketing\\n    email\\n    phone\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }\\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"resgister\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function userLogin(email, password) {\n    const query = 'mutation {\\n    customerAccessTokenCreate(input: {\\n    email: \"'.concat(email, '\",\\n    password: \"').concat(password, '\"\\n   }) {\\n    customerAccessToken {\\n        accessToken\\n        expiresAt\\n    }\\n    customerUserErrors {\\n      message\\n    }\\n   }\\n   }   \\n   ');\n    try {\n        const response = await ShopifyData(query);\n        console.log(\"userLogin\", response.data);\n        return response.data;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function createCheckout(id, quantity) {\n    const query = '\\n    mutation {\\n      checkoutCreate(input: {\\n        lineItems: [{ variantId: \"'.concat(id, '\", quantity: ').concat(quantity, \"}]\\n      }) {\\n        checkout {\\n          id\\n          webUrl\\n        }\\n      }\\n    }\");\n    const response = await ShopifyData(query);\n    const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : [];\n    return checkout;\n}\nasync function updateCheckout(id, lineItems) {\n    const lineItemsObject = lineItems.map((item)=>{\n        return '{\\n      variantId: \"'.concat(item.id, '\",\\n      quantity:  ').concat(item.variantQuantity, \"\\n    }\");\n    });\n    const query = \"\\n  mutation {\\n    checkoutLineItemsReplace(lineItems: [\".concat(lineItemsObject, '], checkoutId: \"').concat(id, '\") {\\n      checkout {\\n        id\\n        webUrl\\n        lineItems(first: 25) {\\n          edges {\\n            node {\\n              id\\n              title\\n              quantity\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"update checkout\", response);\n    const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : [];\n    return checkout;\n}\nasync function retriveChekoutCart(email) {\n    const query = 'query {\\n    customer(email: \"\") {\\n      lastIncompleteCheckout {\\n        completedAt\\n        lineItems(first: 10) {\\n          edges {\\n            node {\\n              title\\n              quantity\\n              variant {\\n                title\\n                price\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }';\n    const response = await ShopifyData(query);\n    console.group(\"retriveChekoutCart\", response);\n    return response;\n}\nasync function getUserDetails(token) {\n    console.log(token, \"token hai bhai\", typeof token);\n    const query = '{\\n    customer(customerAccessToken: \"'.concat(token, '\") {\\n      id\\n      firstName\\n      lastName\\n      acceptsMarketing\\n      email\\n      phone\\n      orders(first: 10) {\\n        edges {\\n          node {\\n            id\\n            orderNumber\\n            totalPrice {\\n              amount\\n              currencyCode\\n            }\\n            \\n            lineItems(first: 5) {\\n              edges {\\n                node {\\n                  title\\n                  variant {\\n                    image {\\n                      originalSrc\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"getUserDetails\", response);\n    return response.data;\n}\nasync function getProductsByFilter(handle) {}\nasync function getCollections() {\n    const query = \"{\\n    collections(first: 10) {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n        }\\n      }\\n    }\\n}\";\n    const response = await ShopifyData(query);\n    console.log(\"getCollections\", response.data);\n    return response.data;\n}\nasync function getProductBysearch(params) {\n    const query = '{\\n    products(first: 10, query: \"'.concat(params, '\") {\\n      edges {\\n        node {\\n          id\\n          title\\n          handle\\n          description\\n          featuredImage {\\n            originalSrc\\n          }\\n        }\\n      }\\n    }\\n  }');\n    const response = await ShopifyData(query);\n    console.log(\"search results\", response.data);\n    return response.data;\n}\nasync function getCollectionsByHandle(collection) {\n    console.log(\"collection\", collection);\n    const query = '{collections(query: \"'.concat(collection, '\", first: 1) {\\n    edges {\\n      node {\\n        id\\n        title\\n        handle\\n        products(first: 10) {\\n          edges {\\n            node {\\n              id\\n              title\\n              handle\\n              description\\n              priceRange {\\n                minVariantPrice {\\n                  amount\\n                  currencyCode\\n                }\\n              }\\n              images(first: 1) {\\n                edges {\\n                  node {\\n                    originalSrc\\n                    altText\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}');\n    const response = await ShopifyData(query);\n    console.log(\"getCollectionsByHandle\", response.data.collections.edges[0].node.products.edges);\n    return response.data.collections.edges[0].node.products.edges;\n}\nvar _c;\n$RefreshReg$(_c, \"ShopifyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzP2VmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9tYWluID0gcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRV9ET01BSU47XG5jb25zdCBzdG9yZWZyb250QWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU47XG5cblxuYXN5bmMgZnVuY3Rpb24gU2hvcGlmeURhdGEocXVlcnkpIHtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vJHtkb21haW59L2FwaS8yMDIyLTEwL2dyYXBocWwuanNvbmA7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZW5kcG9pbnQ6IFVSTCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuXCI6IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goVVJMLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAoXCJlcnJcIiwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbigpIHtcbiBcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAge1xuICAgICAgY29sbGVjdGlvbnMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICBwcm9kdWN0cyhmaXJzdDogMjUpIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW5WYXJpYW50UHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbWFnZXMoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9ucy5lZGdlcztcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNEYXRhKCkge1xuICBjb25zdCBxdWVyeSA9IGB7XG4gICAgICBwcm9kdWN0cyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgbWluVmFyaWFudFByaWNlIHtcbiAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbmNvbnNvbGUubG9nKFwicHJvZHVjdCBkYXRhXCIscmVzcG9uc2UuZGF0YS5wcm9kdWN0cy5lZGdlcylcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvZHVjdHMuZWRnZXNcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldG5hdmlnYXRpb25NZW51KCl7XG4gIGNvbnN0IHF1ZXJ5ID0gYHtcbiAgICBtZW51KGhhbmRsZTogXCJtYWluLW1lbnVcIikge1xuICAgICAgdGl0bGVcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgdXJsIFxuICAgICAgfVxuICAgIH1cbiAgICB9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKFwiTWVudVwiLCByZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5tZW51Lml0ZW1zXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0QnlIYW5kbGUoaGFuZGxlKSB7XG4gIGNvbnNvbGUubG9nKFwiTXkgSGFuZGxlIFNlcnZlclwiLCBoYW5kbGUpXG4gIGNvbnN0IHF1ZXJ5ID0gYCB7XG4gICAgcHJvZHVjdEJ5SGFuZGxlKGhhbmRsZTogXCIke2hhbmRsZX1cIikge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgdmFyaWFudHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgcHJpY2VWMiB7XG4gICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNrdVxuICAgICAgICAgICAgY29tcGFyZUF0UHJpY2VWMiB7XG4gICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2YWlsYWJsZUZvclNhbGVcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltYWdlcyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgbWluVmFyaWFudFByaWNlIHtcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgfVxuICAgICAgICBtYXhWYXJpYW50UHJpY2Uge1xuICAgICAgICAgIGFtb3VudFxuICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZXRhZmllbGQobmFtZXNwYWNlOiBcInJhdGluZ3NcIiwga2V5OiBcInJhdGluZ1wiKSB7XG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGBcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcImdldFByb2R1Y3RCeUhhbmRsZVwiLHJlc3BvbnNlLmRhdGEucHJvZHVjdEJ5SGFuZGxlKVxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS5wcm9kdWN0QnlIYW5kbGVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VyUmVnaXN0ZXIoZW1haWwsZmlyc3ROYW1lLGxhc3ROYW1lLHBhc3N3b3JkLHBob25lKSB7XG4gIFxuICBjb25zdCBxdWVyeSA9YG11dGF0aW9ue1xuICAgIGN1c3RvbWVyQ3JlYXRlKGlucHV0OiB7XG4gICAgYWNjZXB0c01hcmtldGluZzogdHJ1ZSxcbiAgICBlbWFpbDogXCIke2VtYWlsfVwiLFxuICAgIGZpcnN0TmFtZTogXCIke2ZpcnN0TmFtZX1cIixcbiAgICBsYXN0TmFtZTogXCIke2xhc3ROYW1lfVwiLFxuICAgIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCIsXG4gICAgcGhvbmU6IFwiJHtwaG9uZX1cIlxuICAgfSkge1xuICAgIGN1c3RvbWVyIHtcbiAgICAgICBpZFxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgYWNjZXB0c01hcmtldGluZ1xuICAgIGVtYWlsXG4gICAgcGhvbmVcbiAgICB9XG4gICAgY3VzdG9tZXJVc2VyRXJyb3JzIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICB9XG4gICB9XG4gICBgXG4gICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcInJlc2dpc3RlclwiLHJlc3BvbnNlLmRhdGEpXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZXJMb2dpbihlbWFpbCxwYXNzd29yZCkge1xuICBcbiAgY29uc3QgcXVlcnkgPWBtdXRhdGlvbiB7XG4gICAgY3VzdG9tZXJBY2Nlc3NUb2tlbkNyZWF0ZShpbnB1dDoge1xuICAgIGVtYWlsOiBcIiR7ZW1haWx9XCIsXG4gICAgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIlxuICAgfSkge1xuICAgIGN1c3RvbWVyQWNjZXNzVG9rZW4ge1xuICAgICAgICBhY2Nlc3NUb2tlblxuICAgICAgICBleHBpcmVzQXRcbiAgICB9XG4gICAgY3VzdG9tZXJVc2VyRXJyb3JzIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICB9XG4gICB9ICAgXG4gICBgXG4gICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcInVzZXJMb2dpblwiLHJlc3BvbnNlLmRhdGEpXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrb3V0KGlkLCBxdWFudGl0eSkge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBtdXRhdGlvbiB7XG4gICAgICBjaGVja291dENyZWF0ZShpbnB1dDoge1xuICAgICAgICBsaW5lSXRlbXM6IFt7IHZhcmlhbnRJZDogXCIke2lkfVwiLCBxdWFudGl0eTogJHtxdWFudGl0eX19XVxuICAgICAgfSkge1xuICAgICAgICBjaGVja291dCB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB3ZWJVcmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuXG4gIGNvbnN0IGNoZWNrb3V0ID0gcmVzcG9uc2UuZGF0YS5jaGVja291dENyZWF0ZS5jaGVja291dFxuICAgID8gcmVzcG9uc2UuZGF0YS5jaGVja291dENyZWF0ZS5jaGVja291dFxuICAgIDogW107XG5cbiAgcmV0dXJuIGNoZWNrb3V0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hlY2tvdXQoaWQsIGxpbmVJdGVtcykge1xuICBjb25zdCBsaW5lSXRlbXNPYmplY3QgPSBsaW5lSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGB7XG4gICAgICB2YXJpYW50SWQ6IFwiJHtpdGVtLmlkfVwiLFxuICAgICAgcXVhbnRpdHk6ICAke2l0ZW0udmFyaWFudFF1YW50aXR5fVxuICAgIH1gO1xuICB9KTtcblxuICBjb25zdCBxdWVyeSA9IGBcbiAgbXV0YXRpb24ge1xuICAgIGNoZWNrb3V0TGluZUl0ZW1zUmVwbGFjZShsaW5lSXRlbXM6IFske2xpbmVJdGVtc09iamVjdH1dLCBjaGVja291dElkOiBcIiR7aWR9XCIpIHtcbiAgICAgIGNoZWNrb3V0IHtcbiAgICAgICAgaWRcbiAgICAgICAgd2ViVXJsXG4gICAgICAgIGxpbmVJdGVtcyhmaXJzdDogMjUpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcInVwZGF0ZSBjaGVja291dFwiLHJlc3BvbnNlKVxuXG4gIGNvbnN0IGNoZWNrb3V0ID0gcmVzcG9uc2UuZGF0YS5jaGVja291dExpbmVJdGVtc1JlcGxhY2UuY2hlY2tvdXRcbiAgICA/IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlLmNoZWNrb3V0XG4gICAgOiBbXTtcblxuICByZXR1cm4gY2hlY2tvdXQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXRyaXZlQ2hla291dENhcnQoZW1haWwpIHtcbiAgY29uc3QgcXVlcnkgPWBxdWVyeSB7XG4gICAgY3VzdG9tZXIoZW1haWw6IFwiXCIpIHtcbiAgICAgIGxhc3RJbmNvbXBsZXRlQ2hlY2tvdXQge1xuICAgICAgICBjb21wbGV0ZWRBdFxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDEwKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICAgIHZhcmlhbnQge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWBcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcbiAgY29uc29sZS5ncm91cChcInJldHJpdmVDaGVrb3V0Q2FydFwiLHJlc3BvbnNlKVxucmV0dXJuIHJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRGV0YWlscyh0b2tlbil7XG4gIGNvbnNvbGUubG9nKHRva2VuLCBcInRva2VuIGhhaSBiaGFpXCIsIHR5cGVvZih0b2tlbikpXG4gIGNvbnN0IHF1ZXJ5ID0gYHtcbiAgICBjdXN0b21lcihjdXN0b21lckFjY2Vzc1Rva2VuOiBcIiR7dG9rZW59XCIpIHtcbiAgICAgIGlkXG4gICAgICBmaXJzdE5hbWVcbiAgICAgIGxhc3ROYW1lXG4gICAgICBhY2NlcHRzTWFya2V0aW5nXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICAgIG9yZGVycyhmaXJzdDogMTApIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG9yZGVyTnVtYmVyXG4gICAgICAgICAgICB0b3RhbFByaWNlIHtcbiAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0VXNlckRldGFpbHNcIixyZXNwb25zZSlcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlGaWx0ZXIoaGFuZGxlKXtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbnMoKXtcbiAgY29uc3QgcXVlcnkgPSBge1xuICAgIGNvbGxlY3Rpb25zKGZpcnN0OiAxMCkge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59YFxuY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XG5cbmNvbnNvbGUubG9nKFwiZ2V0Q29sbGVjdGlvbnNcIixyZXNwb25zZS5kYXRhKVxucmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5c2VhcmNoKHBhcmFtcykge1xuICBjb25zdCBxdWVyeSA9YHtcbiAgICBwcm9kdWN0cyhmaXJzdDogMTAsIHF1ZXJ5OiBcIiR7cGFyYW1zfVwiKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBoYW5kbGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuY29uc29sZS5sb2coXCJzZWFyY2ggcmVzdWx0c1wiLHJlc3BvbnNlLmRhdGEpXG5yZXR1cm4gcmVzcG9uc2UuZGF0YVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uc0J5SGFuZGxlKGNvbGxlY3Rpb24pIHtcbiAgY29uc29sZS5sb2coXCJjb2xsZWN0aW9uXCIsY29sbGVjdGlvbilcbiAgY29uc3QgcXVlcnkgPWB7Y29sbGVjdGlvbnMocXVlcnk6IFwiJHtjb2xsZWN0aW9ufVwiLCBmaXJzdDogMSkge1xuICAgIGVkZ2VzIHtcbiAgICAgIG5vZGUge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgcHJvZHVjdHMoZmlyc3Q6IDEwKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICBtaW5WYXJpYW50UHJpY2Uge1xuICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xuICBjb25zb2xlLmxvZyhcImdldENvbGxlY3Rpb25zQnlIYW5kbGVcIixyZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzWzBdLm5vZGUucHJvZHVjdHMuZWRnZXMpXG4gIHJldHVybiByZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzWzBdLm5vZGUucHJvZHVjdHMuZWRnZXNcbn1cbiJdLCJuYW1lcyI6WyJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiU0hPUElGWV9TVE9SRV9ET01BSU4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU4iLCJTaG9waWZ5RGF0YSIsInF1ZXJ5IiwiVVJMIiwib3B0aW9ucyIsImVuZHBvaW50IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsImVkZ2VzIiwiZ2V0UHJvZHVjdHNEYXRhIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIiwiZ2V0bmF2aWdhdGlvbk1lbnUiLCJtZW51IiwiaXRlbXMiLCJnZXRQcm9kdWN0QnlIYW5kbGUiLCJoYW5kbGUiLCJwcm9kdWN0QnlIYW5kbGUiLCJ1c2VyUmVnaXN0ZXIiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGFzc3dvcmQiLCJwaG9uZSIsInVzZXJMb2dpbiIsImNyZWF0ZUNoZWNrb3V0IiwiaWQiLCJxdWFudGl0eSIsImNoZWNrb3V0IiwiY2hlY2tvdXRDcmVhdGUiLCJ1cGRhdGVDaGVja291dCIsImxpbmVJdGVtcyIsImxpbmVJdGVtc09iamVjdCIsIm1hcCIsIml0ZW0iLCJ2YXJpYW50UXVhbnRpdHkiLCJjaGVja291dExpbmVJdGVtc1JlcGxhY2UiLCJyZXRyaXZlQ2hla291dENhcnQiLCJncm91cCIsImdldFVzZXJEZXRhaWxzIiwidG9rZW4iLCJnZXRQcm9kdWN0c0J5RmlsdGVyIiwiZ2V0Q29sbGVjdGlvbnMiLCJnZXRQcm9kdWN0QnlzZWFyY2giLCJwYXJhbXMiLCJnZXRDb2xsZWN0aW9uc0J5SGFuZGxlIiwiY29sbGVjdGlvbiIsIm5vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/shopify.js\n"));

/***/ })

});