
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWeDoIt from "@/components/WhyWeDoIt";
import OurInitiatives from "@/components/OurInitiatives";
import Discover from "@/components/Discover";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <Intro />
      <About />
      <WhatWeDo />
      <WhyWeDoIt />
      <OurInitiatives />
      <Discover />
      <VideoSection />
    </main>
  );
}
