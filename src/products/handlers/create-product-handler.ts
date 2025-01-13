import { randomUUID } from "crypto";
import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { CreateProductCommand } from "../commands/create-product-command";

export class CreateProductHandler {
    constructor(private productRepository: ProductsRepository) {}

    async execute(command: CreateProductCommand) {
        const { name, description, price, stock } = command;

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
