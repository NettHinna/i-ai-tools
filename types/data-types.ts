// Data types for our application
export interface BalticDryIndexDataPoint {
  date: Date
  value: number
}

export interface CurrencyDataPoint {
  date: Date
  value: number
}

export interface CurrencyPair {
  id: string
  base: string
  quote: string
  symbol?: string
  inverted?: boolean
}

export interface ExchangeRate {
  code: string
  rate: number
  change: number
}

// Configuration types
export interface ChartConfig {
  title: string
  description: string
  source: string
  dataKey: string
  color: string
}

// Error state types
export interface ApiState {
  isLoading: boolean
  error: string | null
  lastUpdated: Date | null
}

// Widget configuration types
export interface TradingViewWidgetConfig {
  symbol: string
  interval?: string
  theme?: "light" | "dark"
  style?: string
  locale?: string
  hide_top_toolbar?: boolean
  hide_legend?: boolean
  hide_volume?: boolean
}
