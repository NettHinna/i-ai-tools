import { groq } from "@ai-sdk/groq"
import { deepinfra } from "@ai-sdk/deepinfra"

export const models = {
  // Groq models
  groqLlama3: groq("llama3-70b-8192"),
  groqLlama3Instruct: groq("llama3-8b-8192-instruct"),

  // DeepInfra models
  deepInfraMistral: deepinfra("mistralai/Mistral-7B-Instruct-v0.2"),
  deepInfraLlama3: deepinfra("meta-llama/Llama-3-8b-chat-hf"),
}

// Default model selection
export const defaultModel = models.groqLlama3
