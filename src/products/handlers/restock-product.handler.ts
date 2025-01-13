import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { RestockProductCommand } from "../commands/restock.product.command";

export class RestockProductHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(command: RestockProductCommand): Promise<{ stock: number; productId: string }> {
        const product = await this.productsRepository.getProductById(command.productId);
        if (!product) throw new Error("Product not found");

        const newStock = product.stock + command.restockQuantity;

        await this.productsRepository.updateProduct(command.productId, { stock: newStock });

        return { stock: newStock, productId: command.productId };
    }
}
