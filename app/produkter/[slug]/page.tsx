import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This is a static demo page. In a real implementation, this page would
// fetch product data based on the slug parameter from a database or CMS.
export default function ProductPage({ params }: { params: { slug: string } }) {
  // For demo purposes, we're using a hardcoded product
  // In a real app, you would fetch this from your database
  // If the product doesn't exist, return a 404
  if (!params.slug || params.slug === "undefined") {
    notFound()
  }

  const product = {
    id: "ibix-problaster-25-h2o",
    name: "IBIX® Problaster 25 H2O",
    description: "25L kombiblåser, allsidig og kompakt, yter som en stor tradisjonell potte men veier kun 28kg.",
    longDescription:
      "IBIX 25 H2O er en kombinert tørr/våtblåser med 25 liters beholder. Ideell for alt fra fasaderens til skipsvedlikehold – leverer profesjonell ytelse i bærbart format. Maskinen er bygget i aluminium for lav vekt og har hjulunderstell som gjør at én person enkelt kan flytte den rundt på vanskelig tilgjengelige steder.",
    features: [
      "Kombinert tørr/våt funksjonalitet",
      "Lav vekt og kompakt design",
      "Helix-teknologi for 30% raskere rengjøring",
      "Justerbart trykk fra 0,2 til 7,5 bar",
      "Egnet for innendørs bruk med minimal støvdannelse",
      "Aluminium og rustfritt stål konstruksjon",
    ],
    specifications: [
      { name: "Kapasitet", value: "25 liter abrasiv" },
      { name: "Vekt", value: "28 kg (tom)" },
      { name: "Trykk", value: "0,2–7,5 bar justerbart" },
      { name: "Luftforbruk", value: "~1900 L/min (67 CFM) @ 7 bar" },
      { name: "Dyser", value: "5,5 mm standard, dysekit 2–7 mm tilgjengelig" },
      { name: "Modus", value: "Tørr eller våt (innebygget vanninjeksjon)" },
      { name: "Materiale", value: "Aluminium, rustfritt stål koblinger" },
      { name: "Spesial", value: "Helix-dyse kompatibel (30% raskere rengjøring)" },
    ],
    applications: [
      "Fasaderengjøring",
      "Graffiti-fjerning",
      "Rustfjerning",
      "Malingsfjerning",
      "Restaurering av treverk",
      "Rengjøring av historiske bygninger",
      "Skipsvedlikehold",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-1U4HpdbIxQe2Uo0Umsnv9SVJhWk07D.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-b0mJ7pFp7jLOQzqaFRdcfFmHscBc4f.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%287%29-bGwh7iYOjIyeNiQZidzcHtGbWkB4HC.jpeg",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/produkter" className="hover:text-gray-900 flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Tilbake til produkter
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border bg-gray-100">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} bilde ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">{product.name}</h1>
                <p className="mt-4 text-gray-600 text-lg font-light">{product.description}</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Nøkkelegenskaper</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <Link href="/kontakt">
                  <Button size="lg" className="w-full md:w-auto">
                    Kontakt oss for pris
                  </Button>
                </Link>
                <p className="mt-2 text-sm text-gray-600 font-light">
                  Kontakt oss for et tilbud tilpasset dine behov. Vi tilbyr også utleie av dette utstyret.
                </p>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="specifications">
              <TabsList className="w-full justify-start border-b rounded-none">
                <TabsTrigger value="specifications">Spesifikasjoner</TabsTrigger>
                <TabsTrigger value="description">Beskrivelse</TabsTrigger>
                <TabsTrigger value="applications">Bruksområder</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="border p-3 md:p-4 font-medium">{spec.name}</td>
                          <td className="border p-3 md:p-4 font-light">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="description" className="pt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4 font-light">{product.longDescription}</p>
                  <p className="text-gray-600 mb-4 font-light">
                    IBIX 25 H2O er utstyrt med IBIX' patenterte Helix-system for skånsom og effektiv rengjøring. Det gir
                    større treffsikkerhet på overflaten og lar deg jobbe 30% raskere med fint media.
                  </p>
                  <p className="text-gray-600 mb-4 font-light">
                    Kombinert tørr/våt gjør den svært allsidig – en maskin for alle jobber. Lav vekt og hjulunderstell
                    gjør at én person kan flytte den rundt på vanskelig tilgjengelige steder (stillaser, tak etc.). Lavt
                    luftforbruk ift. effekt – kan drives med en medium kompressor. Egnet for innendørs bruk (ved
                    våtblåsing) da støvdannelse er minimal.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start gap-2 p-4 border rounded-lg">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="font-light">{application}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Relaterte produkter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="modern-card">
                <div className="aspect-video relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%282%29-U1eUsrsuHndGSXZ9LMzlaiW6mvS4Nv.jpeg"
                    alt="IBIX Problaster 40 H2O"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold mb-2">IBIX® Problaster 40 H2O</h3>
                  <p className="text-gray-600 mb-4 font-light">40L kombiblåser for større prosjekter</p>
                  <Link href="/produkter/ibix-problaster-40-h2o">
                    <Button variant="outline" className="w-full">
                      Se detaljer
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="modern-card">
                <div className="aspect-video relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-b0mJ7pFp7jLOQzqaFRdcfFmHscBc4f.jpeg"
                    alt="IBIX Helix dyse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold mb-2">IBIX® Helix dyse</h3>
                  <p className="text-gray-600 mb-4 font-light">Patentert roterende dyse for effektiv rengjøring</p>
                  <Link href="/produkter/tilbehor/helix-dyse">
                    <Button variant="outline" className="w-full">
                      Se detaljer
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="modern-card">
                <div className="aspect-video relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-c22NYbfsd936QgR7Zo72sCx5nevdXh.jpeg"
                    alt="Sandblåserhjelm"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold mb-2">Sandblåserhjelm</h3>
                  <p className="text-gray-600 mb-4 font-light">Profesjonell hjelm med lufttilførsel</p>
                  <Link href="/produkter/verneutstyr/sandblaserhjelm">
                    <Button variant="outline" className="w-full">
                      Se detaljer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Interessert i {product.name}?</h2>
          <p className="text-gray-600 text-lg font-light max-w-3xl mx-auto mb-6">
            Kontakt oss i dag for et tilbud, eller for å avtale en demonstrasjon av utstyret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button className="px-8">Kontakt oss</Button>
            </Link>
            <Link href="/tjenester/utleie">
              <Button variant="outline" className="px-8">
                Lær om utleie
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
