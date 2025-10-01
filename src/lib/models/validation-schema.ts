import z from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const batchSchema = z.object({
  name: z.string(),
  product_id: z.string(),
  description: z.string(),
});

export const testSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const lineSchema = z.object({
  name: z.string(),
  test_id: z.string(),
  description: z.string(),
  value: z.number().optional(),
});

export const singleTestSchema = z.object({ id: z.string() });

export const updateProductSchema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" })
    .optional(),
  description: z.string().optional(),
});

export const updateBatchSchema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" })
    .optional(),
  product_id: z.string().optional(),
  description: z.string().optional(),
});

export const updateTestSchema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" })
    .optional(),
  description: z.string().optional(),
});
