export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">Why Choose Vaidhya Foods?</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
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
              <h3 className="mb-3 text-xl font-bold">Uncompromising Quality</h3>
              <p className="text-gray-600">
                We source only premium quality milk to ensure the best taste and nutritional value in every product.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Authentic Taste</h3>
              <p className="text-gray-600">
                Preserving the traditional flavors of our products while ensuring they meet modern quality standards.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Freshness Guaranteed</h3>
              <p className="text-gray-600">
                Delivered fresh to retain nutritional value and flavor, from our production facility to your table.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 mt-12 bg-white rounded-lg shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-6 text-2xl font-bold text-center">Choose us for fresh, premium quality dairy products</h3>
            <p className="mb-6 text-center text-gray-600">
              At Vaidhya Foods, we craft our traditional dairy products with passion and care. Our commitment to
              excellence ensures authentic taste, nutritional value, and unmatched freshness in every product.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">10+</span>
                </div>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">15+</span>
                </div>
                <p className="text-sm text-gray-600">Product Varieties</p>
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">50+</span>
                </div>
                <p className="text-sm text-gray-600">Distribution Points</p>
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-600">5K+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

