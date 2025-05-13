import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>
            <span className="text-blue-200">/</span>
            <span>About</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">About Us</h1>

          <div className="max-w-2xl relative z-10">
            <p className="text-xl mb-6">
              We continue to expand our reach and drive sustainable development through strategic investments and
              innovation.
            </p>
            <div className="flex items-center">
              <Link href="#company-info" className="text-blue-200 hover:text-white flex items-center">
                Discover the full potential of our company <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 md:py-24" id="company-info">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What We Stand For</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p>
                Be the leading contributor to the investment climate of Uzbekistan by fostering sustainable growth,
                attracting strategic investments, and supporting key industries that drive economic development and
                innovation.
              </p>
            </div>

            <div className="bg-blue-800 text-white p-8 rounded-lg">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p>
                Achieving long-term capital growth and delivering value to our stakeholders, while contributing to the
                development of the economy and playing a key role in strengthening the relationship between two
                economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Functions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Main Functions</h2>
          <p className="section-subtitle text-center mx-auto">
            We identify high-potential opportunities, enhance value through active management, and drive economic
            development across key sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Strategic Investments</h3>
              <p className="text-gray-600">
                Identifying and investing in high-growth sectors that contribute to economic development and create
                sustainable value.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Value Creation</h3>
              <p className="text-gray-600">
                Enhancing operational efficiency, implementing best governance practices, and driving innovation in our
                portfolio companies.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Economic Development</h3>
              <p className="text-gray-600">
                Supporting key industries that drive sustainable growth, job creation, and strengthen the economic ties
                between Uzbekistan and Oman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our History</h2>
          <p className="section-subtitle">
            Established in 2009 as a partnership between Uzbekistan Fund for Reconstruction & Development (UFRD) and
            Oman Investment Authority (OIA).
          </p>

          <div className="mt-12 relative border-l-2 border-blue-200 pl-8 space-y-12">
            <div>
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2009</h3>
              <p className="text-gray-600">
                Foundation of UzOman Investment Company as a joint venture between Uzbekistan and Oman with initial
                committed capital of US $200 million.
              </p>
            </div>

            <div>
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2012</h3>
              <p className="text-gray-600">
                Expansion of investment portfolio with first major investments in financial services and real estate
                sectors.
              </p>
            </div>

            <div>
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2015</h3>
              <p className="text-gray-600">
                Increased committed capital to US $500 million to support growing investment opportunities in
                Uzbekistan.
              </p>
            </div>

            <div>
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2020</h3>
              <p className="text-gray-600">
                Diversification of portfolio into new sectors including logistics, hospitality, and education to support
                Uzbekistan's economic development priorities.
              </p>
            </div>

            <div>
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Today</h3>
              <p className="text-gray-600">
                Managing over US $250 million in assets across 13 portfolio companies in 6 key sectors, adhering to top
                governance standards and driving sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Core Values</h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in all our operations and investments.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Maintaining the highest ethical standards and transparency in all our dealings.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Teamwork</h3>
              <p className="text-gray-600">
                Collaborating effectively to achieve common goals and deliver exceptional results.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new ideas and approaches to drive growth and create value.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Dedication</h3>
              <p className="text-gray-600">
                Committed to our mission and the success of our stakeholders and portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building the Future</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with UzOman Investment Company to explore strategic investment opportunities and contribute to
            economic growth.
          </p>
          <Link href="/become-partner">
            <button className="btn-outline">Become a partner</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
