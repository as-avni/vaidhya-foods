"use client"

// import { useState, useEffect } from "react"
import Link from "next/link"

// export default function Hero() {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0)

//   const backgroundImages = [
//     "/img/background/hero-bg1.png",
//     "/img/background/hero-bg2.png",
//     "img/background/hero-bg3.png",
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative h-screen pt-0 overflow-hidden">
//       {/* Background Images */}
//       {backgroundImages.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentBgIndex ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="container relative z-10 flex flex-col items-start justify-center h-full text-white">
//         <div className="max-w-2xl">
//           <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
//             Indulge In The Creamy Delight Of Fresh Paneer
//           </h1>
//           <p className="mb-8 text-xl">Creamy, Dreamy, And Always Fresh</p>
//           <div className="flex flex-wrap gap-4">
//             <Link href="#products" className="btn btn-primary">
//               What We Serve
//             </Link>
//             <Link href="#contact" className="btn btn-secondary">
//               View Our Product
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
//         <div className="flex space-x-2">
//           {backgroundImages.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${index === currentBgIndex ? "bg-white" : "bg-white/50"}`}
//               onClick={() => setCurrentBgIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/img/hero-bg1.png",
    "/img/hero-bg2.png",
    "/images/hero-bg3.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="px-4 flex flex-col md:flex-row items-center gap-4 h-[250px] md:min-h-screen relative overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image 
          src={images[currentIndex]} 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full" 
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
            Indulge In The Creamy Delight Of Fresh Paneer
          </h1>
          <p className="mb-8 text-xl">Creamy, Dreamy, And Always Fresh</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#products" className="btn btn-primary">
              What We Serve
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              View Our Product
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}