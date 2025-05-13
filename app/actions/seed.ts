"use server"

import { seedDatabase, seedChatData, seedContactData, seedProductData } from "@/lib/db/seed"
import { revalidatePath } from "next/cache"

export async function seedAllData() {
  try {
    const result = await seedDatabase()

    if (result.success) {
      // Revalidate relevant paths
      revalidatePath("/")
      revalidatePath("/produkter")
      revalidatePath("/kontakt")

      return { success: true, message: "Database seeded successfully!" }
    } else {
      return { success: false, message: "Failed to seed database. Check server logs for details." }
    }
  } catch (error) {
    console.error("Error in seedAllData:", error)
    return {
      success: false,
      message: "An error occurred while seeding the database.",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function seedChatDataOnly() {
  try {
    const result = await seedChatData()

    if (result.success) {
      return { success: true, message: "Chat data seeded successfully!" }
    } else {
      return { success: false, message: "Failed to seed chat data. Check server logs for details." }
    }
  } catch (error) {
    console.error("Error in seedChatDataOnly:", error)
    return {
      success: false,
      message: "An error occurred while seeding chat data.",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function seedContactDataOnly() {
  try {
    const result = await seedContactData()
    revalidatePath("/kontakt")

    if (result.success) {
      return { success: true, message: "Contact data seeded successfully!" }
    } else {
      return { success: false, message: "Failed to seed contact data. Check server logs for details." }
    }
  } catch (error) {
    console.error("Error in seedContactDataOnly:", error)
    return {
      success: false,
      message: "An error occurred while seeding contact data.",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function seedProductDataOnly() {
  try {
    const result = await seedProductData()
    revalidatePath("/produkter")

    if (result.success) {
      return { success: true, message: "Product data seeded successfully!" }
    } else {
      return { success: false, message: "Failed to seed product data. Check server logs for details." }
    }
  } catch (error) {
    console.error("Error in seedProductDataOnly:", error)
    return {
      success: false,
      message: "An error occurred while seeding product data.",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
