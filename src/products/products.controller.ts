import { Request, Response } from "express";
import { productsRepository } from "../infrastructure/database/db";
import { GetProductsHandler } from "./handlers/get-products.handler";

export async function getProducts(req: Request, res: Response) {
    const getProductsHandler = new GetProductsHandler(productsRepository);
    const products = await getProductsHandler.handle();

    res.json(products);
}
