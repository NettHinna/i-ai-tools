"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import ScanfiberHeader from "@/components/scanfiber-header"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle } from "lucide-react"

// Dynamically import TradingView components to avoid SSR issues
const TradingViewCurrencyCharts = dynamic(() => import("@/components/trading-view-currency-charts"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-[#131722] rounded-lg">
      <div className="p-4 border-b flex justify-between items-center bg-[#1E222D] text-white">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-24 bg-[#2A2E39]" />
          <Skeleton className="h-6 w-6 rounded-full bg-[#2A2E39]" />
        </div>
      </div>
      <div className="border-b bg-[#1E222D]">
        <Skeleton className="h-12 w-full bg-[#2A2E39]" />
      </div>
      <div className="p-4">
        <Skeleton className="h-[550px] w-full bg-[#2A2E39]" />
      </div>
    </div>
  ),
})

const TradingViewBalticIndex = dynamic(() => import("@/components/trading-view-baltic-index"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-[#131722] rounded-lg">
      <div className="p-4 border-b flex justify-between items-center bg-[#1E222D] text-white">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-24 bg-[#2A2E39]" />
        </div>
      </div>
      <div className="p-4">
        <Skeleton className="h-[550px] w-full bg-[#2A2E39]" />
      </div>
    </div>
  ),
})

const ForexCrossRatesWidget = dynamic(() => import("@/components/forex-cross-rates-widget"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-[#131722] rounded-lg">
      <div className="p-4 border-b flex justify-between items-center bg-[#1E222D] text-white">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-24 bg-[#2A2E39]" />
        </div>
      </div>
      <div className="p-4">
        <Skeleton className="h-[500px] w-full bg-[#2A2E39]" />
      </div>
    </div>
  ),
})

export default function ScanfiberCharts() {
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Ensure we're running on client before rendering components
  useEffect(() => {
    setIsClient(true)

    // Check if TradingView is blocked by ad blockers
    const checkTradingViewAccess = async () => {
      try {
        const response = await fetch("https://s3.tradingview.com/tv.js", {
          method: "HEAD",
          mode: "no-cors", // This will prevent CORS errors but won't tell us if the request succeeded
        })

        // Since we're using no-cors, we can't actually check the status
        // Instead, we'll set a timeout and assume it's blocked if TradingView widgets don't load
        setTimeout(() => {
          const tvElements = document.querySelectorAll('[id^="tradingview"]')
          if (tvElements.length > 0) {
            const allEmpty = Array.from(tvElements).every((el) => el.children.length === 0)
            if (allEmpty) {
              setError(
                "TradingView widgets may be blocked by an ad blocker. Please disable your ad blocker to view the charts.",
              )
            }
          }
        }, 5000)
      } catch (err) {
        console.error("Error checking TradingView access:", err)
      }
    }

    checkTradingViewAccess()
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(var(--scanfiber-bg))]">
      <ScanfiberHeader />

      <main className="container mx-auto py-8 px-4">
        {error && (
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-md flex items-center text-amber-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        )}

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Baltic Dry Index</h2>
            <div className="text-sm text-white/70">Real-time market data</div>
          </div>
          {isClient && <TradingViewBalticIndex />}
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Currency Charts</h2>
            <div className="text-sm text-white/70">Live exchange rates</div>
          </div>

          {isClient && (
            <Tabs defaultValue="charts" className="w-full">
              <TabsList className="w-full max-w-md mb-4">
                <TabsTrigger value="charts">Currency Charts</TabsTrigger>
                <TabsTrigger value="rates">Cross Rates</TabsTrigger>
              </TabsList>

              <TabsContent value="charts">
                <TradingViewCurrencyCharts />
              </TabsContent>

              <TabsContent value="rates">
                <ForexCrossRatesWidget />
              </TabsContent>
            </Tabs>
          )}
        </section>
      </main>

      <footer className="bg-[hsl(var(--scanfiber-bg)/0.8)] py-6 text-center text-white text-sm mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-lg mb-2">SCANFIBER AS</div>
              <p className="text-white/70">Providing market insights since 1995</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p>© {new Date().getFullYear()} Scanfiber AS. All rights reserved.</p>
            <p className="text-xs mt-2 text-white/50">Data provided by TradingView. For informational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
