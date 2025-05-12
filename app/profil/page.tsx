"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Settings, ShoppingBag, Calendar, MapPin, Heart, LogOut, ChevronRight, Edit, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("oversikt")

  // Mock user data
  const user = {
    name: "Anders Johansen",
    email: "anders@example.com",
    phone: "+47 123 45 678",
    image: "/images/padel-tennis-1.jpeg",
    level: "Intermediate",
    memberSince: "Mars 2023",
    playStyle: "Defensive",
    preferredHand: "Høyre",
  }

  // Mock booking history
  const bookings = [
    {
      id: "1",
      courtName: "Oslo Padel Club",
      date: "15. mai 2025",
      time: "18:00 - 19:00",
      players: 4,
      price: "350 kr",
      status: "Kommende",
    },
    {
      id: "2",
      courtName: "Padel Zenith",
      date: "10. mai 2025",
      time: "20:00 - 21:00",
      players: 2,
      price: "320 kr",
      status: "Fullført",
    },
    {
      id: "3",
      courtName: "Padel Arena Majorstuen",
      date: "2. mai 2025",
      time: "19:00 - 20:00",
      players: 4,
      price: "380 kr",
      status: "Fullført",
    },
  ]

  // Mock order history
  const orders = [
    {
      id: "ORD-12345",
      date: "12. mai 2025",
      items: [
        { name: "Pro Carbon Padel Racket", quantity: 1, price: "1,899 kr" },
        { name: "Padel Balls (3-pack)", quantity: 2, price: "149 kr" },
      ],
      total: "2,197 kr",
      status: "Levert",
    },
    {
      id: "ORD-12344",
      date: "28. april 2025",
      items: [
        { name: "Performance T-skjorte", quantity: 1, price: "499 kr" },
        { name: "Padel Shorts", quantity: 1, price: "449 kr" },
      ],
      total: "948 kr",
      status: "Levert",
    },
  ]

  // Mock favorite courts
  const favoriteCourts = [
    {
      id: "1",
      name: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      image: "/images/padel-tennis.jpeg",
    },
    {
      id: "2",
      name: "Padel Arena Majorstuen",
      address: "Sørkedalsveien 8, 0369 Oslo",
      image: "/images/padel-tennis.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fcfdfd]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.image || "/images/padel-player.png"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">Change profile picture</span>
                    </Button>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <Badge variant="outline" className="mt-2">
                    {user.level} Player
                  </Badge>
                </div>

                <nav className="space-y-1 mb-4 md:mb-0">
                  <Button
                    variant={activeTab === "oversikt" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("oversikt")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Oversikt
                  </Button>
                  <Button
                    variant={activeTab === "bestillinger" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("bestillinger")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Mine bestillinger
                  </Button>
                  <Button
                    variant={activeTab === "ordre" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("ordre")}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Ordrehistorikk
                  </Button>
                  <Button
                    variant={activeTab === "favoritter" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("favoritter")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Favorittbaner
                  </Button>
                  <Button
                    variant={activeTab === "innstillinger" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("innstillinger")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Innstillinger
                  </Button>
                </nav>

                <Separator className="my-2" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logg ut
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Overview Tab */}
              <TabsContent value="oversikt">
                <Card>
                  <CardHeader>
                    <CardTitle>Profiloversikt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Personlig informasjon</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Navn</p>
                            <p>{user.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">E-post</p>
                            <p>{user.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Telefon</p>
                            <p>{user.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Medlem siden</p>
                            <p>{user.memberSince}</p>
                          </div>
                        </div>
                        <Button variant="outline" className="mt-4">
                          <Edit className="mr-2 h-4 w-4" />
                          Rediger informasjon
                        </Button>
                      </div>

                      <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-4">Spillerprofil</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Nivå</p>
                            <p>{user.level}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Spillestil</p>
                            <p>{user.playStyle}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Foretrukket hånd</p>
                            <p>{user.preferredHand}</p>
                          </div>
                        </div>
                        <Button variant="outline" className="mt-4">
                          <Edit className="mr-2 h-4 w-4" />
                          Oppdater spillerprofil
                        </Button>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Kommende bestillinger</h3>
                      {bookings.filter((booking) => booking.status === "Kommende").length > 0 ? (
                        <div className="space-y-4">
                          {bookings
                            .filter((booking) => booking.status === "Kommende")
                            .map((booking) => (
                              <Card key={booking.id}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <h4 className="font-semibold">{booking.courtName}</h4>
                                      <p className="text-sm text-gray-500">
                                        {booking.date} • {booking.time}
                                      </p>
                                      <p className="text-sm mt-1">
                                        {booking.players} spillere • {booking.price}
                                      </p>
                                    </div>
                                    <Badge>{booking.status}</Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Ingen kommende bestillinger.</p>
                      )}

                      <div className="mt-4">
                        <Link href="/finn-bane">
                          <Button>Bestill banetid</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Bookings Tab */}
              <TabsContent value="bestillinger">
                <Card>
                  <CardHeader>
                    <CardTitle>Mine bestillinger</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <Card key={booking.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold">{booking.courtName}</h4>
                                <p className="text-sm text-gray-500">
                                  {booking.date} • {booking.time}
                                </p>
                                <p className="text-sm mt-1">
                                  {booking.players} spillere • {booking.price}
                                </p>
                              </div>
                              <div className="flex items-center">
                                <Badge variant={booking.status === "Kommende" ? "default" : "secondary"}>
                                  {booking.status}
                                </Badge>
                                <Button variant="ghost" size="icon">
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="ordre">
                <Card>
                  <CardHeader>
                    <CardTitle>Ordrehistorikk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <Card key={order.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center mb-4">
                              <div>
                                <h4 className="font-semibold">{order.id}</h4>
                                <p className="text-sm text-gray-500">{order.date}</p>
                              </div>
                              <Badge variant="outline">{order.status}</Badge>
                            </div>
                            <Separator className="my-2" />
                            <div className="space-y-2 my-3">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                  <p className="text-sm">
                                    {item.quantity}x {item.name}
                                  </p>
                                  <p className="text-sm font-medium">{item.price}</p>
                                </div>
                              ))}
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between items-center mt-2">
                              <p className="font-semibold">Total</p>
                              <p className="font-semibold">{order.total}</p>
                            </div>
                            <div className="mt-4 flex space-x-2">
                              <Button variant="outline" size="sm">
                                Se detaljer
                              </Button>
                              <Button variant="outline" size="sm">
                                Spor forsendelse
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favoritter">
                <Card>
                  <CardHeader>
                    <CardTitle>Favorittbaner</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteCourts.map((court) => (
                        <Card key={court.id}>
                          <CardContent className="p-0">
                            <div className="flex">
                              <div className="w-1/3">
                                <Image
                                  src={court.image || "/placeholder.svg"}
                                  alt={court.name}
                                  width={120}
                                  height={120}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="p-4 flex-1">
                                <h4 className="font-semibold">{court.name}</h4>
                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                  <MapPin className="h-3 w-3 mr-1" /> {court.address}
                                </p>
                                <div className="mt-4 flex space-x-2">
                                  <Button size="sm">Bestill</Button>
                                  <Button variant="outline" size="sm">
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link href="/finn-bane">
                        <Button variant="outline">Finn flere baner</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="innstillinger">
                <Card>
                  <CardHeader>
                    <CardTitle>Innstillinger</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Kontoinformasjon</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Navn</Label>
                              <Input id="name" defaultValue={user.name} className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="email">E-post</Label>
                              <Input id="email" defaultValue={user.email} className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="phone">Telefon</Label>
                              <Input id="phone" defaultValue={user.phone} className="mt-1" />
                            </div>
                          </div>
                          <Button>Lagre endringer</Button>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Passord</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="current-password">Nåværende passord</Label>
                              <Input id="current-password" type="password" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="new-password">Nytt passord</Label>
                              <Input id="new-password" type="password" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="confirm-password">Bekreft nytt passord</Label>
                              <Input id="confirm-password" type="password" className="mt-1" />
                            </div>
                          </div>
                          <Button>Oppdater passord</Button>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Varsler</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">E-postvarsler</p>
                              <p className="text-sm text-gray-500">Motta varsler om bestillinger og tilbud</p>
                            </div>
                            <Switch defaultChecked id="email-notifications" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">SMS-varsler</p>
                              <p className="text-sm text-gray-500">Motta påminnelser om bestillinger</p>
                            </div>
                            <Switch id="sms-notifications" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Nyhetsbrev</p>
                              <p className="text-sm text-gray-500">Motta ukentlige oppdateringer og tilbud</p>
                            </div>
                            <Switch defaultChecked id="newsletter" />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Personvern</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Offentlig profil</p>
                              <p className="text-sm text-gray-500">La andre spillere se din profil</p>
                            </div>
                            <Switch id="public-profile" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Datainnsamling</p>
                              <p className="text-sm text-gray-500">
                                Tillat innsamling av data for å forbedre tjenesten
                              </p>
                            </div>
                            <Switch defaultChecked id="data-collection" />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold text-red-500 mb-4">Faresone</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Når du sletter kontoen din, vil all din personlige informasjon, bestillinger og preferanser
                          bli permanent fjernet.
                        </p>
                        <Button variant="destructive">Slett konto</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
