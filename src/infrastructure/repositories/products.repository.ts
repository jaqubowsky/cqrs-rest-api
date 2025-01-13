import { Product } from "../../products/models/get-products.model";
import { UpdateProduct } from "../../products/models/update-product.model";
import { DatabaseService } from "../models/database-service.model";

export class ProductsRepository {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async getProducts(): Promise<Product[]> {
        return this.dbService.getProducts();
    }

    async getProductById(productId: string): Promise<Product | undefined> {
        return this.dbService.getProductById(productId);
    }

    async updateProduct(productId: string, data: UpdateProduct): Promise<string> {
        return this.dbService.updateProduct(productId, data);
    }

    async addProduct(product: Product): Promise<string> {
        return this.dbService.addProduct(product);
    }
}
