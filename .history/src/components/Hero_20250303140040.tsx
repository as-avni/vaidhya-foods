"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { PlayCircle, X } from "lucide-react"

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const backgroundImages = [
    "/img/background/hero-bg1.png",
    "/img/background/hero-bg2.png",
    "img/background/hero-bg3.png",
    "/img/background/3.png",
    "/img/background/4.png",
    "img/background/hero-bg3.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative md:h-screen pt-0 overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container md:mt-0 mt-8 relative z-10 flex flex-col items-start justify-center h-full text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-2xl font-bold font-sriracha leading-tight md:text-6xl">
            Indulge In The Creamy Delight Of Fresh Paneer
          </h1>
          <p className="mb-8 text-xl font-sriracha">Creamy, Dreamy, And Always Fresh</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#products" className="bg-green-300 text-black btn rounded-full hover:bg-white">
              What We Serve
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn text-black bg-green-300 rounded-full flex flex-wrap gap-2 hover:bg-white"
            >
              <PlayCircle className="h-6 w-6 text-black" strokeWidth={1.5} />
              View Our Product
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-2xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full">
              <video className="w-full h-auto rounded-lg" controls autoPlay muted>
                <source src="/videos/product.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentBgIndex ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentBgIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

