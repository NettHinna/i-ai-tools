import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">404 - Side ikke funnet</h1>
        <p className="text-lg text-gray-600">
          Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Tilbake til forsiden
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
