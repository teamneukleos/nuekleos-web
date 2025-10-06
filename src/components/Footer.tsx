import Image from "next/image";
import { Phone, Mail, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white relative">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        {/* Left column */}
        <div>
          {/* Main logo */}
          <Image
            src="/logo.svg"
            alt="Ethnocentrique Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          {/* Tagline */}
          <p className="text-xs mb-6 text-gray-300 leading-relaxed">
            Reviving the fashion and art industry across Africa
          </p>
          {/* Secondary logo */}
          <Image
            src="/secondary-logo.svg"
            alt="Secondary Logo"
            width={100}
            height={60}
            className="mt-6"
          />
          {/* Copyright */}
          <p className="text-xs text-gray-400 mt-6">
            © 2025 — Copyright All Rights reserved
          </p>
        </div>

        {/* Right side - Location and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:justify-items-end">
          {/* Location */}
          <div>
            <h3 className="text-sm mb-4">Location</h3>
            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              4b Prince Kayode Akingbade Close, Off Muri Okunola Street, Victoria Island, Lagos.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              24 Ajagba Street, off Binez Hotel Road, Immaculate Junction, Brass, Aba
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +234 8188004422
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />Ethnocentrique Limited</li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />@ethnocentrique_ltd</li>
              <li className="flex items-center gap-2">
                <Youtube size={16} />Ethnocentrique Limited</li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />Ethnocentrique Limited</li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@ethnocentrique.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom design */}
      <div className="w-full">
        <Image
          src="/footer-design.png"
          alt="Footer Design"
          width={1920}
          height={150}
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;