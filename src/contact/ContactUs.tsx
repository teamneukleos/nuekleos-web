"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-cover bg-center flex items-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/contact/contact-bg.png"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-12 md:py-24">
          <div className="max-w-2xl">
            {/* TEXT */}
            <div className="mb-10 md:mb-16">
              <h1 className="text-xl md:text-xl lg:text-xl sm:text-xl font-bold mb-6 md:mb-10 leading-tight mt-6">
                Get in touch <br /> with us
              </h1>
              
              {/* Desktop version - full text */}
              <div className="hidden md:block">
                <p className="text-base md:text-lg mb-2">We are located in</p>
                <p className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2">
                  Lagos and Aba, Abia
                </p>
                <p className="text-base md:text-lg mb-8">Nigeria</p>
              </div>

              {/* Mobile version - ultra condensed text */}
              <div className="block md:hidden">
                <p className="text-xs mb-0.5">We are located in</p>
                <p className="text-lg font-semibold text-orange-500">
                  Lagos and Aba, Abia
                </p>
                <p className="text-xs mb-3">Nigeria</p>
              </div>

              <p className="text-orange-500 text-sm md:text-xl font-medium mb-4 md:mb-8">
                Contact our team
              </p>
            </div>

            {/* FORM */}
            <div className="w-full max-w-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 md:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 text-white px-3 py-2 md:px-4 md:py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 text-white px-3 py-2 md:px-4 md:py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 text-sm md:text-base"
                />
                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 text-white px-3 py-2 md:px-4 md:py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 text-sm md:text-base"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 text-white px-3 py-2 md:px-4 md:py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 text-sm md:text-base resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 transition-colors text-white py-2 md:py-3 rounded-md font-medium text-sm md:text-base"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

     {/* Contact Footer */}
      <section className="w-full bg-white py-8 md:py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Call us */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-600 text-lg md:text-xl font-semibold mb-2">
              Call us
            </h3>
            <p className="text-gray-800 text-base">08188004422</p>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>

          {/* Visit us */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-orange-600 text-lg md:text-xl font-semibold mb-2">
              Visit us
            </h3>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              4b Prince Kayode Akingbade Close, <br />
              Off Muri Okunola Street, <br />
              Victoria Island, Lagos.
            </p>
            <p className="mt-4 text-gray-800 text-xs md:text-sm leading-relaxed">
              24 Ajagba Street, <br />
              off Binez Hotel Road, <br />
              Immaculate Junction, <br />
              Brass, Aba
            </p>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>

          {/* Message us */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-600 text-lg md:text-xl font-semibold mb-2">
              Message us
            </h3>
            <a 
              href="mailto:Info@ethnocentrique.com"
              className="text-gray-800 text-base hover:text-orange-600 transition"
            >
              Info@ethnocentrique.com
            </a>
          </div>

        </div>
      </section>
    </>
  );
}