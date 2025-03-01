export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk."data:"M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z M9 3a3 2 0 0 1 6 0M9 15v3 M12 11v7M15 7v11" },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products."data:"M5 9 L12 2 L19 9 L15 20 L9 20 Z 
        M12 2 L15 9 
        M12 2 L9 9 
        M5 9 L19 9 
        M9 20 L15 20
" },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor."data:"M6 10 L12 4 L18 10 L6 10 Z 
        M8 10 L8 14 L16 14 L16 10 
        M6 14 L12 20 L18 14 L6 14 Z 
        M10 14 L10 16 
        M14 14 L14 16
" },
  ];

  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Box - Main Highlight */}
          <div className="h-auto md:w-[50%] bg-green-300 text-black p-12 md:p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vaidhya Foods?</h2>
            <p>
              Choose us for fresh, premium-quality dairy products, crafted with tradition and innovation, ensuring
              authentic taste, nutritional value, and unmatched commitment to excellence.
            </p>
          </div>

          {/* Feature Boxes */}
          {features.map((item, index) => (
            <div key={index} className="md:p-10 md:w-[30%] bg-white text-black p-16 rounded-lg shadow-md flex flex-col items-center">
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
                    d={item.data}
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
