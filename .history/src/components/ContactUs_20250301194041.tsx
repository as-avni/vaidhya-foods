"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const address = "Ahiwara Road, Shankar Nagar, Kumhari, Bihlai, Durg, 491001"
  const phone = "+91 75666 45359"
  const email = "vaidhyafoods6266@gmail.com"

  const mapUrl =
    "https://maps.app.goo.gl/6ERZAPQEK3RsNqMf8"

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container space-y-12">
        {/* Map - Full Width */}
        <div className="w-full h-96 overflow-hidden bg-gray-200 rounded-lg">
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
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">📞</div>
            <div>
              <h3 className="text-xl font-bold">Call Us</h3>
              <Link href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">✉️</div>
            <div>
              <h3 className="text-xl font-bold">Email Us</h3>
              <Link href={`mailto:${email}`} className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{email}</Link>
            </div>
          </div>
        </div>

        {/* Address & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">📍</div>
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <Link href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{address}</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-green-100">💬</div>
            <div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <Link href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="block mt-1 text-gray-600 transition-colors hover:text-green-600">{phone}</Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-8xl p-8 mx-auto bg-white rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
                <textarea name="message" placeholder="Your Message" rows={6} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                <div className="text-center">
                  <button type="submit" className="px-8 py-3 font-medium text-white transition-colors rounded-md bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
