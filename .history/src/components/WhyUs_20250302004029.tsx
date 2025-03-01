export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk.",data:"M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z M9 3a3 2 0 0 1 6 0M9 15v3 M12 11v7M15 7v11" },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products.",data:"M6 3 H18 L22 9 L12 22 L2 9 Z M12 22 L16 9 L13 3 M12 22 L8 9 L11 3 M2 9 H22" },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor.",data:"M4.98 1 A0.5 0.5 0 0 0 4.59 1.188 L1.54 5 H6 A0.5 0.5 0 0 1 6.5 5.5 A1.5 1.5 0 0 0 9.5 5.5 A0.5 0.5 0 0 1 10 5 H14.46 L11.41 1.188 A0.5 0.5 0 0 0 11.02 1 H4.98 Z M14.934 6 H10.45 A2.5 2.5 0 0 1 5.55 6 H1.066 L1.386 8.562 A0.5 0.5 0 0 0 1.884 9 H14.118 A0.5 0.5 0 0 0 14.614 8.562 L14.934 6 Z M3.809 0.563 A1.5 1.5 0 0 1 4.981 0 H11.019 A1.5 1.5 0 0 1 12.191 0.563 L15.891 5.188 A0.5 0.5 0 0 1 15.996 5.562 L15.606 8.686 A1.5 1.5 0 0 1 14.117 10 H1.883 A1.5 1.5 0 0 1 0.394 8.686 L0.004 5.562 A0.5 0.5 0 0 1 0.11 5.188 L3.81 0.563 Z M0.125 11.17 A0.5 0.5 0 0 1 0.5 11 H6 A0.5 0.5 0 0 1 6.5 11.5 A1.5 1.5 0 0 0 9.5 11.5 A0.5 0.5 0 0 1 10 11 H15.5 A0.5 0.5 0 0 1 15.996 11.562 L15.606 14.686 A1.5 1.5 0 0 1 14.117 16 H1.883 A1.5 1.5 0 0 1 0.394 14.686 L0.004 11.562 A0.5 0.5 0 0 1 0.125 11.17 Z M1.066 12 L1.386 14.562 A0.5 0.5 0 0 0 1.884 15 H14.118 A0.5 0.5 0 0 0 14.614 14.562 L14.934 12 H10.45 A2.5 2.5 0 0 1 5.55 12 H1.066 Z" },
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
