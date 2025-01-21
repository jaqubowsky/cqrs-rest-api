import { Request, Response } from "express";
import { ExposedError } from "../errors/errors";
import { ordersRepository, productsRepository } from "../infrastructure/database/db";
import { ResErr } from "../responses";
import { CreateOrderCommand } from "./commands/create-order.command";
import { CreateOrderHandler } from "./handlers/create-order.handler";
import { createOrderSchema } from "./schemas/create-order.schema";

export async function createOrder(req: Request, res: Response) {
    const result = createOrderSchema.safeParse(req.body);
    if (!result.success) throw new ExposedError(ResErr.INVALID_BODY, result.error.issues);

    const { customerId, products } = result.data;
    const data = new CreateOrderCommand(customerId, products);

    const createOrderHandler = new CreateOrderHandler(ordersRepository, productsRepository);
    const orderId = await createOrderHandler.execute(data);

    res.json({ data: { id: orderId } });
}
