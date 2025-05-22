"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useExchangeRates } from "@/hooks/use-exchange-rates"
import { formatPercentage } from "@/utils/number-utils"

export default function ExchangeRatesWidget() {
  const { rates, isLoading, error, baseCurrency, setBaseCurrency, lastUpdated } = useExchangeRates()

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseCurrency(e.target.value)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Exchange Rates</CardTitle>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Base:</span>
          <select value={baseCurrency} onChange={handleCurrencyChange} className="text-sm border rounded p-1">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="NOK">NOK</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        ) : error ? (
          <div className="text-destructive text-center p-4">
            <p>{error}</p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-2 font-medium text-sm mb-2">
              <div>Currency</div>
              <div>Rate</div>
              <div>Change</div>
            </div>
            <div className="space-y-1">
              {rates.map((rate) => (
                <div key={rate.code} className="grid grid-cols-3 gap-2 text-sm py-2 border-t">
                  <div>
                    {rate.code}/{baseCurrency}
                  </div>
                  <div>{rate.rate.toFixed(4)}</div>
                  <div className={rate.change >= 0 ? "text-green-500" : "text-red-500"}>
                    {rate.change >= 0 ? "▲" : "▼"} {formatPercentage(Math.abs(rate.change))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-4">
              Last updated: {lastUpdated?.toLocaleString() || "Loading..."}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
