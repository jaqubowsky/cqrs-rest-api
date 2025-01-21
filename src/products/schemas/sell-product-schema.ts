import { z } from "zod";

export const sellProductSchema = z.object({
    productId: z.string().uuid(),
    sellQuantity: z.number().int().positive(),
});
