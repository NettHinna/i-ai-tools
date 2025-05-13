import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"

export const contactSubmissions = pgTable("contact_submissions", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
})

// Zod schemas for validation
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  email: z.string().email("Vennligst oppgi en gyldig e-postadresse"),
  name: z.string().min(2, "Navn må være minst 2 tegn"),
  message: z.string().min(10, "Meldingen må være minst 10 tegn"),
})

export const selectContactSubmissionSchema = createSelectSchema(contactSubmissions)

// Types
export type ContactSubmission = z.infer<typeof selectContactSubmissionSchema>
export type NewContactSubmission = z.infer<typeof insertContactSubmissionSchema>
