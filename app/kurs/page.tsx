"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, GraduationCap, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

interface Course {
  id: string
  name: string
  description: string
  image: string
  level: string
  location: string
  address: string
  instructor: string
  instructorImage: string
  date: string
  time: string
  duration: string
  spots: number
  maxSpots: number
  price: string
  type: string
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  // Mock course data
  const courses: Course[] = [
    {
      id: "1",
      name: "Nybegynner Padel Kurs",
      description:
        "Lær grunnleggende teknikker og regler for padel. Perfekt for deg som aldri har spilt før eller har minimal erfaring.",
      image: "/images/padel-tennis-3.jpeg",
      level: "Nybegynner",
      location: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      instructor: "Anders Jensen",
      instructorImage: "/images/padel-tennis-1.jpeg",
      date: "Hver tirsdag",
      time: "18:00 - 19:30",
      duration: "1.5 timer",
      spots: 4,
      maxSpots: 8,
      price: "350 kr per økt",
      type: "Gruppekurs",
    },
    {
      id: "2",
      name: "Intermediate Teknikk",
      description:
        "Forbedre dine tekniske ferdigheter og lær mer avanserte slag. For spillere som har grunnleggende erfaring med padel.",
      image: "/images/padel-tennis.jpeg",
      level: "Middels",
      location: "Padel Zenith",
      address: "Brynsveien 12, 0667 Oslo",
      instructor: "Maria Olsen",
      instructorImage: "/images/padel-tennis-2.jpeg",
      date: "Hver torsdag",
      time: "19:00 - 20:30",
      duration: "1.5 timer",
      spots: 6,
      maxSpots: 6,
      price: "400 kr per økt",
      type: "Gruppekurs",
    },
    {
      id: "3",
      name: "Privat Coaching",
      description: "En-til-en trening med en profesjonell padel-instruktør. Tilpasset dine behov og ferdighetsnivå.",
      image: "/images/padel-tennis-4.jpeg",
      level: "Alle nivåer",
      location: "Padel Arena Majorstuen",
      address: "Sørkedalsveien 8, 0369 Oslo",
      instructor: "Thomas Berg",
      instructorImage: "/images/padel-tennis-1.jpeg",
      date: "Etter avtale",
      time: "Fleksibel",
      duration: "1 time",
      spots: 1,
      maxSpots: 1,
      price: "600 kr per time",
      type: "Privat",
    },
    {
      id: "4",
      name: "Advanced Taktikk",
      description:
        "Lær avanserte taktiske strategier og posisjonering. For erfarne spillere som ønsker å ta spillet til neste nivå.",
      image: "/images/padel-tennis-3.jpeg",
      level: "Avansert",
      location: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      instructor: "Erik Hansen",
      instructorImage: "/images/padel-tennis-1.jpeg",
      date: "Hver lørdag",
      time: "10:00 - 12:00",
      duration: "2 timer",
      spots: 3,
      maxSpots: 4,
      price: "500 kr per økt",
      type: "Gruppekurs",
    },
    {
      id: "5",
      name: "Barn og Ungdom",
      description:
        "Morsomt og engasjerende padel-kurs for barn og ungdom mellom 10-16 år. Fokus på grunnleggende ferdigheter og spilleglede.",
      image: "/images/padel-tennis-2.jpeg",
      level: "Barn",
      location: "Padel Zenith",
      address: "Brynsveien 12, 0667 Oslo",
      instructor: "Sofie Larsen",
      instructorImage: "/images/padel-tennis-2.jpeg",
      date: "Hver onsdag",
      time: "16:00 - 17:00",
      duration: "1 time",
      spots: 5,
      maxSpots: 8,
      price: "250 kr per økt",
      type: "Barn og ungdom",
    },
  ]

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLevel = !selectedLevel || course.level === selectedLevel
    const matchesType = !selectedType || course.type === selectedType

    return matchesSearch && matchesLevel && matchesType
  })

  // Get unique levels and types for filters
  const levels = Array.from(new Set(courses.map((c) => c.level)))
  const types = Array.from(new Set(courses.map((c) => c.type)))

  return (
    <div className="min-h-screen bg-[#fcfdfd]">
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Padel Kurs og Trening</h1>
          <p className="text-gray-500 mt-2">Forbedre ditt spill med våre profesjonelle padel-kurs og treningsøkter</p>
        </div>

        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Input
                placeholder="Søk etter kurs, instruktører eller steder"
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Type
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedType(null)}>Alle typer</DropdownMenuItem>
                  <Separator />
                  {types.map((type) => (
                    <DropdownMenuItem key={type} onClick={() => setSelectedType(type)}>
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Active filters */}
          {(selectedLevel || selectedType) && (
            <div className="flex gap-2 mt-4">
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
              {selectedType && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedType}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 p-0"
                    onClick={() => setSelectedType(null)}
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
                  setSelectedLevel(null)
                  setSelectedType(null)
                }}
              >
                Fjern alle filtre
              </Button>
            </div>
          )}
        </div>

        {/* Courses tabs */}
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Alle kurs</TabsTrigger>
            <TabsTrigger value="beginner">Nybegynner</TabsTrigger>
            <TabsTrigger value="intermediate">Middels</TabsTrigger>
            <TabsTrigger value="advanced">Avansert</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen kurs funnet. Prøv å endre søkekriteriene.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="beginner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter((c) => c.level === "Nybegynner" || c.level === "Barn")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
            {filteredCourses.filter((c) => c.level === "Nybegynner" || c.level === "Barn").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen nybegynnerkurs funnet. Prøv å endre søkekriteriene.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="intermediate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter((c) => c.level === "Middels")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
            {filteredCourses.filter((c) => c.level === "Middels").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen kurs for middels nivå funnet. Prøv å endre søkekriteriene.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="advanced">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter((c) => c.level === "Avansert")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
            {filteredCourses.filter((c) => c.level === "Avansert").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Ingen avanserte kurs funnet. Prøv å endre søkekriteriene.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Instructor section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Våre instruktører</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from(new Set(courses.map((c) => c.instructor))).map((instructor, index) => {
              const instructorData = courses.find((c) => c.instructor === instructor)
              return (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48">
                    <Image
                      src={instructorData?.instructorImage || "/placeholder.svg"}
                      alt={instructor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{instructor}</h3>
                    <p className="text-sm text-gray-500">Padel Instruktør</p>
                    <Button variant="outline" className="w-full mt-4">
                      Se profil
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// Course card component
function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="relative h-48">
        <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{course.level}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>

          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{course.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{course.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>
              {course.time} ({course.duration})
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>
              {course.spots}/{course.maxSpots} ledige plasser
            </span>
          </div>
          <div className="flex items-center text-sm">
            <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
            <span>Instruktør: {course.instructor}</span>
          </div>

          <div className="flex items-center justify-between pt-3">
            <p className="font-semibold">{course.price}</p>
            <Button>Bestill plass</Button>
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
