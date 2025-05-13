"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Message, chat } from "@/app/api/chat/action"
import { v4 as uuidv4 } from "uuid"

export type ChatMessage = Message & { timestamp?: Date }

interface ChatContextType {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
  sendMessage: (content: string) => Promise<void>
  resetChat: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages")
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages)
        // Convert string timestamps back to Date objects
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : undefined,
        }))
        setMessages(messagesWithDates)
      } catch (e) {
        console.error("Failed to parse saved messages:", e)
      }
    }
  }, [])

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      // Only save if we have more than the initial message
      localStorage.setItem("chatMessages", JSON.stringify(messages))
    }
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    setError(null)

    // Add user message to chat
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
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

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
        timestamp: new Date(),
      },
    ])
    setError(null)
    localStorage.removeItem("chatMessages")
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        isLoading,
        error,
        sendMessage,
        resetChat,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
