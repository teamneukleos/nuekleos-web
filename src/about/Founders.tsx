"use client";
import React, { useState } from "react";
import Image from "next/image";

type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const founders: Founder[] = [
  {
    name: "IRUNNA EJIBE",
    role: "Chief Executive Officer",
    bio: "Irunna Ejibe is a visionary leader and entrepreneur with over two decades of experience spanning corporate leadership, business strategy, and the arts. As the Founder and CEO of Ethnocentrique Limited, she has played a pivotal role in reviving Nigeria's arts, fashion, and craft scene, curating exhibitions in Lagos and collaborating with renowned artists like Gerald Chukwuma.",
    image: "/founders/ceo.png",
  },
  {
    name: "JEREMIAH UBUNAMA",
    role: "Chief Operation Officer",
    bio: "Jeremiah Ubunama is a results-driven management consultant with extensive experience in business strategy, financial modeling, and economic development. With over six years of expertise, he has led high-impact projects that drive business growth, enhance operational efficiency, and deliver tangible benefits to communities across Nigeria and Africa.",
    image: "/founders/coo.png",
  },
  {
    name: "OLAJIDE JOHN",
    role: "Chief Finance Officer",
    bio: "Olajide is a Professional Accountant and class Finance Executive with over 15 years' experience as a CFO. He is the Lead Partner of Crystal Opal Consulting – an MSME consulting firm with expertise in Business Planning (Research & Feasibility Studies), Financial Modelling & Valuation, Financial Accounting & Reporting Systems, Financial Management Services, Tax Management & Advisory Services, Data Analysis & Science Services, Business Process Re-engineering, Digital Marketing, Change and Performance Management System using Balanced Score Card.",
    image: "/founders/cfo.png",
  },
  {
    name: "BUNMI JOLAYEMI",
    role: "Chief Business Officer",
    bio: "Bunmi Jolayemi is a strategically oriented executive with a legal and banking background and nearly three decades of multifaceted experience. Her expertise spans business development, sales, marketing, financial management, and people leadership. She has a proven track record in relationship management, conflict resolution, and strategic planning. Bunmi has successfully navigated diverse industries, including banking, investment management, corporate finance, and stakeholder engagement.",
    image: "/founders/cbo.png",
  },
  {
    name: "ADARA UTOH",
    role: "Head of Services",
    bio: "Adaora Utoh is results-driven, with a strong background in operations, strategy, and brand development. She has extensive experience in business operations, strategic planning, stakeholder engagement, and brand positioning, successfully driving organizational growth and efficiency across industries, including FMCG, startups, government, and non-governmental organizations.",
    image: "/founders/hos.png",
  },
];

const Founders: React.FC = () => {
  const [hoveredFounder, setHoveredFounder] = useState<Founder | null>(null);

  return (
    <section className="py-12 px-6 md:px-16 relative">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-8">
        Meet Our Founders
      </h2>

      <div className="grid md:grid-cols-2 gap-4 max-w-6xl">
        {/* Left: Main Founder */}
        <div
          className="relative overflow-hidden h-[300px] md:h-[600px] w-full cursor-pointer"
          onMouseEnter={() => setHoveredFounder(founders[0])}
          onMouseLeave={() => setHoveredFounder(null)}
          onClick={() => setHoveredFounder(founders[0])}
        >
          <Image
            src={founders[0].image}
            alt={founders[0].name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Grid of 4 Founders */}
        <div className="grid grid-cols-2 gap-3">
          {founders.slice(1).map((founder) => (
            <div
              key={founder.name}
              className="relative overflow-hidden h-[240px] md:h-[295px] w-full cursor-pointer"
              onMouseEnter={() => setHoveredFounder(founder)}
              onMouseLeave={() => setHoveredFounder(null)}
              onClick={() => setHoveredFounder(founder)}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hover Overlay Modal */}
      {hoveredFounder && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setHoveredFounder(null)}
        >
          <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]">
            <Image
              src={hoveredFounder.image}
              alt={hoveredFounder.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight">
                {hoveredFounder.name}
              </h3>
              <p className="text-white text-xs md:text-sm mt-1 font-normal">
                {hoveredFounder.role}
              </p>
              <div className="w-16 h-0.5 bg-white my-2.5"></div>
              <p className="text-white text-xs leading-relaxed font-light">
                {hoveredFounder.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Founders;