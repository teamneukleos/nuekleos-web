"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import { columns } from "./columns";
import { BlogPostTable } from "./data-table";
import NewBlogPostForm from "@/components/NewBlogPostForm";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IPagination } from "@/lib/models/models";

export default function BlogPage () {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<IPagination | null>(null);
  const pageSize = 10;

  const { data: posts, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_POSTS, currentPage],
    queryFn: async () => {
      const response = await getPosts(currentPage, pageSize);

      if (response.data) {
        setPagination(response.data.pagination);
        console.log("res:", response);
        return response.data.data;
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
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
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
        
        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, pagination.totalCount)} of {pagination.totalCount} posts
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={!pagination.hasPrev}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={currentPage === pageNum ? "bg-orange-600 hover:bg-orange-700" : ""}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.totalPages))}
                disabled={!pagination.hasNext}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

