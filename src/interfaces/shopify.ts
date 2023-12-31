export interface ShopifyProductImage {
  node: {
    url: string
  }
}

export interface ShopifyProduct {
  node: {
    id: string
    bodyHtml: string
    images: {
      edges: Array<ShopifyProductImage>
    }
  }
}
