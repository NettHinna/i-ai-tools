"use server"

import { db } from "@/lib/db"
import { contactSubmissions, insertContactSubmissionSchema } from "@/lib/db/schema"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validate with Zod
    const validatedData = insertContactSubmissionSchema.parse({
      name,
      email,
      phone,
      company,
      message,
    })

    // Insert into database
    await db.insert(contactSubmissions).values(validatedData)

    // Revalidate the contact page
    revalidatePath("/kontakt")

    return { success: true, message: "Takk for din henvendelse! Vi vil kontakte deg snart." }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Det oppstod en feil ved innsending av skjemaet. Vennligst prøv igjen.",
    }
  }
}
