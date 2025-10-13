"use client";

const StrategicPartnership = () => {
  return (
    <section
      id="strategic-partnership"
      className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Strategic Partnerships Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/strategic-partnerships.png"
            alt="Strategic Partnerships"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 md:px-16 max-w-2xl">
            {/* Desktop / Large Screen */}
            <div className="hidden md:block">
              <h2 className="text-3xl md:text-2xl font-semibold text-white mb-4">
                Strategic Partnerships & Collaboration
              </h2>
              <p className="text-xl md:text-lg text-white leading-relaxed">
                We team up with governments, businesses, and communities <br />
                to open doors, shape policy, and power the creative sector,{" "}
                <br />
                turning ideas into jobs, innovation, and inclusive growth.
              </p>
            </div>

            {/* Tablet Screen */}
            <div className="hidden sm:block md:hidden">
              <h2 className="text-2xl text-white mb-3">
                Strategic Partnerships & Collaboration
              </h2>
              <p className="text-xs text-white leading-relaxed">
                We team up with governments, businesses, and communities to open
                doors, shape policy, and power the creative sector, turning ideas
                into jobs, innovation, and inclusive growth.
              </p>
            </div>

            {/* Mobile Screen */}
            <div className="block sm:hidden">
              <h2 className="text-lg text-white mb-2">
                Strategic Partnerships & Collaboration
              </h2>
              <p className="text-[11px] text-white leading-relaxed">
                We team up with governments, businesses, and communities to open
                doors, shape policy, <br />and power the creative sector,
                <br /> turning ideas into jobs,  innovation, <br />and inclusive
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnership;
