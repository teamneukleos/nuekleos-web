"use client";

const MarketAccessFacilitation = () => {
  return (
    <section id= "market-access" className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Market Access Facilitation Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/market-access-facilitation.png"
            alt="Market Access Facilitation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h2 className="text-3xl md:text-2xl text-white mb-4">
              Market Access Facilitation
            </h2>
            <p className="text-sm md:text-sm text-white leading-relaxed">
              We connect creatives to local and global markets <br />
              through showcases, buyer linkages, and digital platforms, boosting sales, visibility, and influence, and driving inclusion, income, and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAccessFacilitation;