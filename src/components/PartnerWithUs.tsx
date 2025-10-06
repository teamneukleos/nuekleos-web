import { ArrowRight } from "lucide-react";

const PartnerWithUs = () => {
  return (
    <div className="mt-10 mb-20 max-w-6xl mx-auto">
      <div className="rounded-[40px] p-10 text-left bg-gradient-to-r from-[#EA6405] via-[#F9A107] to-[#8F9837] text-white">
        <h3 className="text-2xl md:text-lg mb-4">Let’s hear from you</h3>
        <p className="mb-6 text-sm md:text-sm leading-relaxed">
          We're building a movement that uplifts local artisans, empowers communities <br />
          and celebrates heritage. We’re sparking a movement where local artisans rise, <br />
          communities thrive, and heritage takes its rightful place—at the heart of progress. <br />
          Join us in shaping the future of our local economy together. <br />
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
              <span className="hidden sm:inline">Partner with us</span>
              <span className="sm:hidden">Partner with us</span>
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerWithUs;