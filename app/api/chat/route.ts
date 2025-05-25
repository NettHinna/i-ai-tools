import { xai } from "@ai-sdk/xai"
import { streamText } from "ai"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Get the last message from the user
  const lastMessage = messages[messages.length - 1]

  // Create a system prompt that provides context about Derksen Trading
  const systemPrompt = `
    Du er en AI-assistent for Derksen Trading, en norsk importør av IBIX sandblåsere.
    
    Om Derksen Trading:
    - De tilbyr profesjonell overflatebehandling i Bodø og Nordland
    - De spesialiserer seg på sandblåsing, graffiti-fjerning og industrilakkering
    - De bruker IBIX-teknologi som er støvfri og miljøvennlig
    - Deres produkter inkluderer IBIX Problaster 60 H2O, IBIX Problaster 40 H2O, og IBIX 9 Basic
    
    Svar alltid på norsk, vær hjelpsom, profesjonell og fokuser på å gi nøyaktig informasjon om Derksen Trading sine produkter og tjenester.
  `

  // Combine the system prompt with the user's message
  const prompt = lastMessage.content

  // Stream the response
  const response = await streamText({
    model: xai("grok-3-mini"),
    system: systemPrompt,
    prompt: prompt,
  })

  return new Response(response.text)
}
