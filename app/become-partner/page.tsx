import Image from "next/image"
import Link from "next/link"

export default function BecomePartner() {
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
            <span>Become a partner</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Be Our Partner</h1>
              <p className="text-xl text-blue-100 mb-6">Dream it. Bring it. Achieve it.</p>

              <div className="mb-8">
                <p className="text-sm text-blue-200 mb-1">Net Asset Value (NAV)</p>
                <p className="text-4xl font-bold text-blue-100">US$ 270 M</p>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-e4fdfd8cb04d894c92356cdd6954199f-gbMzj7BoUavY3A4IuYWoBdPKgExuyl.webp"
                alt="Business partners shaking hands"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us for Partnership</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Interest*
                </label>
                <select
                  id="investmentType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="private-equity">Private Equity</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="financial-services">Financial Services</option>
                  <option value="retail">Retail/Shopping Mall</option>
                  <option value="logistics">Logistics Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe your investment interests or partnership proposal"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the processing of my personal data in accordance with the privacy policy
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner With Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Strategic Capital</h3>
              <p className="text-gray-600">
                Access to significant investment capital with a long-term perspective focused on sustainable growth and
                value creation.
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Expertise & Network</h3>
              <p className="text-gray-600">
                Benefit from our extensive experience, industry knowledge, and strong network of business relationships
                in Uzbekistan and Oman.
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Governance & Support</h3>
              <p className="text-gray-600">
                Implementation of international best practices in corporate governance and ongoing operational support
                to enhance business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              For more information about partnership opportunities, please contact our investment team directly:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">Tashkent, Uzbekistan</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">partnerships@uzoman.com</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+998 71 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
