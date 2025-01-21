import { OrdersRepository } from "../repositories/orders.repository";
import { ProductsRepository } from "../repositories/products.repository";
import { LowdbService } from "./lowdb.service";

const dbService = new LowdbService();
export const productsRepository = new ProductsRepository(dbService);
export const ordersRepository = new OrdersRepository(dbService);
