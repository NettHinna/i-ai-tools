"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-secondary-900/95 backdrop-blur-md shadow-md" : "bg-secondary-900/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2-uEW5VTO30fyJZw280uoGlCK4qF1fEb.png"
                alt="Derksen Trading"
                width={160}
                height={45}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-4">
              <Link href="/om-oss" className="nav-item text-gray-300 hover:text-white">
                Om oss
              </Link>
              <Link href="/produkter" className="nav-item text-white">
                Produkter
              </Link>
              <Link href="/tjenester" className="nav-item text-gray-300 hover:text-white">
                Tjenester
              </Link>
              <Link href="/referanser" className="nav-item text-gray-300 hover:text-white">
                Referanser
              </Link>
              <Link href="/kontakt" className="nav-item text-gray-300 hover:text-white">
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/no" className="text-white text-sm font-medium">
              NO
            </Link>
            <Link href="/en" className="text-gray-300 text-sm font-medium hover:text-white">
              EN
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-primary-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/om-oss"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link
              href="/produkter"
              className="block px-3 py-2 text-base font-medium text-white bg-secondary-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkter
            </Link>
            <Link
              href="/tjenester"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjenester
            </Link>
            <Link
              href="/referanser"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Referanser
            </Link>
            <Link
              href="/kontakt"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <Link href="/no" className="text-white text-sm font-medium">
                NO
              </Link>
              <Link href="/en" className="text-gray-300 text-sm font-medium">
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
