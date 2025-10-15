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
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { updatePostSchema } from "@/lib/models/validation-schema";
import { editPost } from "@/lib/api-calls";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/lib/rbac";
import TipTapEditor from "./TipTapEditor";

interface EditBlogPostFormProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  published: boolean;
}

const EditBlogPostForm = ({
  id,
  title,
  slug,
  content,
  excerpt,
  coverImage,
  published,
}: EditBlogPostFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  type TFormData = z.infer<typeof updatePostSchema>;

  const form = useForm<TFormData>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: {
      title,
      slug,
      content,
      excerpt: excerpt || "",
      coverImage: coverImage || "",
      published,
    },
  });

  const onSubmit = async (input: TFormData) => {
    const { data, error, validationErrors } = await editPost(id, input);

    if (data) {
      toast({
        variant: "default",
        description: "Blog post updated successfully!",
        title: "Success"
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_POSTS] });
    } else {
      console.error("Failed to Update Blog Post", error);

      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update blog post.",
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
                  <FormLabel>Cover Image URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
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
                      content={field.value || ""} 
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
                      <FormLabel className="!mt-0 cursor-pointer">Published</FormLabel>
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
                {form.formState.isSubmitting ? "Updating..." : "Update Blog Post"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditBlogPostForm;

