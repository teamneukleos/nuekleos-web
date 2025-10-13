const Intro = () => { 
  return (
    <section className="w-full py-10 md:py-14 text-center text-white bg-gradient-to-r from-[#EA6405] via-[#F9A107] to-[#8F9837]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ✅ Desktop / Tablet version */}
        <p className="hidden md:block text-sm font-normal leading-relaxed">
          At Ethnocentrique, creativity and cultural excellence are at the heart of everything we do.
          <br />
          With a legacy that spans decades, we champion made in Nigeria brands.
        </p>

        {/* ✅ Mobile version (custom line breaks for smaller screens) */}
        <p className="block md:hidden text-[11px] font-normal leading-relaxed">
          At Ethnocentrique, creativity and cultural excellence 
          are at the heart of everything we do. 
          With a legacy that spans decades, <br /> we champion made in Nigeria brands.
        </p>
      </div>
    </section>
  );
};

export default Intro;
