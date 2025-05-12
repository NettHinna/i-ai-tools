"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, Trophy, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

interface Tournament {
  id: string
  name: string
  date: string
  location: string
  address: string
  image: string
  category: string
  level: string
  players: number
  maxPlayers: number
  entryFee: string
  prize: string
  status: "open" | "full" | "ongoing" | "completed"
  description: string
}

export default function TournamentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  // Mock tournament data
  const tournaments: Tournament[] = [
    {
      id: "1",
      name: "Oslo Padel Open",
      date: "25-27 mai 2025",
      location: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      image: "/images/padel-tennis-1.jpeg",
      category: "Mixed Doubles",
      level: "Advanced",
      players: 24,
      maxPlayers: 32,
      entryFee: "500 kr",
      prize: "10,000 kr",
      status: "open",
      description:
        "En av Norges største padel-turneringer for avanserte spillere. Turneringen går over tre dager med gruppespill og sluttspill.",
    },
    {
      id: "2",
      name: "Nybegynner Cup",
      date: "1 juni 2025",
      location: "Padel Zenith",
      address: "Brynsveien 12, 0667 Oslo",
      image: "/images/padel-tennis-3.jpeg",
      category: "Men's Doubles",
      level: "Beginner",
      players: 16,
      maxPlayers: 16,
      entryFee: "300 kr",
      prize: "Produktpremier",
      status: "full",
      description:
        "En perfekt turnering for nybegynnere som vil prøve seg i konkurransesammenheng. Fokus på moro og læring.",
    },
    {
      id: "3",
      name: "Ladies Night Tournament",
      date: "15 juni 2025",
      location: "Padel Arena Majorstuen",
      address: "Sørkedalsveien 8, 0369 Oslo",
      image: "/images/padel-tennis-2.jpeg",
      category: "Women's Doubles",
      level: "Intermediate",
      players: 12,
      maxPlayers: 24,
      entryFee: "400 kr",
      prize: "5,000 kr",
      status: "open",
      description:
        "En kveldsturnering kun for kvinner på middels nivå. Turneringen starter kl. 18:00 og avsluttes med premieutdeling og sosial samling.",
    },
    {
      id: "4",
      name: "Corporate Challenge",
      date: "10 mai 2025",
      location: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      image: "/images/padel-tennis-4.jpeg",
      category: "Mixed Teams",
      level: "All Levels",
      players: 8,
      maxPlayers: 12,
      entryFee: "2,000 kr per lag",
      prize: "Firmacup-trofé",
      status: "completed",
      description:
        "En lagkonkurranse for bedrifter. Hvert lag består av 4-6 spillere med minst én kvinne og én mann på banen til enhver tid.",
    },
  ]

  // Filter tournaments based on search query and filters
  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch =
      tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = !selectedCategory || tournament.category === selectedCategory
    const matchesLevel = !selectedLevel || tournament.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  // Get unique categories and levels for filters
  const categories = Array.from(new Set(tournaments.map((t) => t.category)))
  const levels = Array.from(new Set(tournaments.map((t) => t.level)))

  return (
    <div className="min-h-screen bg-[#fcfdfd]">
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Padel Turneringer</h1>
          <p className="text-gray-500 mt-2">Finn og meld deg på padel-turneringer i ditt område</p>
        </div>

        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Input
                placeholder="Søk etter turneringer eller steder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Kategori
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedCategory(null)}>Alle kategorier</DropdownMenuItem>
                  <Separator />
                  {categories.map((category) => (
                    <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Nivå
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedLevel(null)}>Alle nivåer</DropdownMenuItem>
                  <Separator />
                  {levels.map((level) => (
                    <DropdownMenuItem key={level} onClick={() => setSelectedLevel(level)}>
                      {level}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Active filters */}
          {(selectedCategory || selectedLevel) && (
            <div className="flex gap-2 mt-4">
              {selectedCategory && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedCategory}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 p-0"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              {selectedLevel && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedLevel}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 p-0"
                    onClick={() => setSelectedLevel(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedLevel(null)
                }}
              >
                Fjern alle filtre
              </Button>
            </div>
          )}
        </div>

        {/* Tournaments tabs */}
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Kommende</TabsTrigger>
            <TabsTrigger value="ongoing">Pågående</TabsTrigger>
            <TabsTrigger value="completed">Fullførte</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments
                .filter((t) => t.status === "open" || t.status === "full")
                .map((tournament) => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
            {filteredTournaments.filter((t) => t.status === "open" || t.status === "full").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen kommende turneringer funnet.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ongoing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments
                .filter((t) => t.status === "ongoing")
                .map((tournament) => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
            {filteredTournaments.filter((t) => t.status === "ongoing").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen pågående turneringer for øyeblikket.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments
                .filter((t) => t.status === "completed")
                .map((tournament) => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
            {filteredTournaments.filter((t) => t.status === "completed").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen fullførte turneringer funnet.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Tournament card component
function TournamentCard({ tournament }: { tournament: Tournament }) {
  const statusColors = {
    open: "bg-green-100 text-green-800",
    full: "bg-amber-100 text-amber-800",
    ongoing: "bg-blue-100 text-blue-800",
    completed: "bg-gray-100 text-gray-800",
  }

  const statusText = {
    open: "Påmelding åpen",
    full: "Fulltegnet",
    ongoing: "Pågående",
    completed: "Fullført",
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="relative h-48">
        <Image src={tournament.image || "/placeholder.svg"} alt={tournament.name} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className={statusColors[tournament.status]}>{statusText[tournament.status]}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{tournament.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{tournament.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>
              {tournament.players}/{tournament.maxPlayers} påmeldte
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Trophy className="h-4 w-4 mr-2 text-gray-500" />
            <span>Premie: {tournament.prize}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">{tournament.category}</Badge>
            <Badge variant="outline">{tournament.level}</Badge>
          </div>

          <p className="text-sm text-gray-600 mt-3 line-clamp-2">{tournament.description}</p>

          <div className="pt-4">
            <Button className="w-full" disabled={tournament.status !== "open"}>
              {tournament.status === "open"
                ? "Meld deg på"
                : tournament.status === "full"
                  ? "Venteliste"
                  : tournament.status === "ongoing"
                    ? "Se resultater"
                    : "Se resultater"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Missing X component
function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
