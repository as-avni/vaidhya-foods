"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 w-full px-4 md:px-10 py-3 flex items-center justify-between z-50">
      {/* Left: Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-600 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex gap-8">
        {["Home", "About Us", "Our Products", "Contact Us"].map((item, index) => (
          <Link
            key={index}
            href={`/${item === "Home" ? "" : `#${item.toLowerCase().replace(/\s+/g, "")}`}`}
            className="text-black hover:text-red-600 text-lg font-medium transition-all duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dhi3iupue/image/upload/v1743599120/VAIDHYA_qxcuu4.png"
            alt="Logo"
            width={120}
            height={50}
            className="h-24 w-"
          />
        </Link>
      </div>

      {/* Right: Call Us Button */}
      <div className="hidden md:flex">
        <Link
          href="tel:+919876543210"
          className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-all duration-300"
        >
          Call Us
        </Link>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg py-6 px-4 flex flex-col items-start gap-6 transition-transform transform translate-x-0">
          <button onClick={() => setIsOpen(false)} className="self-end text-gray-600">
            <X size={28} />
          </button>
          {["Home", "About Us", "Our Products", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              href={`/${item === "Home" ? "" : `#${item.toLowerCase().replace(/\s+/g, "")}`}`}
              className="text-black hover:text-green-600 text-lg font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;