import { Order } from "../../orders/models/order.model";
import { CreateProductWithId } from "../../products/models/create-product.model";
import { GetProduct } from "../../products/models/get-products.model";
import { UpdateProduct } from "../../products/models/update-product.model";

export interface DatabaseService {
    getProducts(): Promise<GetProduct[]>;
    createProduct(product: CreateProductWithId): Promise<string>;
    updateProduct(productId: string, data: UpdateProduct): Promise<string>;
    getProductById(productId: string): Promise<GetProduct | undefined>;
    createOrder(order: Order): Promise<string>;
}
