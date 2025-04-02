"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "./ContactForm"

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const address = "Ahiwara Road, Shankar Nagar, Kumhari, Bihlai, Durg, 491001"
  const phone = "+91 75666 45359"
  const email = "vaidhyafoods@gmail.com"

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d464.81296822184555!2d81.51137782209058!3d21.251518490574036!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743594053855!5m2!1sen!2sin"
    

  return (
    <section id="contact" className="py-8 bg-white ">
      <div className="container space-y-12">
        <h2 className="md:text-4xl text-center font-sriracha">Need Help? Contact Us</h2>
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
              <h3 className="text-xl font-bold font-sriracha">Call Us</h3>
              <Link href={`tel:+917566645359`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">✉️</div>
            <div>
              <h3 className="text-xl font-bold font-sriracha">Email Us</h3>
              <Link href={`mailto:${email}`} className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{email}</Link>
            </div>
          </div>
        </div>

        {/* Address & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">📍</div>
            <div>
              <h3 className="text-xl font-bold font-sriracha">Address</h3>
              <Link href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{address}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-200">💬</div>
            <div>
              <h3 className="text-xl font-bold font-sriracha">WhatsApp</h3>
              <Link href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
