import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

// Create a SQL client with Neon with error handling
const createSqlClient = () => {
  try {
    return neon(process.env.POSTGRES_URL!)
  } catch (error) {
    console.error("Error creating Neon SQL client:", error)
    // Return a mock client that will throw a more descriptive error when used
    return {
      query: () => {
        throw new Error("Database connection failed. Please check your environment variables.")
      },
    }
  }
}

const sql = createSqlClient()

// Create a Drizzle client with the SQL client and schema
export const db = drizzle(sql, { schema })
