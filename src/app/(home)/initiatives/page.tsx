import Hero from "@/initiatives/Hero";
import FashionFuture from "@/initiatives/FashionFuture";
import AfricaCobblers from "@/initiatives/AfricaCobblers";
import EthnocentriqueMarket from "@/initiatives/EthnocentriqueMarket";

export default function Workpage() {
  return (
    <main className="w-full">
        <Hero />
        <FashionFuture />
        <AfricaCobblers />
        <EthnocentriqueMarket />
    </main>
  );
}