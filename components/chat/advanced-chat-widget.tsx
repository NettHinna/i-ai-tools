"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { type Message, chat } from "@/app/api/chat/action"
import { v4 as uuidv4 } from "uuid"
import { MessageCircle, X, Send, Loader2, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"

export default function AdvancedChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<Message & { timestamp?: Date }>>([
    {
      id: "1",
      role: "assistant",
      content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

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

    setError(null)

    // Add user message to chat
    const userMessage: Message & { timestamp?: Date } = {
      id: uuidv4(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Get response from AI
      const aiResponse = await chat([...messages, userMessage])
      setMessages((prev) => [...prev, { ...aiResponse, timestamp: new Date() }])
    } catch (error) {
      console.error("Error sending message:", error)
      setError("Det oppstod en feil. Vennligst prøv igjen. / An error occurred. Please try again.")
    } finally {
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

  // Reset chat to initial state
  const handleResetChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
        timestamp: new Date(),
      },
    ])
    setError(null)
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
            <div className="flex items-center space-x-2">
              <button
                onClick={handleResetChat}
                className="text-white/80 hover:text-white"
                aria-label="Reset chat"
                title="Start ny samtale / Start new conversation"
              >
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} timestamp={message.timestamp} />
            ))}
            {isLoading && <TypingIndicator />}
            {error && (
              <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm">
                {error}
                <button onClick={handleSubmit} className="ml-2 text-red-600 hover:text-red-800 underline">
                  Prøv igjen / Try again
                </button>
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
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Powered by AI. For immediate assistance, call +47 123 45 678.</p>
          </form>
        </div>
      )}
    </div>
  )
}
