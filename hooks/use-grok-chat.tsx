"use client"

import { useState } from "react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function useGrokChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hei! Jeg er Derksen Trading sin AI-assistent. Hvordan kan jeg hjelpe deg i dag?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    setError(null)

    // Add user message to chat
    const userMessage: Message = {
      id: Math.random().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      // Simulate AI response after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const assistantMessage: Message = {
        id: Math.random().toString(),
        role: "assistant",
        content:
          "Takk for meldingen! Dette er en demo-versjon av chatten. I en fullverdig implementering ville jeg brukt Grok AI for å gi deg et svar basert på Derksen Trading sin informasjon.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      setError("Det oppstod en feil. Vennligst prøv igjen. / An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = () => {
    const initialMessage = {
      id: "1",
      role: "assistant",
      content: "Hei! Jeg er Derksen Trading sin AI-assistent. Hvordan kan jeg hjelpe deg i dag?",
      timestamp: new Date(),
    }

    setMessages([initialMessage])
    setError(null)
  }

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    resetChat,
  }
}
