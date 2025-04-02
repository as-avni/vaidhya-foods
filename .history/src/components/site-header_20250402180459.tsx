"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for open/close menu
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social icons

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 w-full px-4 py-3 flex items-center justify-between md:justify-between z-50">
      {/* Left: Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Center: Logo */}
      <Link href="/" className="md:static">
        <Image 
          src="https://drive.google.com/uc?export=view&id=1Qz3RdEXLgXk0V_xjMcnYZeFiTkE36xif" 
          alt="Logo" 
          width={100} 
          height={40} 
          className="h-20 w-20 md:h-28 md:w-24 mx-auto" 
        />
      </Link>

      <nav className="hidden md:flex gap-6 items-center justify-center">
        {["Home", "About Us", "Our Products", "Contact Us"].map((item, index) => (
          <Link 
            key={index} 
            href={`/${item === "Home" ? "" : `#${item.toLowerCase().replace(/\s+/g, "")}`}`} 
            className="text-black hover:text-green-600 text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Right: Social Media Icons */}
      <div className="flex gap-3">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-green-50 shadow-lg py-4 px-6 flex flex-col items-center gap-4">
          {["Home", "About Us", "Our Products", "Contact Us"].map((item, index) => (
            <Link 
              key={index} 
              href={`/${item === "Home" ? "" : `#${item.toLowerCase().replace(/\s+/g, "")}`}`} 
              className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}