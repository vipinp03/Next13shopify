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
    return ("err", error);
  }
}

export async function getProductsInCollection() {
  console.log("hhhh")
  const query = `
    {
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

export async function getProductsData() {
  const query = `{
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
    }`
    const response = await ShopifyData(query);
console.log(response.data.products.edges)
  return response.data.products.edges
}

export async function getnavigationMenu(){
  const query = `{
    menu(handle: "main-menu") {
      title
      items {
        id
        title
      }
    }
    }`
    const response = await ShopifyData(query);
    console.log("response", response.data.menu.items)
    return response.data.menu.items
}

export async function getProductByHandle(handle) {
  console.log("My Handle Server", handle)
  const query = ` {
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
  `

  try {
    const response = await ShopifyData(query);
  console.log(response.data.productByHandle)
  return response.data.productByHandle
  } catch (error) {
    console.log(error)
  }

}

export async function userRegister(email,firstName,lastName,password,phone) {
  
  const query =`mutation{
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
   `
   try {
    const response = await ShopifyData(query);
  console.log("resgister",response.data)
  return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function userLogin(email,password) {
  
  const query =`mutation {
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
   `
   try {
    const response = await ShopifyData(query);
  console.log("userLogin",response.data)
  return response.data
  } catch (error) {
    console.log(error)
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

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}