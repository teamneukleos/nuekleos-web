import Hero from "@/work/Hero";
import AreasOfImpact from "@/work/AreasOfImpact";
import BusinessDevelopment from "@/work/BussinessDevelopment";
import MarketAccessFacilitation from "@/work/MarketAccessFacilitation";
import SkillsDevelopment from "@/work/SkillsDevelopment";
import StrategicPartnership from "@/work/StrategicPartnership&Collaborations";

export default function Workpage() {
  return (
    <main className="w-full">
        <Hero />
        <AreasOfImpact />
        <BusinessDevelopment />
        <MarketAccessFacilitation />
        <SkillsDevelopment />
        <StrategicPartnership />
    </main>
  );
}