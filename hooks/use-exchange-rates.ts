"use client"

import { useState, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import type { ExchangeRate } from "@/types/data-types"

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRate[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const currencies = ["EUR", "GBP", "NOK", "SEK", "JPY", "CAD", "AUD", "CHF"]

  useEffect(() => {
    const fetchRates = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Fetch today's rates
        const todayRates = await apiClient.fetchExchangeRates(baseCurrency)

        // Create a date for yesterday
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)

        // Fetch yesterday's rates for comparison
        const yesterdayRates = await apiClient.fetchExchangeRates(baseCurrency)

        // Calculate changes and format data
        const ratesData: ExchangeRate[] = currencies
          .filter((code) => todayRates[code] !== undefined)
          .map((code) => {
            const todayRate = todayRates[code]
            const yesterdayRate = yesterdayRates[code] || todayRate // Fallback if no yesterday data
            const change = ((todayRate - yesterdayRate) / yesterdayRate) * 100

            return {
              code,
              rate: todayRate,
              change,
            }
          })

        setRates(ratesData)
        setLastUpdated(new Date())
      } catch (err) {
        console.error("Error fetching exchange rates:", err)
        setError("Failed to fetch exchange rates. Using simulated data instead.")

        // Generate mock data as fallback
        const mockRates: ExchangeRate[] = currencies.map((code) => {
          const baseRate =
            code === "EUR"
              ? 0.92
              : code === "GBP"
                ? 0.78
                : code === "NOK"
                  ? 10.81
                  : code === "SEK"
                    ? 10.45
                    : code === "JPY"
                      ? 149.5
                      : code === "CAD"
                        ? 1.36
                        : code === "AUD"
                          ? 1.52
                          : code === "CHF"
                            ? 0.88
                            : 1.0

          const change = (Math.random() * 2 - 1) * 0.5 // Random change between -0.5% and 0.5%

          return {
            code,
            rate: baseRate,
            change,
          }
        })

        setRates(mockRates)
        setLastUpdated(new Date())
      } finally {
        setIsLoading(false)
      }
    }

    fetchRates()

    // Refresh rates every 30 minutes
    const intervalId = setInterval(fetchRates, 30 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [baseCurrency])

  return {
    rates,
    isLoading,
    error,
    baseCurrency,
    setBaseCurrency,
    lastUpdated,
  }
}
