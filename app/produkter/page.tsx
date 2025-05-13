"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import ProductFilter from "@/components/product-filter"

// Sample product data
const products = [
  {
    id: "ibix-9-basic",
    name: "IBIX® 9 Basic",
    description: "9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby (bilrestaurering etc.).",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg",
    category: "dry",
    size: "small",
    price: "low",
  },
  {
    id: "ibix-25-basic",
    name: "IBIX® 25 Basic",
    description: "25L tørrblåser, kompakt og effektiv, ideell for mellomstore prosjekter og profesjonell bruk.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg",
    category: "dry",
    size: "medium",
    price: "medium",
  },
  {
    id: "ibix-problaster-25-h2o",
    name: "IBIX® Problaster 25 H2O",
    description: "25L kombiblåser, allsidig og kompakt, yter som en stor tradisjonell potte men veier kun 28kg.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg",
    category: "wet",
    size: "medium",
    price: "medium",
  },
  {
    id: "ibix-problaster-40-h2o",
    name: "IBIX® Problaster 40 H2O",
    description: "40L kombiblåser, kraftig og effektiv, for større prosjekter med behov for lengre driftstid.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg",
    category: "wet",
    size: "large",
    price: "high",
  },
  {
    id: "ibix-problaster-60-h2o",
    name: "IBIX® Problaster 60 H2O",
    description: "60 liter kombiblåser, for proff bruk, ~45 kg, HiPower dobbel lufttilførsel for maks effekt.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%284%29-glZcVxwSM9VSqQWgANYueBE4azT9zU.jpeg",
    category: "wet",
    size: "large",
    price: "high",
  },
  {
    id: "ibix-helix-dyse",
    name: "IBIX® Helix dyse",
    description: "Patentert roterende dyse for 30% raskere rengjøring og skånsom behandling.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg",
    category: "accessory",
    size: "small",
    price: "low",
  },
]

// Filter categories
const filterCategories = [
  {
    id: "category",
    name: "Kategori",
    options: [
      { id: "dry", label: "Tørr sandblåsing" },
      { id: "wet", label: "Våt sandblåsing" },
      { id: "accessory", label: "Tilbehør" },
    ],
  },
  {
    id: "size",
    name: "Størrelse",
    options: [
      { id: "small", label: "Liten" },
      { id: "medium", label: "Medium" },
      { id: "large", label: "Stor" },
    ],
  },
  {
    id: "price",
    name: "Prisklasse",
    options: [
      { id: "low", label: "Lav" },
      { id: "medium", label: "Medium" },
      { id: "high", label: "Høy" },
    ],
  },
]

export default function ProductsPage() {
  const [filters, setFilters] = useState<Record<string, string[]>>({})
  const [searchQuery, setSearchQuery] = useState("")

  // Filter products based on selected filters and search query
  const filteredProducts = products.filter((product) => {
    // Check if product matches all selected filters
    for (const [category, selectedOptions] of Object.entries(filters)) {
      if (
        selectedOptions.length > 0 &&
        !selectedOptions.includes(product[category as keyof typeof product] as string)
      ) {
        return false
      }
    }

    // Check if product matches search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    }

    return true
  })

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Hjem
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Produkter</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">IBIX Sandblåsere</h1>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Et komplett utvalg for profesjonell overflatebehandling.
          </p>

          <div className="relative rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
              alt="IBIX sandblåsere i bruk på en industriell overflate - profesjonelt utstyr for overflatebehandling"
              width={1200}
              height={500}
              className="w-full h-auto"
            />

            <div className="absolute inset-0 overlay-gradient-right flex items-end p-6 md:p-8">
              <div className="grid grid-cols-2 gap-8 md:gap-12 text-white">
                <div>
                  <h3 className="text-sm text-primary-200 mb-1 font-light">Statistikk:</h3>
                  <p className="stat-value text-3xl md:text-4xl font-semibold">5</p>
                  <p className="stat-label">Produktserier</p>
                </div>
                <div>
                  <p className="stat-value text-3xl md:text-4xl font-semibold">20+</p>
                  <p className="stat-label">Ulike modeller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="tag">Tørr sandblåsing</span>
            <span className="tag">Våt sandblåsing</span>
            <span className="tag">Tilbehør</span>
            <span className="tag">Verneutstyr</span>
            <span className="tag">Reservedeler</span>
            <span className="tag">Blåsemidler</span>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="mb-6">
                  <label htmlFor="search" className="form-label">
                    Søk etter produkter
                  </label>
                  <input
                    type="text"
                    id="search"
                    className="form-input"
                    placeholder="Søk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <ProductFilter categories={filterCategories} onFilterChange={setFilters} />
              </div>
            </div>

            {/* Product grid */}
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Våre produkter</h2>
              <p className="text-gray-600 mb-8 font-light">
                Derksen Trading tilbyr et komplett utvalg av IBIX sandblåsere og tilbehør for alle typer
                overflatebehandling.
              </p>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 font-light">Ingen produkter funnet. Prøv å justere filtrene.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="modern-card">
                      <div className="aspect-video relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 overlay-gradient-bottom"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {product.category === "dry"
                              ? "Tørr sandblåsing"
                              : product.category === "wet"
                                ? "Våt sandblåsing"
                                : "Tilbehør"}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 font-light">{product.description}</p>
                        <Link
                          href={`/produkter/${product.id}`}
                          className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                        >
                          Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Sammenlign modeller</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary-800 text-white">
                  <th className="border border-secondary-700 p-3 md:p-4 text-left">Modell</th>
                  <th className="border border-secondary-700 p-3 md:p-4 text-left">Kapasitet</th>
                  <th className="border border-secondary-700 p-3 md:p-4 text-left">Vekt</th>
                  <th className="border border-secondary-700 p-3 md:p-4 text-left">Våtblåsing</th>
                  <th className="border border-secondary-700 p-3 md:p-4 text-left">Anbefalt bruk</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr>
                  <td className="border p-3 md:p-4 font-medium">IBIX® 9 Basic</td>
                  <td className="border p-3 md:p-4 font-light">9 liter</td>
                  <td className="border p-3 md:p-4 font-light">12 kg</td>
                  <td className="border p-3 md:p-4 font-light">Nei</td>
                  <td className="border p-3 md:p-4 font-light">Hobby, bilrestaurering, små prosjekter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 md:p-4 font-medium">IBIX® 25 Basic</td>
                  <td className="border p-3 md:p-4 font-light">25 liter</td>
                  <td className="border p-3 md:p-4 font-light">25 kg</td>
                  <td className="border p-3 md:p-4 font-light">Nei</td>
                  <td className="border p-3 md:p-4 font-light">Mellomstore prosjekter, profesjonell bruk</td>
                </tr>
                <tr>
                  <td className="border p-3 md:p-4 font-medium">IBIX® Problaster 25 H2O</td>
                  <td className="border p-3 md:p-4 font-light">25 liter</td>
                  <td className="border p-3 md:p-4 font-light">28 kg</td>
                  <td className="border p-3 md:p-4 font-light">Ja</td>
                  <td className="border p-3 md:p-4 font-light">Allsidig bruk, fasader, graffiti</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 md:p-4 font-medium">IBIX® Problaster 40 H2O</td>
                  <td className="border p-3 md:p-4 font-light">40 liter</td>
                  <td className="border p-3 md:p-4 font-light">35 kg</td>
                  <td className="border p-3 md:p-4 font-light">Ja</td>
                  <td className="border p-3 md:p-4 font-light">Større prosjekter, industriell bruk</td>
                </tr>
                <tr>
                  <td className="border p-3 md:p-4 font-medium">IBIX® Problaster 60 H2O</td>
                  <td className="border p-3 md:p-4 font-light">60 liter</td>
                  <td className="border p-3 md:p-4 font-light">45 kg</td>
                  <td className="border p-3 md:p-4 font-light">Ja</td>
                  <td className="border p-3 md:p-4 font-light">Tung industriell bruk, store prosjekter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Interessert i våre produkter?</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto font-light">
            Kontakt oss i dag for en uforpliktende samtale om hvordan IBIX sandblåsere kan effektivisere ditt arbeid.
          </p>
          <Link href="/kontakt">
            <button className="btn-outline">Kontakt oss</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
