"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Message } from "@/app/actions/chat"
import { chat, getChatHistory, saveChatMessage } from "@/app/actions/chat"
import { v4 as uuidv4 } from "uuid"
import { getSupabaseClient } from "@/lib/supabase/client"

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

// Create the context with a default undefined value
const EnhancedChatContext = createContext<ChatContextType | undefined>(undefined)

export function EnhancedChatProvider({ children }: { children: React.ReactNode }) {
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
  const [sessionId, setSessionId] = useState<string>("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const supabase = getSupabaseClient()

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      setIsAuthenticated(!!data.session)

      // Set up auth state change listener
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setIsAuthenticated(!!session)
      })

      return () => {
        authListener.subscription.unsubscribe()
      }
    }

    checkAuth()
  }, [supabase.auth])

  // Generate a session ID for the chat
  useEffect(() => {
    // Try to get existing session ID from localStorage
    const existingSessionId = localStorage.getItem("chatSessionId")
    if (existingSessionId) {
      setSessionId(existingSessionId)

      // Load chat history from database
      const loadChatHistory = async () => {
        const { success, messages: historyMessages } = await getChatHistory(existingSessionId)
        if (success && historyMessages && historyMessages.length > 0) {
          // Add timestamps to messages
          const messagesWithDates = historyMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(),
          }))
          setMessages(messagesWithDates)
        }
      }

      loadChatHistory()
    } else {
      // Generate a new session ID
      const newSessionId = uuidv4()
      localStorage.setItem("chatSessionId", newSessionId)
      setSessionId(newSessionId)
    }
  }, [])

  // Save chat history to localStorage as a fallback
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
      // Save user message to database
      await saveChatMessage(sessionId, "user", content)

      // Get response from AI
      const aiResponse = await chat([...messages, userMessage])

      // Check if the response contains the error message
      if (aiResponse.content.includes("Beklager, jeg kunne ikke behandle forespørselen din")) {
        throw new Error("Failed to get response from AI")
      }

      const assistantMessage = { ...aiResponse, timestamp: new Date() }
      setMessages((prev) => [...prev, assistantMessage])

      // Save assistant message to database
      await saveChatMessage(sessionId, "assistant", aiResponse.content)
    } catch (error) {
      console.error("Error sending message:", error)

      // Improved error handling with more specific messages
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setError(
          "Kunne ikke koble til serveren. Sjekk internettforbindelsen din. / Could not connect to server. Check your internet connection.",
        )
      } else if (error instanceof Error && error.message.includes("timeout")) {
        setError("Forespørselen tok for lang tid. Vennligst prøv igjen. / Request timed out. Please try again.")
      } else {
        setError("Det oppstod en feil. Vennligst prøv igjen. / An error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = async () => {
    const initialMessage = {
      id: "1",
      role: "assistant",
      content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      timestamp: new Date(),
    }

    setMessages([initialMessage])
    setError(null)
    localStorage.removeItem("chatMessages")

    // Generate a new session ID
    const newSessionId = uuidv4()
    localStorage.setItem("chatSessionId", newSessionId)
    setSessionId(newSessionId)
  }

  // Provide the context value
  const contextValue: ChatContextType = {
    messages,
    isLoading,
    error,
    sendMessage,
    resetChat,
    isOpen,
    setIsOpen,
  }

  return <EnhancedChatContext.Provider value={contextValue}>{children}</EnhancedChatContext.Provider>
}

export function useEnhancedChat() {
  const context = useContext(EnhancedChatContext)
  if (context === undefined) {
    throw new Error("useEnhancedChat must be used within an EnhancedChatProvider")
  }
  return context
}
