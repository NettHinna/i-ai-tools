import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Norsk Boligventilasjon - Bedre inneklima, lavere strømregning",
  description:
    "Profesjonell installasjon og service av ventilasjonsanlegg og sentralstøvsugere. Vi hjelper boligeiere i Oslo-regionen med bedre inneklima og energisparing gjennom moderne ventilasjonssystemer.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  )
}
