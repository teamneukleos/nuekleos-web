// components/CoreValues.tsx
import React from "react";

const coreValues = [
  {
    title: "Authentic",
    description:
      "We are deeply committed to promoting genuine African art, crafts, and fashion.",
  },
  {
    title: "Afrocentric",
    description:
      "We prioritize African perspectives, celebrating our diverse cultures and leveraging local resources to create a vibrant ecosystem.",
  },
  {
    title: "Audacious",
    description:
      "We are bold, breaking barriers and redefining what's possible for African talent.",
  },
  {
    title: "Ambitious",
    description:
      "We reach for the stars! Driven by a relentless pursuit of excellence and a vision to make a lasting impact.",
  },
  {
    title: "Accountable",
    description:
      "We uphold transparency and responsibility, ensuring trust with our team and partners.",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="bg-orange-600 text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Our Core
          </h2>
          <h2 className="text-5xl md:text-6xl font-extrabold">Values</h2>
        </div>

        {/* Right Side */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {coreValues.map((value) => (
            <div key={value.title}>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
