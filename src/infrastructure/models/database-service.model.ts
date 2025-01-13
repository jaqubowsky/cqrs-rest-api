import { Product } from "../../products/models/get-products.model";

export interface DatabaseService {
    getProducts(): Promise<Product[]>;
    addProduct(product: Product): Promise<string>;
}
