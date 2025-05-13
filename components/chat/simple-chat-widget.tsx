"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function SimpleChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Simulate AI response with a delay
      setTimeout(() => {
        let response = "Jeg forstår. Kan du fortelle meg mer om hva du er interessert i?"

        // Simple keyword-based responses for demo purposes
        if (input.toLowerCase().includes("sandblåser") || input.toLowerCase().includes("sandblaster")) {
          response =
            "Vi tilbyr flere IBIX sandblåsere, fra små 9L modeller til store 60L profesjonelle maskiner. Hvilken størrelse er du interessert i?"
        } else if (input.toLowerCase().includes("pris") || input.toLowerCase().includes("price")) {
          response =
            "For prisinformasjon, vennligst kontakt oss direkte på telefon +47 123 45 678 eller send en e-post til post@derksentrading.no."
        } else if (input.toLowerCase().includes("kontakt") || input.toLowerCase().includes("contact")) {
          response =
            "Du kan kontakte oss på telefon +47 123 45 678 eller e-post post@derksentrading.no. Vi er tilgjengelige mandag til fredag fra 08:00 til 16:00."
        }

        const aiMessage: Message = {
          id: Date.now().toString(),
          role: "assistant",
          content: response,
        }

        setMessages((prev) => [...prev, aiMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error sending message:", error)
      setIsLoading(false)
    }
  }

  // Handle textarea height adjustment
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)

    // Reset height to auto to get the correct scrollHeight
    e.target.style.height = "auto"

    // Set the height to scrollHeight to fit the content
    e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center rounded-full p-4 shadow-lg transition-all duration-200",
          isOpen ? "bg-secondary-800 text-white" : "bg-primary-600 text-white hover:bg-primary-700",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-full sm:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-secondary-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">Derksen Trading Chat</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white" aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex max-w-[80%] rounded-lg p-4",
                  message.role === "user" ? "bg-primary-100 ml-auto" : "bg-gray-100",
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin text-secondary-800" />
                <p className="text-sm text-gray-500">Skriver...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex items-end space-x-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Skriv en melding... / Type a message..."
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none min-h-[40px] max-h-[150px]"
                  rows={1}
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "rounded-full p-2 text-white",
                  input.trim() && !isLoading ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-300 cursor-not-allowed",
                )}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Powered by AI. For immediate assistance, call +47 123 45 678.</p>
          </form>
        </div>
      )}
    </div>
  )
}
