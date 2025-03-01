"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const address = "123/45 Road, Shastri Nagar, Kumbhat, Bihta, Durg, 491001"
  const phone = "+91 7894 67890"
  const email = "vaidhyafoods2023@gmail.com"
  const openingHours = {
    weekdays: "9:00 AM - 7:00 PM",
    sunday: "Closed",
  }

  // Google Maps embed URL (replace with actual coordinates)
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.905236217078!2d81.3784!3d21.1924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzMyLjYiTiA4McKwMjInNDIuMiJF!5e0!3m2!1sen!2sin!4v1647834125!5m2!1sen!2sin"

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Need Help? Contact Us</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden bg-gray-200 rounded-lg aspect-video">
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
              {!mapLoaded && (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-12 h-12 border-4 border-t-4 rounded-full border-gray-300 border-t-green-600 animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
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

            {/* Call Us */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
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
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
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

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <p className="mt-1 text-gray-600">Mon-Sat: {openingHours.weekdays}</p>
                <p className="text-gray-600">Sunday: {openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

