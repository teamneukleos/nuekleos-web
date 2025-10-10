"use client";
import { useState, useEffect } from "react";

const impactAreas = [
  {
    title: "Creative Industries & Enterprises",
    content:
      "The African creative economy is vibrant and full of potential. Young creators, artisans, and small businesses are shaping the future of film, music, art, fashion, gaming, and design. Ethnocentrique supports these players by enhancing productivity, efficiency, and competitiveness. We create pathways for creatives to grow enterprises that transform communities—through local workshops, regional networks, and global platforms.",
  },
  {
    title: "Community & Local Economic Growth",
    content:
      "Africa's creative clusters—from Aba to Accra, Kigali to Nairobi—are alive with talent. By spotlighting and strengthening these ecosystems, we turn creativity into an engine of local development, fueling industries that generate wealth, pride, and sustainable futures.",
  },
  {
    title: "Youth, Work & Futures",
    content:
      "We see Africa's youth as creators of tomorrow. Through apprenticeships, training, and mentorship, we open doors to dignified work and enterprise. Each skill mastered and venture launched, sparks opportunities that ripple across households, neighborhoods, and nations.",
  },
  {
    title: "Access to Finance & Markets",
    content:
      "We connect artisans and creative entrepreneurs to finance, investors, and markets—both local and global. By bridging innovation with access, we unlock growth and position African creativity on the world stage.",
  },
  {
    title: "Cultural Preservation & Innovation",
    content:
      "Ethnocentrique safeguards the authenticity of Indigenous crafts—be it textiles, leatherwork, pottery, or storytelling—while infusing them with modern design thinking and innovation. By blending tradition with creativity, we ensure Africa's cultural identity is not only preserved but thrives globally.",
  },
];

export default function AreasOfImpact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index: number) => {
    if (!isMobile) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-orange-600 leading-tight mb-6">
              Areas <br /> of Impact
            </h2>
            <p className="text-gray-700 max-w-md">
              African creatives, including musicians, filmmakers, fashion designers,
              writers, and artists, are the backbone of the industry
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="relative border-b border-orange-200 min-h-[120px]"
                onMouseEnter={() => !isMobile && setActiveIndex(index)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => handleClick(index)}
              >
                {/* Title - Hidden when active */}
                <div
                  className={`py-7 px-2 transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-black">
                    {area.title}
                  </h3>
                </div>

                {/* Orange Overlay with Content */}
                <div
                  className={`absolute inset-0 bg-orange-600 transition-opacity duration-300 flex items-center ${
                    activeIndex === index
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs text-white px-6 leading-relaxed">
                    {area.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Images Section - 4 Images */}
      
    </>
  );
}