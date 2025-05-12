import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const categories = [
    {
      name: "Padel Racketer",
      description: "Utforsk vårt utvalg av kvalitets padel racketer for alle nivåer",
      image: "/images/padel-tennis-4.jpeg",
      link: "/produkter/padel-racketer",
    },
    {
      name: "Klær",
      description: "Stilige og komfortable klær for padel-entusiaster",
      image: "/images/padel-tennis-2.jpeg",
      link: "/produkter/klaer",
    },
    {
      name: "Padel Sko",
      description: "Spesialdesignede sko for padel med optimal grep og støtte",
      image: "/images/padel-tennis-3.jpeg",
      link: "/produkter/padel-sko",
    },
    {
      name: "Padel Baller",
      description: "Kvalitetsballer for padel i ulike varianter",
      image: "/images/padel-tennis.jpeg",
      link: "/produkter/padel-baller",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Produkter</h1>
        <p className="text-gray-500 mt-2">Utforsk vårt utvalg av padel-utstyr og tilbehør</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex flex-col justify-center md:w-1/2">
                  <h2 className="text-xl font-bold">{category.name}</h2>
                  <p className="text-gray-500 mt-2">{category.description}</p>
                  <div className="mt-4 text-primary font-medium">Se produkter →</div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
