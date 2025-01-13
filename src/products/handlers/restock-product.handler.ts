import { ExposedError } from "../../errors/errors";
import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { ResErr } from "../../responses";
import { RestockProductCommand } from "../commands/restock.product.command";

export class RestockProductHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(command: RestockProductCommand): Promise<{ stock: number; productId: string }> {
        const product = await this.productsRepository.getProductById(command.productId);
        if (!product) throw new ExposedError(ResErr.NOT_FOUND);

        const newStock = product.stock + command.restockQuantity;

        await this.productsRepository.updateProduct(command.productId, { stock: newStock });

        return { stock: newStock, productId: command.productId };
    }
}
