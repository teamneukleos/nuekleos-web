// src/about/Ethnic.tsx
"use client";

import Image from "next/image";

export default function Ethnic() {
  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* ✅ Desktop Layout (untouched) */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="text-left">
            <p className="text-sm leading-relaxed text-gray-800">
              At Ethnocentrique, we believe creativity is more than talent. It <br />
              is cultural identity, local resources, and economic power. <br />
              In every design, brush, craft and story lives the heartbeat of an <br />
              artisan or creative community that deserves to be seen, heard, <br />
              and valued.
            </p>

            <h3 className="mt-6 font-semibold text-sm text-gray-900">
              This is why we exist.
            </h3>
            <p className="mt-3 text-gray-800 text-sm leading-relaxed">
              To create dignified work, increasing meaningful livelihoods, <br />
              and equal opportunities for African creatives. <br />
              A future where women, youth, and communities thrive— where <br />
              local artistry earns its rightful place on the global stage.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex justify-end">
            <Image
              src="/logo-icon(1).png"
              alt="Ethnocentrique Logo Icon"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* ✅ Mobile & Tablet Layout */}
        <div className="block md:hidden">
          {/* Text Section */}
          <div className="text-left">
            {/* Mobile paragraph */}
            <p className="text-sm leading-relaxed text-gray-800 block sm:hidden">
              At Ethnocentrique, we believe creativity is more than talent — it is
              identity, local resources, and economic power. Every design, craft, and
              story carries the heartbeat of artisans who deserve to be seen, heard,
              and valued.
            </p>

            {/* Tablet paragraph */}
            <p className="text-sm leading-relaxed text-gray-800 hidden sm:block md:hidden">
              At Ethnocentrique, we believe creativity is more than talent. It is
              cultural identity, local resources, and economic power. In every design
              and story lives the heartbeat of creative communities that deserve to be
              seen and valued.
            </p>

            <h3 className="mt-6 font-semibold text-sm text-gray-900">
              This is why we exist.
            </h3>

            {/* Mobile paragraph */}
            <p className="mt-3 text-gray-800 text-sm leading-relaxed block sm:hidden">
              To create dignified work and equal opportunities for African creatives —
              a future where women, youth, and communities thrive, and local artistry
              earns its rightful place globally.
            </p>

            {/* Tablet paragraph */}
            <p className="mt-3 text-gray-800 text-sm leading-relaxed hidden sm:block md:hidden">
              To create dignified work, increase meaningful livelihoods, and provide
              equal opportunities for African creatives. A future where communities
              thrive and local artistry earns its rightful global place.
            </p>
          </div>

          {/* ✅ Logo below text on mobile */}
          <div className="mt-8 flex justify-start">
            <Image
              src="/logo-icon(1).png"
              alt="Ethnocentrique Logo Icon"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gradient Section */}
      <div className="w-full py-6 md:py-8 text-center md:text-left text-white bg-gradient-to-r from-[#EA6405] via-[#F9A107] to-[#8F9837] px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left heading */}
          <h2 className="text-3xl md:text-5xl font-bold">
            {/* Mobile */}
            <span className="block md:hidden">Ethnic By Choice</span>
            {/* Desktop */}
            <span className="hidden md:block">
              Ethnic By <br /> Choice
            </span>
          </h2>

          {/* Right text - responsive paragraphs */}
          <div>
            {/* Mobile paragraph */}
            <p className="block sm:hidden text-sm leading-relaxed">
              At Ethnocentrique, we celebrate showcasing Africa’s creative excellence. 
              Preserving the knowledge of Indigenous crafts, supporting local artisans,
              and turning Africa’s creativity into opportunities for economic growth,
              innovation, and global relevance.
            </p>

            {/* Tablet paragraph */}
            <p className="hidden sm:block md:hidden text-sm leading-relaxed">
              At Ethnocentrique, we celebrate showcasing Africa’s creative
              excellence: Preserving the knowledge of Indigenous crafts, supporting
              local artisans, and turning Africa’s creativity into opportunities
              for economic growth, innovation, and global relevance.
            </p>

            {/* Desktop paragraph */}
            <p className="hidden md:block text-sm md:text-sm leading-relaxed">
              At Ethnocentrique, we celebrate showcasing Africa’s creative
              excellence: <br /> Preserving the knowledge of Indigenous crafts, supporting
              local artisans, and <br />turning Africa’s creativity into opportunities
              for economic growth, innovation, and global relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}