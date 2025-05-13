import { Redis } from "@upstash/redis"

// Create a Redis client
const redis = new Redis({
  url: process.env.KV_URL || "",
  token: process.env.KV_REST_API_TOKEN || "",
})

// Chat history functions
export async function saveChatHistory(sessionId: string, messages: any[]) {
  try {
    await redis.set(`chat:${sessionId}`, JSON.stringify(messages), { ex: 60 * 60 * 24 * 7 }) // 7 days expiry
    return true
  } catch (error) {
    console.error("Error saving chat history:", error)
    return false
  }
}

export async function getChatHistory(sessionId: string) {
  try {
    const history = await redis.get(`chat:${sessionId}`)
    return history ? JSON.parse(history as string) : null
  } catch (error) {
    console.error("Error getting chat history:", error)
    return null
  }
}

export async function deleteChatHistory(sessionId: string) {
  try {
    await redis.del(`chat:${sessionId}`)
    return true
  } catch (error) {
    console.error("Error deleting chat history:", error)
    return false
  }
}

export default redis
