import { ProductsRepository } from "../../infrastructure/repositories/products.repository";
import { GetProduct } from "../models/get-products.model";

export class GetProductsHandler {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<GetProduct[]> {
        return this.productsRepository.getProducts();
    }
}
