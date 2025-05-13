"use server"

import { kv } from "@vercel/kv"

type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp?: Date
}

export async function sendChatMessage(content: string, previousMessages: Message[]) {
  try {
    // Store the conversation in Redis for future reference
    const sessionId = Math.random().toString(36).substring(2, 15)

    // Simulate AI response
    const response =
      "Takk for meldingen! Dette er en demo-versjon av chatten. I en fullverdig implementering ville jeg brukt Grok AI for å gi deg et svar basert på Derksen Trading sin informasjon."

    // Store in Redis
    await kv.set(
      `chat:${sessionId}`,
      JSON.stringify([
        ...previousMessages,
        { role: "user", content, timestamp: new Date() },
        { role: "assistant", content: response, timestamp: new Date() },
      ]),
      { ex: 60 * 60 * 24 * 7 },
    ) // Expire after 7 days

    return {
      success: true,
      message: response,
    }
  } catch (error) {
    console.error("Error in sendChatMessage:", error)
    return {
      success: false,
      error: "Failed to get response from AI. Please try again.",
    }
  }
}
