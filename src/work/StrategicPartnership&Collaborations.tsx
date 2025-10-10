"use client";

const StrategicPartnership = () => {
  return (
    <section id= "strategic-partnership" className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Market Access Facilitation Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/strategic-partnerships.png"
            alt="Skills development"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h2 className="text-2xl md:text-2xl text-white mb-4">
              Strategic Partnerships & Collaboration
            </h2>
            <p className="text-sm md:text-sm text-white leading-relaxed">
              We team up with governments, businesses, and communities to open doors, shape policy, and power the creative sector, turning ideas into jobs, innovation, and inclusive growth.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnership;