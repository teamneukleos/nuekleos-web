"use client";

const SkillsDevelopment = () => {
  return (
    <section
      id="skills-development"
      className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Skills Development Card */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/areasofimpact/skills-development.png"
            alt="Skills development"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 md:px-16 max-w-2xl">
            
            {/* Desktop / Large Screen */}
            <div className="hidden md:block">
              <h2 className="text-3xl md:text-2xl text-black mb-4">
                Skills Development
              </h2>
              <p className="text-sm md:text-sm text-black leading-relaxed">
                We equip creatives with skills and mindset to <br />
                thrive, with technical, soft, and leadership skills, <br />
                blending training with mindset shifts, to build <br />
                confidence, quality, and resilience, driving <br />
                equity, youth empowerment, and lasting <br />
                community impact.
              </p>
            </div>

            {/* Tablet Screen */}
            <div className="hidden sm:block md:hidden">
              <h2 className="text-2xl text-black mb-3">Skills Development</h2>
              <p className="text-xs text-black leading-relaxed">
                We equip creatives with skills and mindset to thrive, offering
                technical, soft, and leadership training blended with mindset
                shifts — building confidence, quality, and resilience for youth
                empowerment and lasting community impact.
              </p>
            </div>

            {/* Mobile Screen */}
            <div className="block sm:hidden">
              <h2 className="text-lg text-black mb-2">Skills Development</h2>
              <p className="text-[11px] text-black leading-relaxed">
                We equip creatives with skills and mindset to thrive with
                technical, soft, and leadership skills.  Blending training
                with mindset shifts builds confidence, quality, and resilience,
                driving equity and lasting community impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDevelopment;
