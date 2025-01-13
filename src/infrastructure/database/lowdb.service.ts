import { Low } from "lowdb/lib";
import { Product } from "../../products/models/get-products.model";
import { DatabaseService } from "../models/database-service.model";
import { DatabaseSchema, LowDb } from "./lowdb";

export class LowdbService implements DatabaseService {
    private db!: Low<DatabaseSchema>;

    constructor() {
        Promise.resolve(LowDb.getInstance()).then((db) => (this.db = db));
    }

    async getProducts(): Promise<Product[]> {
        return this.db.data.products;
    }

    async addProduct(product: Product): Promise<string> {
        this.db.data.products.push(product);
        this.db.write();
        return product.id;
    }
}
