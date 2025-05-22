"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangeSelectorProps {
  onRangeChange: (range: { startDate: Date; endDate: Date }) => void
  initialDateRange?: { startDate: Date; endDate: Date }
}

export default function DateRangeSelector({ onRangeChange, initialDateRange }: DateRangeSelectorProps) {
  const [startDate, setStartDate] = useState(initialDateRange?.startDate || new Date(2024, 4, 1)) // May 1, 2024
  const [endDate, setEndDate] = useState(initialDateRange?.endDate || new Date()) // Current date
  const [isStartDateOpen, setIsStartDateOpen] = useState(false)
  const [isEndDateOpen, setIsEndDateOpen] = useState(false)

  const predefinedRanges = [
    { label: "1M", days: 30 },
    { label: "3M", days: 90 },
    { label: "6M", days: 180 },
    { label: "YTD", special: "ytd" },
    { label: "1Y", days: 365 },
    { label: "All", special: "all" },
  ]

  const handleRangeSelect = (range: { label: string; days?: number; special?: string }) => {
    let newStartDate: Date
    const newEndDate = new Date()

    if (range.special === "ytd") {
      newStartDate = new Date(new Date().getFullYear(), 0, 1) // Jan 1 of current year
    } else if (range.special === "all") {
      newStartDate = new Date(2024, 4, 1) // May 1, 2024 (earliest data)
    } else if (range.days) {
      newStartDate = new Date()
      newStartDate.setDate(newStartDate.getDate() - range.days)
    } else {
      return // Invalid range
    }

    setStartDate(newStartDate)
    setEndDate(newEndDate)

    if (onRangeChange) {
      onRangeChange({ startDate: newStartDate, endDate: newEndDate })
    }
  }

  const handleStartDateChange = (date: Date | undefined) => {
    if (!date) return

    setStartDate(date)
    setIsStartDateOpen(false)

    if (onRangeChange) {
      onRangeChange({ startDate: date, endDate })
    }
  }

  const handleEndDateChange = (date: Date | undefined) => {
    if (!date) return

    setEndDate(date)
    setIsEndDateOpen(false)

    if (onRangeChange) {
      onRangeChange({ startDate, endDate: date })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex space-x-2">
        {predefinedRanges.map((range) => (
          <Button
            key={range.label}
            variant="outline"
            size="sm"
            onClick={() => handleRangeSelect(range)}
            className="text-xs h-8"
          >
            {range.label}
          </Button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <Popover open={isStartDateOpen} onOpenChange={setIsStartDateOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[130px] justify-start text-left font-normal h-8">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(startDate, "MMM d, yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={handleStartDateChange}
              initialFocus
              disabled={(date) => date > endDate || date > new Date()}
            />
          </PopoverContent>
        </Popover>
        <span className="text-sm">to</span>
        <Popover open={isEndDateOpen} onOpenChange={setIsEndDateOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[130px] justify-start text-left font-normal h-8">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(endDate, "MMM d, yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={handleEndDateChange}
              initialFocus
              disabled={(date) => date < startDate || date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
