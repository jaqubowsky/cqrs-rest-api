import { Order } from "../../orders/models/order.model";
import { DatabaseService } from "../models/database-service.model";

export class OrdersRepository {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async createOrder(order: Order): Promise<string> {
        return this.dbService.createOrder(order);
    }
}
