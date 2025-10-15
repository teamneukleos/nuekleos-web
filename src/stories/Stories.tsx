"use client";

import { useQuery } from "@tanstack/react-query";
import { getPublishedPosts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import Link from "next/link";
import { useState } from "react";

const Stories = () => {
  const [showAll, setShowAll] = useState(false);
  
  const { data: posts, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_PUBLISHED_POSTS],
    queryFn: async () => {
      const response = await getPublishedPosts();

      if (response.data) {
        // Only return published posts
        return response.data;
      }

      throw new Error("Failed to fetch posts");
    },
  });

  if (isLoading) {
    return (
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-gray-600">Loading stories...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-gray-600">No stories available yet.</div>
          </div>
        </div>
      </section>
    );
  }

  // Get featured story (first published post)
  const [featuredStory, ...remainingPosts] = posts;
  // Get other stories (remaining posts)
  const otherStories = showAll ? remainingPosts : remainingPosts.slice(0, 3);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Featured Story */}
        <Link href={`/stories/${featuredStory.slug}`}>
          <div className="flex flex-col md:flex-row mb-8 rounded-xl overflow-hidden shadow-lg bg-orange-600 md:max-h-[350px] cursor-pointer hover:shadow-2xl transition-shadow">
            {/* Left: Image */}
            <div className="w-full md:w-2/5 h-64 md:h-auto">
              <img
                src={featuredStory.coverImage || "/stories/runway-showcase.png"}
                alt={featuredStory.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {featuredStory.title}
              </h2>
              <p className="text-sm md:text-sm leading-relaxed mb-4">
                {featuredStory.excerpt || featuredStory.content.substring(0, 200).replace(/<[^>]*>/g, "") + "..."}
              </p>
              <span className="inline-block bg-white text-orange-600 px-5 py-2.5 text-sm rounded-lg hover:bg-gray-100 transition w-fit">
                Read Full Story
              </span>
            </div>
          </div>
        </Link>

        {/* Other Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherStories.map((story, index) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className={`group relative h-80 overflow-hidden shadow-lg block rounded-lg md:rounded-none ${
                index === 0
                  ? "md:rounded-l-xl"
                  : index === otherStories.length - 1
                    ? "md:rounded-r-xl"
                    : ""
              }`}
            >
              {/* Image */}
              <img
                src={story.coverImage || "/stories/artisan-skills.png"}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Hover Overlay with Title and Description */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-sm md:text-sm leading-tight mb-2 font-semibold">
                  {story.title}
                </h3>
                <p className="text-white/90 text-xs leading-relaxed">
                  {story.excerpt || story.content.substring(0, 120).replace(/<[^>]*>/g, "") + "..."}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {remainingPosts.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              {showAll ? "Show Less" : "View All Stories"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stories;
