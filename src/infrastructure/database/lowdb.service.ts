import { Low } from "lowdb/lib";
import { CreateProductWithId } from "../../products/models/create-product.model";
import { GetProduct } from "../../products/models/get-products.model";
import { UpdateProduct } from "../../products/models/update-product.model";
import { DatabaseService } from "../models/database-service.model";
import { DatabaseSchema, LowDb } from "./lowdb";

export class LowdbService implements DatabaseService {
    private db!: Low<DatabaseSchema>;

    constructor() {
        Promise.resolve(LowDb.getInstance()).then((db) => (this.db = db));
    }

    async getProducts(): Promise<GetProduct[]> {
        return this.db.data.products;
    }

    async createProduct(product: CreateProductWithId): Promise<string> {
        this.db.data.products.push(product);
        this.db.write();
        return product.id;
    }

    async getProductById(productId: string): Promise<GetProduct | undefined> {
        return this.db.data.products.find((product) => product.id === productId);
    }

    async updateProduct(productId: string, data: UpdateProduct): Promise<string> {
        const productIndex = this.db.data.products.findIndex((product) => product.id === productId);
        if (productIndex === -1) throw new Error("Product not found");

        const product = this.db.data.products[productIndex];

        this.db.data.products[productIndex] = { ...product, ...data };
        this.db.write();

        return productId;
    }
}
