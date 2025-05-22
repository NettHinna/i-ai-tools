"use client"

import { useState, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import type { BalticDryIndexDataPoint } from "@/types/data-types"

export function useBalticDryIndex() {
  const [data, setData] = useState<BalticDryIndexDataPoint[]>([])
  const [filteredData, setFilteredData] = useState<BalticDryIndexDataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    endDate: new Date(),
  })

  // Fetch Baltic Dry Index data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const fetchedData = await apiClient.fetchBalticDryIndexData()
        setData(fetchedData)
        setLastUpdated(new Date())
      } catch (err) {
        console.error("Error fetching Baltic Dry Index data:", err)
        setError("Failed to fetch Baltic Dry Index data. Using simulated data instead.")

        // Try to get data again as a fallback
        try {
          const fallbackData = await apiClient.fetchBalticDryIndexData()
          setData(fallbackData)
          setLastUpdated(new Date())
        } catch (fallbackErr) {
          console.error("Fallback data fetch also failed:", fallbackErr)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    // Set up refresh interval (every 30 minutes)
    const intervalId = setInterval(fetchData, 30 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Filter data when date range or all data changes
  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter((item) => item.date >= dateRange.startDate && item.date <= dateRange.endDate)
      setFilteredData(filtered)
    }
  }, [dateRange, data])

  // Handle date range change
  const handleDateRangeChange = (range: { startDate: Date; endDate: Date }) => {
    setDateRange(range)
  }

  // Calculate statistics
  const statistics = {
    currentValue: filteredData.length > 0 ? filteredData[filteredData.length - 1].value : 0,
    startValue: filteredData.length > 0 ? filteredData[0].value : 0,
    min: filteredData.length > 0 ? Math.min(...filteredData.map((d) => d.value)) : 0,
    max: filteredData.length > 0 ? Math.max(...filteredData.map((d) => d.value)) : 0,
    avg:
      filteredData.length > 0 ? Math.round(filteredData.reduce((sum, d) => sum + d.value, 0) / filteredData.length) : 0,
  }

  const change = statistics.currentValue - statistics.startValue
  const percentChange = statistics.startValue !== 0 ? (change / statistics.startValue) * 100 : 0

  return {
    allData: data,
    filteredData,
    isLoading,
    error,
    lastUpdated,
    dateRange,
    handleDateRangeChange,
    statistics,
    change,
    percentChange,
  }
}
