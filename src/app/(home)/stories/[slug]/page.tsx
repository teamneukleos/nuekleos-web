"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/api-calls";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormatDate from "@/components/FormatDate";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QUERY_KEY } from "@/lib/rbac";

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: post, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_POST_BY_SLUG, slug],
    queryFn: async () => {
      const response = await getPostBySlug(slug);

      if (response.data) {
        return response.data;
      }

      throw new Error("Failed to fetch post");
    },
  });

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg text-gray-600">Loading story...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-lg text-red-600 mb-4">Story not found</div>
          <Link href="/stories" className="text-blue-500 hover:underline">
            ← Back to Stories
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section with Cover Image */}
      {post.coverImage && (
        <div className="w-full h-[400px] relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40"></div>
          <Navbar />
        </div>
      )}
      
      {/* Regular Navbar when no cover image */}
      {!post.coverImage && <Navbar />}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/stories" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Stories
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{post.author?.name || "Unknown Author"}</span>
          </div>
          <span>•</span>
          <FormatDate date={post.publishedAt || post.createdAt} />
          {post.categories && post.categories.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-xl text-gray-700 mb-8 italic border-l-4 border-orange-500 pl-6">
            {post.excerpt}
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:text-gray-700 prose-ol:text-gray-700
            prose-blockquote:border-l-orange-500 prose-blockquote:text-gray-700
            prose-img:rounded-lg prose-img:shadow-lg
            prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Info */}
        {/* {post.author && (
          <div className="mt-12 pt-8 border-t border-gray-200 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-700">
              <span className="font-medium">{post.author.name}</span>
            </p>
          </div>
        )} */}

        {/* Back to Stories */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            View All Stories
          </Link>
        </div> */}
      </article>

      <Footer />
    </main>
  );
}

