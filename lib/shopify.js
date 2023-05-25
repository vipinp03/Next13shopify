const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-10/graphql.json`;
  console.log("URL",URL)

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
    return ("err",URL);
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