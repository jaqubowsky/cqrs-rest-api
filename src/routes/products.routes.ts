import { Router } from "express";
import { createProduct, getProducts, restockProduct } from "../products/products.controller";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.post("/:id/restock", restockProduct);
router.post("/:id/sell", restockProduct);

export default router;
