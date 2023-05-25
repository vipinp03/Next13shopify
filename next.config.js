/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SHOPIFY_STORE_DOMAIN: "dbiswa.myshopify.com",
        SHOPIFY_STOREFRONT_ACCESSTOKEN: "c747a21a957066bd8cf9fbcbc0cb5617"
      },
      images: {
        domains: ['cdn.shopify.com','a.storyblok.com']
      }
}

module.exports = nextConfig
