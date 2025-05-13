"use server"

import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

// This type defines the structure of our chat messages
export type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

// More detailed website information to provide context to the AI
const websiteInfo = `
# About Derksen Trading AS
Derksen Trading AS is Norway's official importer of IBIX sandblasters. The company offers professional surface treatment, sandblasting, and industrial painting in Bodø and Nordland.

## Company Information
- Founded: Over 10 years ago
- Location: Bodø, Norway
- Service Area: Primarily Bodø and Nordland region
- Specialization: Professional surface treatment, sandblasting, and industrial painting
- Official Status: Norway's official importer of IBIX sandblasters

## Products

### IBIX® Problaster 60 H2O
- Type: 60 liter combo blaster
- Use: Professional use
- Weight: ~45 kg
- Special Feature: HiPower double air supply for maximum effect
- Best For: Heavy industrial use, large projects

### IBIX® Problaster 40 H2O
- Type: 40L combo blaster
- Features: Versatile and compact
- Performance: Performs like a large traditional pot
- Weight: Only 35kg
- Best For: Larger projects, industrial use

### IBIX® Problaster 25 H2O
- Type: 25L combo blaster
- Features: Versatile and compact
- Performance: Performs like a large traditional pot
- Weight: Only 28kg
- Best For: Versatile use, facades, graffiti

### IBIX® 25 Basic
- Type: 25L dry blaster
- Features: Compact and efficient
- Best For: Medium-sized projects and professional use

### IBIX® 9 Basic
- Type: 9L dry blaster
- Weight: Super light (12kg)
- Best For: Small-scale work and hobby (car restoration, etc.)

### IBIX® Helix nozzle
- Type: Patented rotating nozzle
- Benefits: 30% faster cleaning and gentle treatment
- Compatible with: All IBIX sandblasters

## Services

### Sandblasting on assignment
- Description: Mobile sandblasting of metal, concrete, masonry, etc.
- Process: We come out with equipment and compressor to your project
- Areas Served: Bodø and Nordland region

### Graffiti removal
- Description: Gentle removal of unwanted tagging on walls, stone, metal
- Technology: IBIX wet blasting technique
- Benefit: Removes paint without damaging the substrate

### Industrial painting
- Description: Application of protective coatings after sandblasting
- Special Offering: As a dealer of ZINGA® zinc coating, we can galvanize on site

## Technology Benefits

### Dust-free technology
- Description: Patented technology that reduces dust by up to 99%
- Benefits: Cleaner, safer, and more environmentally friendly sandblasting
- Applications: Indoor and sensitive environments

### Mobile and lightweight equipment
- Comparison: Up to 60% lighter than traditional sandblasters with similar capacity
- Benefit: Easy to transport and maneuver in difficult-to-reach places

### Efficiency features
- Helix nozzle: 30% faster cleaning
- Air consumption: Low air consumption for cost-effective operation
- Control: Precise control for gentle results

## Contact information
- Company: Derksen Trading AS
- Address: Industriveien 123, 8013 Bodø, Norway
- Phone: +47 123 45 678
- Email: post@derksentrading.no
- Business hours: Monday - Friday: 08:00 - 16:00, Saturday-Sunday: Closed
`

// Enhanced system prompt to guide the AI's behavior
const systemPrompt = `
You are a helpful assistant for Derksen Trading AS, Norway's official importer of IBIX sandblasters.
Your role is to provide information about the company's products, services, and answer customer questions.

## Guidelines for your responses:

1. Be friendly, professional, and concise in your responses.
2. Always respond in the same language the user is using (Norwegian or English).
3. If the user writes in Norwegian, respond in Norwegian. If they write in English, respond in English.
4. If you don't know the answer to a question, politely say so and offer to connect the user with a human representative.
5. For product inquiries, provide specific details about features, benefits, and applications.
6. For service inquiries, explain the process, coverage area, and what customers can expect.
7. For pricing inquiries, explain that prices vary based on specific requirements and suggest contacting the company directly.
8. If asked about competitors or alternative products, focus on the benefits of IBIX products without disparaging competitors.
9. Keep responses concise but informative - aim for 2-4 sentences for simple questions and 4-6 sentences for complex ones.
10. Use bullet points for lists of features or benefits to improve readability.

Here is detailed information about the company, its products and services:
${websiteInfo}
`

export async function enhancedChat(messages: Message[]) {
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
      maxTokens: 800,
    })

    return {
      id: Date.now().toString(),
      role: "assistant" as const,
      content: response.text,
    }
  } catch (error) {
    console.error("Error in enhancedChat function:", error)

    // Return a more helpful error message
    return {
      id: Date.now().toString(),
      role: "assistant" as const,
      content:
        "Beklager, jeg kunne ikke behandle forespørselen din. Vennligst prøv igjen senere eller kontakt oss direkte på +47 123 45 678. / Sorry, I couldn't process your request. Please try again later or contact us directly at +47 123 45 678.",
    }
  }
}
