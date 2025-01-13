import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { Product } from "../models/get-products.model";

export class GetProductsHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<Product[]> {
        return this.productsRepository.getProducts();
    }
}
