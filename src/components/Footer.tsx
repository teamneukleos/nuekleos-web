import Image from "next/image";
import { Phone, Mail, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white relative">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        {/* Left column */}
        <div>
          <a href="/">
            {/* Main logo */}
            <Image
              src="/logo.svg"
              alt="Ethnocentrique Logo"
              width={180}
              height={60}
              className="mb-4"
            />
          </a>

          {/* Tagline */}
          <p className="text-xs mb-6 text-gray-300 leading-relaxed">
            Reviving the fashion and art industry across Africa
          </p>

          {/* Secondary logo */}
          <Image
            src="/secondary-logo.svg"
            alt="Secondary Logo"
            width={80}
            height={60}
            className="mt-6"
          />

          {/* Copyright */}
          <p className="text-xs text-gray-400 mt-6">
            © 2025 — All Rights Reserved
          </p>
        </div>

        {/* Location and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:justify-items-end">
          {/* Location */}
          <div>
            <h3 className="text-sm mb-4 font-medium">Location</h3>
            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              4b Prince Kayode Akingbade Close, <br />Off Muri Okunola Street, <br />Victoria Island, Lagos.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              24 Ajagba Street, <br />off Binez Hotel Road, <br />Immaculate Junction, <br />
              Brass, Aba
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm mb-4 font-medium">Contact Us</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <li className="flex items-center gap-2">
                <a href="tel:+2348188004422" className="flex items-center gap-2 hover:text-white transition">
                  <Phone size={16} /> +234 8188004422
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61562876555858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Facebook size={16} /> Ethnocentrique Limited
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/ethnocentrique_ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Instagram size={16} /> @ethnocentrique_ltd
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/@EthnocentriqueLimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Youtube size={16} /> Ethnocentrique Limited
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/ethnocentrique-limited/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Linkedin size={16} /> Ethnocentrique Limited
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="mailto:akinbobola86@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Mail size={16} /> info@ethnocentrique.com
                </a>
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
