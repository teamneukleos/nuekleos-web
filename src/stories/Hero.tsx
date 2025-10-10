"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Desktop Hero */}
      <section className="hidden md:flex relative w-full h-[100vh] items-center justify-start">
        {/* Background Image */}
        <Image
          src="/stories-hero.png" 
          alt="Ethnocentrique stories"
          fill
          className="object-cover brightness-75"
          priority
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl px-12 pt-64 text-white">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Explore our <br /> 
            Latest stories
          </h1>
        </div>
          
        {/* Overlay gradient*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </section>

      {/* Mobile Hero */}
      <section 
        className="md:hidden relative w-full h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: 'url(/stories-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 35%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay Content */}
        <div className="relative z-10 w-full px-6 pb-32 text-white">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Explore our <br /> 
            Latest stories
          </h1>
        </div>
          
        {/* Overlay gradient*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </section>
    </>
  );
}