"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Currency pairs to display
const currencyPairs = [
  { id: "NOK/USD", pairId: "2099" },
  { id: "EUR/USD", pairId: "1" },
  { id: "EUR/GBP", pairId: "5" },
  { id: "NOK/GBP", pairId: "9" },
  { id: "EUR/SEK", pairId: "52" },
  { id: "EUR/NOK", pairId: "59" },
  { id: "GBP/SEK", pairId: "90" },
  { id: "USD/SEK", pairId: "41" },
]

export default function InvestingCurrencyCharts() {
  const [selectedPair, setSelectedPair] = useState("NOK/USD")
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Get the current pair's Investing.com ID
  const currentPairId = currencyPairs.find((pair) => pair.id === selectedPair)?.pairId || "2099"

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize Investing.com widget when component mounts or when selected pair changes
  useEffect(() => {
    if (!isClient) return

    // Clean up previous widget if it exists
    const container = document.getElementById("investing-widget-container")
    if (container) {
      container.innerHTML = ""
    }

    setIsLoading(true)

    // Create iframe for Investing.com widget
    const iframe = document.createElement("iframe")
    iframe.src = `https://sslcharts.investing.com/index.php?force_lang=1&pair_ID=${currentPairId}&timescale=86400&candles=50&style=candles`
    iframe.width = "100%"
    iframe.height = "550"
    iframe.frameBorder = "0"
    iframe.allowFullscreen = true
    iframe.style.display = "block"

    // Add event listener to know when the iframe is loaded
    iframe.onload = () => {
      setIsLoading(false)
    }

    // Add the iframe to the container
    if (container) {
      container.appendChild(iframe)
    }

    return () => {
      // Clean up
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [selectedPair, isClient, currentPairId])

  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-semibold">Currency Charts</h2>
          <p className="text-sm text-gray-500">Live exchange rates powered by Investing.com</p>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="NOK/USD" onValueChange={setSelectedPair} value={selectedPair}>
          <TabsList className="w-full grid grid-cols-4 md:grid-cols-8 rounded-none">
            {currencyPairs.map((pair) => (
              <TabsTrigger key={pair.id} value={pair.id} className="text-xs md:text-sm py-3">
                {pair.id}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="h-[550px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <Skeleton className="h-[500px] w-full" />
              </div>
            )}
            <div id="investing-widget-container" className="w-full h-full"></div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
