import { Request, Response } from "express";
import { productsRepository } from "../infrastructure/database/db";
import { CreateProductHandler } from "./handlers/create-product-handler";
import { GetProductsHandler } from "./handlers/get-products.handler";

export async function getProducts(req: Request, res: Response) {
    const getProductsHandler = new GetProductsHandler(productsRepository);
    const products = await getProductsHandler.handle();

    res.json({ data: products });
}

export async function createProduct(req: Request, res: Response) {
    const { name, description, price, stock } = req.body;

    const newProduct = {
        name,
        description,
        price,
        stock,
    };

    const createProductHandler = new CreateProductHandler(productsRepository);
    const productId = await createProductHandler.execute(newProduct);

    res.json({ data: { id: productId } });
}
