import { Request, Response } from "express"

import { selectProducts } from "@database/methods"

export const getProducts = async (req: Request, res: Response) => {
  const products = await selectProducts()

  res.json(products)
}
