"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const RunwayShowcase = () => {
  const router = useRouter();

  return (
    <article className="w-full bg-white">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Image with rounded corners - responsive */}
        <div className="w-full mb-8 mt-12 overflow-hidden rounded-lg">
          <img
            src="/stories/runway-showcase.png"
            alt="Runway Showcase"
            className="w-full h-auto rounded-lg object-cover aspect-[16/7]"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
          Runway Showcase
        </h1>

        {/* Story Content */}
        <div className="max-w-none">
          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            One of the standout moments from the Fashion Games was the Runway
            Showcase, a vibrant celebration of creativity, craftsmanship, and <br />
            confidence. Participants and MSMEs from the Fashion Future Program
            brought the stage to life with stunning, handmade designs, <br />
            beautifully modelled and full of personality.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-8">
            It was more than a showcase — it was a statement of potential, innovation, and the future of fashion.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/stories")}
          className="mt-10 flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition"
        >
          <ArrowLeft size={16} />
          Back to Stories
        </button>
      </div>
    </article>
  );
};

export default RunwayShowcase;
