// src/components/about/OurVision.tsx
"use client";

import Image from "next/image";

export default function OurVision() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-orange-600">Our Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Advance cultural excellence, nurture local talent to <br />promote Africa&apos;s
              boundless creativity, contributing <br />to sustainable development across Africa.
            </p>
          </div>
          {/* Icon */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/icons/vision.svg"
              alt="Mission Icon"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Icon */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/icons/mission.svg"
              alt="Vision Icon"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-bold text-orange-600">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be the backbone of the African creative <br />industry, dedicated to preserving
              Africa&apos;s <br />creative excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
