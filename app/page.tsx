import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-800/70 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
            alt="Profesjonell sandblåsing med blå lys"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="font-heading text-display text-on-dark mb-4 md:mb-6 leading-tight">Derksen Trading</h1>
            <h2 className="font-heading text-h3 text-on-dark/90 mb-6 md:mb-8 leading-tight font-normal">
              Mobil sandblåsing – Støvfri rengjøring med IBIX® teknologi
            </h2>
            <p className="text-body-large text-on-dark-secondary mb-8 md:mb-10 max-w-2xl">
              Profesjonell overflatebehandling i Bodø og Nordland – Sandblåsing, graffiti-fjerning og industrilakkering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/produkter">
                <Button size="lg" className="px-8 py-6 text-base">
                  Se våre maskiner
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base border-white text-white hover:bg-white/10"
                >
                  Kontakt oss for demo
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="bg-primary-500/10 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary-300" />
                </div>
                <span className="text-on-dark-secondary font-light">Støvfri teknologi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary-500/10 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary-300" />
                </div>
                <span className="text-on-dark-secondary font-light">Mobil og lett utstyr</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary-500/10 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary-300" />
                </div>
                <span className="text-on-dark-secondary font-light">10+ års erfaring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Våre produkter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Derksen Trading tilbyr et komplett utvalg av IBIX sandblåsere og tilbehør for alle typer
              overflatebehandling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg"
                  alt="IBIX 9 Basic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Populær
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IBIX® 9 Basic</h3>
                <p className="text-gray-600 mb-4">
                  9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <Link
                    href="/produkter/ibix-9-basic"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Se detaljer <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
                  alt="IBIX Problaster 25 H2O"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Bestselger
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IBIX® Problaster 25 H2O</h3>
                <p className="text-gray-600 mb-4">
                  25L kombiblåser, allsidig og kompakt, yter som en stor tradisjonell potte men veier kun 28kg.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <Link
                    href="/produkter/ibix-problaster-25-h2o"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Se detaljer <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
                  alt="IBIX Problaster 40 H2O"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Profesjonell
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IBIX® Problaster 40 H2O</h3>
                <p className="text-gray-600 mb-4">
                  40L kombiblåser, kraftig og effektiv, for større prosjekter med behov for lengre driftstid.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <Link
                    href="/produkter/ibix-problaster-40-h2o"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Se detaljer <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/produkter">
              <Button variant="outline" className="px-6 py-3">
                Se alle produkter <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Våre tjenester</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr profesjonelle tjenester innen sandblåsing, graffiti-fjerning og industrilakkering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%282%29-U1eUsrsuHndGSXZ9LMzlaiW6mvS4Nv.jpeg"
                  alt="Sandblåsing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sandblåsing</h3>
                <p className="text-gray-600 mb-4">
                  Mobil sandblåsing av metall, betong, mur, etc. Vi kommer ut med utstyr og kompressor til ditt
                  prosjekt.
                </p>
                <Link
                  href="/tjenester/sandblasing"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  Les mer <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%287%29-bGwh7iYOjIyeNiQZidzcHtGbWkB4HC.jpeg"
                  alt="Graffiti-fjerning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Graffiti-fjerning</h3>
                <p className="text-gray-600 mb-4">
                  Skånsom fjerning av uønsket tagging på vegger, stein, metall. Med IBIX våtblåsingsteknikk fjerner vi
                  maling uten å skade underlaget.
                </p>
                <Link
                  href="/tjenester/graffiti-fjerning"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  Les mer <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow hover:-translate-y-1">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%284%29-glZcVxwSM9VSqQWgANYueBE4azT9zU.jpeg"
                  alt="Industrilakkering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Industrilakkering</h3>
                <p className="text-gray-600 mb-4">
                  Vi tilbyr også påføring av beskyttende belegg etter sandblåsing. Som forhandler av ZINGA® sinkbelegg
                  kan vi galvanisere på stedet.
                </p>
                <Link
                  href="/tjenester/industrilakkering"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  Les mer <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hva våre kunder sier</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er stolte av å ha hjulpet mange kunder med deres prosjekter. Her er noen tilbakemeldinger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Vi har brukt IBIX Problaster 25 H2O i over et år nå, og er svært fornøyd med resultatet. Maskinen er
                lett å bruke og gir et profesjonelt resultat hver gang."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                  ON
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Ole Nordmann</h4>
                  <p className="text-sm text-gray-500">Nordmann Bygg AS</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Derksen Trading hjalp oss med å fjerne graffiti fra en historisk bygning. Resultatet var imponerende -
                all graffiti ble fjernet uten å skade den originale fasaden."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                  KH
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Kari Hansen</h4>
                  <p className="text-sm text-gray-500">Hansen Eiendom</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Vi leide IBIX 9 Basic for å restaurere en veteranbil. Maskinen var enkel å bruke og fjernet rust og
                gammel maling effektivt. Anbefales på det sterkeste!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                  LP
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Lars Pedersen</h4>
                  <p className="text-sm text-gray-500">Pedersen Bilverksted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Klar til å starte ditt prosjekt?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Kontakt oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg med ditt prosjekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" className="px-8 py-6 text-base">
                  Kontakt oss
                </Button>
              </Link>
              <Link href="/produkter">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base border-white text-white hover:bg-white/10"
                >
                  Se våre produkter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
