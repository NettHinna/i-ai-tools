import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add the missing formatDate export
export function formatDate(date: Date | string | number): string {
  const d = new Date(date)

  // Check if the date is valid
  if (isNaN(d.getTime())) {
    return "Invalid date"
  }

  // Format the date as DD.MM.YYYY HH:MM
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const year = d.getFullYear()
  const hours = String(d.getHours()).padStart(2, "0")
  const minutes = String(d.getMinutes()).padStart(2, "0")

  return `${day}.${month}.${year} ${hours}:${minutes}`
}
