import { ExposedError } from "../../errors/errors";
import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { ResErr } from "../../responses";
import { SellProductCommand } from "../commands/sell.product.command";

export class SellProductHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(command: SellProductCommand): Promise<{ stock: number; productId: string }> {
        const product = await this.productsRepository.getProductById(command.productId);
        if (!product) throw new ExposedError(ResErr.NOT_FOUND);
        if (product.stock < command.sellQuantity) {
            throw new ExposedError(ResErr.INSUFFICIENT_STOCK, { productId: command.productId });
        }

        const newStock = product.stock - command.sellQuantity;

        await this.productsRepository.updateProduct(command.productId, { stock: newStock });

        return { stock: newStock, productId: command.productId };
    }
}
