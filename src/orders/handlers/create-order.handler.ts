import { randomUUID } from "crypto";
import { ExposedError } from "../../errors/errors";
import { OrdersRepository } from "../../infrastructure/repositories/orders.repository";
import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { ResErr } from "../../responses";
import { CreateOrderCommand } from "../commands/create-order.command";
import { ProductOrder } from "../models/product-order.model";

export class CreateOrderHandler {
    constructor(
        private orderRepository: OrdersRepository,
        private productsRepository: ProductsRepository,
    ) {}

    async execute(command: CreateOrderCommand): Promise<string> {
        const { customerId, products } = command;

        const updatedItems = await this.getUpdatedProducts(products);
        for (const updatedItem of updatedItems) {
            await this.productsRepository.updateProduct(updatedItem.productId, { stock: updatedItem.newStock });
        }

        const newOrder = {
            id: randomUUID(),
            customerId,
            products,
        };

        return await this.orderRepository.createOrder(newOrder);
    }

    private async getUpdatedProducts(products: ProductOrder[]): Promise<{ productId: string; newStock: number }[]> {
        const updatedItems = [];

        for (const item of products) {
            const product = await this.productsRepository.getProductById(item.productId);
            if (!product) throw new ExposedError(ResErr.NOT_FOUND, { productId: item.productId });

            if (product.stock < item.quantity) {
                throw new ExposedError(ResErr.INSUFFICIENT_STOCK, { productId: item.productId });
            }

            const newStock = product.stock - item.quantity;
            updatedItems.push({ productId: item.productId, newStock });
        }

        return updatedItems;
    }
}
