import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">404 - Side ikke funnet</h1>
        <p className="text-lg text-gray-600">
          Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  )
}
