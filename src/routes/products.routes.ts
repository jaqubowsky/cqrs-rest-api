import { Router } from "express";
import { createProduct, getProducts, restockProduct, sellProduct } from "../products/products.controller";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id/restock", restockProduct);
router.put("/:id/sell", sellProduct);

export default router;
