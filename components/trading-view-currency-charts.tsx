"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { loadTradingViewWidget } from "@/utils/script-loader"
import type { CurrencyPair, TradingViewWidgetConfig } from "@/types/data-types"

// Currency pairs to display with verified TradingView symbols
const currencyPairs: CurrencyPair[] = [
  { id: "NOK/USD", base: "NOK", quote: "USD", symbol: "USDNOK", inverted: true },
  { id: "EUR/USD", base: "EUR", quote: "USD", symbol: "EURUSD" },
  { id: "EUR/GBP", base: "EUR", quote: "GBP", symbol: "EURGBP" },
  { id: "NOK/GBP", base: "NOK", quote: "GBP", symbol: "GBPNOK", inverted: true },
  { id: "EUR/SEK", base: "EUR", quote: "SEK", symbol: "EURSEK" },
  { id: "EUR/NOK", base: "EUR", quote: "NOK", symbol: "EURNOK" },
  { id: "GBP/SEK", base: "GBP", quote: "SEK", symbol: "GBPSEK" },
  { id: "USD/SEK", base: "USD", quote: "SEK", symbol: "USDSEK" },
]

export default function TradingViewCurrencyCharts() {
  const [selectedPair, setSelectedPair] = useState("EUR/USD")
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get the current pair's TradingView symbol
  const currentPair = currencyPairs.find((pair) => pair.id === selectedPair)
  const currentSymbol = currentPair?.symbol || "EURUSD"
  const isInverted = currentPair?.inverted || false

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    setIsLoading(true)
    setError(null)

    const containerId = "tradingview-widget-container"

    // TradingView widget configuration
    const widgetConfig: TradingViewWidgetConfig = {
      symbol: `FX:${currentSymbol}`,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1", // Candles
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: true,
      autosize: true,
    }

    try {
      // Load TradingView widget
      const cleanup = loadTradingViewWidget(containerId, widgetConfig, () => {
        setIsLoading(false)
      })

      // Return cleanup function
      return cleanup
    } catch (err) {
      console.error("Error loading TradingView Currency widget:", err)
      setError("Failed to load TradingView widget. Please try again later.")
      setIsLoading(false)

      return () => {}
    }
  }, [selectedPair, isClient, currentSymbol])

  return (
    <Card className="w-full bg-[#131722]">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-[#1E222D] text-white">
        <div>
          <h2 className="text-xl font-semibold">Currency Charts</h2>
          <p className="text-sm text-gray-400">Live exchange rates powered by TradingView</p>
        </div>
        {isInverted && (
          <div className="px-3 py-1 bg-amber-600 text-white text-xs rounded-full">
            Showing inverted rate ({currentSymbol})
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="EUR/USD" onValueChange={setSelectedPair} value={selectedPair}>
          <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 rounded-none bg-[#1E222D] gap-1">
            {currencyPairs.map((pair) => (
              <TabsTrigger
                key={pair.id}
                value={pair.id}
                className="text-xs md:text-sm py-3 data-[state=active]:bg-[#2962FF] data-[state=active]:text-white"
              >
                {pair.id}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="h-[400px] sm:h-[500px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#131722] z-10">
                <Skeleton className="h-[450px] w-full bg-[#1E222D]" />
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

            <div id="tradingview-widget-container" className="w-full h-full"></div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
