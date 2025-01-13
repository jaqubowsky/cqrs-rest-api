import { Request, Response } from "express";
import { ExposedError } from "../errors/errors";
import { productsRepository } from "../infrastructure/database/db";
import { ResErr } from "../responses";
import { CreateProductCommand } from "./commands/create-product-command";
import { RestockProductCommand } from "./commands/restock.product.command";
import { SellProductCommand } from "./commands/sell.product.command";
import { CreateProductHandler } from "./handlers/create-product-handler";
import { GetProductsHandler } from "./handlers/get-products.handler";
import { RestockProductHandler } from "./handlers/restock-product.handler";
import { SellProductHandler } from "./handlers/sell-product.handler";
import { createProductSchema } from "./schemas/create-product-schema";
import { restockProductSchema } from "./schemas/restock-product-schema";
import { sellProductSchema } from "./schemas/sell-product-schema";

export async function getProducts(req: Request, res: Response) {
    const getProductsHandler = new GetProductsHandler(productsRepository);
    const products = await getProductsHandler.execute();

    res.json({ data: { products } });
}

export async function createProduct(req: Request, res: Response) {
    const { name, description, price, stock } = req.body;

    const result = createProductSchema.safeParse(req.body);
    if (!result.success) throw new ExposedError(ResErr.INVALID_BODY, result.error.issues);

    const newProduct = new CreateProductCommand(name, description, price, stock);

    const createProductHandler = new CreateProductHandler(productsRepository);
    const productId = await createProductHandler.execute(newProduct);

    res.json({ data: { id: productId } });
}

export async function restockProduct(req: Request, res: Response) {
    const { id: productId } = req.params;
    const { restockQuantity } = req.body;

    const result = restockProductSchema.safeParse(req.body);
    if (!result.success) throw new ExposedError(ResErr.INVALID_BODY, result.error.issues);

    const data = new RestockProductCommand(productId, restockQuantity);

    const restockProductHandler = new RestockProductHandler(productsRepository);
    const { stock } = await restockProductHandler.execute(data);

    res.json({ data: { stock, id: productId } });
}

export async function sellProduct(req: Request, res: Response) {
    const { id: productId } = req.params;
    const { sellQuantity } = req.body;

    const result = sellProductSchema.safeParse(req.body);
    if (!result.success) throw new ExposedError(ResErr.INVALID_BODY, result.error.issues);

    const data = new SellProductCommand(productId, sellQuantity);

    const sellProductHandler = new SellProductHandler(productsRepository);
    const { stock } = await sellProductHandler.execute(data);

    res.json({ data: { stock, id: productId } });
}
