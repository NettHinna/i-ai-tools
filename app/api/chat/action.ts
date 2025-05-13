"use server"

import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

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

Key features of IBIX technology:
- Dust-free technology: Patented technology that reduces dust by up to 99% for cleaner, safer, and more environmentally friendly sandblasting.
- Mobile and lightweight equipment: Our machines are up to 60% lighter than traditional sandblasters with similar capacity.
- 30% faster cleaning with Helix nozzle
- Low air consumption for cost-effective operation
- Precise control for gentle results

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

export async function chat(messages: Message[]) {
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

    // Generate a response using Groq instead of OpenAI
    const response = await generateText({
      model: groq("llama3-70b-8192"),
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
