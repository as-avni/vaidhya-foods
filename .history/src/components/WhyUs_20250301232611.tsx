export default function WhyUs() {
  const features = [
    { title: "Uncompromising Quality", text: "We source only premium-quality milk.", icon: "bi bi-clipboard-data" },
    { title: "Authentic Taste", text: "Preserving the traditional flavors of dairy products.", icon: "bi bi-gem" },
    { title: "Freshness Guaranteed", text: "Delivered fresh to retain nutritional value and flavor.", icon: "bi bi-inboxes" },
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
              {/* Bootstrap Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <i className={`${item.icon} text-green-300 text-2xl`}></i>
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
