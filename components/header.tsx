"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Gallery", href: "/" },
    { name: "Daily Charts", href: "/" },
    { name: "Contact", href: "/" },
    { name: "FSC®/PEFC", href: "/" },
  ]

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-scanfiber-AS-logo-upYLShi3Nl1sHTmZmtnGkgmpGdqvuv.png"
              alt="Scanfiber AS"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-custom-blue transition-colors duration-200 font-medium text-sm"
                style={
                  {
                    "--hover-color": "#0B131E",
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0B131E"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white"
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-custom-blue border-t border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-custom-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0B131E"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "white"
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
