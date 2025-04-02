"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function OurProducts() {
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    image: string;
    variants: string;
    description: string;
    ingredients: string;
    process: string;
    uses: string;
    storage: string;
  } | null>(null);

  const products = [
    {
      id: 1,
      name: "Mozerella Cheese",
      image: "https://res.cloudinary.com/dhi3iupue/image/upload/v1743598576/3_jzt8uv.png",
      variants: "1 kg ☑️ / 5 kg / 15 kg",
      description: "Delicious and fresh mozzarella cheese perfect for pizzas and more.",
      ingredients: "Milk, rennet, starters pizzas, pasta, sandwiches, and salads.",
      process: "Milk is curdled, heated, stretched, kneaded, shaped, and cooled in brine.",
      uses: "Ideal for pizzas, pasta, sandwiches, and salads.",
      storage: "Fresh mozzarella is kept in brine; low-moisture types in airtight containers.",
    },
    {
      id: 2,
      name: "Paneer",
      image: "https://res.cloudinary.com/dhi3iupue/image/upload/v1743598576/1_qqdwm8.png",
      variants: "1 kg ☑️ / 5 kg / 15 kg",
      description: "Soft and fresh paneer, great for curries and snacks.",
      ingredients: "Milk, rennet, starters pizzas, pasta, sandwiches, and salads.",
      process: "Milk is curdled, heated, stretched, kneaded, shaped, and cooled in brine.",
      uses: "Ideal for pizzas, pasta, sandwiches, and salads.",
      storage: "Store in an airtight container and refrigerate.",
    },
    {
      id: 3,
      name: "Plain Dahi",
      image: "https://res.cloudinary.com/dhi3iupue/image/upload/v1743598576/4_llcqfh.png",
      variants: "1 kg / 5 kg / 15 kg ☑️",
      description: "Thick and creamy plain yogurt, perfect for daily consumption.",
      ingredients: "Milk, bacterial cultures.",
      process: "Milk is boiled, cooled, and mixed with bacterial cultures, then left to ferment until thick.",
      uses: "Consumed directly, used in drinks, desserts, and cooking.",
      storage: "Refrigerate and consume within a week.",
    },
    {
      id: 4,
      name: "Kadhi Dahi",
      image: "https://res.cloudinary.com/dhi3iupue/image/upload/v1743598575/5_w84mpd.png",
      variants: "1 kg / 5 kg ☑️ / 15 kg",
      description: "Special kadhi dahi, ideal for making authentic kadhi dishes.",
      ingredients: "Milk, bacterial cultures.",
      process: "Similar to plain dahi, but slightly sour curd is preferred for kadhi preparation.",
      uses: "Ideal for pizzas, pasta, sandwiches, and salads.",
      storage: "Refrigerate and consume within a few days for best sourness.",
    },  
  ];

  return (
    <section id="our-products" className="py-20 bg-white">
      <div className="container">
        <h2 className="md:text-4xl text-center mb-8 font-sriracha">Our Products</h2>

        <div className="grid grid-cols items-center gap-8 md:grid-cols-2 sm:justify-between">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="text-center cursor-pointer" 
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative mb-4 w-40 md:w-60 h-40 md:h-60 mx-auto">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover filter drop-shadow-2xl"
                />
              </div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.variants}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#contact" className="btn bg-green-200 rounded-3xl">
            Contact for Order
          </Link>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white bg-opacity-90 w-[95%] md:w-[90%] h-[95%] md:h-80%] rounded-3xl flex flex-col md:flex-row overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-50" 
              onClick={() => setSelectedProduct(null)}>
              <X size={24} />
            </button>
            <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain p-8 md:p-20"
              />
            </div>
            <div className="md:w-1/2 w-full h-1/2 md:h-full p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="mb-10">{selectedProduct.description}</p>
              <p className="text-sm mb-4 "><strong>Ingredients: </strong>{selectedProduct.ingredients}</p>
              <p className="text-sm mb-4 "><strong>Process: </strong> {selectedProduct.process}</p>
              <p className="text-sm mb-4 "><strong>Uses: </strong> {selectedProduct.uses}</p>
              <p className="text-sm mb-4 "><strong>Storage: </strong> {selectedProduct.storage}</p>
              <p className="text-sm mb-4 "><strong>Available in: </strong>{selectedProduct.variants}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
