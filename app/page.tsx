"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Wind = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h6l-3-3m0 0l-3 3m3-3v12" />
  </svg>
)

const Wrench = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Vacuum = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
)

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const Calculator = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={2} />
    <line x1="8" y1="6" x2="16" y2="6" strokeWidth={2} />
    <line x1="8" y1="10" x2="8" y2="10" strokeWidth={2} />
    <line x1="12" y1="10" x2="12" y2="10" strokeWidth={2} />
    <line x1="16" y1="10" x2="16" y2="10" strokeWidth={2} />
    <line x1="8" y1="14" x2="8" y2="14" strokeWidth={2} />
    <line x1="12" y1="14" x2="12" y2="14" strokeWidth={2} />
    <line x1="16" y1="14" x2="16" y2="14" strokeWidth={2} />
    <line x1="8" y1="18" x2="8" y2="18" strokeWidth={2} />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth={2} />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" strokeWidth={2} />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" strokeWidth={2} />
  </svg>
)

const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

export default function HomePage() {
  const [homeSize, setHomeSize] = useState(120)

  const calculateSavings = () => {
    const kwhSaved = Math.round(homeSize * 0.85 * 150) // Estimate based on 85% heat recovery
    const moneySaved = Math.round(kwhSaved * 2.5) // Estimate at 2.5 kr per kWh
    return { kwh: kwhSaved, money: moneySaved }
  }

  const savings = calculateSavings()

  const services = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Balansert ventilasjon",
      description:
        "Vi installerer moderne ventilasjonsanlegg i nye og eksisterende boliger. Våre systemer gjenvinner over 85% av varmen.",
      image: "/images/modern-kitchen.png",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Service og vedlikehold",
      description:
        "Vi sørger for at ditt ventilasjonsanlegg fungerer optimalt. Filterbytte, rens og oppgradering av eldre systemer.",
      image: "/images/home-entertainment.png",
    },
    {
      icon: <Vacuum className="h-8 w-8" />,
      title: "Sentralstøvsuger",
      description:
        "Vi monterer sentralstøvsugere som gjør rengjøringen enklere og luften renere. Perfekt for astmatikere og allergikere.",
      image: "/images/vacuum-cleaner.png",
    },
  ]

  const stats = [
    { number: "25+", label: "År med erfaring", icon: <Award className="h-6 w-6" /> },
    { number: "85%", label: "Varmegjenvinning", icon: <Leaf className="h-6 w-6" /> },
    { number: "500+", label: "Fornøyde kunder", icon: <Users className="h-6 w-6" /> },
    { number: "100%", label: "Norske fagfolk", icon: <Shield className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/norsk-boligventilasjon-logo.webp"
                alt="Norsk Boligventilasjon"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#tjenester" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">
                Tjenester
              </a>
              <a href="#kalkulator" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">
                Energikalkulator
              </a>
              <a href="#om-oss" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">
                Om oss
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">
                Kontakt
              </a>
            </nav>
            <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
              <Phone className="h-4 w-4 mr-2" />
              Ring oss
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cozy-reading.png"
            alt="Komfortabelt hjem med god ventilasjon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Badge className="bg-[#FF6B35] text-white mb-4 text-sm px-4 py-2">Sentral godkjenning</Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-[#FF6B35]">Pust lett</span>i et sunt hjem
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Norsk Boligventilasjon installerer energieffektive ventilasjonssystemer som gir deg frisk luft i alle rom og
            reduserer oppvarmingskostnader. Vi hjelper boligeiere i Oslo-regionen med bedre inneklima og lavere
            strømregning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg">
              Gratis befaring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm"
            >
              Beregn besparelse
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B35] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Calculator Section */}
      <section id="kalkulator" className="py-20 bg-gradient-to-br from-[#FF6B35]/5 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[#FF6B35] text-white mb-4">Energikalkulator</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hvor mye kan du spare?</h2>
              <p className="text-xl text-gray-600">
                Få umiddelbar oversikt over potensielle besparelser med balansert ventilasjon
              </p>
            </div>

            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="mr-3 h-6 w-6" />
                  Interaktiv energikalkulator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Boligstørrelse: {homeSize} m²
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="50"
                        max="300"
                        value={homeSize}
                        onChange={(e) => setHomeSize(Number.parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((homeSize - 50) / 250) * 100}%, #e5e7eb ${((homeSize - 50) / 250) * 100}%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>50 m²</span>
                        <span>300 m²</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#FF6B35]/5 to-[#FF6B35]/10 p-6 rounded-xl border border-[#FF6B35]/20">
                      <div className="flex items-center mb-3">
                        <Leaf className="h-6 w-6 text-[#FF6B35] mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">Energisparing per år</h3>
                      </div>
                      <div className="text-3xl font-bold text-[#FF6B35] mb-2">
                        {savings.kwh.toLocaleString("nb-NO")} kWh
                      </div>
                      <p className="text-sm text-gray-600">Med 85% varmegjenvinning</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center mb-3">
                        <Home className="h-6 w-6 text-green-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">Pengesparing per år</h3>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {savings.money.toLocaleString("nb-NO")} kr
                      </div>
                      <p className="text-sm text-gray-600">Estimert ved 2,50 kr/kWh</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tilleggsinformasjon:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Estimert besparelse - ta kontakt for nøyaktig beregning</li>
                      <li>• Moderne anlegg gjenvinner minst 85% av varmen</li>
                      <li>• Bedre inneklima reduserer også helsekostnader</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-[#FF6B35] hover:bg-[#E55A2B] text-lg py-3">
                      <Phone className="mr-2 h-5 w-5" />
                      Bestill gratis befaring
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-[#FF6B35] text-[#FF6B35] bg-white font-semibold shadow-md hover:bg-[#FF6B35] hover:text-white"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Få tilbud på e-post
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#FF6B35]/10 text-[#E55A2B] mb-4">Våre tjenester</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Komplett ventilasjon for ditt hjem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fra installasjon av nye anlegg til service og vedlikehold - vi har alt du trenger for et sunt inneklima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg?height=200&width=400"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white">{service.icon}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-[#FF6B35] group-hover:text-white transition-colors bg-transparent border-[#FF6B35] text-[#FF6B35]"
                  >
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Trygghet og kvalitet</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Derfor velger kunder oss</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer testimonial */}
            <Card className="p-6 shadow-lg border-0">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5/5 stjerner</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Jobben ble gjort raskt og profesjonelt – nå har vi et mye bedre inneklima hjemme! Strømregningen har
                også gått ned merkbart."
              </p>
              <p className="font-semibold text-gray-900">- Kari, Skedsmo</p>
            </Card>

            {/* Certification */}
            <Card className="p-6 shadow-lg border-0">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-[#FF6B35] mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Sentral godkjenning</h3>
              </div>
              <p className="text-gray-700">
                Godkjent ventilasjonsinstallatør som oppfyller strenge kvalitetskrav. Dette gir deg trygghet for solid
                kompetanse og faglig utførelse.
              </p>
            </Card>

            {/* Experience */}
            <Card className="p-6 shadow-lg border-0">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">25+ års erfaring</h3>
              </div>
              <p className="text-gray-700">
                Vi har ventilert hundrevis av hjem siden år 2000. Som lokal ekspert i Oslo/Akershus kjenner vi norske
                forhold og dine behov.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#FF6B35]/10 text-[#E55A2B] mb-4">Om Norsk Boligventilasjon</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bedre inneklima – lavere strømregning
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Norsk Boligventilasjon tilbyr montering og service av ventilasjonsanlegg og sentralstøvsugere til
                privatboliger og bedrifter i Akershus, Oslo, Østfold og Bærum. Vi består kun av norske fagfolk med mange
                års erfaring.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I dagens situasjon med høye strømpriser er et moderne ventilasjonsanlegg noe av det mest fornuftige man
                kan investere i for å spare energi. Våre løsninger gjenvinner minst 85% av varmen i huset.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-[#FF6B35]/10 p-2 rounded-lg mr-3">
                    <Wind className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Balansert ventilasjon</div>
                    <div className="text-sm text-gray-600">Nye og eksisterende boliger</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FF6B35]/10 p-2 rounded-lg mr-3">
                    <Leaf className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Miljøvennlig</div>
                    <div className="text-sm text-gray-600">85% varmegjenvinning</div>
                  </div>
                </div>
              </div>

              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-lg px-8 py-3">
                Kontakt oss i dag
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/images/home-comfort.png" alt="Komfortabelt hjem" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/images/modern-kitchen.png" alt="Moderne kjøkken" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/home-entertainment.png"
                      alt="Hjemmeunderholdning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/images/cozy-reading.png" alt="Koselig lesestund" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-[#FF6B35] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/norsk-boligventilasjon-logo.webp"
                  alt="Norsk Boligventilasjon"
                  width={180}
                  height={54}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Profesjonell installasjon og service av ventilasjonsanlegg og sentralstøvsugere. Vi hjelper deg med
                bedre inneklima og lavere energikostnader.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-white text-[#FF6B35] hover:bg-gray-50 hover:text-[#E55A2B] font-semibold shadow-md"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ring oss
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send e-post
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Tjenester</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Balansert ventilasjon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Service & vedlikehold
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sentralstøvsuger
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gratis befaring
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Telefon: +47 123 45 678
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E-post: post@nbv.no
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mysen, Norge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Org.nr: 123 456 789
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; {new Date().getFullYear()} Norsk Boligventilasjon. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #FF6B35;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #FF6B35;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}
