"use client";

const BusinessDevelopment = () => {
  return (
    <section
      id="bussiness-development"
      className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Business Development Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/bussiness-development.png"
            alt="Business Development"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability (optional, remove if not needed) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 md:px-16 max-w-2xl">
            
            {/* Desktop / Large Screen */}
            <div className="hidden md:block">
              <h2 className="text-2xl md:text-xl text-black mb-4">
                Business Development
              </h2>
              <p className="text-sm md:text-xs text-black leading-relaxed">
                We help creative businesses in fashion, craft, and the arts access
                funding, sharpen their business skills, and scale sustainably,
                driving jobs, resilience, and lasting local impact.
              </p>
            </div>

            {/* Tablet Screen */}
            <div className="hidden sm:block md:hidden">
              <h2 className="text-xl text-black mb-3">
                Business Development
              </h2>
              <p className="text-xs text-black leading-relaxed">
                We help creative businesses in fashion, craft, and the arts access
                funding, sharpen their business skills, and scale sustainably,
                driving jobs, resilience, and lasting local impact.
              </p>
            </div>

            {/* Mobile Screen */}
            <div className="block sm:hidden">
              <h2 className="text-lg text-black mb-2">
                Business Development
              </h2>
              <p className="text-[11px] text-black leading-relaxed">
                We help creative businesses in fashion, 
                craft, and the arts access funding, sharpen 
                their business skills, and scale 
                sustainably, driving jobs, resilience, and lasting local impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDevelopment;
