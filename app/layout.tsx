import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { EnhancedChatProvider } from "@/components/chat/enhanced-chat-context"
import ContextChatWidget from "@/components/chat/context-chat-widget"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Derksen Trading AS - Mobil sandblåsing og overflatebehandling",
  description: "Norges importør av IBIX sandblåsere – Sandblåsing og industrilakkering i Bodø og Nordland",
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
        <EnhancedChatProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ContextChatWidget />
        </EnhancedChatProvider>
      </body>
    </html>
  )
}
