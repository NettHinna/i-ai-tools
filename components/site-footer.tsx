import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="bg-[#f8f9fa] border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/padel-proffen-logo.png"
                alt="Padel Proffen"
                width={150}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Din komplette butikk for padel-utstyr og banetjenester. Vi tilbyr alt du trenger for å forbedre ditt
              spill.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Hurtiglenker</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produkter" className="text-gray-600 hover:text-primary text-sm">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/finn-bane" className="text-gray-600 hover:text-primary text-sm">
                  Finn bane
                </Link>
              </li>
              <li>
                <Link href="/kurs" className="text-gray-600 hover:text-primary text-sm">
                  Kurs og trening
                </Link>
              </li>
              <li>
                <Link href="/turneringer" className="text-gray-600 hover:text-primary text-sm">
                  Turneringer
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-600 hover:text-primary text-sm">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-primary text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Kontakt oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">Padelveien 123, 0123 Oslo, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600 text-sm">+47 123 45 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600 text-sm">kontakt@padelpro.no</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Åpningstider</h4>
              <p className="text-gray-600 text-sm">Man-Fre: 10:00 - 20:00</p>
              <p className="text-gray-600 text-sm">Lør-Søn: 10:00 - 18:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Nyhetsbrev</h3>
            <p className="text-gray-600 text-sm mb-4">
              Abonner på vårt nyhetsbrev for å motta oppdateringer om nye produkter, tilbud og padel-arrangementer.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Din e-post" className="text-sm" />
              <Button className="bg-primary hover:bg-primary/90">Abonner</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Padel Proffen. Alle rettigheter reservert.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/personvern" className="text-gray-500 hover:text-primary text-sm">
              Personvern
            </Link>
            <Link href="/vilkar" className="text-gray-500 hover:text-primary text-sm">
              Vilkår og betingelser
            </Link>
            <Link href="/retur" className="text-gray-500 hover:text-primary text-sm">
              Retur og refusjon
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
