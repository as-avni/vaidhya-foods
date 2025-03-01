"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react"
// import { Button } from "@/components/ui/button"
import BackToTop from "@/hooks/backToTop"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Address</h3>
            </div>
            <a href="mailto:vaidhyafoods@gmail.com" className="hover:underline">
                <p className="text-sm leading-relaxed">
                  Ahiwara Road, Shankar Nagar,
                  <br />
                  Kumhari, Bhilai 3, Durg, 490042
                </p>
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Contact</h3>
            </div>
            <div className="text-sm">
              <p className="mb-1">
                <span className="font-medium">Phone:</span> 
                <a href="tel:+917566645359" className="hover:underline">
                  +91 75666 45359
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:vaidhyafoods@gmail.com" className="hover:underline">
                  vaidhyafoods@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Opening Hours</h3>
            </div>
            <div className="text-sm">
              <p className="mb-1">
                <span className="font-medium">Mon-Sat:</span> 11AM - 23PM
              </p>
              <p>
                <span className="font-medium">Sunday:</span> Closed
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61573041901527" target="_blank" aria-label="Facebook">
                <Facebook className="h-6 md:h-10 w-6 md:w-10 hover:text-green-500 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/vaidhya.foods/" target="_blank" aria-label="Instagram">
                <Instagram className="h-6 md:h-10 w-6 md:w-10 hover:text-green-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
              {/* <div className="w-9 h-9 relative">
                <Image
                  src="/twitter.png" // Replace with your image path
                  alt="Icon"
                  layout="fill"
                  objectFit="contain" // Ensures the entire icon fits inside the container
                  className="rounded-md"
                />
              </div> */}

<div className="relative w-20 h-20 group">
      {/* Default Image */}
      <Image
        src="/img/icon-default.png" // Replace with your default image
        alt="Default Icon"
        width={80}
        height={80}
        className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />

      {/* Hover Image */}
      <Image
        src="/img/icon-hover.png" // Replace with your hover image
        alt="Hover Icon"
        width={80}
        height={80}
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </div>

              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Youtube className="h-6 md:h-10 w-6 md:w-10 hover:text-green-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm">
          <p className="mb-1">
            © Copyright <span className="font-semibold">Vaidhya Foods</span> All Rights Reserved
          </p>
          <p className="text-gray-500">Designed by Chitrashala Tech</p>
        </div>
      </div>

      
      
      <BackToTop />
    </footer>
  )
}

