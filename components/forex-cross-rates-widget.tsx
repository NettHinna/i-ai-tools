"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { loadScript } from "@/utils/script-loader"

export default function ForexCrossRatesWidget() {
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    setIsLoading(true)
    setError(null)

    const containerId = "forex-rates-container"
    const container = document.getElementById(containerId)

    if (!container) {
      setError("Container not found")
      setIsLoading(false)
      return
    }

    // Clear container
    container.innerHTML = ""

    try {
      // Load TradingView Forex Cross Rates widget
      const cleanup = loadScript("https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js", {
        id: "tradingview-forex-script",
        async: true,
        attributes: {
          type: "text/javascript",
        },
        onLoad: () => {
          setIsLoading(false)
        },
        onError: (err) => {
          console.error("Error loading TradingView Forex widget:", err)
          setError("Failed to load TradingView widget. Please try again later.")
          setIsLoading(false)
        },
      })

      // Set widget configuration
      const script = document.getElementById("tradingview-forex-script") as HTMLScriptElement
      if (script) {
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 500,
          currencies: ["EUR", "USD", "GBP", "NOK", "SEK", "JPY", "CAD", "CHF"],
          isTransparent: false,
          colorTheme: "dark",
          locale: "en",
        })
      }

      // Add the script to the container
      if (container && script) {
        container.appendChild(script)
      }

      // Return cleanup function
      return cleanup
    } catch (err) {
      console.error("Error setting up TradingView Forex widget:", err)
      setError("Failed to set up TradingView widget. Please try again later.")
      setIsLoading(false)

      return () => {}
    }
  }, [isClient])

  return (
    <Card className="w-full bg-[#131722]">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-[#1E222D] text-white">
        <div>
          <h2 className="text-xl font-semibold">Forex Cross Rates</h2>
          <p className="text-sm text-gray-400">Live exchange rates for all major currency pairs</p>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#131722] z-10">
              <Skeleton className="h-[500px] w-full bg-[#1E222D]" />
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#131722] z-10">
              <div className="text-white text-center p-4">
                <p className="text-red-400 mb-2">{error}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          <div id="forex-rates-container" className="w-full h-[500px]"></div>
        </div>
      </CardContent>
    </Card>
  )
}
