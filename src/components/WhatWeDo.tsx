"use client";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const WhatWeDo = () => {
  const services = [
    {
      title: "Business Development",
      description:
        "Through entrepreneurship, skill development programs and our startup accelerator projects, we provide hands-on business support that connect and support local creatives and MSMEs.",
      bg: "bg-black",
      textColor: "text-white",
      link: "/work#bussiness-development",
    },
    {
      title: "Market Access Facilitation",
      description:
        "To provide local creatives and businesses with the tools and support needed to access new markets, both locally and internationally.",
      bg: "bg-orange-600",
      textColor: "text-white",
      link: "/work#market-access",
    },
    {
      title: "Skill Development",
      description:
        "Implementing upskilling programs and standardization initiatives to enhance the capabilities of local creatives and MSMEs.",
      bg: "bg-amber-500",
      textColor: "text-white",
      link: "/work#skills-development",
    },
    {
      title: "Strategic Partnerships & Collaborations",
      description:
        "Providing strategic guidance and partnership opportunities to enhance operational efficiency for SMEs, to open new markets.",
      bg: "bg-[#8F9837]",
      textColor: "text-white",
      link: "/work#strategic-partnership",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-xl md:text-sm mb-10 uppercase tracking-wide">
        What We Do
      </h2>

      {/* Cards Container */}
      <div className="relative">
        <div className="overflow-x-auto pb-6 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16 scrollbar-hide relative">
          <div className="flex gap-6 min-w-max">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bg} ${service.textColor} p-8 flex flex-col justify-end min-h-[400px] w-[350px] md:w-[300px] lg:w-[350px]`}
              >
                <div className="mb-10">
                  <h3 className="text-xl md:text-xl font-semibold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
                {/* Smooth link */}
                <Link
                  href={service.link}
                  scroll={true}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
                >
                  Read More
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </div>
          {/* Swipe (mobile) */}
          <div className="md:hidden absolute -bottom-2 right-2">
            <img
              src="/swipe-icon.png"
              alt="Swipe right"
              className="w-7 h-7 opacity-80 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;