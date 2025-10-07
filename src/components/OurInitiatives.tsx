import { ArrowUpRight } from "lucide-react";

const OurInitiatives = () => {
  const initiatives = [
    {
      title: "Fashion Future Program",
      description:
        "Equipping young fashion entrepreneurs, with everything needed to excel",
      image: "/fashion-future.png",
      link: "/initiatives",
    },
    {
      title: "African Cobblers Ventures Limited",
      description:
        "Our specialized division, dedicated to footwear manufacturing.",
      image: "/african-cobblers.png",
      link: "/initiatives",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-sm md:text-sm mb-12 uppercase tracking-wide">
        Our Initiatives
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-orange-600 overflow-hidden flex flex-col max-w-md"
          >
            {/* Image */}
            <div className="p-6 pb-0">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-54 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-white flex-1 flex flex-col">
              <h3 className="text-lg md:text-lg font-semibold mb-2 leading-tight">
                {initiative.title}
              </h3>
              <p className="text-sm md:text-base mb-4 leading-relaxed opacity-95">
                {initiative.description}
              </p>

              <a
                href={initiative.link}
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group mt-auto"
              >
                Read More
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurInitiatives;