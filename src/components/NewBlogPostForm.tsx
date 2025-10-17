"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { postSchema } from "@/lib/models/validation-schema";
import { createPost } from "@/lib/api-calls";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/lib/rbac";
import TipTapEditor from "./TipTapEditor";
import ImageUpload from "./ImageUpload";

const NewBlogPostForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  type TFormData = z.infer<typeof postSchema>;

  const form = useForm<TFormData>({ 
    resolver: zodResolver(postSchema),
    defaultValues: {
      published: false,
      content: "",
    },
  });

  const watchTitle = form.watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !form.getValues("slug")) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      form.setValue("slug", slug);
    }
  }, [watchTitle, form]);

  const onSubmit = async (input: TFormData) => {
    const { data, error, validationErrors } = await createPost(input);

    if (data) {
      toast({
        variant: "default",
        description: "Blog post created successfully!",
        title: "Success"
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_POSTS] });
      form.reset({
        published: false,
        content: "",
      });
    } else {
      console.error("Failed to Create Blog Post", error);

      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create blog post.",
      });
    }

    if (validationErrors?.length) {
      toast({
        variant: "destructive",
        title: "Error",
        description: validationErrors[0].message
      });

      return;
    }
  };

  return (
    <div className="max-w-5xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (error) => console.error(error))} className="form mt-5">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Post Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="post-slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Excerpt (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Short preview of the post" 
                      {...field} 
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cover Image (Optional)</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <TipTapEditor 
                      content={field.value} 
                      onChange={field.onChange}
                      placeholder="Start writing your blog post..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <FormLabel className="!mt-0 cursor-pointer">Publish immediately</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end my-3">
              <Button 
                type="submit"
                disabled={form.formState.isSubmitting}
                className="text-sm text-white bg-orange-600 py-2 px-6 border border-1 border-orange rounded-sm hover:bg-orange-700"
              >
                {form.formState.isSubmitting ? "Creating..." : "Create Blog Post"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewBlogPostForm;

