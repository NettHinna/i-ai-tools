"use client"

import { useState } from "react"
import { seedAllData, seedChatDataOnly, seedContactDataOnly, seedProductDataOnly } from "@/app/actions/seed"
import { Loader2 } from "lucide-react"

export default function SeedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  async function handleSeed(action: () => Promise<any>) {
    setIsLoading(true)
    setResult(null)
    setSelectedAction(action.name)

    try {
      const result = await action()
      setResult(result)
    } catch (error) {
      setResult({
        success: false,
        message: "An unexpected error occurred",
        error: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Database Seed Tool</h1>
          <p className="text-gray-600 mb-8">
            Use this tool to seed your database with sample data. This is useful for testing and development purposes.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium mb-4">Seed All Data</h2>
              <p className="text-gray-600 mb-4 text-sm">
                This will seed chat sessions, contact submissions, and product data all at once.
              </p>
              <button
                onClick={() => handleSeed(seedAllData)}
                disabled={isLoading}
                className="px-4 py-2 bg-secondary-800 text-white rounded-md hover:bg-secondary-700 transition-colors disabled:opacity-50"
              >
                {isLoading && selectedAction === "seedAllData" ? (
                  <>
                    <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                    Seeding...
                  </>
                ) : (
                  "Seed All Data"
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-medium mb-4">Seed Chat Data</h2>
                <p className="text-gray-600 mb-4 text-sm">This will seed only chat sessions and messages.</p>
                <button
                  onClick={() => handleSeed(seedChatDataOnly)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {isLoading && selectedAction === "seedChatDataOnly" ? (
                    <>
                      <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                      Seeding...
                    </>
                  ) : (
                    "Seed Chat Data"
                  )}
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-medium mb-4">Seed Contact Data</h2>
                <p className="text-gray-600 mb-4 text-sm">This will seed only contact form submissions.</p>
                <button
                  onClick={() => handleSeed(seedContactDataOnly)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {isLoading && selectedAction === "seedContactDataOnly" ? (
                    <>
                      <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                      Seeding...
                    </>
                  ) : (
                    "Seed Contact Data"
                  )}
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-medium mb-4">Seed Product Data</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  This will seed only product data, including features and images.
                </p>
                <button
                  onClick={() => handleSeed(seedProductDataOnly)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {isLoading && selectedAction === "seedProductDataOnly" ? (
                    <>
                      <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                      Seeding...
                    </>
                  ) : (
                    "Seed Product Data"
                  )}
                </button>
              </div>
            </div>

            {result && (
              <div
                className={`p-4 rounded-md mt-6 ${
                  result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                }`}
              >
                <p className="font-medium">{result.message}</p>
                {result.error && <p className="mt-2 text-sm">{result.error}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
