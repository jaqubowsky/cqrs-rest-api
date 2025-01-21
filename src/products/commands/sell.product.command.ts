export class SellProductCommand {
    constructor(
        public productId: string,
        public sellQuantity: number,
    ) {}
}
