"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import DateRangeSelector from "@/components/date-range-selector"
import ChartDownloadButton from "@/components/chart-download-button"
import ChartInfoPanel from "@/components/chart-info-panel"
import { Skeleton } from "@/components/ui/skeleton"
import { useBalticDryIndex } from "@/hooks/use-baltic-dry-index"
import { formatDate, formatTooltipDate } from "@/utils/date-utils"

export default function BalticDryIndexChart() {
  const {
    filteredData,
    isLoading,
    error,
    lastUpdated,
    dateRange,
    handleDateRangeChange,
    statistics,
    change,
    percentChange,
  } = useBalticDryIndex()

  const [chartType, setChartType] = useState<"line" | "area">("line")

  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          {isLoading ? (
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="text-2xl font-bold">{statistics.currentValue}</div>
              <div className={`flex items-center text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {change >= 0 ? "▲" : "▼"} {Math.abs(change)} ({percentChange.toFixed(2)}%)
              </div>
            </div>
          )}
          <ChartInfoPanel
            title="Baltic Dry Index"
            description="The Baltic Dry Index is a shipping and trade index created by the London-based Baltic Exchange. It measures changes in the cost of transporting various raw materials, such as coal, iron ore, cement, and grains."
            source="Simulated data based on historical patterns"
            lastUpdated={lastUpdated ? lastUpdated.toLocaleString() : "Loading..."}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 text-sm rounded-md ${chartType === "line" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              onClick={() => setChartType("line")}
            >
              Line
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-md ${chartType === "area" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              onClick={() => setChartType("area")}
            >
              Area
            </button>
          </div>

          <ChartDownloadButton data={filteredData} chartName="Baltic_Dry_Index" />
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="px-4 py-2 border-t border-b flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <DateRangeSelector onRangeChange={handleDateRangeChange} initialDateRange={dateRange} />

          {!isLoading && (
            <div className="flex space-x-4 text-sm">
              <div>
                <span className="text-muted-foreground">Min:</span> {statistics.min}
              </div>
              <div>
                <span className="text-muted-foreground">Max:</span> {statistics.max}
              </div>
              <div>
                <span className="text-muted-foreground">Avg:</span> {statistics.avg}
              </div>
            </div>
          )}
        </div>

        <div className="h-[350px] p-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center">
                <Skeleton className="h-[250px] w-full" />
                <div className="mt-4 text-sm text-muted-foreground">Loading Baltic Dry Index data...</div>
              </div>
            </div>
          ) : error && filteredData.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-destructive text-center">
                <p>{error}</p>
                <button
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <ChartContainer
              config={{
                value: {
                  label: "Baltic Dry Index",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                {chartType === "line" ? (
                  <LineChart data={filteredData} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => formatDate(new Date(date))}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      interval="preserveStartEnd"
                      minTickGap={30}
                    />
                    <YAxis
                      domain={[Math.max(statistics.min - 100, 0), Math.min(statistics.max + 100, 3000)]}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      tickCount={10}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          formatter={(value) => Number(value).toFixed(0)}
                          labelFormatter={(date) => formatTooltipDate(new Date(date))}
                        />
                      }
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                    />
                  </LineChart>
                ) : (
                  <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => formatDate(new Date(date))}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      interval="preserveStartEnd"
                      minTickGap={30}
                    />
                    <YAxis
                      domain={[Math.max(statistics.min - 100, 0), Math.min(statistics.max + 100, 3000)]}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      tickCount={10}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          formatter={(value) => Number(value).toFixed(0)}
                          labelFormatter={(date) => formatTooltipDate(new Date(date))}
                        />
                      }
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--chart-1))"
                      fill="hsl(var(--chart-1))"
                      fillOpacity={0.2}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                    />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </div>
        <div className="text-xs text-gray-500 p-2 border-t flex justify-between">
          <span>source: Simulated data based on historical patterns</span>
          <span>{lastUpdated ? `Last updated: ${lastUpdated.toLocaleString()}` : "Updating..."}</span>
        </div>
      </CardContent>
    </Card>
  )
}
