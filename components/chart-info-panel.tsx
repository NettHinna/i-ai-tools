"use client"

import { Info } from "lucide-react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface ChartInfoPanelProps {
  title: string
  description: string
  source: string
  lastUpdated: string
}

export default function ChartInfoPanel({ title, description, source, lastUpdated }: ChartInfoPanelProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Info className="h-4 w-4" />
          <span className="sr-only">Chart information</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="pt-2">
            <h4 className="text-sm font-medium">Source</h4>
            <p className="text-sm text-muted-foreground">{source}</p>
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-medium">Last Updated</h4>
            <p className="text-sm text-muted-foreground">{lastUpdated}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
