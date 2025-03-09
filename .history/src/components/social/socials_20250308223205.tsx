import FacebookWidget from "./facebook-widget";
import InstagramWidget from "./instagram-widget";
import TwitterWidget from "./twitter-widget";


export default function SocialDashboard() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-white py-6 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-white">सोशल </span>
          <span className="text-orange-500">मीडिया</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-green-800 rounded-md overflow-hidden bg-[#7a7a99]">
            <div className="flex items-center p-3 border-b border-gray-800">
              <h2 className="text-xl font-medium">Facebook</h2>
              <div className="ml-auto">
                <svg className="h-6 w-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            <FacebookWidget />
          </div>

          <div className="border border-green-800 rounded-md overflow-hidden bg-[#0a0a1a]">
            <div className="flex items-center p-3 border-b border-gray-800">
              <h2 className="text-xl font-medium">Instagram</h2>
              <div className="ml-auto">
                <svg className="h-6 w-6 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
            <InstagramWidget />
          </div>

          <div className="border border-green-800 rounded-md overflow-hidden bg-[#0a0a1a]">
            <div className="flex items-center p-3 border-b border-gray-800">
              <h2 className="text-xl font-medium">X (Twitter)</h2>
              <div className="ml-auto">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
            <TwitterWidget />
          </div>
        </div>
      </div>
    </main>
  )
}

