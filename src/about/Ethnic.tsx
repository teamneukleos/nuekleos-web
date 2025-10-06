// src/about/Ethnic.tsx
"use client";

import Image from "next/image";

export default function Ethnic() {
  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 py-14">
        {/* Left Text */}
        <div className="text-left">
          <p className="text-sm md:text-sm leading-relaxed text-gray-800">
            At Ethnocentrique, we believe creativity is more than talent. It <br />is
            cultural identity, local resources, and economic power. <br />
            In every design, brush, craft and story lives the heartbeat of an <br />
            artisan or creative community that deserves to be seen, heard, <br />and
            valued.
          </p>

          <h3 className="mt-6 font-semibold text-sm md:text-sm text-gray-900">
            This is why we exist.
          </h3>
          <p className="mt-3 text-gray-800 text-sm md:text-sm leading-relaxed">
            To create dignified work, increasing meaningful livelihoods, <br />and
            equal opportunities for African creatives. <br />
            A future where women, youth, and communities thrive— where <br />local
            artistry earns its rightful place on the global stage.
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/logo-icon.svg" 
            alt="Ethnocentrique Logo Icon"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Gradient Section */}
      <div className="w-full py-6 md:py-8 text-center md:text-left text-white bg-gradient-to-r from-[#EA6405] via-[#F9A107] to-[#8F9837] px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left heading */}
          <h2 className="text-4xl md:text-5xl font-bold">Ethnic By <br />Choice</h2>

          {/* Right text */}
          <p className="text-sm md:text-sm leading-relaxed">
            At Ethnocentrique, we celebrate showcasing Africa’s creative
            excellence: <br /> Preserving the knowledge of Indigenous crafts, supporting
            local artisans, and <br />turning Africa’s creativity into opportunities
            for economic growth, innovation, and global relevance.
          </p>
        </div>
      </div>
    </section>
  );
}
