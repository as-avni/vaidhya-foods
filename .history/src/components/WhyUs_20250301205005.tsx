import { FaCheckCircle, FaLeaf, FaRegStar, FaTruck } from "react-icons/fa";

export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk.", icon: <FaCheckCircle className="w-6 h-6 text-green-500" /> },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products.", icon: <FaLeaf className="w-6 h-6 text-green-500" /> },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor.", icon: <FaTruck className="w-6 h-6 text-green-500" /> },
  ];

  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          {/* First Box - Main Highlight */}
          <div className="col-span-3 bg-green-300 text-white p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vaidhya Foods?</h2>
            <p>
              Choose us for fresh, premium-quality dairy products, crafted with tradition and innovation, ensuring
              authentic taste, nutritional value, and unmatched commitment to excellence.
            </p>
          </div>

          {/* Feature Boxes */}
          {features.map((item, index) => (
            <div key={index} className="col-span-3 bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
