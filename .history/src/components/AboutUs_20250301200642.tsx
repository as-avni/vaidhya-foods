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
        <h2 className="section-title">Learn More About Us</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Video Thumbnail */}
          <div className="relative overflow-hidden rounded-lg aspect-video">
            {!isVideoPlaying ? (
              <>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Vaidhya Foods Production"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={playVideo}
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity bg-black/30 hover:bg-black/40"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <div className="w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Vaidhya Foods Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            )}
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Welcome to Vaidhya Foods - a trusted name in dairy. We are committed to providing pure, fresh dairy
              products.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-green-100">
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
                <p>
                  <strong>Known for high quality, farm-fresh products</strong> that maintain their natural goodness.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-green-100">
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
                <p>
                  <strong>Dedicated to traditional methods</strong> combined with modern technology for the best
                  results.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-green-100">
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
                <p>
                  <strong>Committed to excellence in every product we craft</strong>, ensuring quality in every bite.
                </p>
              </div>
            </div>

            <p className="text-gray-700">
              Our journey began with a simple mission: to provide the finest dairy products. We take pride in our
              products with our dedication to excellence, and were committed to maintaining the highest standards of
              dairy with traditional foods.
            </p>

            <div className="pt-4">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Our Farm"
                width={500}
                height={300}
                className="object-cover w-full rounded-lg h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

