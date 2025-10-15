"use client";

import { ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPublishedPosts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const { data: posts } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_PUBLISHED_POSTS],
    queryFn: async () => {
      const response = await getPublishedPosts();

      if (response.data) {
        // Only return published posts, limit to 3 for hero carousel
        return response.data.slice(0, 3);
      }

      throw new Error("Failed to fetch posts");
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (posts && posts.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }
  };

  const handlePrev = () => {
    if (posts && posts.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    }
  };

  const currentPost = posts && posts.length > 0 ? posts[currentIndex] : null;

  return (
    <section className="relative h-screen w-full flex flex-col md:items-start md:justify-center justify-start text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* Hero Content */}
      <div className="px-6 md:px-16 max-w-2xl space-y-6 mt-40 md:mt-0 flex-grow md:flex-grow-0">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          We enable African <br />
          Markets to thrive <br />
          at home and on <br />
          the global stage
        </h1>

        <a
          href="/work"
          className="inline-flex items-center gap-3 text-white text-base font-medium hover:gap-4 transition-all group"
        >
          <span className="bg-orange-600 hover:bg-orange-700 transition p-2.5 rounded">
            <ArrowRight size={20} />
          </span>
          <span>Explore our work</span>
        </a>

        {/* Blog Card with Navigation - Mobile */}
        {currentPost && (
          <div className="flex items-center gap-4 md:hidden">
            {/* Blog Card */}
            <Link
              href={`/stories/${currentPost.slug}`}
              className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-3 flex gap-2 items-start hover:bg-white/70 transition flex-1"
            >
              <img
                src={currentPost.coverImage || "/stories/runway-showcase.png"}
                alt={currentPost.title}
                className="object-cover rounded flex-shrink-0 w-16 h-16"
              />
              <div className="flex-1">
                <p className="text-xs text-orange-600 font-semibold mb-1">BLOG</p>
                <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">
                  {currentPost.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {currentPost.excerpt || currentPost.content.substring(0, 100).replace(/<[^>]*>/g, "") + "..."}
                </p>
              </div>
            </Link>

            {/* Navigation Controls */}
            {posts && posts.length > 1 && (
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded hover:bg-white/70 transition"
                  aria-label="Previous post"
                >
                  <ArrowUp size={16} className="text-white" />
                </button>

                {/* Dots indicator */}
                <div className="flex flex-col items-center gap-1 py-2">
                  {posts.map((_, i: number) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i === currentIndex ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded hover:bg-white/70 transition"
                  aria-label="Next post"
                >
                  <ArrowDown size={16} className="text-white" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Spacer for layout on desktop */}
      <div className="hidden md:block"></div>

      {/* Blog Card with Navigation - Desktop */}
      {currentPost && (
        <div className="hidden md:flex absolute bottom-8 right-6 md:right-8 items-center gap-4">
          {/* Blog Card - Desktop */}
          <Link
            href={`/stories/${currentPost.slug}`}
            className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-3 flex gap-2 items-start hover:bg-white/70 transition w-[350px]"
          >
            <img
              src={currentPost.coverImage || "/stories/runway-showcase.png"}
              alt={currentPost.title}
              className="object-cover rounded flex-shrink-0 w-20 h-20"
            />
            <div className="flex-1">
              <p className="text-xs text-orange-600 font-semibold mb-1">BLOG</p>
              <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                {currentPost.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {currentPost.excerpt || currentPost.content.substring(0, 100).replace(/<[^>]*>/g, "") + "..."}
              </p>
            </div>
          </Link>

          {/* Navigation Controls */}
          {posts && posts.length > 1 && (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded hover:bg-white/70 transition"
                aria-label="Previous post"
              >
                <ArrowUp size={16} className="text-white" />
              </button>

              {/* Dots indicator */}
              <div className="flex flex-col items-center gap-1 py-2">
                {posts.map((_, i: number) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded hover:bg-white/70 transition"
                aria-label="Next post"
              >
                <ArrowDown size={16} className="text-white" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
