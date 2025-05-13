import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2-uEW5VTO30fyJZw280uoGlCK4qF1fEb.png"
              alt="Derksen Trading logo"
              width={160}
              height={45}
              className="h-auto w-auto mb-4"
              aria-label="Derksen Trading logo"
            />
            <p className="text-gray-300 text-sm font-light mt-4 max-w-xs">
              Derksen Trading er Norges offisielle importør av IBIX sandblåsere. Vi tilbyr profesjonell
              overflatebehandling, sandblåsing og industrilakkering i Bodø og Nordland.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produkter</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/produkter/torr-sandblasing" className="text-gray-300 hover:text-white">
                  Tørr sandblåsing
                </Link>
              </li>
              <li>
                <Link href="/produkter/vat-sandblasing" className="text-gray-300 hover:text-white">
                  Våt sandblåsing
                </Link>
              </li>
              <li>
                <Link href="/produkter/tilbehor" className="text-gray-300 hover:text-white">
                  Tilbehør
                </Link>
              </li>
              <li>
                <Link href="/produkter/verneutstyr" className="text-gray-300 hover:text-white">
                  Verneutstyr
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/tjenester/sandblasing" className="text-gray-300 hover:text-white">
                  Sandblåsing
                </Link>
              </li>
              <li>
                <Link href="/tjenester/graffiti-fjerning" className="text-gray-300 hover:text-white">
                  Graffiti-fjerning
                </Link>
              </li>
              <li>
                <Link href="/tjenester/industrilakkering" className="text-gray-300 hover:text-white">
                  Industrilakkering
                </Link>
              </li>
              <li>
                <Link href="/tjenester/utleie" className="text-gray-300 hover:text-white">
                  Utleie av utstyr
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt oss</h3>
            <address className="not-italic text-gray-300 text-sm font-light">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-2 text-primary-400" />
                <span>Industriveien 123, 8013 Bodø</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-primary-400" />
                <span>+47 123 45 678</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <span>post@derksentrading.no</span>
              </div>
            </address>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Besøk vår Facebook-side / Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Følg oss på Instagram / Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Koble til på LinkedIn / Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-xs font-light">
          <p>© {new Date().getFullYear()} Derksen Trading. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}
