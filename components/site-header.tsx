"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, ChevronDown, Menu, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-6">
          {/* Mobile menu trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Åpne meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] pt-10">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/padel-proffen-logo.png"
                  alt="Padel Proffen"
                  width={150}
                  height={40}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="px-3 py-2 text-base hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Hjem
                </Link>

                {/* Mobile Products Dropdown */}
                <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen} className="w-full">
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center justify-between px-3 py-2 text-base hover:text-primary">
                      Produkter
                      <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1">
                    <Link
                      href="/produkter/padel-racketer"
                      className="block px-3 py-2 text-sm hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Padel racketer
                    </Link>
                    <Link
                      href="/produkter/klaer"
                      className="block px-3 py-2 text-sm hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Klær
                    </Link>
                    <Link
                      href="/produkter/padel-sko"
                      className="block px-3 py-2 text-sm hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Padel sko
                    </Link>
                    <Link
                      href="/produkter/padel-baller"
                      className="block px-3 py-2 text-sm hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Padel baller
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/finn-bane"
                  className="px-3 py-2 text-base font-medium text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Finn bane
                </Link>
                <Link
                  href="/kurs"
                  className="px-3 py-2 text-base hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kurs og trening
                </Link>
                <Link
                  href="/turneringer"
                  className="px-3 py-2 text-base hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Turneringer
                </Link>
                <Link
                  href="/om-oss"
                  className="px-3 py-2 text-base hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Om oss
                </Link>
                <Link
                  href="/kontakt"
                  className="px-3 py-2 text-base hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/padel-proffen-logo.png"
              alt="Padel Proffen"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Hjem
            </Link>

            {/* Desktop Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  Produkter
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/produkter/padel-racketer" className="cursor-pointer">
                    Padel racketer
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produkter/klaer" className="cursor-pointer">
                    Klær
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produkter/padel-sko" className="cursor-pointer">
                    Padel sko
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produkter/padel-baller" className="cursor-pointer">
                    Padel baller
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/finn-bane" className="text-sm font-medium text-primary">
              Finn bane
            </Link>
            <Link href="/kurs" className="text-sm font-medium hover:text-primary">
              Kurs og trening
            </Link>
            <Link href="/turneringer" className="text-sm font-medium hover:text-primary">
              Turneringer
            </Link>
            <Link href="/om-oss" className="text-sm font-medium hover:text-primary">
              Om oss
            </Link>
          </nav>
        </div>

        {/* Right side - search, cart, account */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Search className="h-5 w-5" />
                <span className="sr-only">Søk</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[250px]">
              <div className="mx-auto max-w-2xl pt-12">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="pl-10 pr-4 py-6 text-base"
                    placeholder="Søk etter produkter, baner eller kurs..."
                    autoFocus
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="text-sm text-muted-foreground">Populære søk:</p>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Padel racketer
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Nybegynner kurs
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Oslo baner
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Cart */}
          <Link href="/handlekurv">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                2
              </Badge>
              <span className="sr-only">Handlekurv</span>
            </Button>
          </Link>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Varsler</span>
          </Button>

          {/* User account */}
          <div className="hidden md:block">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/images/padel-tennis-1.jpeg" alt="Bruker" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
