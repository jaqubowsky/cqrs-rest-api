import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { Product } from "../models/get-product.model";

export class GetProductsHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async handle(): Promise<Product[]> {
        return this.productsRepository.getProducts();
    }
}
