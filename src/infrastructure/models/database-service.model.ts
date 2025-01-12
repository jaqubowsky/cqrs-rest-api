import { Product } from "../../products/models/get-product.model";

export interface DatabaseService {
    getProducts(): Promise<Product[]>;
}
