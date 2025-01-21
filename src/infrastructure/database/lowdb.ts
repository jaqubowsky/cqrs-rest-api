import { Low } from "lowdb/lib";
import { JSONFilePreset } from "lowdb/node";
import { Order } from "../../orders/models/order.model";
import { CreateProductWithId } from "../../products/models/create-product.model";

const DB_FILE_NAME = process.env.DB_FILE_NAME || "db.json";

export interface DatabaseSchema {
    products: CreateProductWithId[];
    orders: Order[];
}

const baseData: DatabaseSchema = { products: [], orders: [] };

export class LowDb {
    private static instance: Low<DatabaseSchema>;

    private constructor() {}

    static async getInstance(): Promise<Low<DatabaseSchema>> {
        if (!this.instance) {
            this.instance = await JSONFilePreset<DatabaseSchema>(DB_FILE_NAME, baseData);
        }

        return this.instance;
    }
}
