"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

.export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  const backgroundImages = [
    "/img/background/hero-bg1.png",
    "/img/background/hero-bg2.png",
    "img/background/hero-bg3.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-auto md:h-screen pt-0 overflow-hidden">
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
      <div className="container relative z-10 flex flex-col items-start justify-center h-full text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold font-inter leading-tight md:text-6xl">
            Indulge In The Creamy Delight Of Fresh Paneer
          </h1>
          <p className="mb-8 text-xl font-inter">Creamy, Dreamy, And Always Fresh</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#products" className="btn btn-primary rounded-full">
              What We Serve
            </Link>
            <Link href="#contact" className="btn btn-secondary rounded-full">
              View Our Product
            </Link>
          </div>
        </div>
      </div>

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

