"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/lib/api-calls";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import NewUserForm from "@/components/NewUserForm";
import { DataTable } from "./data-table";
import { QUERY_KEY } from "@/lib/rbac";

export default function UsersPage() {
  const [newUserSheetOpen, setNewUserSheetOpen] = useState(false);
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_USERS],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <div className="p-6">Loading users...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading users</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">
            Manage users, roles, and permissions
          </p>
        </div>
        <Sheet open={newUserSheetOpen} onOpenChange={setNewUserSheetOpen}>
          <SheetTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              New User
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>Create New User</SheetTitle>
              <SheetDescription>
                Add a new user to the system with appropriate role and permissions.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <NewUserForm onSuccess={() => setNewUserSheetOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <DataTable columns={columns} data={users?.data || []} />
        {users?.data && users.data.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No users found. Create your first user above.
          </div>
        )}
      </div>
    </div>
  );
}
