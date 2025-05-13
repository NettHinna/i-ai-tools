"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Noe gikk galt</h1>
        <p className="text-lg text-gray-600">Beklager, men det oppstod en feil. Vår tekniske team har blitt varslet.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button onClick={() => reset()} variant="default">
            Prøv igjen
          </Button>
          <Link href="/">
            <Button variant="outline">Gå til forsiden</Button>
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 text-left p-4 bg-gray-100 rounded-md overflow-auto max-h-60">
            <p className="text-sm font-mono text-gray-800">{error.message}</p>
            {error.stack && (
              <pre className="text-xs font-mono text-gray-700 mt-2 whitespace-pre-wrap">{error.stack}</pre>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
