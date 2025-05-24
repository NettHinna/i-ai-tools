"use client"

import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DateRangeSelector from "@/components/date-range-selector"
import ChartDownloadButton from "@/components/chart-download-button"
import ChartInfoPanel from "@/components/chart-info-panel"
import { fetchCurrencyData, type CurrencyDataPoint, type CurrencyPair } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"

// Currency pairs data
const currencyPairs = [
  { id: "NOK/USD", base: "NOK", quote: "USD" },
  { id: "EUR/USD", base: "EUR", quote: "USD" },
  { id: "EUR/GBP", base: "EUR", quote: "GBP" },
  { id: "NOK/GBP", base: "NOK", quote: "GBP" },
  { id: "EUR/SEK", base: "EUR", quote: "SEK" },
  { id: "EUR/NOK", base: "EUR", quote: "NOK" },
  { id: "GBP/SEK", base: "GBP", quote: "SEK" },
  { id: "USD/SEK", base: "USD", quote: "SEK" },
]

export default function CurrencyCharts() {
  const [selectedPair, setSelectedPair] = useState("NOK/USD")
  const [currencyData, setCurrencyData] = useState<Record<string, CurrencyDataPoint[]>>({})
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    endDate: new Date(),
  })
  const [comparisonMode, setComparisonMode] = useState(false)
  const [comparisonPair, setComparisonPair] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [error, setError] = useState<Record<string, string | null>>({})
  const [lastUpdated, setLastUpdated] = useState<Record<string, Date | null>>({})

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
      const data = await fetchCurrencyData(pair.base, pair.quote)

      setCurrencyData((prev) => ({
        ...prev,
        [pairId]: data,
      }))

      setLastUpdated((prev) => ({
        ...prev,
        [pairId]: new Date(),
      }))
    } catch (err) {
      console.error(`Error fetching currency data for ${pairId}:`, err)
      setError((prev) => ({
        ...prev,
        [pairId]: `Failed to fetch ${pairId} data. Please try again later.`,
      }))
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

    fetchAllPairs()

    // Set up refresh interval (every 30 minutes)
    const intervalId = setInterval(
      () => {
        fetchAllPairs()
      },
      30 * 60 * 1000,
    )

    return () => clearInterval(intervalId)
  }, [])

  // Format date for display
  const formatDate = (date) => {
    const d = new Date(date)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${months[d.getMonth()]} ${d.getFullYear()}`
  }

  // Format date for tooltip
  const formatTooltipDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Handle date range change
  const handleDateRangeChange = (range) => {
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
  const handleComparisonPairChange = (pair) => {
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
    }

    if (comparisonMode && filteredComparisonData[index]) {
      result[comparisonPair] = filteredComparisonData[index].value
    }

    return result
  })

  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          {isLoading[selectedPair] ? (
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="text-2xl font-bold">{currentValue.toFixed(4)}</div>
              <div className={`flex items-center text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(4)} ({percentChange.toFixed(2)}%)
              </div>
            </div>
          )}
          <ChartInfoPanel
            title="Currency Exchange Rates"
            description="Live currency exchange rates between major currencies. The data shows the value of the base currency in terms of the quote currency."
            source="Exchange rate data providers"
            lastUpdated={lastUpdated[selectedPair] ? lastUpdated[selectedPair].toLocaleString() : "Loading..."}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 text-sm rounded-md ${comparisonMode ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"}`}
              onClick={toggleComparisonMode}
            >
              {comparisonMode ? "Single View" : "Compare"}
            </button>
          </div>

          <ChartDownloadButton data={combinedData} chartName={selectedPair} />
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

          <div className="px-4 py-2 border-t border-b flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <DateRangeSelector onRangeChange={handleDateRangeChange} />

            {comparisonMode && (
              <div className="flex items-center space-x-2">
                <span className="text-sm">Compare with:</span>
                <select
                  value={comparisonPair || ""}
                  onChange={(e) => handleComparisonPairChange(e.target.value)}
                  className="text-sm border rounded p-1"
                >
                  {currencyPairs
                    .filter((pair) => pair.id !== selectedPair)
                    .map((pair) => (
                      <option key={pair.id} value={pair.id}>
                        {pair.id}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>

          {currencyPairs.map((pair) => (
            <TabsContent key={pair.id} value={pair.id} className="m-0">
              <div className="h-[280px] p-4">
                {isLoading[pair.id] ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center">
                      <Skeleton className="h-[220px] w-full" />
                      <div className="mt-4 text-sm text-muted-foreground">Loading {pair.id} data...</div>
                    </div>
                  </div>
                ) : error[pair.id] ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-destructive text-center">
                      <p>{error[pair.id]}</p>
                      <button
                        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
                        onClick={() => fetchPairData(pair)}
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                ) : (
                  <ChartContainer
                    config={{
                      value: {
                        label: pair.id,
                        color: "hsl(var(--chart-1))",
                      },
                      ...(comparisonMode &&
                        comparisonPair &&
                        pair.id === selectedPair && {
                          comparisonValue: {
                            label: comparisonPair,
                            color: "hsl(var(--chart-2))",
                          },
                        }),
                    }}
                    className="h-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(date) => formatDate(date)}
                          tick={{ fontSize: 12 }}
                          tickLine={false}
                          axisLine={false}
                          interval="preserveStartEnd"
                          minTickGap={30}
                          allowDuplicatedCategory={false}
                        />
                        <YAxis
                          domain={["auto", "auto"]}
                          tick={{ fontSize: 12 }}
                          tickLine={false}
                          axisLine={false}
                          tickCount={5}
                          tickFormatter={(value) => value.toFixed(4)}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              formatter={(value) => Number(value).toFixed(4)}
                              labelFormatter={(date) => formatTooltipDate(date)}
                            />
                          }
                        />
                        {pair.id === selectedPair && (
                          <>
                            <Line
                              data={filteredData}
                              type="monotone"
                              dataKey="value"
                              name={selectedPair}
                              stroke="hsl(var(--chart-1))"
                              strokeWidth={2}
                              dot={false}
                              activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                            />
                            {comparisonMode && comparisonPair && (
                              <Line
                                data={filteredComparisonData}
                                type="monotone"
                                dataKey="value"
                                name={comparisonPair}
                                stroke="hsl(var(--chart-2))"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                              />
                            )}
                          </>
                        )}
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                )}
              </div>
              <div className="text-xs text-gray-500 p-2 border-t flex justify-between">
                <span>
                  {!isLoading[pair.id] && currencyData[pair.id] && currencyData[pair.id].length > 0
                    ? `Current rate: ${currencyData[pair.id][currencyData[pair.id].length - 1].value.toFixed(4)} ${pair.id}`
                    : "Loading current rate..."}
                </span>
                <span>
                  {lastUpdated[pair.id] ? `Last updated: ${lastUpdated[pair.id].toLocaleString()}` : "Updating..."}
                </span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
