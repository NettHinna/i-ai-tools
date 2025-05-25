"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, X, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] shadow-lg md:w-[400px]">
          <div className="flex items-center justify-between border-b bg-slate-50 p-3">
            <h3 className="text-sm font-medium font-heading">Derksen AI Assistent</h3>
            <div className="flex gap-2">
              <Link href="/chat" target="_blank">
                <Button variant="ghost" size="icon" className="h-8 w-8" title="Åpne i ny fane">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="h-[500px] w-full overflow-hidden">
            <iframe
              src="https://derksen-ai.vercel.app"
              className="h-full w-full border-0"
              title="Derksen AI Chat"
              allow="microphone"
              style={{ minHeight: "500px" }}
            />
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-brand-600 shadow-lg hover:bg-brand-700 transition-all duration-300 hover:scale-105"
          aria-label="Åpne chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
