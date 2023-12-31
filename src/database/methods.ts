import { db } from "@database/connection"

import { Product } from "@interfaces/database"

export const insertProduct = (product: Product) => {
  try {
    const sqlInsert = "INSERT OR IGNORE INTO products(id, body_html, image_url) VALUES(?,?,?)"
    db.run(sqlInsert, [product.id, product.body_html, product.image_url])
  } catch {}
}

export const selectProducts = (): Promise<Array<Product>> => {
  const sqlSelect = "SELECT * FROM products"

  return new Promise((resolve, reject) => {
    db.all<Product>(sqlSelect, [], (error, rows) => {
      if (error) {
        console.error(error)
        reject(error)
      } else {
        resolve(rows)
      }
    })
  })
}
