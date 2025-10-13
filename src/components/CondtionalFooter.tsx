"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  // Hide footer on contact page
  if (isContactPage) return null;

  return <Footer />;
}