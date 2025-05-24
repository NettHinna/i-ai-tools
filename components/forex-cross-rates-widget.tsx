"use client"

import { useState, useEffect } from "react"

interface Rate {
  symbol: string
  rate: number
}

const ForexCrossRatesWidget = () => {
  const [rates, setRates] = useState<Rate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP,JPY,AUD,CAD,CHF")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        const newRates: Rate[] = Object.entries(data.rates).map(([symbol, rate]) => ({
          symbol,
          rate: Number(rate.toFixed(4)),
        }))

        setRates(newRates)
        setLoading(false)
      } catch (e: any) {
        setError(e.message)
        setLoading(false)
      }
    }

    fetchRates()

    const intervalId = setInterval(fetchRates, 60000) // Update every minute

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [])

  if (loading) {
    return <div>Loading rates...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Forex Cross Rates (USD Based)</h2>
      <div className="max-h-[400px] overflow-y-auto scroll-smooth">
        <div className="space-y-1">
          {rates.map((rate) => (
            <div key={rate.symbol} className="flex justify-between items-center py-1 px-2 bg-gray-100 rounded">
              <span>{rate.symbol}:</span>
              <span>{rate.rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ForexCrossRatesWidget
