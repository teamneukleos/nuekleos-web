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
import { IProduct } from "@/lib/models/models";
import { toast } from "@/components/ui/use-toast";
import EditProductForm from "@/components/EditProductForm";
import { deleteProduct } from "@/lib/api-calls";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/lib/rbac";

export type ProductProps = {
  name: string;
  description: string;
};

interface DeleteProps {
  product: IProduct;
}

const HandleDelete = ({ product }: DeleteProps) => {
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    const { data, error, validationErrors } = await deleteProduct(id);

    if (data) {
      toast({
        variant: "default",
        description: "Product deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_PRODUCTS] });
    }

    if (error) {
      toast({
        variant: "destructive",
        description: "Failed to delete product",
      });
    }

    if (validationErrors) {
      toast({
        variant: "destructive",
        description:
          "Failed to Deleted Product, please check that you have the permission",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="text-sm mx-2 cursor-pointer hover:font-semibold">
        Delete Product
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <div className="w-md  h-md p-4">
              Are you sure you want to delete this product?
              <div className="flex justify-center items-center  p-3 gap-5">
                <DialogClose>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white  p-3 rounded-sm"
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

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => <FormatDate date={row.original.created_at} />,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

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
                    <div>Edit Product</div>
                  </SheetTrigger>
                  <SheetContent className="w-1/3 overflow-y-scroll">
                    <SheetHeader className="flex text-start mb-5">
                      <SheetTitle className="text-2xl">Edit Book</SheetTitle>
                    </SheetHeader>
                    <EditProductForm
                      id={product.id}
                      name={product.name}
                      description={
                        product.description ? product.description : "no description"
                      }
                    />
                  </SheetContent>
                </Sheet>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <HandleDelete product={product} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },

];
