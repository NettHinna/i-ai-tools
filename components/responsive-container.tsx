"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxHeight?: string
  enableScroll?: boolean
}

export default function ResponsiveContainer({
  children,
  className,
  maxHeight = "500px",
  enableScroll = false,
}: ResponsiveContainerProps) {
  return (
    <div
      className={cn("w-full", enableScroll && "overflow-y-auto scroll-smooth", className)}
      style={{ maxHeight: enableScroll ? maxHeight : undefined }}
    >
      {children}
    </div>
  )
}
