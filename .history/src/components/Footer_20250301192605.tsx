// "use client"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-50 py-8">
//       <div className="container text-center">
//         <p className="text-gray-600">© 2023 Vaidhya Foods. All rights reserved.</p>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { MapPin, Phone, Clock, ArrowUp, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full bg-[#f5f2ee] text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Address</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Ahiwara Road, Shankar Nagar,
              <br />
              Kumhari, Bhilai 3, Durg, 490042
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Contact</h3>
            </div>
            <div className="text-sm">
              <p className="mb-1">
                <span className="font-medium">Phone:</span> +91 75666 45359
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:vaidhyafoods6266@gmail.com" className="hover:underline">
                  vaidhyafoods6266@gmail.com
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
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-gray-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-gray-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-gray-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-gray-500 transition-colors" />
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

      {/* Back to Top Button */}
      {/* <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-black p-3 shadow-md hover:bg-gray-800"
        size="icon"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </Button> */}
    </footer>
  )
}

