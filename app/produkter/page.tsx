import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"

export default function ProductsPage() {
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
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Produktkategorier</h2>

          <div className="flex flex-wrap gap-2 mb-12">
            <span className="tag">Tørr sandblåsing</span>
            <span className="tag">Våt sandblåsing</span>
            <span className="tag">Tilbehør</span>
            <span className="tag">Verneutstyr</span>
            <span className="tag">Reservedeler</span>
            <span className="tag">Blåsemidler</span>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Våre produkter</h2>
          <p className="text-gray-600 mb-8 font-light">
            Derksen Trading tilbyr et komplett utvalg av IBIX sandblåsere og tilbehør for alle typer
            overflatebehandling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg"
                  alt="IBIX 9 Basic sandblåser i bruk med profesjonell operatør iført verneutstyr"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Tørr sandblåsing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® 9 Basic</h3>
                <p className="text-gray-600 mb-4 font-light">
                  9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby (bilrestaurering etc.).
                </p>
                <Link
                  href="/produkter/ibix-9-basic"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
                  alt="Sandblåsing med gnister"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Tørr sandblåsing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® 25 Basic</h3>
                <p className="text-gray-600 mb-4 font-light">
                  25L tørrblåser, kompakt og effektiv, ideell for mellomstore prosjekter og profesjonell bruk.
                </p>
                <Link
                  href="/produkter/ibix-25-basic"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
                  alt="Sveising med blått lys"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Våt sandblåsing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Problaster 25 H2O</h3>
                <p className="text-gray-600 mb-4 font-light">
                  25L kombiblåser, allsidig og kompakt, yter som en stor tradisjonell potte men veier kun 28kg.
                </p>
                <Link
                  href="/produkter/ibix-problaster-25-h2o"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
                  alt="Presisjonsutstyr i blått lys"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Våt sandblåsing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Problaster 40 H2O</h3>
                <p className="text-gray-600 mb-4 font-light">
                  40L kombiblåser, kraftig og effektiv, for større prosjekter med behov for lengre driftstid.
                </p>
                <Link
                  href="/produkter/ibix-problaster-40-h2o"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%284%29-glZcVxwSM9VSqQWgANYueBE4azT9zU.jpeg"
                  alt="Containerskip i havn"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Våt sandblåsing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Problaster 60 H2O</h3>
                <p className="text-gray-600 mb-4 font-light">
                  60 liter kombiblåser, for proff bruk, ~45 kg, HiPower dobbel lufttilførsel for maks effekt.
                </p>
                <Link
                  href="/produkter/ibix-problaster-60-h2o"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="modern-card">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
                  alt="Industrihall med blått lys"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 overlay-gradient-bottom"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Tilbehør
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">IBIX® Helix dyse</h3>
                <p className="text-gray-600 mb-4 font-light">
                  Patentert roterende dyse for 30% raskere rengjøring og skånsom behandling.
                </p>
                <Link
                  href="/produkter/tilbehor/helix-dyse"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Se detaljer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
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
