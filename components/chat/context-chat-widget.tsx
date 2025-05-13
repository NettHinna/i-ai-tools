"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { MessageCircle, X, Send, RefreshCw, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"
import { useEnhancedChat } from "./enhanced-chat-context"

export default function ContextChatWidget() {
  const { messages, isLoading, error, sendMessage, resetChat, isOpen, setIsOpen } = useEnhancedChat()

  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [retryCount, setRetryCount] = useState(0)

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

    try {
      await sendMessage(input)
      setInput("")
      // Reset retry count on successful message
      setRetryCount(0)
    } catch (err) {
      console.error("Error sending message:", err)
      // Increment retry count
      setRetryCount((prev) => prev + 1)
    }
  }

  const handleRetry = async () => {
    if (!input.trim() || isLoading) return

    try {
      await sendMessage(input)
      // Reset retry count on successful retry
      setRetryCount(0)
    } catch (err) {
      console.error("Error retrying message:", err)
      // Increment retry count
      setRetryCount((prev) => prev + 1)
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
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center rounded-full p-3 sm:p-4 shadow-md transition-all duration-200",
          isOpen ? "bg-secondary-800 text-white" : "bg-primary-600 text-white hover:bg-primary-700",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-14 sm:bottom-16 right-0 w-full sm:w-80 md:w-96 h-[450px] sm:h-[500px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden border border-gray-100">
          {/* Chat header */}
          <div className="bg-secondary-800 text-white p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle size={18} className="mr-2" />
              <h3 className="font-medium text-sm sm:text-base">Derksen Trading Chat</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={resetChat}
                className="text-white/80 hover:text-white"
                aria-label="Reset chat"
                title="Start ny samtale / Start new conversation"
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} timestamp={message.timestamp} />
            ))}
            {isLoading && <TypingIndicator />}
            {error && (
              <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm">
                {error}
                <button onClick={handleRetry} className="ml-2 text-red-600 hover:text-red-800 underline">
                  Prøv igjen / Try again
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-100">
            <div className="flex items-end space-x-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Skriv en melding... / Type a message..."
                  className="w-full border border-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent resize-none min-h-[40px] max-h-[150px] text-sm"
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
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-light">For umiddelbar hjelp, ring +47 123 45 678.</p>
          </form>
        </div>
      )}
    </div>
  )
}
