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

        {/* ✅ Mobile paragraph (sm screens) */}
        <p className="mt-6 text-xs leading-relaxed font-light sm:hidden">
          We aggregate talents and opportunities that advance local production,
          create access, enable ecosystems, people and resources,
          advancing Africa’s creative productivity.
        </p>

        {/* ✅ Tablet paragraph (sm–md screens) */}
        <p className="hidden sm:block md:hidden mt-6 text-sm leading-relaxed font-light">
          We aggregate talents and opportunities that advance local production,
          create access, and enable ecosystems, people, and resources —
          advancing Africa’s creative productivity.
        </p>

        {/* ✅ Medium desktop paragraph (md–lg screens) */}
        <p className="hidden md:block lg:hidden mt-6 text-base leading-relaxed font-light">
          We aggregate talents and opportunities that advance <br />
          local production, create access, enable ecosystems, <br />
          people, and resources, advancing Africa’s creative <br />
          productivity.
        </p>

        {/* ✅ Large desktop paragraph (lg and up) */}
        <p className="hidden lg:block mt-6 text-sm leading-relaxed font-light">
          We aggregate talents and opportunities that advance <br />
          local production, create access, enable ecosystems, <br />
          people, and resources, advancing Africa’s creative <br />
          productivity.
        </p>
      </div>
    </section>
  );
}
