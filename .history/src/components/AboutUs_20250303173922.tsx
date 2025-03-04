"use client"

import { useState } from "react"
import Image from "next/image"
import { PlayCircle, X } from "lucide-react"

export default function AboutUs() {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const playVideo = () => {
  //   setIsVideoPlaying(true)
  // }

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
            
            <div className="relative w-full h-96 mx-auto md:mx-0">
            <>
                  <Image
                    src="/img/about-us/ab-1.png"
                    alt="Vaidhya Foods Video"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity bg-black/30 hover:bg-black/40"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-30 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-12 h-12 text-black"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                  </button>
                </>
            </div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="relative bg-green-200 bg-opacity-90 rounded-lg p-6 h-3/4 w-full max-w-xl">
                  <button
                    className="absolute top-0 right-0 text-black hover:text-red-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X className="h-7 w-7" />
                  </button>
                  <div className="w-full h-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/lwDRgXvMNmQ?si=UwmdAjVF3erYrtNx" // Replace VIDEO_ID with the actual ID of the YouTube Short
                      title="YouTube Short"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="relative w-full h-96 mx-auto md:mx-0">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/img/about-us/ab-1.png"
                    alt="Vaidhya Foods Video"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <button
                      onClick={playVideo}
                      className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity bg-black/30 hover:bg-black/40"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-green-600"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    className="absolute inset-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
