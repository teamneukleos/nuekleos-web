"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Badge } from "@/components/ui/badge";
// import { IUserWithCount } from "@/lib/models";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EditUserForm from "@/components/EditUserForm";
import { deleteUser } from "@/lib/api-calls";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { IUserWithCount } from "@/lib/models/models";
import { Badge } from "@/components/ui/badge";
import { QUERY_KEY } from "@/lib/rbac";

export const columns: ColumnDef<IUserWithCount>[] = [
  {
    id: "serialNumber",
    header: "S/N",
    cell: ({ row }) => {
      return <span className="text-sm text-gray-600">{row.index + 1}</span>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <Badge variant={role === "ADMIN" ? "default" : role === "EDITOR" ? "secondary" : "outline"}>
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "is_inbuilt",
    header: "System User",
    cell: ({ row }) => {
      const isInbuilt = row.getValue("is_inbuilt") as boolean;
      return (
        <span className={`text-sm ${isInbuilt ? 'text-gray-500' : 'text-gray-400'}`}>
          {isInbuilt ? 'Yes' : 'No'}
        </span>
      );
    },
  },
  {
    accessorKey: "_count.posts",
    header: "Posts",
    cell: ({ row }) => {
      const postCount = row.original._count.posts as number;
      return <span className="text-sm text-gray-600">{postCount}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <span className="text-sm text-gray-600">{date.toLocaleDateString()}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      
      // Don't show actions for inbuilt users
      if (user.is_inbuilt) {
        return (
          <span className="text-xs text-gray-400">System User</span>
        );
      }

      const [editSheetOpen, setEditSheetOpen] = useState(false);
      const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
      const queryClient = useQueryClient();
      const { toast } = useToast();
      const router = useRouter();
      // const { data: session } = useSession();

      const handleDelete = async () => {
        try {
          const response = await deleteUser(user.id);
          
          if (response.error) {
            toast({
              variant: "destructive",
              title: "Error",
              // description: response.error,
            });
            return;
          }

          toast({
            title: "Success",
            description: "User deleted successfully",
          });

          // Invalidate and refetch users
          await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_ALL_USERS] });
          
          // If the deleted user is the current user, redirect to login
          // if (session?.user?.id === user.id) {
          //   router.push("/login");
          // }
          
          setDeleteDialogOpen(false);
        } catch (error) {
          console.error("Error deleting user:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to delete user. Please try again.",
          });
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Sheet open={editSheetOpen} onOpenChange={setEditSheetOpen}>
                <SheetTrigger asChild>
                  <div className="w-full cursor-pointer px-2 py-1.5 text-sm hover:bg-gray-100 rounded">
                    Edit User
                  </div>
                </SheetTrigger>
                <SheetContent className="w-full">
                  <SheetHeader>
                    <SheetTitle>Edit User</SheetTitle>
                    <SheetDescription>
                      Update user information and permissions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <EditUserForm 
                      user={user} 
                      onSuccess={() => setEditSheetOpen(false)} 
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogTrigger asChild>
                  <div className="w-full cursor-pointer px-2 py-1.5 text-sm hover:bg-gray-100 rounded text-red-600">
                    Delete User
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete the user
                      "{user.name}" and remove all their data.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setDeleteDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
