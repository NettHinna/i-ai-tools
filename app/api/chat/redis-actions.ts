"use server"

import redis from "@/lib/redis"
import { v4 as uuidv4 } from "uuid"
import type { ChatMessage } from "@/components/chat/enhanced-chat-context"

// Save chat messages to Redis
export async function saveChatMessages(sessionId: string, messages: ChatMessage[]) {
  try {
    // Store messages with expiration (7 days)
    await redis.set(`chat:${sessionId}`, JSON.stringify(messages), { ex: 60 * 60 * 24 * 7 })
    return { success: true }
  } catch (error) {
    console.error("Error saving chat messages to Redis:", error)
    return { success: false, error }
  }
}

// Load chat messages from Redis
export async function loadChatMessages(sessionId: string): Promise<{ messages?: ChatMessage[]; error?: any }> {
  try {
    const data = await redis.get<string>(`chat:${sessionId}`)

    if (!data) {
      return { messages: [] }
    }

    const messages = JSON.parse(data) as ChatMessage[]

    // Convert string timestamps back to Date objects
    const messagesWithDates = messages.map((msg) => ({
      ...msg,
      timestamp: msg.timestamp ? new Date(msg.timestamp) : undefined,
    }))

    return { messages: messagesWithDates }
  } catch (error) {
    console.error("Error loading chat messages from Redis:", error)
    return { error }
  }
}

// Delete chat session from Redis
export async function deleteChatSession(sessionId: string) {
  try {
    await redis.del(`chat:${sessionId}`)
    return { success: true }
  } catch (error) {
    console.error("Error deleting chat session from Redis:", error)
    return { success: false, error }
  }
}

// Create a new chat session
export async function createChatSession() {
  const sessionId = uuidv4()
  const initialMessage = {
    id: "1",
    role: "assistant" as const,
    content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
    timestamp: new Date(),
  }

  try {
    await saveChatMessages(sessionId, [initialMessage])
    return { sessionId, success: true }
  } catch (error) {
    console.error("Error creating chat session:", error)
    return { success: false, error }
  }
}
