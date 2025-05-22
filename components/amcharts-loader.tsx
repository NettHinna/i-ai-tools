"use client"

import { useEffect, useState } from "react"

export default function AmChartsLoader({ children }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load amCharts scripts dynamically
    const loadAmCharts = async () => {
      try {
        // Check if amCharts is already loaded
        if (window.am5) {
          setLoaded(true)
          return
        }

        // Load core
        const core = document.createElement("script")
        core.src = "https://cdn.amcharts.com/lib/5/index.js"
        core.async = true
        document.head.appendChild(core)

        // Wait for core to load
        await new Promise((resolve) => {
          core.onload = resolve
        })

        // Load xy
        const xy = document.createElement("script")
        xy.src = "https://cdn.amcharts.com/lib/5/xy.js"
        xy.async = true
        document.head.appendChild(xy)

        // Load themes
        const animated = document.createElement("script")
        animated.src = "https://cdn.amcharts.com/lib/5/themes/Animated.js"
        animated.async = true
        document.head.appendChild(animated)

        const dark = document.createElement("script")
        dark.src = "https://cdn.amcharts.com/lib/5/themes/Dark.js"
        dark.async = true
        document.head.appendChild(dark)

        // Wait for all scripts to load
        await Promise.all([
          new Promise((resolve) => {
            xy.onload = resolve
          }),
          new Promise((resolve) => {
            animated.onload = resolve
          }),
          new Promise((resolve) => {
            dark.onload = resolve
          }),
        ])

        setLoaded(true)
      } catch (error) {
        console.error("Error loading amCharts:", error)
      }
    }

    loadAmCharts()
  }, [])

  if (!loaded) {
    return null
  }

  return children
}
