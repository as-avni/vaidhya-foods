import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dhi3iupue/image/upload/v1743599120/VAIDHYA_qxcuu4.png"
            alt="Logo"
            width={120}
            height={50}
            className="h-16 w-auto"
          />
        </Link>
      </div>

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

      {/* Right: Social Media Icons (Only in Desktop) */}
      <div className="hidden md:flex gap-3">
        <Link href="https://facebook.com" target="_blank" className="text-brown-700 hover:text-brown-900">
          <FaFacebookF size={20} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-brown-700 hover:text-brown-900">
          <FaTwitter size={20} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-brown-700 hover:text-brown-900">
          <FaLinkedinIn size={20} />
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