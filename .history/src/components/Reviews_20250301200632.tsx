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
        <h2 className="section-title">What Are They Saying About Us</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gray-50 rounded-lg border-l-4 border-black">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReviewIndex * 100}%)`, display: "flex" }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="flex-shrink-0 w-full p-8 md:p-12" style={{ width: "100%" }}>
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    
                    <div className="flex-grow text-center md:text-left">
                      <div className="mb-4">
                        
                          <path
                            fill="currentColor"
                            d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                          ></path>
                        </svg>
                      </div>
                      <p className="mb-6 text-lg italic">{review.text}</p>
                      <div className="flex items-center justify-center mb-2 md:justify-start">
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
                      <h3 className="text-xl font-bold">{review.name}</h3>
                      <p className="text-gray-600">{review.position}</p>
                    </div>
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                      <div className="relative overflow-hidden rounded-full w-28 h-28">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
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

