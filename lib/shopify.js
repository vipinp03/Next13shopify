const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;


async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-10/graphql.json`;
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    return "err", error;
  }
}

export async function getProductsInCollection() {
  const query = `
  query productPriceRanges @inContext(country: US){
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            products(first: 25) {
              edges {
                node {
                  id
                  title
                  handle
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  images(first: 5) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `;

  const response = await ShopifyData(query);

  return response.data.collections.edges;
}

export async function getProductsData(selectCountry,selectLang) {
  const query = `query productPriceRanges @inContext(country: ${selectCountry} language: ${selectLang}) {
    products(first: 250) {
      edges {
       node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
      }
    }
  }`;
  const response = await ShopifyData(query);
  console.log("product data", response.data.products.edges);
  return response.data.products.edges;
}

export async function getnavigationMenu() {
  const query = `{
    menu(handle: "main-menu") {
      title
      items {
        id
        title
        url 
      }
    }
    }`;
  const response = await ShopifyData(query);
  console.log("Menu", response);
  return response.data.menu.items;
}

export async function getProductByHandle(handle,selectCountry,selectLang) {
  const query = `query productPriceRanges @inContext(country: ${selectCountry} language: ${selectLang}){
    productByHandle(handle: "${handle}") {
      id
      title
      description
      variants(first: 10) {
        edges {
          node {
            id
            title
            priceV2 {
              amount
              currencyCode
            }
            sku
            compareAtPriceV2 {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            originalSrc
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      metafield(namespace: "ratings", key: "rating") {
        value
      }
    }
  }
  `;

  try {
    const response = await ShopifyData(query);
    console.log("getProductByHandle", response.data.productByHandle);
    return response.data.productByHandle;
  } catch (error) {
    console.log(error);
  }
}

export async function userRegister(
  email,
  firstName,
  lastName,
  password,
  phone
) {
  const query = `mutation{
    customerCreate(input: {
    acceptsMarketing: true,
    email: "${email}",
    firstName: "${firstName}",
    lastName: "${lastName}",
    password: "${password}",
    phone: "${phone}"
   }) {
    customer {
       id
    firstName
    lastName
    acceptsMarketing
    email
    phone
    }
    customerUserErrors {
      message
    }
   }
   }
   `;
  try {
    const response = await ShopifyData(query);
    console.log("resgister", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function userLogin(email, password) {
  const query = `mutation {
    customerAccessTokenCreate(input: {
    email: "${email}",
    password: "${password}"
   }) {
    customerAccessToken {
        accessToken
        expiresAt
    }
    customerUserErrors {
      message
    }
   }
   }   
   `;
  try {
    const response = await ShopifyData(query);
    console.log("userLogin", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`;
  });

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  console.log("update checkout", response);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}

export async function CheckoutStatus(checkoutId) {
  const query = `query {
    node(id: "${checkoutId}") {
      ... on Checkout {
        completedAt
      }
      
      
    }
  }`;

  const response = await ShopifyData(query);
  console.group("CheckoutStatus", response.data.node.completedAt);
  return response.data.node.completedAt;
}

export async function getUserDetails(token) {
  console.log(token, "token hai bhai", typeof token);
  const query = `{
    customer(customerAccessToken: "${token}") {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
      orders(first: 10) {
        edges {
          node {
            id
            orderNumber
            totalPrice {
              amount
              currencyCode
            }
            
            lineItems(first: 5) {
              edges {
                node {
                  title
                  variant {
                    image {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
  const response = await ShopifyData(query);
  console.log("getUserDetails", response);
  return response.data;
}

export async function getCollections() {
  const query = `{
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
}`;
  const response = await ShopifyData(query);

  console.log("getCollections", response.data);
  return response.data;
}

export async function getProductBysearch(params) {
  const query = `{
    products(first: 10, query: "${params}") {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            originalSrc
          }
        }
      }
    }
  }`;
  const response = await ShopifyData(query);
  console.log("search results", response.data);
  return response.data;
}

export const getCollectionsByHandle = async (collection,selectCountry,selectLang)=> {
  console.log("collection", collection);
  const query = `query productPriceRanges @inContext(country: ${selectCountry} language: ${selectLang}){
    collections(query: "${collection}", first: 1) {
    edges {
      node {
        id
        title
        handle
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;
  const response = await ShopifyData(query);
  console.log(
    "getCollectionsByHandle",
    response.data.collections.edges[0].node.products.edges
  );
  return response.data.collections.edges[0].node.products.edges;
}

export async function getLanguage() {
  
  const query = `query Localization @inContext(country: US, language: ES) {
    localization {
      # for the current country
      availableLanguages {
        isoCode
        endonymName
      }
  
      # and for non-current countries
      availableCountries {
        isoCode
        name
        availableLanguages {
          isoCode
          endonymName
        }
      }
    }
  }
  `;
  const response = await ShopifyData(query);
  console.log("getLanguage", response.data);
  
  return response.data.localization;
}

export async function getAllTags(params) {
  const query = `{
    products(first: 250) {
      edges {
        node {
          tags
        }
      }
    }
  }
  `;
  const response = await ShopifyData(query);
  console.log("getAllTags", response);
  return response.data;
}

export async function FilterProducts(filter, sort,selectCountry,selectLang) {
  
  const query = `query productPriceRanges @inContext( country: ${selectCountry} language: ${selectLang}){
    products(query: "${filter}", first: 250,sortKey: PRICE, reverse: ${sort}) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }`;
  const response = await ShopifyData(query);
  console.log("FilterProducts", response);
  return response.data;
}
