import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Career() {
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
            <span>Career</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join us and unleash your potential</h1>
              <p className="text-xl text-blue-100 mb-6">
                Discover exciting career opportunities at UzOman Investment Company and be part of our mission to drive
                economic growth.
              </p>
              <Link href="#current-openings">
                <button className="btn-outline">View current vacancies</button>
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-e4fdfd8cb04d894c92356cdd6954199f-gbMzj7BoUavY3A4IuYWoBdPKgExuyl.webp"
                alt="UzOman team members in discussion"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 md:py-24" id="current-openings">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Current Openings</h2>
          <p className="section-subtitle">
            Join our team of professionals and contribute to impactful investments across Uzbekistan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Job 1 */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Investment Analyst</h3>
                  <p className="text-gray-600">Financial Services Division</p>
                </div>
                <span className="tag">Full-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                We are seeking a talented Investment Analyst to join our Financial Services team. The ideal candidate
                will have strong analytical skills and experience in financial modeling and investment research.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tashkent, Uzbekistan</span>
                <Link
                  href="/career/investment-analyst"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job 2 */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Senior Legal Counsel</h3>
                  <p className="text-gray-600">Legal Department</p>
                </div>
                <span className="tag">Full-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                We are looking for an experienced Senior Legal Counsel to provide comprehensive legal support for our
                investment activities, including due diligence, contract negotiation, and regulatory compliance.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tashkent, Uzbekistan</span>
                <Link
                  href="/career/senior-legal-counsel"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job 3 */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Portfolio Manager</h3>
                  <p className="text-gray-600">Real Estate Division</p>
                </div>
                <span className="tag">Full-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                We are seeking an experienced Portfolio Manager to oversee our real estate investments, develop asset
                management strategies, and identify new investment opportunities in the commercial real estate sector.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tashkent, Uzbekistan</span>
                <Link
                  href="/career/portfolio-manager"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job 4 */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Corporate Communications Specialist</h3>
                  <p className="text-gray-600">Marketing & Communications</p>
                </div>
                <span className="tag">Full-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                We are looking for a Corporate Communications Specialist to develop and implement our communications
                strategy, manage media relations, and create compelling content for various stakeholders.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tashkent, Uzbekistan</span>
                <Link
                  href="/career/communications-specialist"
                  className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Benefits</h2>
          <p className="section-subtitle text-center mx-auto">
            At UzOman Investment Company, we value our employees and offer competitive benefits to support their
            wellbeing and professional growth.
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Work in motivating environment</h3>
              <p className="text-gray-600">
                UzOman encourages employees to work independently in a team setting, emphasizing respect for better
                organizational results and the company's growth.
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Respectable salary and bonus system</h3>
              <p className="text-gray-600">
                The payroll system including compensation and bonus system are designed for long-term motivation for
                employees.
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Investment in an employee's development</h3>
              <p className="text-gray-600">
                Development opportunities are provided for every employee through higher career development steps when
                employees within the company become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't find the right position?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <Link href="/career/apply">
            <button className="btn-outline">Submit your resume</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
