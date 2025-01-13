import { z } from "zod";

export const restockProductSchema = z.object({
    productId: z.string().uuid(),
    restockQuantity: z.number().int().positive(),
});
