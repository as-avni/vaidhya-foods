"use client"

import { useState } from "react"
import Image from "next/image"

export default function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const playVideo = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-center md:text-4xl font-bold mb-8 font-sriracha">Learn More About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Full Height Image */}
          <div className="h-full">
            <Image
              src="/img/about-us/ab-3.png"
              alt="Vaidhya Foods"
              width={600}
              height={800}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Welcome to Vaidhya Foods, a trusted name in dairy. We are committed to providing fresh, nutritious, and delicious dairy products.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Trusted for high-quality, fresh dairy products.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Combining tradition with innovation for authentic taste.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Committed to excellence in every product we craft.</p>
              </div>
            </div>

            <p className="text-gray-700">
              From creamy Paneer to wholesome Dahi and flavorful Kadhi Dahi, our products reflect our dedication to excellence. Join us in celebrating the timeless goodness of dairy with Vaidhya Foods.
            </p>

            {/* Video Thumbnail - Square */}
            
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
