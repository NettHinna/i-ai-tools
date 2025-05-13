"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Hjem", href: "/" },
    { name: "Produkter", href: "/produkter" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-semibold text-gray-900">Derksen Trading</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Kontakt oss
            </Link>
          </nav>

          {/* Mobile navigation */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Åpne meny</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block w-full mt-2 px-3 py-2 text-base font-medium text-center text-white bg-primary-600 hover:bg-primary-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
