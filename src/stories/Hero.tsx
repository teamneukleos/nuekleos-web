"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start">
      {/* Background Image */}
      <Image
        src="/stories-hero.png" 
        alt="Ethnocentrique stories"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 pt-40 md:pt-64 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Explore our <br /> 
          Latest stories
        </h1>
      </div>

        {/* Overlay gradient*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
    </section>
  );
}
