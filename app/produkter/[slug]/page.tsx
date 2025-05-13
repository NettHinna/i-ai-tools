import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product data for demo purposes
const productData = {
  "ibix-problaster-25-h2o": {
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
  },
  "ibix-problaster-40-h2o": {
    id: "ibix-problaster-40-h2o",
    name: "IBIX® Problaster 40 H2O",
    description: "40L kombiblåser, kraftig og effektiv, for større prosjekter.",
    longDescription:
      "IBIX 40 H2O er en kraftig kombiblåser med 40 liters kapasitet, designet for større prosjekter og lengre driftstid. Den tilbyr både tørr og våt sandblåsing, og er utstyrt med avansert teknologi for optimal ytelse og brukervennlighet.",
    features: [
      "Stor kapasitet på 40 liter",
      "Kombinert tørr/våt funksjonalitet",
      "Kraftig ytelse for større prosjekter",
      "Justerbart trykk for ulike overflater",
      "Robust konstruksjon for industriell bruk",
    ],
    specifications: [
      { name: "Kapasitet", value: "40 liter abrasiv" },
      { name: "Vekt", value: "35 kg (tom)" },
      { name: "Trykk", value: "0,2–8,0 bar justerbart" },
      { name: "Luftforbruk", value: "~2200 L/min (78 CFM) @ 7 bar" },
      { name: "Dyser", value: "6,0 mm standard, dysekit 3–8 mm tilgjengelig" },
      { name: "Modus", value: "Tørr eller våt (innebygget vanninjeksjon)" },
      { name: "Materiale", value: "Aluminium, rustfritt stål koblinger" },
    ],
    applications: [
      "Industriell rengjøring",
      "Store fasadeprosjekter",
      "Skipsverft og maritime applikasjoner",
      "Tung rustfjerning",
      "Betongrengjøring",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%282%29-U1eUsrsuHndGSXZ9LMzlaiW6mvS4Nv.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-b0mJ7pFp7jLOQzqaFRdcfFmHscBc4f.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%287%29-bGwh7iYOjIyeNiQZidzcHtGbWkB4HC.jpeg",
    ],
  },
  "ibix-9-basic": {
    id: "ibix-9-basic",
    name: "IBIX® 9 Basic",
    description: "9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby.",
    longDescription:
      "IBIX 9 Basic er en kompakt og lett sandblåser som er perfekt for mindre prosjekter og hobbybruk. Med sin lave vekt på kun 12 kg er den enkel å transportere og håndtere.",
    features: [
      "Kompakt og lett design",
      "Perfekt for hobbybruk",
      "Enkel å transportere",
      "Justerbart trykk",
      "Ideell for bilrestaurering og mindre prosjekter",
    ],
    specifications: [
      { name: "Kapasitet", value: "9 liter abrasiv" },
      { name: "Vekt", value: "12 kg (tom)" },
      { name: "Trykk", value: "0,2–7,0 bar justerbart" },
      { name: "Luftforbruk", value: "~350 L/min (12 CFM) @ 7 bar" },
      { name: "Dyser", value: "3,0 mm standard, dysekit 2–4 mm tilgjengelig" },
      { name: "Modus", value: "Tørr" },
      { name: "Materiale", value: "Aluminium, rustfritt stål koblinger" },
    ],
    applications: [
      "Bilrestaurering",
      "Hobbyprosjekter",
      "Mindre metallarbeider",
      "Møbelrestaurering",
      "Dekorative prosjekter",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-b0mJ7pFp7jLOQzqaFRdcfFmHscBc4f.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%287%29-bGwh7iYOjIyeNiQZidzcHtGbWkB4HC.jpeg",
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Get product data based on slug
  const product = productData[params.slug as keyof typeof productData]

  // If product doesn't exist, return 404
  if (!product) {
    // For demo purposes, redirect to a default product instead of showing 404
    // This ensures the demo works even with invalid URLs
    const defaultProduct = Object.values(productData)[0]
    if (defaultProduct) {
      return (
        <div className="flex flex-col min-h-screen pt-16">
          <div className="container px-4 md:px-6 py-8">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
              <p className="text-yellow-800">
                Produktet ble ikke funnet. Viser standardprodukt i stedet. Dette er en demo-funksjon.
              </p>
            </div>
            <ProductDetail product={defaultProduct} />
          </div>
        </div>
      )
    }
    return notFound()
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/produkter" className="hover:text-gray-900 flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Tilbake til produkter
          </Link>
        </div>
      </div>

      <ProductDetail product={product} />
    </div>
  )
}

function ProductDetail({ product }: { product: any }) {
  return (
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
              {product.images.map((image: string, index: number) => (
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
                {product.features.map((feature: string, index: number) => (
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
                    {product.specifications.map((spec: { name: string; value: string }, index: number) => (
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
              </div>
            </TabsContent>
            <TabsContent value="applications" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.applications.map((application: string, index: number) => (
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
            {Object.values(productData)
              .filter((p: any) => p.id !== product.id)
              .slice(0, 2)
              .map((relatedProduct: any) => (
                <div key={relatedProduct.id} className="modern-card">
                  <div className="aspect-video relative">
                    <Image
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4 font-light">{relatedProduct.description}</p>
                    <Link href={`/produkter/${relatedProduct.id}`}>
                      <Button variant="outline" className="w-full">
                        Se detaljer
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
