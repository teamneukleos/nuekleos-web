import Navbar from "@/components/Navbar";
import ConditionalSections from "@/components/ConditionalSections";
import ConditionalFooter from "@/components/CondtionalFooter";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <ConditionalSections />
      <ConditionalFooter />
    </>
  );
}