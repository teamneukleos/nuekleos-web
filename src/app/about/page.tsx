import Hero from "@/about/Hero";
import Ethnic from "@/about/Ethnic";
import OurVision from "@/about/OurVision";
import CoreValues from "@/about/CoreValues";
import Founders from "@/about/Founders";

export default function AboutPage() {
  return (
    <main className="w-full">
      <Hero />
      <Ethnic />
      <OurVision />
      <CoreValues />
      <Founders />
    </main>
  );
}