import { Redis } from "@upstash/redis"

// Create a Redis client
const redis = new Redis({
  url: process.env.KV_URL || "",
  token: process.env.KV_REST_API_TOKEN || "",
})

export default redis
