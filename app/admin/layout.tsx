import type React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Admin breadcrumb */}
      <div className="fixed top-16 left-0 right-0 z-30 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-8">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            <Link href="/admin" className="text-gray-500 hover:text-gray-700 text-sm">
              Admin
            </Link>
            {/* Add more breadcrumb items based on the current path */}
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}
