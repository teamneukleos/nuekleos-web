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
import { productSchema } from "@/lib/models/validation-schema";
import { editProduct } from "@/lib/api-calls";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/lib/rbac";

interface IEditProductFormProps {
  id: string;
  name: string;
  description?: string;
}

const EditProductForm = ({ id, name, description }: IEditProductFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

            type TFormData = z.infer<typeof productSchema>;

            const form = useForm<TFormData>({ resolver: zodResolver(productSchema), defaultValues: { name, description } });

            const onSubmit = async (input: TFormData) => {
              const { data, error, validationErrors } = await editProduct(id, input);

              if (data) {
                toast({
                  variant: "default",
                  description: "Product updated successfully!",
                  title: "Success"
                });
                queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_PRODUCTS] });
                form.reset();
              } else {
                console.error("Failed to update Product", error);

                toast({
                  variant: "destructive",
                  title: "Error",
                  description: "Failed to update product.",
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
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit, (error) => console.error(error))} className="form mt-5">
                    <div className="flex flex-col gap-4 items-cente">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem
                            className="w-full">
                            <FormLabel> Product Name </FormLabel>
                            <FormControl>
                              <Input placeholder="Please enter product name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem
                            className="w-full">
                            <FormLabel> Product Description </FormLabel>
                            <FormControl>
                              <Textarea placeholder="Please enter the perfect binding cost" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end my-3">
                        <Button type="submit"
                          disabled={form.formState.isSubmitting}
                          className="text-sm text-white bg-blue-500 py-2 px-4 create-button border border-1 border-blue rounded-sm hover:bg-blue-600 w-full">
                          Update Product
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            );
};

export default EditProductForm;

