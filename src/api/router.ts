import { getProducts } from "@api/controllers"
import { Router } from "express"

const router = Router()

router.get("/products", getProducts)

export default router
