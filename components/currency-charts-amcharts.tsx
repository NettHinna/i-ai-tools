"use client"

import { useEffect, useRef, useState } from "react"
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DateRangeSelector from "@/components/date-range-selector"
import ChartDownloadButton from "@/components/chart-download-button"
import ChartInfoPanel from "@/components/chart-info-panel"
import { fetchCurrencyData, type CurrencyDataPoint } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"
import AmChartsLoader from "./amcharts-loader"
import { AlertTriangle } from "lucide-react"

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

// List of currency pairs supported by Alpha Vantage
const supportedAlphaVantagePairs = [
  "EUR/USD",
  "USD/JPY",
  "GBP/USD",
  "USD/CHF",
  "EUR/GBP",
  "EUR/JPY",
  "USD/CAD",
  "AUD/USD",
]

export default function CurrencyChartsAmCharts() {
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
  const [isClient, setIsClient] = useState(false)
  const [dataSource, setDataSource] = useState<Record<string, string>>({})
  const [usingSimulatedData, setUsingSimulatedData] = useState(true) // Always true for now due to API issues

  // Chart refs
  const chartRef = useRef<am5.Root | null>(null)
  const chartDivRef = useRef<HTMLDivElement>(null)

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
  const fetchPairData = async (pair) => {
    const pairId = pair.id

    setIsLoading((prev) => ({ ...prev, [pairId]: true }))
    setError((prev) => ({ ...prev, [pairId]: null }))

    try {
      // Try to fetch data from the API
      const data = await fetchCurrencyData(pair.base, pair.quote)

      // If we got data, update the state
      if (data && data.length > 0) {
        setCurrencyData((prev) => ({
          ...prev,
          [pairId]: data,
        }))

        setLastUpdated((prev) => ({
          ...prev,
          [pairId]: new Date(),
        }))

        // For now, all data is simulated due to API issues
        setDataSource((prev) => ({
          ...prev,
          [pairId]: "Simulated data based on historical patterns",
        }))

        // Set the error state to indicate we're using simulated data
        setError((prev) => ({
          ...prev,
          [pairId]: `Using simulated data for ${pairId}`,
        }))
      } else {
        // This should never happen as we always return mock data as fallback
        throw new Error(`No data returned for ${pairId}`)
      }
    } catch (err) {
      console.error(`Error fetching currency data for ${pairId}:`, err)

      // Generate mock data as fallback
      const mockData = generateMockCurrencyData(pair.base, pair.quote)

      setCurrencyData((prev) => ({
        ...prev,
        [pairId]: mockData,
      }))

      setLastUpdated((prev) => ({
        ...prev,
        [pairId]: new Date(),
      }))

      setDataSource((prev) => ({
        ...prev,
        [pairId]: "Simulated data (API unavailable)",
      }))

      setError((prev) => ({
        ...prev,
        [pairId]: `Using simulated data for ${pairId}`,
      }))
    } finally {
      setIsLoading((prev) => ({ ...prev, [pairId]: false }))
    }
  }

  // Generate mock currency data as fallback
  function generateMockCurrencyData(baseCurrency: string, quoteCurrency: string): CurrencyDataPoint[] {
    const data: CurrencyDataPoint[] = []
    const today = new Date()

    // Set realistic starting values based on currency pair
    let startValue = 1.0

    if (baseCurrency === "NOK" && quoteCurrency === "USD") startValue = 0.0925
    else if (baseCurrency === "EUR" && quoteCurrency === "USD") startValue = 1.085
    else if (baseCurrency === "EUR" && quoteCurrency === "GBP") startValue = 0.852
    else if (baseCurrency === "NOK" && quoteCurrency === "GBP") startValue = 0.079
    else if (baseCurrency === "EUR" && quoteCurrency === "SEK") startValue = 11.35
    else if (baseCurrency === "EUR" && quoteCurrency === "NOK") startValue = 11.72
    else if (baseCurrency === "GBP" && quoteCurrency === "SEK") startValue = 13.32
    else if (baseCurrency === "USD" && quoteCurrency === "SEK") startValue = 10.45
    else if (baseCurrency === "USD" && quoteCurrency === "NOK") startValue = 10.81

    // Initial value
    let value = startValue

    // Generate data points for the past year
    for (let i = 365; i >= 0; i--) {
      const date = new Date()
      date.setDate(today.getDate() - i)

      // Add some randomness to create realistic looking data
      const volatility = 0.003 // Currency pairs typically have low volatility

      // Add daily noise
      value = value * (1 + (Math.random() * 2 - 1) * volatility)

      data.push({
        date: new Date(date),
        value: value,
      })
    }

    return data
  }

  // Fetch data for all currency pairs
  useEffect(() => {
    if (!isClient) return

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
  }, [isClient])

  // Initialize and update amCharts
  useEffect(() => {
    // Only run on client and when we have data
    if (!chartDivRef.current || !isClient || filteredData.length === 0) return

    // Dispose of previous chart if it exists
    if (chartRef.current) {
      chartRef.current.dispose()
    }

    // Create root element
    const root = am5.Root.new(chartDivRef.current)
    chartRef.current = root

    // Set themes
    root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)])

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        layout: root.verticalLayout,
      }),
    )

    // Add cursor
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: undefined,
        yAxis: undefined,
      }),
    )

    // Create axes
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      }),
    )

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    )

    // Add series for main currency pair
    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: selectedPair,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        stroke: am5.color(0x2c9cff),
        fill: am5.color(0x2c9cff),
        tooltip: am5.Tooltip.new(root, {
          labelText: `${selectedPair}: {valueY}`,
        }),
      }),
    )

    // Set main series data
    const processedData = filteredData.map((item) => ({
      date: new Date(item.date).getTime(),
      value: item.value,
    }))

    series.data.setAll(processedData)

    // Add comparison series if in comparison mode
    if (comparisonMode && comparisonPair && filteredComparisonData.length > 0) {
      const comparisonSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: comparisonPair,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          valueXField: "date",
          stroke: am5.color(0x6794dc),
          tooltip: am5.Tooltip.new(root, {
            labelText: `${comparisonPair}: {valueY}`,
          }),
        }),
      )

      // Set comparison series data
      const processedComparisonData = filteredComparisonData.map((item) => ({
        date: new Date(item.date).getTime(),
        value: item.value,
      }))

      comparisonSeries.data.setAll(processedComparisonData)
    }

    // Add scrollbar
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      }),
    )

    // Add legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      }),
    )
    legend.data.setAll(chart.series.values)

    // Make sure data is sorted and zoom to date range
    series.events.on("datavalidated", () => {
      xAxis.zoomToDates(new Date(dateRange.startDate).getTime(), new Date(dateRange.endDate).getTime())
    })

    // Clean up on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose()
      }
    }
  }, [selectedPair, filteredData, comparisonMode, comparisonPair, filteredComparisonData, dateRange, isClient])

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

  useEffect(() => {
    setIsClient(true)
  }, [])

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
            source={dataSource[selectedPair] || "Loading data source..."}
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

      {usingSimulatedData && (
        <div className="mx-4 mb-2 p-2 bg-amber-50 border border-amber-200 rounded-md flex items-center text-amber-700 text-sm">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span>Using simulated data due to API limitations. Data is for demonstration purposes only.</span>
        </div>
      )}

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

          <div className="h-[400px] p-4">
            {isLoading[selectedPair] ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center">
                  <Skeleton className="h-[350px] w-full" />
                  <div className="mt-4 text-sm text-muted-foreground">Loading {selectedPair} data...</div>
                </div>
              </div>
            ) : error[selectedPair] && !currencyData[selectedPair]?.length ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-destructive text-center">
                  <p>{error[selectedPair]}</p>
                  <button
                    className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
                    onClick={() => fetchPairData(currencyPairs.find((p) => p.id === selectedPair))}
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : (
              <AmChartsLoader>
                <div ref={chartDivRef} className="w-full h-full" />
              </AmChartsLoader>
            )}
          </div>

          <div className="text-xs text-gray-500 p-2 border-t flex justify-between">
            <span>
              {!isLoading[selectedPair] && currencyData[selectedPair] && currencyData[selectedPair].length > 0
                ? `Current rate: ${currencyData[selectedPair][currencyData[selectedPair].length - 1].value.toFixed(4)} ${selectedPair}`
                : "Loading current rate..."}
              {error[selectedPair] && currencyData[selectedPair]?.length > 0 && (
                <span className="ml-2 text-amber-500">(Note: {error[selectedPair]})</span>
              )}
            </span>
            <span>
              {lastUpdated[selectedPair]
                ? `Last updated: ${lastUpdated[selectedPair].toLocaleString()}`
                : "Updating..."}
            </span>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
