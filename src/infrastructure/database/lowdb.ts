import { Low } from "lowdb/lib";
import { JSONFilePreset } from "lowdb/node";
import { Product } from "../../products/models/product.model";

const DB_FILE_NAME = process.env.DB_FILE_NAME || "db.json";

export interface DatabaseSchema {
    products: Product[];
}

const baseData: DatabaseSchema = { products: [] };

export class LowdbService {
    private static instance: Low<DatabaseSchema>;

    private constructor() {}

    static async getInstance(): Promise<Low<DatabaseSchema>> {
        if (!this.instance) {
            this.instance = await JSONFilePreset<DatabaseSchema>(
                DB_FILE_NAME,
                baseData,
            );
        }

        return this.instance;
    }
}
