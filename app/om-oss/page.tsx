import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-800 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
            alt="Industrihall"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Hjem
            </Link>
            <span className="text-gray-400">/</span>
            <span>Om oss</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Om oss</h1>

          <div className="max-w-2xl">
            <p className="text-xl mb-6">
              Vi fortsetter å utvide vår rekkevidde og drive bærekraftig utvikling gjennom strategiske investeringer og
              innovasjon.
            </p>
            <div className="flex items-center">
              <Link href="#company-info" className="text-gray-300 hover:text-white flex items-center">
                Oppdag det fulle potensialet til vårt selskap <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 md:py-24" id="company-info">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Hva vi står for</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-secondary-800 text-white p-8 rounded-lg">
              <div className="w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Visjon</h3>
              <p>
                Å være den ledende leverandøren av sandblåseutstyr og overflatebehandlingstjenester i Norge, kjent for
                kvalitet, innovasjon og kundetilfredshet.
              </p>
            </div>

            <div className="bg-secondary-700 text-white p-8 rounded-lg">
              <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Misjon</h3>
              <p>
                Å levere førsteklasses sandblåseutstyr og tjenester som møter våre kunders behov, samtidig som vi
                fremmer miljøvennlige løsninger og høy faglig kompetanse i bransjen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Våre kjerneverdier</h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Kvalitet</h3>
              <p className="text-gray-600">
                Vi streber etter de høyeste standarder i alle våre produkter og tjenester.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Kompetanse</h3>
              <p className="text-gray-600">
                Vi opprettholder høy faglig kompetanse og deler vår kunnskap med kundene våre.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Kundetilfredshet</h3>
              <p className="text-gray-600">Vi setter kunden i sentrum og jobber for å overgå deres forventninger.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Miljøbevissthet</h3>
              <p className="text-gray-600">Vi fremmer miljøvennlige løsninger og bærekraftige arbeidsprosesser.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Innovasjon</h3>
              <p className="text-gray-600">
                Vi omfavner nye ideer og teknologier for å kontinuerlig forbedre våre produkter og tjenester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-secondary-800 text-white py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%288%29-leWLEemyqrjW3sNhfc9utbaCN2hqs0.jpeg"
            alt="Sandblåsing med gnister"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bli med oss i å bygge fremtiden</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Samarbeid med Derksen Trading for å utforske strategiske muligheter innen overflatebehandling og bidra til
            vekst.
          </p>
          <Link href="/bli-partner">
            <button className="btn-outline">Bli partner</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
