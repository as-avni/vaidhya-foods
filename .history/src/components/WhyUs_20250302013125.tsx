export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk.",data:"M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z M9 3a3 2 0 0 1 6 0M9 15v3 M12 11v7M15 7v11" },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products.",data:"M6 3 H18 L22 9 L12 22 L2 9 Z M12 22 L16 9 L13 3 M12 22 L8 9 L11 3 M2 9 H22" },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor.",data:"M5 1 a.5 .5 0 0 0 -.39 .188 L1.54 5 H6 a.5 .5 0 0 1 .5 .5 1.5 1.5 0 0 0 3 0 A.5 .5 0 0 1 10 5 h4.46 l-3.05 -3.812 A.5 .5 0 0 0 11.02 1 H5 Z M3.81 .563 A1.5 1.5 0 0 1 5 0 h6 A1.5 1.5 0 0 1 12.19 .563 l3.7 4.625 a.5 .5 0 0 1 .106 .374 l-.39 3.124 A1.5 1.5 0 0 1 14.117 10 H1.883 A1.5 1.5 0 0 1 .394 8.686 l-.39 -3.124 a.5 .5 0 0 1 .106 -.374 L3.81 .563 Z M.5 11.17 A.5 .5 0 0 1 .875 11 H6 a.5 .5 0 0 1 .5 .5 1.5 1.5 0 0 0 3 0 A.5 .5 0 0 1 10 11 h5.125 a.5 .5 0 0 1 .496 .562 l-.39 3.124 A1.5 1.5 0 0 1 14.117 16 H1.883 A1.5 1.5 0 0 1 .394 14.686 l-.39 -3.124 a.5 .5 0 0 1 .121 -.393 Z" },
  ];

  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* First Box - Main Highlight */}
          <div className="h-auto md:w-[50%] bg-green-100 text-black p-12 md:p-8 rounded-3xl flex flex-col justify-center shadow-lg shadow-black">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vaidhya Foods?</h2>
            <p>
              Choose us for fresh, premium-quality dairy products, crafted with tradition and innovation, ensuring
              authentic taste, nutritional value, and unmatched commitment to excellence.
            </p>
          </div>

          {/* Feature Boxes */}
          {features.map((item, index) => (
            <div key={index} className="md:p-10 md:w-[30%] bg-white text-black p-16 rounded-3xl  flex flex-col items-center border-b-2 border-black shadow-[4px_4px_0px_#4a4a4a]">
              {/* Unique icon instance for each box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-300 "
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
