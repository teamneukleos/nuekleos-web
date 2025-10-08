"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ColumnDef } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import FormatDate from "@/components/FormatDate";
import React from "react";
import { IPost } from "@/lib/models/models";
import { toast } from "@/components/ui/use-toast";
import EditBlogPostForm from "@/components/EditBlogPostForm";
import { deletePost } from "@/lib/api-calls";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/lib/rbac";

interface DeleteProps {
  post: IPost;
}

const HandleDelete = ({ post }: DeleteProps) => {
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    const { data, error, validationErrors } = await deletePost(id);

    if (data) {
      toast({
        variant: "default",
        description: "Blog post deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_POSTS] });
    }

    if (error) {
      toast({
        variant: "destructive",
        description: "Failed to delete blog post",
      });
    }

    if (validationErrors) {
      toast({
        variant: "destructive",
        description:
          "Failed to delete blog post, please check that you have the permission",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="text-sm mx-2 cursor-pointer hover:font-semibold">
        Delete Post
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <div className="w-md h-md p-4">
              Are you sure you want to delete this blog post?
              <div className="flex justify-center items-center p-3 gap-5">
                <DialogClose>
                  <Button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white p-3 rounded-sm"
                  >
                    Delete
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button className="bg-gray hover:bg-gray2 text-black p-3 rounded-sm">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const columns: ColumnDef<IPost>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="max-w-xs truncate">{row.original.title}</div>
    ),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <div className="max-w-xs truncate text-sm text-gray-600">{row.original.slug}</div>
    ),
  },
  {
    accessorKey: "published",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 text-xs rounded-full ${
          row.original.published
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {row.original.published ? "Published" : "Draft"}
      </span>
    ),
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.author?.name || "Unknown"}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => <FormatDate date={row.original.createdAt} />,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const post = row.original;

      return (
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <DotsHorizontalIcon className="h-4 w-4 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Sheet>
                  <SheetTrigger
                    asChild
                    className="text-sm mx-2 my-2 cursor-pointer hover:font-semibold"
                  >
                    <div>Edit Post</div>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-[90vw] overflow-y-scroll">
                    <SheetHeader className="flex text-start mb-5">
                      <SheetTitle className="text-2xl">Edit Blog Post</SheetTitle>
                    </SheetHeader>
                    <EditBlogPostForm
                      id={post.id}
                      title={post.title}
                      slug={post.slug}
                      content={post.content}
                      excerpt={post.excerpt}
                      coverImage={post.coverImage}
                      published={post.published}
                    />
                  </SheetContent>
                </Sheet>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <HandleDelete post={post} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

