"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, ShoppingBag, ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { toast } from "@/components/ui/use-toast"
import { useMobile } from "@/hooks/use-mobile"

interface CartItem {
  id: string
  name: string
  price: number
  type?: string
  quantity: number
  image: string
}

export default function HomePage() {
  const isMobile = useMobile()
  const [cartOpen, setCartOpen] = useState(false)

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Pro Carbon Padel Racket",
      price: 1899,
      type: "Advanced",
      quantity: 1,
      image: "/images/padel-tennis-4.jpeg",
    },
    {
      id: "2",
      name: "Lightweight Padel Racket",
      price: 1299,
      type: "Beginner",
      quantity: 1,
      image: "/images/padel-tennis.jpeg",
    },
  ])

  const popularProducts = [
    {
      id: "1",
      name: "Pro Carbon Padel Racket",
      price: 1899,
      rating: 4.9,
      image: "/images/padel-tennis-4.jpeg",
      category: "Racketer",
    },
    {
      id: "2",
      name: "Performance Polo Shirt",
      price: 599,
      rating: 4.7,
      image: "/images/padel-tennis-2.jpeg",
      category: "Klær",
    },
    {
      id: "3",
      name: "Tournament Padel Balls",
      price: 149,
      rating: 4.8,
      image: "/images/padel-tennis-3.jpeg",
      category: "Baller",
    },
    {
      id: "4",
      name: "Premium Padel Shoes",
      price: 1299,
      rating: 4.6,
      image: "/images/padel-tennis-1.jpeg",
      category: "Sko",
    },
  ]

  const featuredCourts = [
    {
      id: "1",
      name: "Oslo Padel Club",
      address: "Haslevangen 32, 0579 Oslo",
      distance: "1.2 km",
      rating: 4.8,
      reviews: 124,
      price: "350 kr/time",
      image: "/images/padel-tennis.jpeg",
    },
    {
      id: "2",
      name: "Padel Zenith",
      address: "Brynsveien 12, 0667 Oslo",
      distance: "2.5 km",
      rating: 4.6,
      reviews: 89,
      price: "320 kr/time",
      image: "/images/padel-tennis-3.jpeg",
    },
  ]

  const upcomingEvents = [
    {
      id: "1",
      title: "Oslo Padel Open",
      date: "25-27 mai 2025",
      location: "Oslo Padel Club",
      image: "/images/padel-tennis-1.jpeg",
      category: "Turnering",
    },
    {
      id: "2",
      title: "Nybegynner Workshop",
      date: "1 juni 2025",
      location: "Padel Zenith",
      image: "/images/padel-tennis-2.jpeg",
      category: "Kurs",
    },
  ]

  const updateQuantity = useCallback((itemId: string, change: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === itemId) {
              const newQuantity = Math.max(0, item.quantity + change)
              if (newQuantity === 0) {
                toast({
                  title: "Produkt fjernet",
                  description: `${item.name} har blitt fjernet fra handlekurven.`,
                })
                return null
              }
              return { ...item, quantity: newQuantity }
            }
            return item
          })
          .filter(Boolean) as CartItem[],
    )
  }, [])

  const addToCart = useCallback((item: (typeof popularProducts)[0]) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      toast({
        title: "Produkt lagt til",
        description: `${item.name} har blitt lagt til i handlekurven.`,
      })
      return [...prevItems, { ...item, quantity: 1, type: "Standard" }]
    })
  }, [])

  const calculateTotal = useCallback((items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [])

  const cartTotal = calculateTotal(cartItems)

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfdfd]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
          <Image src="/images/padel-tennis-1.jpeg" alt="Padel Tennis" fill className="object-cover" priority />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Løft ditt padel-spill til nye høyder</h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Utforsk vårt utvalg av profesjonelt utstyr, finn ledige baner og bli med på kurs og turneringer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Utforsk produkter
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Finn bane <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Features Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Utstyr</h3>
              <p className="text-gray-600">Kvalitetsprodukter fra ledende merker for alle nivåer av padel-spillere.</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Finn Baner</h3>
              <p className="text-gray-600">Enkelt søk og bestilling av padel-baner i nærheten av deg.</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kurs & Turneringer</h3>
              <p className="text-gray-600">Delta på kurs for alle nivåer og spennende turneringer.</p>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Populære Produkter</h2>
              <p className="text-gray-500 mt-1">Utforsk våre mest populære padel-produkter</p>
            </div>
            <Link href="/produkter">
              <Button variant="outline" className="hidden md:flex">
                Se alle produkter <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                  <Button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 transform scale-95 transition-all group-hover:opacity-100 group-hover:scale-100 bg-white text-primary hover:bg-white/90"
                    onClick={() => addToCart(product)}
                  >
                    Legg i handlekurv
                  </Button>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-white text-primary">{product.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{product.price} kr</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/produkter">
              <Button variant="outline">
                Se alle produkter <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Find Courts Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Finn Baner Nær Deg</h2>
              <p className="text-gray-500 mt-1">Bestill tid på de beste padel-banene i området</p>
            </div>
            <Link href="/finn-bane">
              <Button variant="outline" className="hidden md:flex">
                Se alle baner <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredCourts.map((court) => (
              <Card
                key={court.id}
                className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                    <Image src={court.image || "/placeholder.svg"} alt={court.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 flex-1">
                    <h3 className="font-semibold text-xl mb-1">{court.name}</h3>
                    <p className="text-gray-500 flex items-center gap-1 mb-3">
                      <MapPin className="h-4 w-4" /> {court.address}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-secondary border-0">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                        {court.rating} ({court.reviews})
                      </Badge>
                      <Badge variant="outline" className="bg-secondary border-0">
                        {court.price}
                      </Badge>
                      <Badge variant="outline" className="bg-secondary border-0">
                        {court.distance}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Link href={`/finn-bane?id=${court.id}`}>
                        <Button className="w-full">Bestill bane</Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/finn-bane">
              <Button variant="outline">
                Se alle baner <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Kommende Arrangementer</h2>
              <p className="text-gray-500 mt-1">Turneringer og kurs for alle nivåer</p>
            </div>
            <div className="hidden md:flex gap-4">
              <Link href="/turneringer">
                <Button variant="outline">Turneringer</Button>
              </Link>
              <Link href="/kurs">
                <Button variant="outline">Kurs</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <Badge className="absolute top-3 left-3 bg-primary text-white">{event.category}</Badge>
                  </div>
                  <CardContent className="p-6 flex-1">
                    <h3 className="font-semibold text-xl mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <Link href={event.category === "Turnering" ? "/turneringer" : "/kurs"}>
                      <Button variant="outline" className="w-full">
                        {event.category === "Turnering" ? "Se turnering" : "Se kurs"}
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:hidden">
            <Link href="/turneringer">
              <Button variant="outline" className="w-full sm:w-auto">
                Alle turneringer
              </Button>
            </Link>
            <Link href="/kurs">
              <Button variant="outline" className="w-full sm:w-auto">
                Alle kurs
              </Button>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Meld deg på vårt nyhetsbrev</h2>
              <p className="text-gray-600 mb-6">
                Få de siste oppdateringene om nye produkter, kommende turneringer, og eksklusive tilbud direkte i
                innboksen din.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Din e-postadresse"
                  className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="h-12 px-6">Abonner</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <Image src="/images/padel-proffen-logo.png" alt="Padel Proffen" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shopping Cart Sidebar */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg border-2 bg-white hover:bg-secondary md:hidden"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <div className="flex h-full flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Min handlekurv</h3>
            </div>
            <div className="space-y-6 flex-grow overflow-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-center">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">Handlekurven din er tom</p>
                  <Button variant="link" className="mt-2" onClick={() => setCartOpen(false)}>
                    Fortsett å handle
                  </Button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white rounded-xl p-3 shadow-sm">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          {item.type && <p className="text-xs text-primary mt-1">Type: {item.type}</p>}
                          <p className="font-semibold mt-1 text-sm">{item.price} kr</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, -item.quantity)}
                        >
                          <span className="sr-only">Fjern produkt</span>
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
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex items-center justify-end">
                        <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-base">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-semibold">{cartTotal} kr</p>
                </div>
                <div className="flex items-center justify-between text-base">
                  <p className="text-gray-600">Frakt</p>
                  <p className="text-primary">GRATIS</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-lg font-semibold">
                  <p>Total</p>
                  <p>{cartTotal} kr</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 text-base font-semibold mt-4">
                  Gå til kassen
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
