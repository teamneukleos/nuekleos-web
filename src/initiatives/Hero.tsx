// src/about/Hero.tsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start">
      {/* Background Image */}
      <Image
        src="/initiative-hero.png" 
        alt="Ethnocentrique initiatives"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 pt-40 md:pt-64 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-orange-600">
          Our Initiatives
        </h1>
        <p className="mt-6 text-sm md:text-sm font-light leading-relaxed">
          Our initiatives advance local production and strengthen <br /> communities by connecting people,
          opportunities and resources.<br /> Each one is designed to unlock potential, drive economic growth, <br /> 
          and showcase Africa's creative excellence.
        </p>
      </div>

        {/* Overlay gradient*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
    </section>
  );
}
