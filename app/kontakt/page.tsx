import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export const metadata = {
  title: "Kontakt oss | Derksen Trading",
  description: "Kontakt Derksen Trading for spørsmål om sandblåsing, IBIX-produkter og tjenester",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
          Kontakt
        </span>
        <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-heading">
          Kontakt <span className="text-brand-600 font-normal">oss</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
          Vi er her for å hjelpe deg med alle dine spørsmål om sandblåsing, IBIX-produkter og tjenester
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
        <div>
          <div className="bg-slate-800 p-8 rounded-2xl shadow-md mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-brand-600 p-2">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-light text-white font-heading">
                Kontakt<span className="text-brand-400 font-normal">informasjon</span>
              </h2>
            </div>

            <p className="text-slate-300 mb-8 font-light">
              Ta gjerne kontakt med oss om du har spørsmål om våre produkter, tjenester eller ønsker en uforpliktende
              samtale om dine behov for overflatebehandling.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="border-none shadow-lg bg-slate-700">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-slate-600 p-3 mt-1">
                    <Phone className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-white">Telefon</h3>
                    <p className="text-slate-300 font-light">+47 999 99 999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-slate-700">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-slate-600 p-3 mt-1">
                    <Mail className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-white">E-post</h3>
                    <p className="text-slate-300 font-light">post@derksen.no</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-slate-700">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-slate-600 p-3 mt-1">
                    <MapPin className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-white">Adresse</h3>
                    <p className="text-slate-300 font-light">Bodø Industripark, 8013 Bodø</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-slate-700">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-slate-600 p-3 mt-1">
                    <Clock className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-white">Åpningstider</h3>
                    <p className="text-slate-300 font-light">Man-Fre: 08:00-16:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="border-none shadow-xl">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-light text-slate-900 font-heading">
              Send oss en <span className="text-brand-600 font-normal">melding</span>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Navn
                  </label>
                  <Input id="name" placeholder="Ditt navn" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-post
                  </label>
                  <Input id="email" type="email" placeholder="din.epost@eksempel.no" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Emne
                </label>
                <Input id="subject" placeholder="Hva gjelder henvendelsen?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Melding
                </label>
                <Textarea id="message" placeholder="Skriv din melding her..." rows={6} />
              </div>
              <Button className="w-full bg-brand-600 hover:bg-brand-700 transition-all duration-300">
                Send melding
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
