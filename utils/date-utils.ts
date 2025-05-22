// Date formatting utilities
export function formatDate(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[date.getMonth()]} ${date.getFullYear()}`
}

export function formatTooltipDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

export function getDateRange(days: number): { startDate: Date; endDate: Date } {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(endDate.getDate() - days)

  return { startDate, endDate }
}

export function getYearToDateRange(): { startDate: Date; endDate: Date } {
  const endDate = new Date()
  const startDate = new Date(endDate.getFullYear(), 0, 1) // January 1st of current year

  return { startDate, endDate }
}
