import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function InvestmentPortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Investment portfolio</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Equity & Real Estate</h1>
          <p className="text-xl text-gray-600 mb-8">A diversified portfolio across various sectors.</p>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-f954d58ee9d3c2fc7da69db693b94431-Vkmcl4ZCODVHrL62BetoqDtZigMKI0.webp"
              alt="Investment portfolio"
              width={1200}
              height={500}
              className="w-full h-auto"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-end p-8">
              <div className="grid grid-cols-2 gap-12 text-white">
                <div>
                  <h3 className="text-sm text-blue-200 mb-1">Statistics:</h3>
                  <p className="stat-value">13</p>
                  <p className="stat-label">Portfolio Companies</p>
                </div>
                <div>
                  <p className="stat-value">6</p>
                  <p className="stat-label">Sectors Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Covered */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sectors Covered</h2>

          <div className="flex flex-wrap gap-2 mb-12">
            <span className="tag">Retail/Shopping Mall</span>
            <span className="tag">Real Estate / Business Centre</span>
            <span className="tag">Universal Logistics Services</span>
            <span className="tag">Hospitality</span>
            <span className="tag">Financial Services</span>
            <span className="tag">Education</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Investments</h2>
          <p className="text-gray-600 mb-8">
            UOIC has a diversified portfolio consisting of leading companies operating in various sectors in the
            Republic of Uzbekistan.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Investment Card 1 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Financial Services</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Temiryol Sugurta</h3>
                <p className="text-gray-600 mb-4">
                  Temiryol Sugurta is general insurance company providing insurance services in all 17 classes of
                  voluntary insurance with an emphasis on property, cargo and motor vehicle insurance. Temiryol Sugurta
                  is in Top 5 insurance companies according to the premiums collected.
                </p>
                <Link
                  href="/investment-portfolio/temiryol-sugurta"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Investment Card 2 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Retail/Shopping Mall</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Riviera Mall</h3>
                <p className="text-gray-600 mb-4">
                  One of the largest shopping and entertainment centers in Tashkent, offering a wide range of retail,
                  dining, and leisure options for visitors of all ages.
                </p>
                <Link
                  href="/investment-portfolio/riviera-mall"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Investment Card 3 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Real Estate / Business Centre</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Simurg Business Center</h3>
                <p className="text-gray-600 mb-4">
                  A premium office complex in the heart of Tashkent, providing modern workspace solutions for local and
                  international businesses.
                </p>
                <Link
                  href="/investment-portfolio/simurg-business-center"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Investment Card 4 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Universal Logistics Services</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ULS Group</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive logistics solutions provider offering transportation, warehousing, and supply chain
                  management services across Central Asia.
                </p>
                <Link
                  href="/investment-portfolio/uls-group"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Investment Card 5 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Retail/Shopping Mall</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Samarkand Darvoza</h3>
                <p className="text-gray-600 mb-4">
                  Modern shopping and entertainment complex in Samarkand, combining traditional architecture with
                  contemporary retail experiences.
                </p>
                <Link
                  href="/investment-portfolio/samarkand-darvoza"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Investment Card 6 */}
            <div className="card">
              <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium">Hospitality</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bukhara Palace</h3>
                <p className="text-gray-600 mb-4">
                  Luxury hotel in the historic city of Bukhara, offering premium accommodations and authentic cultural
                  experiences for international tourists.
                </p>
                <Link
                  href="/investment-portfolio/bukhara-palace"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Investment Criteria</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Investment size</h3>
              <p className="text-gray-600">USD 5 million - $20 million</p>
            </div>

            <div className="card p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">UzOman ownership position</h3>
              <p className="text-gray-600">Significant Minority (20%-49%)</p>
            </div>

            <div className="card p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Investment period</h3>
              <p className="text-gray-600">5-8 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Mandate */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Investment Mandate</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">01</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Focused asset class</h3>
                <p className="text-gray-600">Private Equity and Public Equity</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">04</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Investment targets</h3>
                <p className="text-gray-600">
                  Private companies in need of growth capital, projects that will strengthen the industry value chain.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">02</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Focused geography</h3>
                <p className="text-gray-600">Republic of Uzbekistan</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">05</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Time horizon</h3>
                <p className="text-gray-600">Medium and Long-term investments</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">03</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Focused industries</h3>
                <p className="text-gray-600">
                  Industries that contribute to economic growth and attractive returns such as heavy industry, consumer,
                  logistics, healthcare, education, tourism and etc.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl font-bold text-blue-600">06</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Value added</h3>
                <p className="text-gray-600">
                  To add value to the investee companies via growth, capital restructuring, efficiency and corporate
                  governance improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Investment Opportunities?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore partnership opportunities with UzOman Investment Company and be part of Uzbekistan's economic growth
            story.
          </p>
          <Link href="/become-partner">
            <button className="btn-outline">Become a partner</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
