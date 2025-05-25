import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone, Mail, Search, Filter } from "lucide-react"

export const metadata = {
  title: "Finn nærmeste forhandler | Derksen Trading",
  description: "Finn din nærmeste forhandler av IBIX sandblåsere og utstyr i Norge",
}

// Fictional dealer data grouped by region
const dealers = {
  "Nord-Norge": [
    {
      id: 1,
      name: "Nordland Industriservice",
      address: "Industrivegen 34, 8010 Bodø",
      phone: "+47 76 54 32 10",
      email: "kontakt@nordlandindustri.no",
      specialties: ["IBIX Problaster", "Industrielt utstyr", "Service"],
    },
    {
      id: 2,
      name: "Tromsø Verktøysenter",
      address: "Verkstedgata 12, 9019 Tromsø",
      phone: "+47 77 65 43 21",
      email: "post@tromsoverktoysenter.no",
      specialties: ["IBIX 9", "Kleinutstyr", "Reservedeler"],
    },
    {
      id: 3,
      name: "Finnmark Teknisk",
      address: "Havnegata 5, 9800 Vadsø",
      phone: "+47 78 94 32 10",
      email: "salg@finnmarkteknisk.no",
      specialties: ["Komplette løsninger", "Zinga", "Industriservice"],
    },
  ],
  "Midt-Norge": [
    {
      id: 4,
      name: "Trøndelag Sandblåsing AS",
      address: "Verkstedveien 8, 7042 Trondheim",
      phone: "+47 73 84 65 43",
      email: "post@trondelagsandblasing.no",
      specialties: ["IBIX Problaster 60", "Komplette løsninger", "Opplæring"],
    },
    {
      id: 5,
      name: "Møre Industriutstyr",
      address: "Industrigata 45, 6003 Ålesund",
      phone: "+47 70 12 34 56",
      email: "kontakt@moreindustriutstyr.no",
      specialties: ["IBIX Problaster 40", "IBIX 25", "Teknisk support"],
    },
  ],
  Vestlandet: [
    {
      id: 6,
      name: "Bergen Proffservice",
      address: "Loddefjordveien 104, 5038 Bergen",
      phone: "+47 55 32 10 98",
      email: "post@bergenproff.no",
      specialties: ["Alle IBIX-modeller", "Marine løsninger", "Vedlikehold"],
    },
    {
      id: 7,
      name: "Stavanger Industripartner",
      address: "Forusbeen 78, 4033 Stavanger",
      phone: "+47 51 87 65 43",
      email: "kundeservice@stavangerindustri.no",
      specialties: ["Oljeindustri-løsninger", "IBIX H2O-serien", "Offshore-utstyr"],
    },
  ],
  Østlandet: [
    {
      id: 8,
      name: "Oslo Teknisk Forsyning",
      address: "Brobekkveien 80, 0582 Oslo",
      phone: "+47 22 65 43 21",
      email: "salg@osloteknisk.no",
      specialties: ["Komplett IBIX-sortiment", "Serviceavtaler", "Skreddersydde løsninger"],
    },
    {
      id: 9,
      name: "Drammen Verktøysenter",
      address: "Kobbervikdalen 65, 3036 Drammen",
      phone: "+47 32 89 76 54",
      email: "info@drammenverktoy.no",
      specialties: ["IBIX 9 Basic", "Håndverkertjenester", "Utleie"],
    },
    {
      id: 10,
      name: "Hamar Industrisalg",
      address: "Torggata 22, 2317 Hamar",
      phone: "+47 62 51 43 21",
      email: "post@hamarindustri.no",
      specialties: ["IBIX Problaster", "Landbruksløsninger", "Opplæring"],
    },
  ],
  Sørlandet: [
    {
      id: 11,
      name: "Kristiansand Maskinservice",
      address: "Setesdalsveien 90, 4617 Kristiansand",
      phone: "+47 38 12 34 56",
      email: "post@kristiansandmaskin.no",
      specialties: ["Maritim industri", "IBIX-service", "Rådgivning"],
    },
    {
      id: 12,
      name: "Arendal Verktøy & Utstyr",
      address: "Havnegata 12, 4836 Arendal",
      phone: "+47 37 23 45 67",
      email: "salg@arendalverktoy.no",
      specialties: ["IBIX-komplettsett", "Maritimt utstyr", "Teknisk support"],
    },
  ],
}

export default function DealerLocatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero section */}
      <div className="mb-16 text-center">
        <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
          Forhandlere
        </span>
        <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-heading">
          Finn nærmeste <span className="text-brand-600 font-normal">forhandler</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
          Som Norges offisielle importør av IBIX sandblåsere, samarbeider vi med utvalgte forhandlere over hele landet
        </p>
      </div>

      {/* Map image and intro */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16 items-center">
        <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522.9511990873068!2d14.404712677318518!3d67.28346839478173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45df10f6d4a7e3a9%3A0x9b0b0c5a79f0a1a0!2sFredensborgveien%207%2C%208003%20Bod%C3%B8%2C%20Norway!5e0!3m2!1sen!2sus!4v1715694372001!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Kart over Derksen Trading i Bodø"
          ></iframe>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-light text-slate-900 font-heading">
            Hvordan finne din <span className="text-brand-600 font-normal">forhandler</span>
          </h2>
          <p className="mb-4 text-lg text-slate-600 font-light leading-relaxed">
            Vi har et landsdekkende nettverk av autoriserte forhandlere som kan hjelpe deg med å finne den riktige
            IBIX-løsningen for dine behov. Alle våre forhandlere er godt kjent med produktene våre og kan tilby
            ekspertveiledning, demonstrasjoner og teknisk støtte.
          </p>
          <p className="mb-8 text-lg text-slate-600 font-light leading-relaxed">
            Bla gjennom listen nedenfor for å finne din nærmeste forhandler, eller bruk søkefunksjonen for å filtrere
            etter region eller spesialitet.
          </p>
          <Link href="/kontakt">
            <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:scale-105">
              Kontakt oss direkte <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and filter */}
      <div className="bg-slate-50 rounded-xl p-6 mb-12 shadow-sm border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Søk etter forhandler eller sted..."
                className="pl-10"
                aria-label="Søk etter forhandler"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                className="w-full h-10 rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Filtrer etter region"
              >
                <option value="">Alle regioner</option>
                {Object.keys(dealers).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <Button className="bg-brand-600 hover:bg-brand-700">Søk</Button>
          </div>
        </div>
      </div>

      {/* Dealer listings by region */}
      {Object.entries(dealers).map(([region, dealerList]) => (
        <div key={region} className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 font-heading mb-6 pb-2 border-b border-slate-200">
            <span className="text-brand-600 font-normal">{region}</span>
            <span className="ml-2 text-slate-400 text-lg">({dealerList.length} forhandlere)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealerList.map((dealer) => (
              <Card key={dealer.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-slate-900 mb-3">{dealer.name}</h3>

                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-light">{dealer.address}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <Phone className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-light">{dealer.phone}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-5">
                    <Mail className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-light">{dealer.email}</span>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Spesialiteter:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dealer.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* CTA section */}
      <div className="bg-brand-50 rounded-2xl p-8 mt-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-slate-900 font-heading mb-4">
            Bli en <span className="text-brand-600 font-normal">autorisert forhandler</span>
          </h2>
          <p className="mb-6 text-slate-600 font-light">
            Er du interessert i å bli en autorisert forhandler av IBIX sandblåsere? Kontakt oss i dag for å lære mer om
            vårt forhandlerprogram og fordelene ved å samarbeide med Norges ledende leverandør av IBIX-produkter.
          </p>
          <Link href="/kontakt">
            <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:scale-105">
              Kontakt oss for forhandlerinformasjon <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
