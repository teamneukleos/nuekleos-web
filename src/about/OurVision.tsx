// src/components/about/OurVision.tsx
"use client";

import Image from "next/image";

export default function OurVision() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 items-center">
          {/* Icon (appears first on mobile) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <Image
              src="/icons/vision.svg"
              alt="Mission Icon"
              width={150}
              height={200}
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl font-bold text-orange-600 mt-6 md:mt-0">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Advance cultural excellence, nurture local talent to <br />
              promote Africa&apos;s boundless creativity, contributing <br />
              to sustainable development across Africa.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 items-center">
          {/* Icon (appears first on mobile) */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <Image
              src="/icons/mission.svg"
              alt="Vision Icon"
              width={200}
              height={200}
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-right order-2 md:order-2">
            <h2 className="text-4xl font-bold text-orange-600 mt-6 md:mt-0">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be the backbone of the African creative <br />
              industry, dedicated to preserving Africa&apos;s <br />
              creative excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
