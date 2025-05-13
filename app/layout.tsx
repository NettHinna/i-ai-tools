import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { EnhancedChatProvider } from "@/components/chat/enhanced-chat-context"
import ContextChatWidget from "@/components/chat/context-chat-widget"
import { EnvDebug } from "@/components/env-debug"

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

// Safely create the URL with a fallback
const getBaseUrl = () => {
  try {
    // Make sure the URL includes the protocol
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://derksen.vercel.app"
    // Ensure the URL starts with http:// or https://
    const url = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`
    return new URL(url)
  } catch (error) {
    console.error("Invalid URL format:", error)
    return new URL("https://derksen.vercel.app")
  }
}

export const metadata: Metadata = {
  title: "Derksen Trading AS - Mobil sandblåsing og overflatebehandling",
  description: "Norges importør av IBIX sandblåsere – Sandblåsing og industrilakkering i Bodø og Nordland",
  metadataBase: getBaseUrl(),
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
          {process.env.NODE_ENV !== "production" && <EnvDebug />}
        </EnhancedChatProvider>
      </body>
    </html>
  )
}
