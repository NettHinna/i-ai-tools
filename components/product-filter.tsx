"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FilterOption = {
  id: string
  label: string
}

type FilterCategory = {
  id: string
  name: string
  options: FilterOption[]
}

interface ProductFilterProps {
  categories: FilterCategory[]
  onFilterChange: (filters: Record<string, string[]>) => void
  className?: string
}

export default function ProductFilter({ categories, onFilterChange, className = "" }: ProductFilterProps) {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const toggleFilter = (categoryId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[categoryId] || []
      const newFilters = currentFilters.includes(optionId)
        ? currentFilters.filter((id) => id !== optionId)
        : [...currentFilters, optionId]

      const result = {
        ...prev,
        [categoryId]: newFilters,
      }

      // Call the callback with the updated filters
      onFilterChange(result)

      return result
    })
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold">Filtrer produkter</h3>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-md overflow-hidden">
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleCategory(category.id)}
            >
              <span className="font-medium">{category.name}</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", openCategories[category.id] ? "rotate-180" : "")}
              />
            </button>

            {openCategories[category.id] && (
              <div className="p-3 space-y-2 bg-white">
                {category.options.map((option) => {
                  const isSelected = (selectedFilters[category.id] || []).includes(option.id)
                  return (
                    <div key={option.id} className="flex items-center">
                      <button
                        type="button"
                        className={cn(
                          "flex items-center justify-center w-5 h-5 rounded border mr-2 transition-colors",
                          isSelected
                            ? "bg-primary-600 border-primary-600 text-white"
                            : "border-gray-300 hover:border-gray-400",
                        )}
                        onClick={() => toggleFilter(category.id, option.id)}
                      >
                        {isSelected && <Check className="h-3 w-3" />}
                      </button>
                      <span className="text-sm font-light">{option.label}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
