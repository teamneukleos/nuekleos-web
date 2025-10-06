// src/about/Hero.tsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start">
      {/* Background Image */}
      <Image
        src="/about-hero.png" 
        alt="Ethnocentrique About Us"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 pt-40 md:pt-64 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          We are a <br /> social impact <br /> organisation
        </h1>
        <p className="mt-6 text-sm md:text-sm font-light leading-relaxed">
          We aggregate talents and opportunities that advance <br /> local production,
          create access, enable ecosystems,<br /> people and resources, advancing
          Africa’s creative <br /> productivity.
        </p>
      </div>

      {/* Overlay gradient (optional, for readability) */}
    </section>
  );
}
