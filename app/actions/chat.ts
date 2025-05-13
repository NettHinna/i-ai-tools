"use server"

import { db } from "@/lib/db"
import { chatMessages, chatSessions } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"

// This type defines the structure of our chat messages
export type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

// Create a new chat session
export async function createChatSession() {
  try {
    const sessionId = nanoid()
    await db.insert(chatSessions).values({
      sessionId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return { success: true, sessionId }
  } catch (error) {
    console.error("Error creating chat session:", error)
    return { success: false, error: "Failed to create chat session" }
  }
}

// Save a chat message
export async function saveChatMessage(sessionId: string, role: string, content: string) {
  if (!sessionId || typeof sessionId !== "string") {
    return { success: false, error: "Invalid session ID" }
  }

  try {
    await db.insert(chatMessages).values({
      sessionId,
      role,
      content,
      createdAt: new Date(),
    })
    return { success: true }
  } catch (error) {
    console.error("Error saving chat message:", error)
    return { success: false, error: "Failed to save chat message" }
  }
}

// Get chat history for a session
export async function getChatHistory(sessionId: string) {
  if (!sessionId || typeof sessionId !== "string") {
    return { success: false, error: "Invalid session ID", messages: [] }
  }

  try {
    const messages = await db.query.chatMessages.findMany({
      where: eq(chatMessages.sessionId, sessionId),
      orderBy: chatMessages.createdAt,
    })
    return { success: true, messages }
  } catch (error) {
    console.error("Error getting chat history:", error)
    return { success: false, error: "Failed to get chat history", messages: [] }
  }
}

// Get all chat sessions
export async function getChatSessions() {
  try {
    const sessions = await db.query.chatSessions.findMany({
      orderBy: chatSessions.createdAt,
    })
    return { success: true, sessions }
  } catch (error) {
    console.error("Error getting chat sessions:", error)
    return { success: false, error: "Failed to get chat sessions", sessions: [] }
  }
}

// Get chat messages for a session
export async function getChatMessages(sessionId: string) {
  if (!sessionId || typeof sessionId !== "string") {
    return { success: false, error: "Invalid session ID", messages: [] }
  }

  try {
    const messages = await db.query.chatMessages.findMany({
      where: eq(chatMessages.sessionId, sessionId),
      orderBy: chatMessages.createdAt,
    })
    return { success: true, messages }
  } catch (error) {
    console.error("Error getting chat messages:", error)
    return { success: false, error: "Failed to get chat messages", messages: [] }
  }
}

// Delete a chat session
export async function deleteChatSession(sessionId: string) {
  if (!sessionId || typeof sessionId !== "string") {
    return { success: false, error: "Invalid session ID" }
  }

  try {
    await db.delete(chatSessions).where(eq(chatSessions.sessionId, sessionId))
    return { success: true }
  } catch (error) {
    console.error("Error deleting chat session:", error)
    return { success: false, error: "Failed to delete chat session" }
  }
}

export async function chat(messages: Message[]) {
  return {
    id: Date.now().toString(),
    role: "assistant" as const,
    content:
      "Beklager, denne funksjonaliteten er ikke implementert ennå. / Sorry, this functionality is not implemented yet.",
  }
}
