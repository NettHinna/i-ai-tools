import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ClothesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Padel Klær</h1>
        <p className="text-gray-500 mt-2">Stilige og komfortable klær for padel-entusiaster</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for clothing products */}
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-1.jpeg" alt="Performance T-skjorte" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Performance T-skjorte</h3>
            <p className="text-sm text-gray-500 mt-1">Pustende t-skjorte for maksimal komfort</p>
            <p className="text-primary font-medium mt-2">499 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-2.jpeg" alt="Padel Skjørt" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Padel Skjørt</h3>
            <p className="text-sm text-gray-500 mt-1">Komfortabelt skjørt med innebygd shorts</p>
            <p className="text-primary font-medium mt-2">599 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-1.jpeg" alt="Padel Shorts" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Padel Shorts</h3>
            <p className="text-sm text-gray-500 mt-1">Lette shorts med stretch-materiale</p>
            <p className="text-primary font-medium mt-2">449 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-tennis-1.jpeg" alt="Padel Caps" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Padel Caps</h3>
            <p className="text-sm text-gray-500 mt-1">Caps med god ventilasjon</p>
            <p className="text-primary font-medium mt-2">299 kr</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
