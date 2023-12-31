import dotenv from "dotenv"

dotenv.config()

export default {
  shopifyStoreUrl: process.env.SHOPIFY_STORE_URL,
  shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiPort: process.env.PORT || 8000
}
