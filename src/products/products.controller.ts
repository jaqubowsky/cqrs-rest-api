import { Request, Response } from "express";
import { productsRepository } from "../infrastructure/database/db";
import { CreateProductHandler } from "./handlers/create-product-handler";
import { GetProductsHandler } from "./handlers/get-products.handler";
import { RestockProductHandler } from "./handlers/restock-product.handler";
import { SellProductHandler } from "./handlers/sell-product.handler";

export async function getProducts(req: Request, res: Response) {
    const getProductsHandler = new GetProductsHandler(productsRepository);
    const products = await getProductsHandler.execute();

    res.json({ data: { products } });
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

export async function restockProduct(req: Request, res: Response) {
    const { id: productId } = req.params;
    const { restockQuantity } = req.body;

    const restockProductHandler = new RestockProductHandler(productsRepository);
    const { stock } = await restockProductHandler.execute({ productId, restockQuantity });

    res.json({ data: { stock, id: productId } });
}

export async function sellProduct(req: Request, res: Response) {
    const { id: productId } = req.params;
    const { quantityToSell } = req.body;

    const sellProductHandler = new SellProductHandler(productsRepository);
    const { stock } = await sellProductHandler.execute({ productId, quantityToSell });

    res.json({ data: { stock, id: productId } });
}
