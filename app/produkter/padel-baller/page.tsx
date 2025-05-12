import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PadelBallsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Padel Baller</h1>
        <p className="text-gray-500 mt-2">Kvalitetsballer for padel i ulike varianter</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for ball products */}
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-court.png" alt="Tournament Padel Baller (3-pack)" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Tournament Padel Baller (3-pack)</h3>
            <p className="text-sm text-gray-500 mt-1">Offisielle turneringsballer</p>
            <p className="text-primary font-medium mt-2">149 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-court.png" alt="Training Padel Baller (6-pack)" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Training Padel Baller (6-pack)</h3>
            <p className="text-sm text-gray-500 mt-1">Holdbare baller for trening</p>
            <p className="text-primary font-medium mt-2">249 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/padel-court.png"
              alt="Pressure-Less Padel Baller (3-pack)"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Pressure-Less Padel Baller (3-pack)</h3>
            <p className="text-sm text-gray-500 mt-1">Baller som holder trykket lenger</p>
            <p className="text-primary font-medium mt-2">179 kr</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/images/padel-court.png" alt="Beginner Padel Baller (3-pack)" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">Beginner Padel Baller (3-pack)</h3>
            <p className="text-sm text-gray-500 mt-1">Mykere baller for nybegynnere</p>
            <p className="text-primary font-medium mt-2">129 kr</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
