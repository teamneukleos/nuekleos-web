import { auth } from "@/auth";
import Link from "next/link";
import { FileText, Users, BarChart3 } from "lucide-react";

export default async function AppPage () {
  const session = await auth();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session?.user?.name}!</h1>
        <p className="text-gray-600 mt-1">Manage your content and settings from here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/blog" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
            </div>
            <p className="text-gray-600">Create and manage your blog content</p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-300 opacity-60">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-500">Users</h2>
          </div>
          <p className="text-gray-400">Coming soon...</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-300 opacity-60">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-8 w-8 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-500">Analytics</h2>
          </div>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Start</h3>
        <ul className="text-blue-800 space-y-2">
          <li>• Click on &quot;Blog Posts&quot; to create your first blog post</li>
          <li>• Use the rich text editor to format your content</li>
          <li>• Publish posts immediately or save as drafts</li>
        </ul>
      </div>
    </div>
  );
}
