import { ArrowRight } from "lucide-react";

const PartnerWithUs = () => {
  return (
    <div className="mt-10 mb-20 px-5 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto rounded-[40px] p-6 sm:p-10 text-left bg-gradient-to-r from-[#EA6405] via-[#F9A107] to-[#8F9837] text-white">
        <h3 className="text-xl sm:text-2xl mb-4">Let’s hear from you</h3>

        {/* Mobile paragraph */}
        <p className="mb-6 text-xs leading-relaxed text-left sm:hidden">
          We're building a movement that uplifts local artisans, <br />empowers communities 
          and celebrates heritage. <br />We’re sparking a movement where local artisans rise, 
          communities thrive, and heritage takes its rightful place — <br />at the heart of progress. <br />
          Join us in shaping the future of our local economy together.
        </p>

        {/* Desktop paragraph */}
        <p className="mb-6 text-sm sm:text-sm leading-relaxed text-left hidden sm:block">
          We're building a movement that uplifts local artisans, empowers communities <br /> 
          and celebrates heritage. We’re sparking a movement where local artisans rise, <br />
          communities thrive, and heritage takes its rightful place — at the heart of progress. <br />
          Join us in shaping the future of our local economy together.
        </p>

        {/* Email + Button */}
        <form className="w-full max-w-md">
          <div className="flex items-center bg-white rounded-full p-1.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-3 py-2 text-xs sm:text-sm text-gray-800 focus:outline-none bg-transparent min-w-0"
            />
            <button
              type="submit"
              className="flex items-center gap-1 px-3 sm:px-5 py-2 bg-orange-600 text-white text-xs sm:text-sm font-medium hover:bg-orange-700 transition rounded-full whitespace-nowrap flex-shrink-0"
            >
              Partner with us
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerWithUs;
