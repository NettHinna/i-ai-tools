// Number formatting utilities
export function formatCurrency(value: number, decimals = 2): string {
  return value.toFixed(decimals)
}

export function formatPercentage(value: number, decimals = 2): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(decimals)}%`
}

export function formatLargeNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return value.toString()
}

export function calculateChange(currentValue: number, previousValue: number): number {
  return currentValue - previousValue
}

export function calculatePercentChange(currentValue: number, previousValue: number): number {
  if (previousValue === 0) return 0
  return ((currentValue - previousValue) / previousValue) * 100
}
