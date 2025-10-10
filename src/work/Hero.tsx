"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start">
      {/* Background Image */}
      <Image
        src="/work-hero.png"
        alt="Ethnocentrique About Us"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 pt-40 md:pt-64 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-orange-600">
          What we do
        </h1>

        {/* Desktop Paragraph */}
        <p className="hidden md:block mt-6 text-sm font-light leading-relaxed">
          We are connectors of systems, people and opportunities.<br />
          We build a thriving creative economy by enhancing efficiency,<br />
          productivity, and global competitiveness of local creative <br />
          ecosystems. Rooted in Africa, ready for the world.
        </p>

        {/* Mobile Paragraph */}
        <p className="block md:hidden mt-6 text-sm font-light leading-relaxed">
          We are connectors of systems, people <br />
          and opportunities. We build a thriving <br />
          creative economy by enhancing <br />
          efficiency, productivity, and global <br />
          competitiveness of local creative <br />
          ecosystems. Rooted in Africa, <br />
          ready for the world.
        </p>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
    </section>
  );
}
