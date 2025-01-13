import { Router } from "express";
import ordersRouter from "./orders.routes";
import productsRouter from "./products.routes";

const router = Router();

router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

export default router;
