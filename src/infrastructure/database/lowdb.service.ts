import { Low } from "lowdb/lib";
import { Product } from "../../products/models/get-product.model";
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
}
