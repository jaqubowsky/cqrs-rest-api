import { Product } from "../../products/models/get-products.model";
import { UpdateProduct } from "../../products/models/update-product.model";

export interface DatabaseService {
    getProducts(): Promise<Product[]>;
    addProduct(product: Product): Promise<string>;
    updateProduct(productId: string, data: UpdateProduct): Promise<string>;
    getProductById(productId: string): Promise<Product | undefined>;
}
