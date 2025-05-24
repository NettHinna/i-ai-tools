"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export default function SectionContainer({ children, className, title, subtitle }: SectionContainerProps) {
  return (
    <section className={cn("mb-8 scroll-mt-4", className)}>
      {(title || subtitle) && (
        <div className="flex justify-between items-center mb-6">
          {title && <h2 className="text-xl font-semibold text-white">{title}</h2>}
          {subtitle && <div className="text-sm text-white/70">{subtitle}</div>}
        </div>
      )}
      {children}
    </section>
  )
}
