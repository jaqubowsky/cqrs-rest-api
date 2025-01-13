import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { SellProductCommand } from "../commands/sell.product.command";

export class SellProductHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(command: SellProductCommand): Promise<{ stock: number; productId: string }> {
        const product = await this.productsRepository.getProductById(command.productId);
        if (!product) throw new Error("Product not found");
        if (product.stock < command.quantityToSell) throw new Error("Not enough stock");

        const newStock = product.stock - command.quantityToSell;

        await this.productsRepository.updateProduct(command.productId, { stock: newStock });

        return { stock: newStock, productId: command.productId };
    }
}
