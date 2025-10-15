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

export const postSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters long" })
    .max(200, { message: "Title must be at most 200 characters long" }),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters long" })
    .max(200, { message: "Slug must be at most 200 characters long" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters long" }),
  excerpt: z.string().max(500, { message: "Excerpt must be at most 500 characters long" }).optional(),
  coverImage: z.string().url({ message: "Cover image must be a valid URL" }).optional(),
  published: z.boolean().default(false),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
});

export const updatePostSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters long" })
    .max(200, { message: "Title must be at most 200 characters long" })
    .optional(),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters long" })
    .max(200, { message: "Slug must be at most 200 characters long" })
    .optional(),
  content: z.string().min(10, { message: "Content must be at least 10 characters long" }).optional(),
  excerpt: z.string().max(500, { message: "Excerpt must be at most 500 characters long" }).optional(),
  coverImage: z.string().url({ message: "Cover image must be a valid URL" }).optional(),
  published: z.boolean().optional(),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
});

export const userSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["ADMIN", "EDITOR", "USER"], { message: "Please select a valid role" }),
  is_inbuilt: z.boolean().default(false),
});

export const updateUserSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" })
    .optional(),
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }).optional(),
  role: z.enum(["ADMIN", "EDITOR", "USER"], { message: "Please select a valid role" }).optional(),
  is_inbuilt: z.boolean().optional(),
});
