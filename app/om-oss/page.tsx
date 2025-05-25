import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Om oss | Derksen Trading",
  description: "Lær mer om Derksen Trading - Norges importør av IBIX sandblåsere",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
          Om oss
        </span>
        <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-heading">
          Derksen <span className="text-brand-600 font-normal">Trading</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
          Norges importør av IBIX sandblåsere – Profesjonell overflatebehandling i Bodø og Nordland
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-24">
        <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <Image src="/images/sandblaster-1.png" alt="Derksen Trading team" fill className="object-cover" />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-light text-slate-900 font-heading">
            Vår <span className="text-brand-600 font-normal">historie</span>
          </h2>
          <p className="mb-4 text-lg text-slate-600 font-light leading-relaxed">
            Derksen Trading ble etablert med en visjon om å tilby markedets mest avanserte og miljøvennlige løsninger
            for overflatebehandling. Som Norges offisielle importør av IBIX sandblåsere, har vi spesialisert oss på å
            levere førsteklasses utstyr og tjenester til industri- og byggebransjen.
          </p>
          <p className="mb-8 text-lg text-slate-600 font-light leading-relaxed">
            Med over 10 års erfaring i bransjen, har vi opparbeidet oss en solid kompetanse og et sterkt rykte for
            kvalitet og pålitelighet. Vårt team av eksperter er dedikert til å hjelpe våre kunder med å finne de beste
            løsningene for deres spesifikke behov.
          </p>
          <Link href="/kontakt">
            <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:scale-105">
              Kontakt oss <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-24">
        <div className="order-2 lg:order-1">
          <h2 className="mb-6 text-3xl font-light text-slate-900 font-heading">
            Vår <span className="text-brand-600 font-normal">ekspertise</span>
          </h2>
          <p className="mb-4 text-lg text-slate-600 font-light leading-relaxed">
            Vi tilbyr et bredt spekter av tjenester innen overflatebehandling, inkludert sandblåsing, graffiti-fjerning
            og industrilakkering. Vårt team har omfattende erfaring med å håndtere prosjekter av alle størrelser, fra
            små restaureringsarbeider til store industrielle oppdrag.
          </p>
          <p className="mb-8 text-lg text-slate-600 font-light leading-relaxed">
            Med IBIX-teknologi kan vi garantere førsteklasses resultater med minimal miljøpåvirkning. Vår støvfrie
            teknologi reduserer støv med opptil 99%, noe som gjør den ideell for bruk i sensitive miljøer og innendørs
            applikasjoner.
          </p>
          <Link href="/produkter">
            <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:scale-105">
              Se våre produkter <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2">
          <Image src="/images/industrial-plant.png" alt="Industrianlegg" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <Image src="/images/worker-mechanic.png" alt="Profesjonell arbeider" fill className="object-cover" />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-light text-slate-900 font-heading">
            Vårt <span className="text-brand-600 font-normal">team</span>
          </h2>
          <p className="mb-4 text-lg text-slate-600 font-light leading-relaxed">
            Bak Derksen Trading står et dedikert team av fagfolk med dyp kunnskap om overflatebehandling og
            IBIX-teknologi. Vi er stolte av å ha noen av bransjens mest erfarne eksperter som er forpliktet til å levere
            enestående service og resultater.
          </p>
          <p className="mb-8 text-lg text-slate-600 font-light leading-relaxed">
            Vi investerer kontinuerlig i opplæring og utvikling for å sikre at teamet vårt holder seg oppdatert på de
            nyeste teknikkene og teknologiene innen overflatebehandling. Dette gjør oss i stand til å tilby våre kunder
            de mest innovative og effektive løsningene på markedet.
          </p>
          <Link href="/kontakt">
            <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:scale-105">
              Møt vårt team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
