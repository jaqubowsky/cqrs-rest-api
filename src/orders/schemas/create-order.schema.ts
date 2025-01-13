import { z } from "zod";

export const createOrderSchema = z.object({
    customerId: z.string().uuid(),
    products: z
        .array(
            z.object({
                productId: z.string().uuid(),
                quantity: z.number().int().positive(),
            }),
        )
        .min(1),
});
