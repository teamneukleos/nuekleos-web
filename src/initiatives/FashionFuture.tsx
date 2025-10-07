const FashionFuture = () => {
  const sections = [
    {
      title: "Fashion Future Program",
      description:
        "Building the next generation of creative entrepreneurs through skills development, market access, and enterprise support.",
      images: [
        "/initiatives/fashion-future-1.png",
        "/initiatives/fashion-future-2.png",
        "/initiatives/fashion-future-3.png",
      ],
    },
    {
      title: "African Cobblers Ventures Limited",
      description:
        "Reviving Africa's rich footwear heritage and reimagining it for today's global market.",
      images: [
        "/initiatives/cobblers-1.png",
        "/initiatives/cobblers-2.png",
        "/initiatives/cobblers-3.png",
      ],
    },
    {
      title: "Ethnocentrique Market",
      description:
        "A marketplace that connects artisans and creative producers to buyers, collaborators, and wider economic opportunities.",
      images: [
        "/initiatives/market-1.png",
        "/initiatives/market-2.png",
        "/initiatives/market-3.png",
      ],
    },
  ];

  return (
    <section className="w-full bg-white">
      {sections.map((section, index) => (
        <div key={index} className="py-16 px-6 md:px-12 lg:px-16">
          {/* Title and Description */}
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-2xl font-semibold text-orange-600 mb-4">
              {section.title}
            </h2>
            <p className="text-sm md:text-sm text-gray-800 leading-relaxed">
              {section.description}
            </p>
          </div>

          {/* Image Grid - 3 columns */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {section.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full h-64 md:h-80 overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${section.title} ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FashionFuture;