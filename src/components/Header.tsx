"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"}`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Vaidhya Foods Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="font-medium hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="#products" className="font-medium hover:text-green-600 transition-colors">
            Our Products
          </Link>
          <Link href="#contact" className="font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
          <Link href="#contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#products"
              className="font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link
              href="#contact"
              className="font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="#contact" className="btn btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

