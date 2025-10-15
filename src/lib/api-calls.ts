import { z } from "zod";
import { IApiError, IApiResponse, IProduct, IValidationError, IPost, IUser, IUserWithCount, IPagination, IPostWithPagination } from "./models/models";
import { productSchema, updateProductSchema, postSchema, updatePostSchema, userSchema, updateUserSchema } from "./models/validation-schema";

async function handleValidationResponse (response: Response) {
  const issues = await response.json() as IValidationError[];
  const data = await response.json() as { error: { code: string; message: string; path: string[] }[] };
  const validationErrors = data.error;

  validationErrors.forEach(error => {
    issues.push({
      rule: error.code,
      message: error.message,
      field: error.path[0],
    });
  });

  return issues;
}

async function handleServerError (response: Response) {
  const data = await response.json() as IApiError;

  return data;
}

async function handleApiCalls<T> (response: Response): Promise<IApiResponse<T>> {
  try {
    if (response.status >= 400 && response.status <= 499) {
      return { validationErrors: await handleValidationResponse(response) };
    }

    if (response.status >= 500) {
      return { error: await handleServerError(response) };
    }

    return { data: await response.json() as T };
  } catch (error) {
    console.error("api call error", error);

    return { ...(error ? { error } : {}) } as IApiResponse<T>;
  }
}

export const getProducts = async (): Promise<IApiResponse<IProduct[]>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/products", { method: "GET" }));
};

export const createProduct = async (input: z.infer<typeof productSchema>): Promise<IApiResponse<IProduct>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/products", {
    method: "POST",
    body: JSON.stringify(input),
  }));
};

export const editProduct = async (id: string, data: z.infer<typeof updateProductSchema>): Promise<IApiResponse<IProduct>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/products/" + id, {
    method: "PATCH",
    body: JSON.stringify(data),
  }));
};

export const deleteProduct = async (id: string): Promise<IApiResponse<IProduct>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/products/" + id, {
    method: "DELETE",
    headers: { "contentType": "application/json" },
  }));
};

export const getPosts = async (page: number = 1, limit: number = 10): Promise<IApiResponse<IPostWithPagination>> => {
  return handleApiCalls(await fetch(`${process.env.NEXT_PUBLIC_BROWSER_URL}/api/posts?page=${page}&limit=${limit}`, { method: "GET" }));
};

export const getPublishedPosts = async (): Promise<IApiResponse<IPost[]>> => {
  return handleApiCalls(await fetch(`${process.env.NEXT_PUBLIC_BROWSER_URL}api/posts/published`, { method: "GET", cache: "no-store" }));
};

export const getPostBySlug = async (slug: string): Promise<IApiResponse<IPost>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/posts/slug/" + slug, { method: "GET" }));
};

export const createPost = async (input: z.infer<typeof postSchema>): Promise<IApiResponse<IPost>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/posts", {
    method: "POST",
    body: JSON.stringify(input),
  }));
};

export const editPost = async (id: string, data: z.infer<typeof updatePostSchema>): Promise<IApiResponse<IPost>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/posts/" + id, {
    method: "PATCH",
    body: JSON.stringify(data),
  }));
};

export const deletePost = async (id: string): Promise<IApiResponse<IPost>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/posts/" + id, {
    method: "DELETE",
    headers: { "contentType": "application/json" },
  }));
};

export const getUsers = async (): Promise<IApiResponse<IUserWithCount[]>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/users", { method: "GET" }));
};

export const createUser = async (input: z.infer<typeof userSchema>): Promise<IApiResponse<IUser>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/users", {
    method: "POST",
    body: JSON.stringify(input),
  }));
};

export const editUser = async (id: string, data: z.infer<typeof updateUserSchema>): Promise<IApiResponse<IUser>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/users/" + id, {
    method: "PATCH",
    body: JSON.stringify(data),
  }));
};

export const deleteUser = async (id: string): Promise<IApiResponse<IUser>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "/api/users/" + id, {
    method: "DELETE",
    headers: { "contentType": "application/json" },
  }));
};

