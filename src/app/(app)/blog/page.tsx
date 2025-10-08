"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import { columns } from "./columns";
import { BlogPostTable } from "./data-table";
import NewBlogPostForm from "@/components/NewBlogPostForm";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function BlogPage () {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_POSTS],
    queryFn: async () => {
      const response = await getPosts();

      if (response.data) {
        return response.data;
      }

      throw new Error("Failed to fetch posts");
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-red-600">Error loading blog posts</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-1">Manage your blog content</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Blog Post
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-[90vw] overflow-y-scroll">
            <SheetHeader className="mb-5">
              <SheetTitle className="text-2xl">Create New Blog Post</SheetTitle>
            </SheetHeader>
            <NewBlogPostForm />
          </SheetContent>
        </Sheet>
      </div>

      <div className="bg-white rounded-lg shadow">
        <BlogPostTable columns={columns} data={posts || []} />
      </div>
    </div>
  );
}

