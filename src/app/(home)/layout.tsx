// import DashboardShell from "@/components/dashboard/dashboard-shell";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import OurPartner from "@/components/OurPartner";
import PartnerWithUs from "@/components/PartnerWithUs";
import Footer from "@/components/Footer";

export default async function AppLayout ({ children }: {children: React.ReactNode}) {
  const session = await auth();

  if (!session) notFound();

  return (
    <div>
      <Navbar />
      {children}
      <OurPartner />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}
