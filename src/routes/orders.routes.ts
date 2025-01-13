import { Router } from "express";
import { createOrder } from "../orders/orders.controller";

const router = Router();

router.post("/", createOrder);

export default router;
