"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    {
      name: "Produkter",
      href: "/produkter",
      dropdown: [
        { name: "IBIX Sandblåsere", href: "/produkter" },
        { name: "IBIX Problaster 25 H2O", href: "/produkter/ibix-problaster-25-h2o" },
        { name: "IBIX Problaster 40 H2O", href: "/produkter/ibix-problaster-40-h2o" },
        { name: "IBIX 9 Basic", href: "/produkter/ibix-9-basic" },
      ],
    },
    {
      name: "Tjenester",
      href: "/tjenester",
      dropdown: [
        { name: "Sandblåsing", href: "/tjenester/sandblasing" },
        { name: "Graffiti-fjerning", href: "/tjenester/graffiti-fjerning" },
        { name: "Industrilakkering", href: "/tjenester/industrilakkering" },
      ],
    },
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 relative mr-2">
                  <Image
                    src="/abstract-dt.png"
                    alt="Derksen Trading Logo"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </div>
                <span className="text-xl font-semibold text-gray-900">Derksen Trading</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : "",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
            >
              Kontakt oss
            </Link>
          </nav>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-3 pt-2 divide-y divide-gray-100">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="block w-full px-3 py-3 text-center text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt oss
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
