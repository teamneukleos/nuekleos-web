"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/lib/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm () {
  type LoginFormInput = z.infer<typeof loginFormSchema>;

  const router = useRouter();
  const form = useForm<LoginFormInput>({ resolver: zodResolver(loginFormSchema) });
  const { toast } = useToast();

  async function onSubmit (values: LoginFormInput) {
    console.log("hi");

    try {
      const response = await signIn(
        "credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        }
      );

      console.log({ response });

      if (!response) {
        toast({
          variant: "destructive",
          title: "Login failed!", // TODO: Translate text
          description: "Some unexpected error occured.",
        });

        return;
      }

      if (response.error) {
        toast({
          variant: "destructive",
          title: "Login failed!", // TODO: Translate text
          description: "Invalid credentials",
        });

        console.log({ re: response.error });

        return;
      }

      toast({ description: "Login successfull" }); // TODO: Translate text
      router.push("/app"); // TODO: Complex logic to handle login
    } catch (_error) {
      console.error("error caught");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="space-y-5">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email or Username" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-normal" />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </fieldset>
      </form>
    </Form>
  );
}
