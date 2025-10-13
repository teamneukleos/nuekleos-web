"use client";
import { useState, useEffect } from "react";

const impactAreas = [
  {
    title: "Creative Industries & Enterprises",
    content:
      "Africa’s creative economy is powered by young creators, artisans, and small businesses across films, music, art, fashion, gaming, and design. Ethnocentrique supports these players by enhancing productivity, efficiency, and competitiveness. We create pathways for creatives to thrive—through local workshops, regional networks, and global platforms—growing enterprises that transform communities.",
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
              className={`relative border-b border-orange-200 overflow-hidden transition-all duration-300 ${
                isMobile && activeIndex === index
                  ? "min-h-[180px]"
                  : "min-h-[90px] sm:min-h-[110px] md:min-h-[100px]"
              }`}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              onClick={() => handleClick(index)}
            >
              {/* Title */}
              <div
                className={`py-5 px-3 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-sm sm:text-base font-semibold text-black">
                  {area.title}
                </h3>
              </div>

              {/* Orange Overlay */}
              <div
                className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="bg-orange-600 w-[100%] sm:w-[85%] items-center md:w-[100%] h-[85%] flex justify-center shadow-md transition-all duration-300">
                  <p className="text-[10px] sm:text-[10px] md:text-[10px] text-white px-4 leading-relaxed">
                    {area.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}