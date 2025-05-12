"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Home,
  LogOut,
  Mail,
  Menu,
  Settings,
  ShoppingBag,
  User2,
  MapPin,
  GraduationCap,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
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
        <nav className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-5 w-5" />
            Hjem
          </Link>

          {/* Products Dropdown */}
          <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen} className="w-full">
            <CollapsibleTrigger asChild>
              <button className="flex w-full items-center justify-between px-3 py-2 text-base hover:text-primary">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Produkter</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-10 space-y-1">
              <Link
                href="/produkter/padel-racketer"
                className="block px-3 py-2 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Padel racketer
              </Link>
              <Link
                href="/produkter/klaer"
                className="block px-3 py-2 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Klær
              </Link>
              <Link
                href="/produkter/padel-sko"
                className="block px-3 py-2 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Padel sko
              </Link>
              <Link
                href="/produkter/padel-baller"
                className="block px-3 py-2 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Padel baller
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link
            href="/finn-bane"
            className="flex items-center gap-3 px-3 py-2 text-base font-medium text-primary"
            onClick={() => setIsOpen(false)}
          >
            <MapPin className="h-5 w-5" />
            Finn bane
          </Link>
          <Link
            href="/kurs"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <GraduationCap className="h-5 w-5" />
            Kurs og trening
          </Link>
          <Link
            href="/om-oss"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Info className="h-5 w-5" />
            Om oss
          </Link>
          <Link
            href="/kontakt"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-5 w-5" />
            Kontakt
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <User2 className="h-5 w-5" />
            Min profil
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-base hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="h-5 w-5" />
            Innstillinger
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-red-500 transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="h-5 w-5" />
            Logg ut
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
