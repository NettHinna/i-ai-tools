import ChatInterface from "@/components/chat/chat-interface"

export const metadata = {
  title: "Derksen AI Assistent | Derksen Trading",
  description: "Snakk med vår AI-assistent om sandblåsing, IBIX-produkter og tjenester",
}

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-center text-4xl font-light tracking-tight text-slate-900 font-heading">
          Derksen AI <span className="text-brand-600">Assistent</span>
        </h1>
        <p className="mb-12 text-center text-lg font-light text-slate-600 max-w-2xl mx-auto">
          Vår AI-assistent kan svare på spørsmål om sandblåsing, IBIX-produkter og våre tjenester døgnet rundt.
        </p>

        {/* Render the ChatInterface component directly instead of using an iframe */}
        <div className="w-full rounded-xl shadow-lg">
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}
