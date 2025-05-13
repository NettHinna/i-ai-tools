import Link from "next/link"
import Image from "next/image"

export default function News() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>
            <span className="text-blue-200">/</span>
            <span>News</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">News & Updates</h1>

          <div className="max-w-2xl">
            <p className="text-xl mb-6">
              Stay updated with the latest news, press releases, and announcements from UzOman Investment Company.
            </p>
          </div>
        </div>
      </section>

      {/* News Listing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="card overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-e4fdfd8cb04d894c92356cdd6954199f-gbMzj7BoUavY3A4IuYWoBdPKgExuyl.webp"
                  alt="UzOman signs new partnership agreement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">June 15, 2023</span>
                  <span className="tag">Partnership</span>
                </div>
                <h3 className="text-xl font-bold mb-2">UzOman Signs Strategic Partnership with Uzbek National Bank</h3>
                <p className="text-gray-600 mb-4">
                  UzOman Investment Company has signed a memorandum of understanding with the National Bank of
                  Uzbekistan to collaborate on financing strategic infrastructure projects.
                </p>
                <Link href="/news/uzoman-signs-partnership" className="text-blue-700 font-medium hover:text-blue-800">
                  Read more
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="card overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-49c822c68c02bd81eccc0a3539c0cf9e-Wre9kC1hKj9AAOW774MooFH40MoSmt.webp"
                  alt="UzOman expands portfolio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">May 22, 2023</span>
                  <span className="tag">Investment</span>
                </div>
                <h3 className="text-xl font-bold mb-2">UzOman Expands Portfolio with New Logistics Investment</h3>
                <p className="text-gray-600 mb-4">
                  UzOman Investment Company announces a $15 million investment in Universal Logistics Services,
                  expanding its presence in the transportation and logistics sector.
                </p>
                <Link
                  href="/news/uzoman-logistics-investment"
                  className="text-blue-700 font-medium hover:text-blue-800"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="card overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-f954d58ee9d3c2fc7da69db693b94431-Vkmcl4ZCODVHrL62BetoqDtZigMKI0.webp"
                  alt="UzOman annual report"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">April 10, 2023</span>
                  <span className="tag">Financial Results</span>
                </div>
                <h3 className="text-xl font-bold mb-2">UzOman Releases 2022 Annual Report with Strong Growth</h3>
                <p className="text-gray-600 mb-4">
                  UzOman Investment Company has released its annual report for 2022, showing a 12% increase in portfolio
                  value and significant progress across key investment sectors.
                </p>
                <Link href="/news/uzoman-annual-report-2022" className="text-blue-700 font-medium hover:text-blue-800">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/news/archive">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                View News Archive
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
