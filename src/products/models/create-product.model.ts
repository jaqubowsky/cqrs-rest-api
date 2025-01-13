import { z } from "zod";
import { createProductSchema } from "../schemas/create-product-schema";

export type CreateProduct = z.infer<typeof createProductSchema>;
export type CreateProductWithId = CreateProduct & { id: string };
