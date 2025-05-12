import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PadelRacketsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Padel Racketer</h1>
        <p className="text-gray-500 mt-2">Utforsk vårt utvalg av kvalitets padel racketer for alle nivåer</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for racket products */}
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-4.jpeg" alt="Pro Carbon Padel Racket" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Pro Carbon Padel Racket</h3>
            <p className="text-sm text-gray-500 mt-1">Avansert racket for konkurransespillere</p>
            <p className="text-primary font-medium mt-2">1,899 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis.jpeg" alt="Lightweight Padel Racket" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Lightweight Padel Racket</h3>
            <p className="text-sm text-gray-500 mt-1">Lett racket for nybegynnere</p>
            <p className="text-primary font-medium mt-2">1,299 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-3.jpeg" alt="Diamond Shape Padel Racket" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Diamond Shape Padel Racket</h3>
            <p className="text-sm text-gray-500 mt-1">Diamantformet racket for kraft</p>
            <p className="text-primary font-medium mt-2">1,599 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-4.jpeg" alt="Round Shape Padel Racket" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Round Shape Padel Racket</h3>
            <p className="text-sm text-gray-500 mt-1">Rundformet racket for kontroll</p>
            <p className="text-primary font-medium mt-2">1,499 kr</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
