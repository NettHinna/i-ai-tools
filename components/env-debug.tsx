"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function EnvDebug() {
  const [showEnv, setShowEnv] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button variant="outline" size="sm" onClick={() => setShowEnv(!showEnv)}>
        {showEnv ? "Hide Env" : "Debug Env"}
      </Button>

      {showEnv && (
        <div className="mt-2 p-4 bg-white rounded-md shadow-lg max-w-md">
          <h3 className="font-medium mb-2">Environment Variables:</h3>
          <div className="text-sm">
            <p>
              <strong>NEXT_PUBLIC_SITE_URL:</strong> {process.env.NEXT_PUBLIC_SITE_URL || "Not set"}
            </p>
            <p className="mt-2 text-xs text-gray-500">Note: Only NEXT_PUBLIC_* variables are visible on the client.</p>
          </div>
        </div>
      )}
    </div>
  )
}
