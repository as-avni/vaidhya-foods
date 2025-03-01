"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: "Rohit Mehta",
      position: "Food Enthusiast",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Vaidhya Dahi has become a staple in our home. It's so creamy and full of flavor!",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Home Chef",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The paneer from Vaidhya Foods is the best I've ever used. So fresh and it holds its shape perfectly when cooked.",
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Restaurant Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "We've been using Vaidhya products in our restaurant for years. Consistent quality and great taste every time.",
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Nutritionist",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I recommend Vaidhya dairy products to all my clients. Pure, preservative-free, and packed with nutrients.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToReview = (index: number) => {
    setCurrentReviewIndex(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center text-2xl font-bold mb-8">What Are They Saying About Us</h2>

        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden bg-gray-500 border-l-4 border-black rounded-lg shadow-lg p-6 w-1/2 mx-auto md:w-1/2">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReviewIndex * 100}%)`, display: "flex" }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="flex-shrink-0 w-full flex flex-col md:flex-row md:items-center" style={{ width: "100%" }}>
                  <div className="w-3/4 text-white text-center md:text-left">
                    <p className="text-lg italic mb-4">{review.text}</p>
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-gray-200">{review.position}</p>
                    <div className="flex justify-center md:justify-start mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-center md:justify-end">
                    <div className="relative overflow-hidden rounded-full w-20 h-20 md:w-28 md:h-28">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full ${index === currentReviewIndex ? "bg-green-600" : "bg-gray-300"}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
