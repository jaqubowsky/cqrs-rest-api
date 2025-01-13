import { CreateProductWithId } from "../../products/models/create-product.model";
import { GetProduct } from "../../products/models/get-products.model";
import { UpdateProduct } from "../../products/models/update-product.model";
import { DatabaseService } from "../models/database-service.model";

export class ProductsRepository {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async getProducts(): Promise<GetProduct[]> {
        return this.dbService.getProducts();
    }

    async getProductById(productId: string): Promise<GetProduct | undefined> {
        return this.dbService.getProductById(productId);
    }

    async updateProduct(productId: string, data: UpdateProduct): Promise<string> {
        return this.dbService.updateProduct(productId, data);
    }

    async createProduct(product: CreateProductWithId): Promise<string> {
        return this.dbService.createProduct(product);
    }
}
