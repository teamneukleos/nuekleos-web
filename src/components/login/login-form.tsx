"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/lib/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm () {
  type LoginFormInput = z.infer<typeof loginFormSchema>;

  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<LoginFormInput>({ resolver: zodResolver(loginFormSchema) });
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

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

      toast({ description: "Login successful" }); // TODO: Translate text
      
      // Redirect to callback URL or admin page
      const callbackUrl = searchParams.get('callbackUrl') || '/admin';
      router.push(callbackUrl);
    } catch (_error) {
      console.error("error caught");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="/logo-black.svg"
              alt="Ethnocentrique"
              className="h-6 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
          {/* <p className="text-gray-600">Sign in to your account</p> */}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Email or Username" 
                      {...field} 
                      className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
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
                    <div className="relative">
                      <Input 
                        placeholder="Password" 
                        type={showPassword ? "text" : "password"} 
                        {...field} 
                        className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs font-normal" />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>

        {/* Footer */}
        {/* <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
              Contact Support
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
