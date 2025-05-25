"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useChat } from "ai/react"

export default function ChatInterface() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <Card className="flex h-[600px] w-full flex-col shadow-lg md:h-[700px]">
      <CardHeader className="border-b bg-slate-50 px-4 py-3">
        <CardTitle className="text-lg font-medium text-slate-900">Derksen AI Assistent</CardTitle>
      </CardHeader>
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="flex flex-col gap-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
              <Bot className="h-12 w-12 text-sky-600" />
              <h3 className="text-xl font-semibold">Velkommen til Derksen AI Assistent</h3>
              <p className="text-slate-500">
                Spør meg om sandblåsing, IBIX-produkter, eller hvordan vi kan hjelpe deg med ditt prosjekt.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-4 py-3",
                  message.role === "user" ? "ml-auto bg-sky-600 text-white" : "bg-slate-100 text-slate-900",
                )}
              >
                <div className="flex items-center gap-2">
                  {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  <span className="text-xs font-medium">{message.role === "user" ? "Du" : "Derksen AI"}</span>
                </div>
                <div className="text-sm">{message.content}</div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
      <CardFooter className="border-t bg-white p-4">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="Skriv en melding..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
