import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Derksen Trading</h2>
            <p className="text-gray-400 font-light mb-6">
              Norges importør av IBIX sandblåsere – Profesjonell overflatebehandling i Bodø og Nordland
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Produkter</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produkter/ibix-problaster-60-h2o"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  IBIX® Problaster 60 H2O
                </Link>
              </li>
              <li>
                <Link
                  href="/produkter/ibix-problaster-40-h2o"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  IBIX® Problaster 40 H2O
                </Link>
              </li>
              <li>
                <Link
                  href="/produkter/ibix-9-basic"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  IBIX® 9 Basic
                </Link>
              </li>
              <li>
                <Link href="/produkter" className="text-gray-400 hover:text-white transition-colors font-light">
                  Se alle produkter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tjenester/sandblasing"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Sandblåsing
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/graffiti-fjerning"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Graffiti-fjerning
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/industrilakkering"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Industrilakkering
                </Link>
              </li>
              <li>
                <Link href="/tjenester" className="text-gray-400 hover:text-white transition-colors font-light">
                  Se alle tjenester
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Kontakt oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-gray-400 font-light">Bodø Industripark, 8013 Bodø</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a href="tel:+4799999999" className="text-gray-400 hover:text-white transition-colors font-light">
                  +47 999 99 999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a
                  href="mailto:post@derksen.no"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  post@derksen.no
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Derksen Trading AS. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}
