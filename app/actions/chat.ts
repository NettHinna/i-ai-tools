"use server"

import { db } from "@/lib/db"
import { chatMessages, chatSessions } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { generateText } from "ai"
import { models } from "@/lib/ai/models"

// This type defines the structure of our chat messages
export type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

// Website information to provide context to the AI
const websiteInfo = `
Derksen Trading AS is Norway's official importer of IBIX sandblasters. The company offers professional surface treatment, sandblasting, and industrial painting in Bodø and Nordland.

Products:
- IBIX® Problaster 60 H2O: 60 liter combo blaster for professional use, ~45 kg, HiPower double air supply for maximum effect.
- IBIX® Problaster 40 H2O: 40L combo blaster, versatile and compact, performs like a large traditional pot but weighs only 35kg.
- IBIX® Problaster 25 H2O: 25L combo blaster, versatile and compact, performs like a large traditional pot but weighs only 28kg.
- IBIX® 25 Basic: 25L dry blaster, compact and efficient, ideal for medium-sized projects and professional use.
- IBIX® 9 Basic: 9L dry blaster, super light (12kg), excellent for small-scale work and hobby (car restoration, etc.).
- IBIX® Helix nozzle: Patented rotating nozzle for 30% faster cleaning and gentle treatment.

Services:
- Sandblasting on assignment: Mobile sandblasting of metal, concrete, masonry, etc. We come out with equipment and compressor to your project.
- Graffiti removal: Gentle removal of unwanted tagging on walls, stone, metal. With IBIX wet blasting technique, we remove paint without damaging the substrate.
- Industrial painting: We also offer application of protective coatings after sandblasting. As a dealer of ZINGA® zinc coating, we can galvanize on site.

Contact information:
- Address: Derksen Trading AS, Industriveien 123, 8013 Bodø
- Phone: +47 123 45 678
- Email: post@derksentrading.no
- Business hours: Monday - Friday: 08:00 - 16:00, Saturday-Sunday: Closed
`

// System prompt to guide the AI's behavior
const systemPrompt = `
You are a helpful assistant for Derksen Trading AS, Norway's official importer of IBIX sandblasters.
Your role is to provide information about the company's products, services, and answer customer questions.
Be friendly, professional, and concise in your responses.
If you don't know the answer to a question, politely say so and offer to connect the user with a human representative.
Always respond in the same language the user is using (Norwegian or English).

Here is information about the company, its products and services:
${websiteInfo}
`

export async function saveChatSession(sessionId: string) {
  try {
    // Validate sessionId format
    if (!sessionId || typeof sessionId !== "string") {
      console.error("Invalid sessionId format:", sessionId)
      return { success: false, error: "Invalid session ID format" }
    }

    // Check if session already exists
    const existingSession = await db.query.chatSessions.findFirst({
      where: eq(chatSessions.sessionId, sessionId),
    })

    if (!existingSession) {
      // Create new session
      await db.insert(chatSessions).values({
        sessionId,
      })
    }

    return { success: true }
  } catch (error) {
    console.error("Error saving chat session:", error)
    return { success: false, error: "Failed to save chat session" }
  }
}

export async function saveChatMessage(sessionId: string, role: string, content: string) {
  try {
    // Validate inputs
    if (!sessionId || typeof sessionId !== "string") {
      console.error("Invalid sessionId format:", sessionId)
      return { success: false, error: "Invalid session ID format" }
    }

    if (!role || !content) {
      return { success: false, error: "Role and content are required" }
    }

    // Ensure session exists
    await saveChatSession(sessionId)

    // Save message
    await db.insert(chatMessages).values({
      sessionId,
      role,
      content,
    })

    return { success: true }
  } catch (error) {
    console.error("Error saving chat message:", error)
    return { success: false, error: "Failed to save chat message" }
  }
}

export async function getChatHistory(sessionId: string) {
  try {
    // Validate sessionId format
    if (!sessionId || typeof sessionId !== "string") {
      console.error("Invalid sessionId format:", sessionId)
      return {
        success: false,
        error: "Invalid session ID format",
        messages: [],
      }
    }

    // Use a try-catch block specifically for the database query
    try {
      const messages = await db.query.chatMessages.findMany({
        where: eq(chatMessages.sessionId, sessionId),
        orderBy: (chatMessages, { asc }) => [asc(chatMessages.createdAt)],
      })

      return {
        success: true,
        messages: messages.map((msg) => ({
          id: msg.id.toString(),
          role: msg.role as "user" | "assistant" | "system",
          content: msg.content,
        })),
      }
    } catch (dbError) {
      console.error("Database error getting chat history:", dbError)
      return {
        success: false,
        error: "Database error: " + (dbError instanceof Error ? dbError.message : "Unknown error"),
        messages: [],
      }
    }
  } catch (error) {
    console.error("Error getting chat history:", error)
    return {
      success: false,
      error: "Failed to get chat history",
      messages: [],
    }
  }
}

// Add the missing getChatMessages export
export async function getChatMessages(sessionId: string) {
  try {
    // Validate sessionId format
    if (!sessionId || typeof sessionId !== "string") {
      console.error("Invalid sessionId format:", sessionId)
      return {
        success: false,
        error: "Invalid session ID format",
        messages: [],
      }
    }

    // Use a try-catch block specifically for the database query
    try {
      const messages = await db.query.chatMessages.findMany({
        where: eq(chatMessages.sessionId, sessionId),
        orderBy: (chatMessages, { asc }) => [asc(chatMessages.createdAt)],
      })

      return {
        success: true,
        messages: messages.map((msg) => ({
          id: msg.id.toString(),
          role: msg.role,
          content: msg.content,
          createdAt: msg.createdAt,
        })),
      }
    } catch (dbError) {
      console.error("Database error getting chat messages:", dbError)
      return {
        success: false,
        error: "Database error: " + (dbError instanceof Error ? dbError.message : "Unknown error"),
        messages: [],
      }
    }
  } catch (error) {
    console.error("Error getting chat messages:", error)
    return {
      success: false,
      error: "Failed to get chat messages",
      messages: [],
    }
  }
}

export async function chat(messages: Message[], sessionId?: string) {
  try {
    // Filter out system messages from the conversation history
    const conversationHistory = messages.filter((message) => message.role !== "system")

    // Format messages for the AI SDK
    const aiMessages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    ]

    // Generate a response using Groq
    const response = await generateText({
      model: models.groqLlama3,
      messages: aiMessages,
      temperature: 0.7,
      maxTokens: 500,
    })

    return {
      id: Date.now().toString(),
      role: "assistant" as const,
      content: response.text,
    }
  } catch (error) {
    console.error("Error in chat function:", error)
    return {
      id: Date.now().toString(),
      role: "assistant" as const,
      content:
        "Beklager, jeg kunne ikke behandle forespørselen din. Vennligst prøv igjen senere eller kontakt oss direkte på +47 123 45 678. / Sorry, I couldn't process your request. Please try again later or contact us directly at +47 123 45 678.",
    }
  }
}
