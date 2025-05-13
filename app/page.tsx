import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

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
                <button className="btn-primary px-8 py-3 text-base">Se våre maskiner</button>
              </Link>
              <Link href="/kontakt">
                <button className="btn-outline px-8 py-3 text-base">Kontakt oss for demo</button>
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

      {/* Professional Benefits Section */}
      <section className="section-spacing bg-white overflow-hidden">
        <div className="container container-spacing mx-auto">
          {/* High-impact heading */}
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 border border-primary-100 bg-primary-50 text-primary-700 rounded-full">
              <span className="text-body-small font-medium">Profesjonell kvalitet</span>
            </div>
            <h2 className="font-heading text-h2 text-on-light mb-6">
              IBIX<span className="text-primary-600">®</span> — Satt standarden for profesjonell sandblåsing
            </h2>
            <p className="text-body-large text-on-light-secondary mx-auto max-w-[600px]">
              Markedsledende teknologi med uovertruffen presisjon og effektivitet
            </p>
          </div>

          {/* Large showcase image with overlay text */}
          <div className="relative rounded-xl overflow-hidden mb-24 shadow-lg">
            <div className="aspect-[21/9] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
                alt="Sandblåsing med gnister"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overlay-gradient-bottom flex flex-col justify-end p-6 md:p-10">
                <div className="max-w-4xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    Revolusjonerende støvfri teknologi
                  </h3>
                  <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl font-light">
                    IBIX kombinerer kraft og presisjon med opptil 99% støvreduksjon — industrivinnende ytelse i et
                    kompakt, mobilt system
                  </p>
                  <Link href="/teknologi">
                    <button className="btn-primary gap-2 flex items-center">
                      Utforsk teknologien <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Støvfri presisjon</h3>
              <p className="text-gray-600 font-light">
                Patentert teknologi som reduserer støv med opptil 99% for renere, sikrere og mer miljøvennlig
                sandblåsing
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ekspertise & support</h3>
              <p className="text-gray-600 font-light">
                Over 10 års erfaring med grundig opplæring, teknisk støtte og lokal service i Bodø og Nordland
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Allsidig beskyttelse</h3>
              <p className="text-gray-600 font-light">
                Perfekt for alt fra rustfjerning til graffiti-fjerning – én maskin for utallige bruksområder
              </p>
            </div>
          </div>

          {/* Comparison image section */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                Opplev forskjellen med IBIX<span className="text-primary-600">®</span> teknologi
              </h3>
              <p className="text-lg text-gray-600 font-light">
                Våre maskiner er opptil 60% lettere enn tradisjonelle sandblåsere med lignende kapasitet, men leverer
                markedsledende ytelse og kontroll.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-light">Enestående mobilitet og manøvrerbarhet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-light">30% raskere rengjøring med Helix-dyse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-light">Lavt luftforbruk for kostnadseffektiv drift</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-light">Presis kontroll for skånsomme resultater</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/produkter">
                  <button className="btn-primary flex items-center gap-2">
                    Utforsk produktserien <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg"
                  alt="Profesjonell arbeider med verneutstyr"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-secondary-800 to-secondary-700 rounded-xl p-8 md:p-12 shadow-md text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Oppdag hvorfor profesjonelle velger IBIX<span className="text-primary-300">®</span>
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto font-light">
              Kontakt oss i dag for en uforpliktende demonstrasjon av vårt profesjonelle sandblåseutstyr
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="btn-primary px-8">Kontakt oss</button>
              </Link>
              <Link href="/produkter">
                <button className="btn-outline px-8">Se våre produkter</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produkter Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container container-spacing mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-800 mb-2">Våre sandblåsere</h2>
              <p className="text-gray-600 md:text-lg font-light">
                Kvalitetsmaskiner for profesjonell overflatebehandling
              </p>
            </div>
            <Link href="/produkter" className="mt-4 md:mt-0">
              <button className="btn-secondary flex items-center gap-1">
                Se alle maskiner <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
                  alt="Industrianlegg for overflatebehandling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Problaster 60 H2O</h3>
                <p className="text-gray-600 mb-4 font-light">
                  60 liter kombiblåser, for proff bruk, ~45 kg, HiPower dobbel lufttilførsel for maks effekt.
                </p>
                <Link href="/produkter/ibix-problaster-60-h2o">
                  <button className="btn-secondary w-full">Se detaljer</button>
                </Link>
              </div>
            </div>
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
                  alt="Presisjonsutstyr i blått lys"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Problaster 40 H2O</h3>
                <p className="text-gray-600 mb-4 font-light">
                  40L kombiblåser, allsidig og kompakt, yter som en stor tradisjonell potte men veier kun 35kg.
                </p>
                <Link href="/produkter/ibix-problaster-40-h2o">
                  <button className="btn-secondary w-full">Se detaljer</button>
                </Link>
              </div>
            </div>
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%284%29-glZcVxwSM9VSqQWgANYueBE4azT9zU.jpeg"
                  alt="Industrielle tannhjul og mekanismer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® 9 Basic</h3>
                <p className="text-gray-600 mb-4 font-light">
                  9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby (bilrestaurering etc.).
                </p>
                <Link href="/produkter/ibix-9-basic">
                  <button className="btn-secondary w-full">Se detaljer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester Section */}
      <section className="section-spacing bg-white">
        <div className="container container-spacing mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-800 mb-2">
                Våre tjenester i Bodø og Nordland
              </h2>
              <p className="text-gray-600 md:text-lg font-light">Profesjonell overflatebehandling og sandblåsing</p>
            </div>
            <Link href="/tjenester" className="mt-4 md:mt-0">
              <button className="btn-secondary flex items-center gap-1">
                Se alle tjenester <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%284%29-glZcVxwSM9VSqQWgANYueBE4azT9zU.jpeg"
                  alt="Containerskip i havn"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Sandblåsing på oppdrag</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 font-light">
                  Mobil sandblåsing av metall, betong, mur osv. Vi kommer ut med utstyr og kompressor til ditt prosjekt.
                </p>
                <Link href="/tjenester/sandblasing">
                  <button className="btn-secondary w-full">Les mer</button>
                </Link>
              </div>
            </div>
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
                  alt="Industrihall med blått lys"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Fjerning av graffiti</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 font-light">
                  Skånsom fjerning av uønsket tagging på mur, stein, metall. Med IBIX våtblåseteknikk fjerner vi maling
                  uten å skade underlaget.
                </p>
                <Link href="/tjenester/graffiti-fjerning">
                  <button className="btn-secondary w-full">Les mer</button>
                </Link>
              </div>
            </div>
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
                  alt="Stor industrihall"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Industrilakkering</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 font-light">
                  Vi tilbyr også påføring av beskyttende belegg etter sandblåsing. Som forhandler av ZINGA® sinkbelegg
                  kan vi galvanisere på stedet.
                </p>
                <Link href="/tjenester/industrilakkering">
                  <button className="btn-secondary w-full">Les mer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-secondary-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bli vår partner</h2>
              <p className="text-xl text-gray-200 mb-6 font-light">Tenk det. Bring det. Oppnå det.</p>
              <div className="mb-8">
                <p className="text-sm text-gray-300 mb-1 font-light">Antall fornøyde kunder</p>
                <p className="text-4xl font-semibold text-primary-300">500+</p>
              </div>
              <Link href="/bli-partner">
                <button className="btn-outline">Bli partner</button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg"
                  alt="Profesjonelle arbeidere i samarbeid"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
