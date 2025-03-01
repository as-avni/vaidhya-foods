"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const address = "123/45 Road, Shastri Nagar, Kumhari, Bihlai, Durg, 491001"
  const phone = "+91 7894 67890"
  const email = "vaidhyafoods2023@gmail.com"

  // Google Maps embed URL (replace with actual coordinates)
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.905236217078!2d81.3784!3d21.1924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzMyLjYiTiA4McKwMjInNDIuMiJF!5e0!3m2!1sen!2sin!4v1647834125!5m2!1sen!2sin"

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container space-y-12">
        <h2 className="section-title text-center">Need Help? Contact Us</h2>

        {/* Map - Full Width */}
        <div className="w-full h-96 overflow-hidden bg-gray-200 rounded-3xl">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className={`w-full h-full transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
          ></iframe>
        </div>

        {/* Contact & Email - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Call Us */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">
              📞
            </div>
            <div>
              <h3 className="text-xl font-bold">Call Us</h3>
              <Link
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-gray-600 transition-colors hover:text-green-600"
              >
                {phone}
              </Link>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">
              ✉️
            </div>
            <div>
              <h3 className="text-xl font-bold">Email Us</h3>
              <Link
                href={`mailto:${email}`}
                className="block mt-1 text-gray-600 transition-colors hover:text-green-600"
              >
                {email}
              </Link>
            </div>
          </div>
        </div>

        {/* Address & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">
              📍
            </div>
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <Link
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-gray-600 transition-colors hover:text-green-600"
              >
                {address}
              </Link>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">
              💬
            </div>
            <div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <Link
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-gray-600 transition-colors hover:text-green-600"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}