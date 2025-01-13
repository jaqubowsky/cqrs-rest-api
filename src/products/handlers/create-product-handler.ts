import { randomUUID } from "crypto";
import { ExposedError } from "../../errors/errors";
import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { ResErr } from "../../responses";
import { CreateProductCommand } from "../commands/create-product-command";

export class CreateProductHandler {
    constructor(private productRepository: ProductsRepository) {}

    async execute(command: CreateProductCommand) {
        const { name, description, price, stock } = command;

        if (price <= 0) throw new ExposedError(ResErr.PRICE_CANNOT_BE_ZERO, { price });

        const newProduct = {
            id: randomUUID(),
            name,
            description,
            price,
            stock,
        };

        return await this.productRepository.createProduct(newProduct);
    }
}
