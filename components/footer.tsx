import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 relative mr-2">
                <Image
                  src="/abstract-dt.png"
                  alt="Derksen Trading Logo"
                  width={40}
                  height={40}
                  className="rounded-md bg-white"
                />
              </div>
              <span className="text-xl font-semibold">Derksen Trading</span>
            </div>
            <p className="text-gray-400 font-light mb-6">
              Norges importør av IBIX sandblåsere – Profesjonell overflatebehandling i Bodø og Nordland
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
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
                <span className="text-gray-400 font-light">Industriveien 123, 8013 Bodø, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a href="tel:+4799999999" className="text-gray-400 hover:text-white transition-colors font-light">
                  +47 123 45 678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a
                  href="mailto:post@derksen.no"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  post@derksentrading.no
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Derksen Trading AS. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/personvern" className="text-gray-500 hover:text-gray-400 text-sm">
                Personvern
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookies
              </Link>
              <Link href="/vilkar" className="text-gray-500 hover:text-gray-400 text-sm">
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
