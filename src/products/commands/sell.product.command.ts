export class SellProductCommand {
    constructor(
        public productId: string,
        public quantityToSell: number,
    ) {}
}
