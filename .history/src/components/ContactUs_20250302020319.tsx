"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "./ContactForm"

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const address = "Ahiwara Road, Shankar Nagar, Kumhari, Bihlai, Durg, 491001"
  const phone = "+91 75666 45359"
  const email = "vaidhyafoods6266@gmail.com"

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66884.64191500594!2d81.32381622370256!3d21.357852719355403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a291be49a2186eb%3A0xd20785f90fdd965b!2sAhiwara%2C%20Chhattisgarh%20490036!5e1!3m2!1sen!2sin!4v1740838298475!5m2!1sen!2sin"

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container space-y-12">
        <h2 className="md:text-4xl text-center">Need Help? Contact Us</h2>
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
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">📞</div>
            <div>
              <h3 className="text-xl font-bold">Call Us</h3>
              <Link href={`tel:+917566645359`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">✉️</div>
            <div>
              <h3 className="text-xl font-bold">Email Us</h3>
              <Link href={`mailto:${email}`} className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{email}</Link>
            </div>
          </div>
        </div>

        {/* Address & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">tel:+917566645359
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">📍</div>
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <Link href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{address}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">💬</div>
            <div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <Link href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
