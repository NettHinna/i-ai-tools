import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PadelShoesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Padel Sko</h1>
        <p className="text-gray-500 mt-2">Spesialdesignede sko for padel med optimal grep og støtte</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for shoe products */}
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-racket-hand.png" alt="Pro Court Padel Sko" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Pro Court Padel Sko</h3>
            <p className="text-sm text-gray-500 mt-1">Profesjonelle sko med maksimalt grep</p>
            <p className="text-primary font-medium mt-2">1,299 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-racket-hand.png" alt="Comfort Padel Sko" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Comfort Padel Sko</h3>
            <p className="text-sm text-gray-500 mt-1">Ekstra komfortable sko for lange kamper</p>
            <p className="text-primary font-medium mt-2">999 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-racket-hand.png" alt="Indoor Padel Sko" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Indoor Padel Sko</h3>
            <p className="text-sm text-gray-500 mt-1">Spesialdesignet for innendørs padel-baner</p>
            <p className="text-primary font-medium mt-2">1,099 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-racket-hand.png" alt="All-Terrain Padel Sko" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">All-Terrain Padel Sko</h3>
            <p className="text-sm text-gray-500 mt-1">Fungerer på alle typer underlag</p>
            <p className="text-primary font-medium mt-2">1,199 kr</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
