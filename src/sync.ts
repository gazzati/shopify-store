import "./aliases"
import fetch from "node-fetch"

import { insertProduct } from "@database/methods"

import { ShopifyProduct } from "@interfaces/shopify"

import config from "./config"

const baseEndpoint = `https://${config.shopifyStoreUrl}/admin/api/2023-01/graphql.json `

const query = `
  {
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          bodyHtml
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`

const fetchProducts = async (): Promise<Array<ShopifyProduct> | void> => {
  if (!config.shopifyAccessToken) return console.error("SHOPIFY_ACCESS_TOKEN is required")

  try {
    const response = await fetch(baseEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": config.shopifyAccessToken
      },
      body: JSON.stringify({ query })
    })

    const json = await response.json()
    if (!json?.data?.products?.edges) return []
    return json.data.products.edges
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}

const syncProducts = async () => {
  const products = await fetchProducts()
  if (!products) return

  for (const product of products) {
    const { id, bodyHtml, images } = product.node
    const url = images.edges[0].node.url

    insertProduct({ id, body_html: bodyHtml, image_url: url })
  }

  console.info("Success synced")
}

syncProducts()
