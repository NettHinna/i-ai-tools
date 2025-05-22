"use client"

import { useState, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import type { CurrencyDataPoint, CurrencyPair } from "@/types/data-types"

export function useCurrencyData(currencyPairs: CurrencyPair[]) {
  const [selectedPair, setSelectedPair] = useState(currencyPairs[0]?.id || "")
  const [currencyData, setCurrencyData] = useState<Record<string, CurrencyDataPoint[]>>({})
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [error, setError] = useState<Record<string, string | null>>({})
  const [lastUpdated, setLastUpdated] = useState<Record<string, Date | null>>({})
  const [dataSource, setDataSource] = useState<Record<string, string>>({})
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    endDate: new Date(),
  })
  const [comparisonMode, setComparisonMode] = useState(false)
  const [comparisonPair, setComparisonPair] = useState<string | null>(null)

  // Get current pair data
  const currentPairData = currencyData[selectedPair] || []
  const comparisonPairData = comparisonPair ? currencyData[comparisonPair] || [] : []

  // Filter data based on date range
  const filteredData = currentPairData.filter(
    (item) => item.date >= dateRange.startDate && item.date <= dateRange.endDate,
  )

  // Filter comparison data based on date range
  const filteredComparisonData = comparisonPairData.filter(
    (item) => item.date >= dateRange.startDate && item.date <= dateRange.endDate,
  )

  // Fetch currency data for a specific pair
  const fetchPairData = async (pair: CurrencyPair) => {
    const pairId = pair.id

    setIsLoading((prev) => ({ ...prev, [pairId]: true }))
    setError((prev) => ({ ...prev, [pairId]: null }))

    try {
      const data = await apiClient.fetchCurrencyData(pair.base, pair.quote)

      setCurrencyData((prev) => ({
        ...prev,
        [pairId]: data,
      }))

      setLastUpdated((prev) => ({
        ...prev,
        [pairId]: new Date(),
      }))

      setDataSource((prev) => ({
        ...prev,
        [pairId]: "Simulated data based on historical patterns",
      }))
    } catch (err) {
      console.error(`Error fetching currency data for ${pairId}:`, err)
      setError((prev) => ({
        ...prev,
        [pairId]: `Failed to fetch ${pairId} data. Using simulated data instead.`,
      }))

      // Try to get data again as a fallback
      try {
        const fallbackData = await apiClient.fetchCurrencyData(pair.base, pair.quote)

        setCurrencyData((prev) => ({
          ...prev,
          [pairId]: fallbackData,
        }))

        setLastUpdated((prev) => ({
          ...prev,
          [pairId]: new Date(),
        }))

        setDataSource((prev) => ({
          ...prev,
          [pairId]: "Simulated data (fallback)",
        }))
      } catch (fallbackErr) {
        console.error(`Fallback data fetch also failed for ${pairId}:`, fallbackErr)
      }
    } finally {
      setIsLoading((prev) => ({ ...prev, [pairId]: false }))
    }
  }

  // Fetch data for all currency pairs
  useEffect(() => {
    const fetchAllPairs = async () => {
      for (const pair of currencyPairs) {
        await fetchPairData(pair)
      }
    }

    if (currencyPairs.length > 0) {
      fetchAllPairs()

      // Set up refresh interval (every 30 minutes)
      const intervalId = setInterval(fetchAllPairs, 30 * 60 * 1000)

      return () => clearInterval(intervalId)
    }
  }, [currencyPairs])

  // Handle date range change
  const handleDateRangeChange = (range: { startDate: Date; endDate: Date }) => {
    setDateRange(range)
  }

  // Toggle comparison mode
  const toggleComparisonMode = () => {
    if (comparisonMode) {
      setComparisonMode(false)
      setComparisonPair(null)
    } else {
      setComparisonMode(true)
      // Set default comparison pair (different from selected pair)
      const availablePairs = currencyPairs.filter((pair) => pair.id !== selectedPair)
      if (availablePairs.length > 0) {
        setComparisonPair(availablePairs[0].id)
      }
    }
  }

  // Handle comparison pair change
  const handleComparisonPairChange = (pair: string) => {
    setComparisonPair(pair)
  }

  // Calculate statistics for current pair
  const currentValue = filteredData.length > 0 ? filteredData[filteredData.length - 1].value : 0
  const startValue = filteredData.length > 0 ? filteredData[0].value : 0
  const change = currentValue - startValue
  const percentChange = startValue !== 0 ? (change / startValue) * 100 : 0

  // Prepare combined data for download
  const combinedData = filteredData.map((item, index) => {
    const result = {
      date: item.date,
      [selectedPair]: item.value,
    } as any

    if (comparisonMode && filteredComparisonData[index]) {
      result[comparisonPair as string] = filteredComparisonData[index].value
    }

    return result
  })

  return {
    selectedPair,
    setSelectedPair,
    currencyData,
    isLoading,
    error,
    lastUpdated,
    dataSource,
    dateRange,
    handleDateRangeChange,
    comparisonMode,
    comparisonPair,
    toggleComparisonMode,
    handleComparisonPairChange,
    currentPairData,
    comparisonPairData,
    filteredData,
    filteredComparisonData,
    currentValue,
    startValue,
    change,
    percentChange,
    combinedData,
    fetchPairData,
  }
}
