"use client"

import { useState } from "react"
import { Search, MapPin, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"

interface CourtLocation {
  id: string
  name: string
  address: string
  distance: string
  rating: number
  reviews: number
  price: string
  openHours: string
  image: string
  features: string[]
  availability: {
    day: string
    slots: {
      time: string
      available: boolean
    }[]
  }[]
}

export default function FindCourt() {
  const isMobile = useMobile()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourt, setSelectedCourt] = useState<CourtLocation | null>(null)

  // Mock data for court locations
  const courtLocations: CourtLocation[] = [
    {
      id: "1",
      name: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      distance: "1.2 km",
      rating: 4.8,
      reviews: 124,
      price: "350 kr/time",
      openHours: "07:00 - 23:00",
      image: "/images/padel-tennis.jpeg",
      features: ["Innendørs", "6 baner", "Garderober", "Parkering"],
      availability: [
        {
          day: "I dag",
          slots: [
            { time: "10:00", available: false },
            { time: "11:00", available: false },
            { time: "12:00", available: true },
            { time: "13:00", available: true },
            { time: "14:00", available: false },
          ],
        },
        {
          day: "I morgen",
          slots: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Padel Zenith",
      address: "Brynsveien 12, 0667 Oslo",
      distance: "2.5 km",
      rating: 4.6,
      reviews: 89,
      price: "320 kr/time",
      openHours: "08:00 - 22:00",
      image: "/images/padel-tennis-3.jpeg",
      features: ["Utendørs", "4 baner", "Kafé", "Utstyrsutleie"],
      availability: [
        {
          day: "I dag",
          slots: [
            { time: "10:00", available: true },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: true },
            { time: "14:00", available: true },
          ],
        },
        {
          day: "I morgen",
          slots: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: false },
            { time: "13:00", available: true },
            { time: "14:00", available: true },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Padel Arena Majorstuen",
      address: "Sørkedalsveien 8, 0369 Oslo",
      distance: "3.7 km",
      rating: 4.9,
      reviews: 156,
      price: "380 kr/time",
      openHours: "06:00 - 24:00",
      image: "/images/padel-tennis.jpeg",
      features: ["Innendørs", "8 baner", "Pro-shop", "Trenere"],
      availability: [
        {
          day: "I dag",
          slots: [
            { time: "10:00", available: false },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
          ],
        },
        {
          day: "I morgen",
          slots: [
            { time: "10:00", available: false },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: true },
            { time: "14:00", available: false },
          ],
        },
      ],
    },
  ]

  const filteredCourts = courtLocations.filter(
    (court) =>
      court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      court.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#fcfdfd]">
      {/* Main content */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* Page title */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Finn bane nær deg</h1>
          <p className="text-gray-500 mt-1">Finn og bestill padel-baner i ditt område</p>
        </div>

        {/* Search section */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10 h-12 text-base"
              placeholder="Søk etter sted, adresse eller postnummer"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-10 bg-primary">
              <Search className="h-5 w-5" />
              <span className="ml-2 hidden md:inline">Søk</span>
            </Button>
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            {searchQuery
              ? `Viser ${filteredCourts.length} baner`
              : "Skriv inn din lokasjon for å finne padel-baner i nærheten"}
          </p>
        </div>

        {/* Court listings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Court list */}
          <div className={`${selectedCourt && isMobile ? "hidden" : ""} lg:col-span-1 space-y-4`}>
            <h2 className="text-lg font-semibold mb-4">Padel-baner i nærheten</h2>

            {filteredCourts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Ingen baner funnet. Prøv et annet søk.</p>
              </div>
            ) : (
              filteredCourts.map((court) => (
                <Card
                  key={court.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${selectedCourt?.id === court.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedCourt(court)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={court.image || "/placeholder.svg"}
                          alt={court.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{court.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" /> {court.address}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{court.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">({court.reviews} anmeldelser)</span>
                          <span className="text-xs bg-secondary text-primary px-2 py-0.5 rounded-full ml-auto">
                            {court.distance}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-primary mt-2">{court.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Court details and map */}
          <div className={`${!selectedCourt && isMobile ? "hidden" : ""} lg:col-span-2`}>
            {selectedCourt ? (
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                {isMobile && (
                  <Button variant="ghost" size="sm" className="mb-4" onClick={() => setSelectedCourt(null)}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Tilbake til listen
                  </Button>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden h-48 md:h-64">
                      <Image
                        src={selectedCourt.image || "/placeholder.svg"}
                        alt={selectedCourt.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h2 className="text-xl font-bold mt-4">{selectedCourt.name}</h2>
                    <p className="text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" /> {selectedCourt.address}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{selectedCourt.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({selectedCourt.reviews} anmeldelser)</span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="text-sm">
                        <span className="text-gray-500">Pris:</span>
                        <p className="font-medium">{selectedCourt.price}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Åpningstider:</span>
                        <p className="font-medium">{selectedCourt.openHours}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-semibold mb-2">Fasiliteter</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCourt.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-secondary text-primary px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <h3 className="text-lg font-semibold mb-4">Bestill bane</h3>

                    <Tabs defaultValue={selectedCourt.availability[0].day}>
                      <TabsList className="w-full">
                        {selectedCourt.availability.map((day, index) => (
                          <TabsTrigger key={index} value={day.day} className="flex-1">
                            {day.day}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {selectedCourt.availability.map((day, dayIndex) => (
                        <TabsContent key={dayIndex} value={day.day} className="mt-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {day.slots.map((slot, slotIndex) => (
                              <Button
                                key={slotIndex}
                                variant={slot.available ? "outline" : "ghost"}
                                className={`${
                                  slot.available ? "hover:bg-primary hover:text-white" : "opacity-50 cursor-not-allowed"
                                }`}
                                disabled={!slot.available}
                              >
                                {slot.time}
                              </Button>
                            ))}
                          </div>

                          <div className="mt-6">
                            <Button className="w-full bg-primary">Bestill bane</Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>

                    <div className="mt-6 bg-secondary rounded-lg p-4">
                      <h3 className="text-sm font-semibold mb-2">Kart</h3>
                      <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-8 w-8 text-primary mx-auto" />
                          <p className="text-sm text-gray-500 mt-2">Kartvisning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold mt-4">Velg en bane for å se detaljer</h3>
                  <p className="text-gray-500 mt-2 max-w-md">
                    Velg en bane fra listen til venstre for å se mer informasjon og bestille tid.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
