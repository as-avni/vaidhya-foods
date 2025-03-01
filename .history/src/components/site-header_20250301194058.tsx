"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

export default function SiteHeader() {
const [isOpen, setIsOpen] = useState(false);
return (
<header className=" bg-[#f5f2ee] bg-opacity-80 backdrop-blur-md shadow-lg sticky md:fixed top-0 md:top-3 left-0 md:left-10 w-[98%] md:w-[95%] mx-auto rounded-lg z-50 ">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <Image src="/images/ram-logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-lg font-bold text-gray-700">लोक के राम</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link href="/#about" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            About Us
          </Link>
          <Link href="/" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Our Products
          </Link>
          <Link href="/events" className="relative text-gray-600 hover:text-green-700 text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
            Contact Us
          </Link>
          

          
        </nav>

        {/* Desktop Button */}
        <Link href="/#reg-form" className="relative text-gray-600  text-lg font-semibold after:absolute after:bottom-0 after:left-0">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full hidden md:block">Become a Member</Button>
          </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg ">
          <nav className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 md:hidden">
          <Link href="/" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link href="/" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Team
          </Link>
          <Link href="/#about" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link href="/#gallery" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Photo Gallery
          </Link>
          <Link href="/events" className="relative text-gray-600 hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            Events
          </Link>
          <Link href="/#reg-form" className="w-full relative text-gray-600  text-lg font-semibold after:absolute after:bottom-0 after:left-0">
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Become a Member</Button>
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
