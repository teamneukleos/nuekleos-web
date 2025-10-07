// src/app/contact/ContactUs.tsx
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
    <section className="relative w-full min-h-[140vh] md:min-h-screen bg-cover bg-center flex items-center text-white">

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
  <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-24">
    <div className="max-w-2xl">
      {/* TEXT */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Get in touch <br /> with us
        </h1>
        <p className="text-base md:text-lg mb-2">We are located in</p>
        <p className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2">
          Lagos and Aba, Abia
        </p>
        <p className="text-base md:text-lg mb-8">Nigeria</p>

        <p className="text-orange-500 text-lg md:text-xl font-medium mb-8">
          Contact our team
        </p>
      </div>

      {/* FORM */}
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border border-gray-400 text-white px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border border-gray-400 text-white px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400"
          />
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            className="bg-transparent border border-gray-400 text-white px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border border-gray-400 text-white px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 transition-colors text-white py-3 rounded-md font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
}