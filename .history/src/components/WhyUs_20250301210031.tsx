export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk." },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products." },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor." },
  ];

  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Box - Main Highlight */}
          <div className="md: md:w-[50%] bg-green-300 text-white p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vaidhya Foods?</h2>
            <p>
              Choose us for fresh, premium-quality dairy products, crafted with tradition and innovation, ensuring
              authentic taste, nutritional value, and unmatched commitment to excellence.
            </p>
          </div>

          {/* Feature Boxes */}
          {features.map((item, index) => (
            <div key={index} className="md:w-[30%] bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
              {/* Unique icon instance for each box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
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
