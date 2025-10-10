
const AfricaCobblers = () => {
  return (
    <section id="africacobblers" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-2xl font-semibold text-orange-600 mb-4">
          African Cobblers Ventures Limited
        </h2>
        <p className="text-sm md:text-sm text-gray-800 leading-relaxed">
          Reviving Africa&apos;s rich footwear heritage and reimagining it for today&apos;s global market.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          "/initiatives/cobblers-1.png",
          "/initiatives/cobblers-2.png",
          "/initiatives/cobblers-3.png",
        ].map((image, index) => (
          <div key={index} className="w-full h-64 md:h-80 overflow-hidden">
            <img
              src={image}
              alt={`African Cobblers ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AfricaCobblers;
