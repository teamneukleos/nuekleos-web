import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Discover = () => {
  return (
    <section className="w-full bg-black text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          We connect <span className="text-orange-600">MSME’s</span> to opportunities
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-sm">
          We help entrepreneurs grow with the right support, market know-how, and tools to succeed.
        </p>

        {/* Link */}
        {/* <Link
          href="/discover"
          className="inline-flex items-center gap-2 text-sm md:text-xs font-medium hover:opacity-90 transition"
        >
          <span>Discover More</span>
          <span className="p-1.5 bg-orange-600 rounded-sm">
            <ArrowRight className="text-white" size={16} />
          </span>
        </Link> */}
      </div>
    </section>
  );
};

export default Discover;
