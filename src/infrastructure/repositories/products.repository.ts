import { Product } from "../../products/models/get-products.model";
import { DatabaseService } from "../models/database-service.model";

export class ProductsRepository {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async getProducts(): Promise<Product[]> {
        return this.dbService.getProducts();
    }

    async addProduct(product: Product): Promise<string> {
        return this.dbService.addProduct(product);
    }
}
