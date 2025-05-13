import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

// Create a SQL client with Neon
const sql = neon(process.env.POSTGRES_URL!)

// Create a Drizzle client with the SQL client and schema
export const db = drizzle(sql, { schema })
