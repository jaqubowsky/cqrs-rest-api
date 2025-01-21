export class RestockProductCommand {
    constructor(
        public productId: string,
        public restockQuantity: number,
    ) {}
}
