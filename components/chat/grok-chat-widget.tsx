"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2, RefreshCw, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function GrokChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hei! Jeg er Derksen Trading sin AI-assistent. Hvordan kan jeg hjelpe deg i dag?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen, isMinimized])

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = {
      id: Math.random().toString(),
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantMessage = {
        id: Math.random().toString(),
        role: "assistant" as const,
        content:
          "Takk for meldingen! Dette er en demo-versjon av chatten. I en fullverdig implementering ville jeg brukt Grok AI for å gi deg et svar basert på Derksen Trading sin informasjon.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Hei! Jeg er Derksen Trading sin AI-assistent. Hvordan kan jeg hjelpe deg i dag?",
        timestamp: new Date(),
      },
    ])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full p-4 shadow-lg bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "w-full sm:w-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200",
            isMinimized ? "h-auto" : "h-[500px]",
          )}
        >
          {/* Chat header */}
          <div className="bg-secondary-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">Derksen Trading Chat</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button
                onClick={resetChat}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Reset chat"
                title="Start ny samtale / Start new conversation"
              >
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat content - only show if not minimized */}
          {!isMinimized && (
            <div className="flex-1 flex flex-col">
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex flex-col max-w-[80%]",
                      message.role === "user" ? "ml-auto items-end" : "items-start",
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-lg p-4",
                        message.role === "user" ? "bg-primary-100 text-gray-800" : "bg-gray-100 text-gray-800",
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.timestamp && (
                      <span className="text-xs text-gray-500 mt-1">{formatTime(message.timestamp)}</span>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">Skriver...</span>
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
                      input.trim() && !isLoading
                        ? "bg-primary-600 hover:bg-primary-700"
                        : "bg-gray-300 cursor-not-allowed",
                    )}
                    aria-label="Send message"
                  >
                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Powered by Grok AI. For immediate assistance, call +47 123 45 678.
                </p>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
