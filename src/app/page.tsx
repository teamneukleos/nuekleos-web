
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWeDoIt from "@/components/WhyWeDoIt";
import OurInitiatives from "@/components/OurInitiatives";
import Discover from "@/components/Discover";
import VideoSection from "@/components/VideoSection";
import Navbar from "@/components/Navbar";
import OurPartner from "@/components/OurPartner";
import PartnerWithUs from "@/components/PartnerWithUs";
import Footer from "@/components/Footer";

export default function Home () {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <WhatWeDo />
      <WhyWeDoIt />
      <OurInitiatives />
      <Discover />
      <VideoSection />
      <OurPartner />
      <PartnerWithUs />
      <Footer />
    </main>
  );
}
