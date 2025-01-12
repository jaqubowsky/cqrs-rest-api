import { Product } from "../../products/models/get-product.model";
import { DatabaseService } from "../models/database-service.model";

export class ProductsRepository {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async getProducts(): Promise<Product[]> {
        return this.dbService.getProducts();
    }
}
