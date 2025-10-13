const WhyWeDoIt = () => {
  const reasons = [
    "To advance creative productivity.",
    "To connect and help local creatives and MSMEs to access opportunities that enhance their global competitiveness.",
    "To build clear pathways for creative talents to contribute effectively to local economy development.",
    "To strengthen Africa's creative industries and MSMEs, ensuring their active role in driving economic growth within communities.",
  ];

  return (
    <section className="py-14 px-4 md:px-10 lg:px-16 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-base md:text-lg mb-8 uppercase tracking-wide text-gray-800">
        Why We Do It
      </h2>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="order-1 lg:order-1">
          <img
            src="/certification.png"
            alt="Certificate presentation"
            className="w-[300px] h-[325px] object-cover mx-auto"
          />
        </div>

        {/* List of Reasons */}
        <div className="order-2 lg:order-2 space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="pb-4 border-b-2 border-orange-500">
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                • {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoIt;
