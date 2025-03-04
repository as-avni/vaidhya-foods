import Image from "next/image"
import Link from "next/link"

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Mozerella Cheese",
      image: "/img/menu/Mozrela.png",
      variants: " 1kg / 5kg / 15kg",
    },
    {
      id: 2,
      name: "Paneer",
      image: "/img/menu/Paneer.png",
      variants: " 1kg / 5kg / 15kg",
    },
    {
      id: 3,
      name: "Plain Dahi",
      image: "/img/menu/menu-item-3.png",
      variants: " 1kg / 5kg / 15kg",
    },
    {
      id: 4,
      name: "Kadhi Dahi",
      image: "/img/menu/menu-item-1.png",
      variants: "1kg / 5kg / 15kg ",
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        <h2 className="md:text-4xl text-center mb-8 font-sriracha">Our Products</h2>

        {/* <div className="flex flex-col items-center gap-8 md:flex-row sm:justify-between"> */}
        <div className="grid grid-cols items-center gap-8 md:grid-cols-2 sm:justify-between">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <div className="relative mb-4 w-40 md:w-60 h-40 md:h-60 mx-auto">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover shadow-xl shadow-orange-50"
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
    </section>
  )
}
