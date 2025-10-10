
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center text-white py-12 md:py-0">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/about2-bg.png"
          alt="About Ethnocentrique"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 max-w-3xl space-y-6">
        <p className="uppercase tracking-widest text-sm">About Us</p>
        <h2 className="text-2xl md:text-4xl leading-snug font-semibold">
          You create, we connect. <br />
          You imagine, we open doors.
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-gray-200">
          We celebrate heritage by preserving traditional crafts, <br />
          uplifting Indigenous art, and nurturing local creative <br />
          ecosystems. Through youth-focused entrepreneurship <br />
          and innovation, we transform creativity and culture into <br />
          opportunity; building a future rooted in pride, dignity, <br />
          and possibility for this generation — and the next.
        </p>

        {/* Read More Button */}
        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium">
          <span>Read More</span>
          <span className="p-1.5 bg-white rounded-sm">
            <ArrowRight className="text-orange-600" size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default About;
