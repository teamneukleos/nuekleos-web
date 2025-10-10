"use client";
const BusinessDevelopment = () => {
  return (
    <section id= "bussiness-development" className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Business Development Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/bussiness-development.png"
            alt="Business Development"
            className="absolute inset-0 w-full h-full object-cover"
          />


          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h2 className="text-2xl md:text-3xl text-black mb-4">
              Business Development
            </h2>
            <p className="text-sm md:text-sm text-black leading-relaxed">
              We help creative businesses in fashion, craft, and the arts access
              funding, sharpen their business skills, and scale sustainably,
              driving jobs, resilience, and lasting local impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDevelopment;