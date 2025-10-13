"use client";

import { ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const blogPosts = [
    {
      title: "Runway Showcase",
      description:
        "Participants and MSMEs from the Fashion Future Program brought the stage to life with stunning, handmade designs...",
      image: "/stories/runway-showcase.png",
      link: "/stories/runway-showcase",
    },
    {
      title: "Reflect, Realign, Reimagine",
      description:
        "Co-Creating the Future of Work and Enterprise in Africa through innovative partnerships...",
      image: "/stories/reflect-realign.png",
      link: "/stories/reflect-realign",
    },
    {
      title: "Empowering Artisans",
      description:
        "Through Skills Development programs, we're building the next generation of creative entrepreneurs...",
      image: "/stories/artisan-skills.png",
      link: "/stories/artisan-skills",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const currentPost = blogPosts[currentIndex];

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
      </div>

      {/* Spacer for layout on desktop */}
      <div className="hidden md:block"></div>

      {/* Blog Card with Navigation */}
      <div className="absolute bottom-8 right-6 md:right-8 flex items-center gap-4">
        {/* Blog Card */}
        <a
          href={currentPost.link}
          className={`bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-3 flex gap-2 items-start hover:bg-white/70 transition w-[250px] md:w-[350px]`}
        >
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="object-cover rounded flex-shrink-0 w-16 h-16 md:w-20 md:h-20"
          />
          <div className="flex-1">
            <p className="text-xs text-orange-600 font-semibold mb-1">BLOG</p>
            <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1 line-clamp-2">
              {currentPost.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2">
              {currentPost.description}
            </p>
          </div>
        </a>

        {/* Navigation Controls */}
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
            {blogPosts.map((_, i) => (
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
      </div>
    </section>
  );
};

export default Hero;