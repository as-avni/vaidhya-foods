import Image from "next/image"
import Link from "next/link"

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Kadhi Dahi",
      image: "/placeholder.svg?height=300&width=300",
      description: "Creamy and thick yogurt perfect for making kadhi",
      price: "₹60",
    },
    {
      id: 2,
      name: "Paneer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Fresh cottage cheese made from pure milk",
      price: "₹120",
    },
    {
      id: 3,
      name: "Plain Dahi",
      image: "/placeholder.svg?height=300&width=300",
      description: "Traditional yogurt with perfect balance of taste",
      price: "₹50",
    },
    {
      id: 4,
      name: "Ghee",
      image: "/placeholder.svg?height=300&width=300",
      description: "Pure clarified butter made from cow milk",
      price: "₹550",
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">OUR PRODUCTS</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-center">{product.name}</h3>
                <p className="mb-3 text-sm text-center text-gray-600">{product.description}</p>
                <p className="mb-4 text-lg font-bold text-center text-green-600">{product.price}</p>
                <Link
                  href="#contact"
                  className="block w-full py-2 text-center text-white transition-colors rounded-md bg-green-600 hover:bg-green-700"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#contact" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

