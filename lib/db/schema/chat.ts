import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const chatSessions = pgTable("chat_sessions", {
  id: integer("id").primaryKey().notNull(),
  sessionId: text("session_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
})

export const chatMessages = pgTable("chat_messages", {
  id: integer("id").primaryKey().notNull(),
  sessionId: text("session_id")
    .notNull()
    .references(() => chatSessions.sessionId),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
})

// Zod schemas for validation
export const insertChatSessionSchema = createInsertSchema(chatSessions)
export const selectChatSessionSchema = createSelectSchema(chatSessions)

export const insertChatMessageSchema = createInsertSchema(chatMessages)
export const selectChatMessageSchema = createSelectSchema(chatMessages)

// Types
export type ChatSession = z.infer<typeof selectChatSessionSchema>
export type NewChatSession = z.infer<typeof insertChatSessionSchema>
export type ChatMessage = z.infer<typeof selectChatMessageSchema>
export type NewChatMessage = z.infer<typeof insertChatMessageSchema>
