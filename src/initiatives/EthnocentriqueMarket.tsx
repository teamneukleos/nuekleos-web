// src/initiatives/EthnocentriqueMarket.tsx
const EthnocentriqueMarket = () => {
  return (
    <section id="ethnocentriquemarket" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-2xl font-semibold text-orange-600 mb-4">
          Ethnocentrique Market
        </h2>
        <p className="text-sm md:text-sm text-gray-800 leading-relaxed">
          A marketplace that connects artisans and creative producers to buyers, collaborators, and wider economic opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          "/initiatives/market-1.png",
          "/initiatives/market-2.png",
          "/initiatives/market-3.png",
        ].map((image, index) => (
          <div key={index} className="w-full h-64 md:h-80 overflow-hidden">
            <img
              src={image}
              alt={`Ethnocentrique Market ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EthnocentriqueMarket;
