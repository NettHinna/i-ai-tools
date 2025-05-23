"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { loadTradingViewWidget } from "@/utils/script-loader"
import type { TradingViewWidgetConfig } from "@/types/data-types"

export default function TradingViewBalticIndex() {
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

    const containerId = "tradingview-baltic-container"

    // TradingView widget configuration
    const widgetConfig: TradingViewWidgetConfig = {
      symbol: "INDEX:BDI",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      backgroundColor: "#131722",
      gridColor: "#363c4e",
      style: "3",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: true,
      autosize: true,
      toolbar_bg: "#1E222D",
      allow_symbol_change: false,
      save_image: true,
      container_id: containerId,
      studies_overrides: {},
      overrides: {
        "paneProperties.background": "#131722",
        "paneProperties.backgroundType": "solid",
        "paneProperties.vertGridProperties.color": "#363c4e",
        "paneProperties.horzGridProperties.color": "#363c4e",
        "symbolWatermarkProperties.transparency": 90,
        "symbolWatermarkProperties.color": "#363c4e",
        "scalesProperties.textColor": "#AAA",
        "scalesProperties.backgroundColor": "#131722",
        "mainSeriesProperties.areaStyle.color1": "#2962FF",
        "mainSeriesProperties.areaStyle.color2": "#131722",
        "mainSeriesProperties.areaStyle.linecolor": "#2962FF",
        "paneProperties.topMargin": 10,
        "paneProperties.bottomMargin": 10,
      },
    }

    try {
      // Load TradingView widget
      const cleanup = loadTradingViewWidget(containerId, widgetConfig, () => {
        setIsLoading(false)
      })

      // Return cleanup function
      return cleanup
    } catch (err) {
      console.error("Error loading TradingView Baltic Index widget:", err)
      setError("Failed to load TradingView widget. Please try again later.")
      setIsLoading(false)

      return () => {}
    }
  }, [isClient])

  return (
    <Card className="w-full bg-[#131722] border-[#363c4e]">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-[#1E222D] text-white">
        <div>
          <h2 className="text-xl font-semibold">Baltic Dry Index</h2>
          <p className="text-sm text-gray-400">Live Baltic Dry Index data powered by TradingView</p>
        </div>
      </CardHeader>

      <CardContent className="p-0 mb-4">
        <div className="h-[450px] sm:h-[550px] relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#131722] z-10">
              <Skeleton className="h-[550px] w-full bg-[#1E222D]" />
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

          <div id="tradingview-baltic-container" className="w-full h-full"></div>
        </div>
      </CardContent>
    </Card>
  )
}
