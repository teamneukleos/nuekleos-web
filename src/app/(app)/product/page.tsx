"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import React, { useState } from "react";
import { ProductTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import { IProduct } from "@/lib/models/models";
import { Button } from "@/components/ui/button";
import NewProductForm from "@/components/NewProductForm";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_PRODUCTS],
    queryFn: async () => {
      const { data, error, validationErrors } = await getProducts();

      if (validationErrors?.length) {
        console.error(validationErrors[0].message);

        return;
      }

      if (error) {
        console.error(error);

        return;
      }

      if (data) {
        setProducts(data);
      }

      return data;
    },
  });

  if(isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl">Products</h2>
      <div className="flex justify-end items-end float-right mx-5 my-2 overflow-hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="ml-4 px-6 whitespace-nowrap bg-blue-600 text-white border">
            New Product
            </Button>
          </SheetTrigger>

          <SheetContent className="w-2/3 sm:w-full">
            <SheetHeader>
              <SheetTitle>Create New Product</SheetTitle>
            </SheetHeader>
            <NewProductForm />
          </SheetContent>
        </Sheet>
      </div>
      <ProductTable columns={columns} data={products} />
    </div>
  );
};

export default Products;
