import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgetWrapper from "@/components/chat/chat-widget-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Derksen Trading AS - Mobil sandblåsing og overflatebehandling",
  description: "Norges importør av IBIX sandblåsere – Sandblåsing og industrilakkering i Bodø og Nordland",
  metadataBase: new URL("https://derksen.vercel.app"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nb">
      <body className={`${inter.variable} ${outfit.variable} font-sans relative`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidgetWrapper />
      </body>
    </html>
  )
}
