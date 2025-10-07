"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Stories", href: "/stories" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center text-white">
      {/* Logo */}
      <a href="">
      <div className="flex items-center">
        <img 
          src="/logo.svg" 
          alt="Ethnocentrique" 
          className="h-6 w-auto"
        />
      </div>
      </a>

      {/* Desktop Menu - Reduced spacing and font size */}
      <ul className="hidden md:flex space-x-6 text-sm font-normal">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-orange-400 transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {open ? (
          <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 bg-black bg-opacity-90 p-6 rounded-lg space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-orange-400"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;