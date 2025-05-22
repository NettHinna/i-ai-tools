"use client"

import { useState } from "react"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ChartDownloadButtonProps {
  data: any[]
  chartName: string
}

export default function ChartDownloadButton({ data, chartName }: ChartDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadCSV = () => {
    if (data.length === 0) {
      alert("No data available to download")
      return
    }

    setIsDownloading(true)

    try {
      // Convert data to CSV format
      const headers = Object.keys(data[0]).join(",")
      const rows = data
        .map((item) => {
          return Object.values(item)
            .map((value) => {
              // Format date objects
              if (value instanceof Date) {
                return value.toISOString().split("T")[0]
              }
              return value
            })
            .join(",")
        })
        .join("\n")

      const csvContent = `${headers}\n${rows}`

      // Create a blob and download link
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `${chartName.replace(/\//g, "-")}_data.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url) // Clean up
    } catch (error) {
      console.error("Error downloading CSV:", error)
      alert("Error downloading CSV. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const downloadExcel = () => {
    if (data.length === 0) {
      alert("No data available to download")
      return
    }

    setIsDownloading(true)

    try {
      // For Excel, we'll use CSV with a different extension
      // In a real app, you might want to use a library like xlsx
      const headers = Object.keys(data[0]).join(",")
      const rows = data
        .map((item) => {
          return Object.values(item)
            .map((value) => {
              if (value instanceof Date) {
                return value.toISOString().split("T")[0]
              }
              return value
            })
            .join(",")
        })
        .join("\n")

      const csvContent = `${headers}\n${rows}`

      const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `${chartName.replace(/\//g, "-")}_data.xlsx`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url) // Clean up
    } catch (error) {
      console.error("Error downloading Excel:", error)
      alert("Error downloading Excel. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const downloadPNG = () => {
    setIsDownloading(true)

    try {
      // In a real app, you would use a library like html2canvas
      alert("PNG download would be implemented with html2canvas in a production app")
    } catch (error) {
      console.error("Error downloading PNG:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8" disabled={isDownloading}>
          <Download className="h-4 w-4 mr-2" />
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={downloadCSV} disabled={isDownloading}>
          Download as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadExcel} disabled={isDownloading}>
          Download as Excel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadPNG} disabled={isDownloading}>
          Download as PNG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
