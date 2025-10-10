"use client";
import { usePathname } from "next/navigation";
import OurPartner from "./OurPartner";
import PartnerWithUs from "./PartnerWithUs";

export default function ConditionalSections() {
  const pathname = usePathname();
  const isStoriesPage = pathname?.startsWith('/stories/');
  const isContactPage = pathname === '/contact';

  // Hide on both stories and contact pages
  if (isStoriesPage || isContactPage) return null;

  return (
    <>
      <OurPartner />
      <PartnerWithUs />
    </>
  );
}