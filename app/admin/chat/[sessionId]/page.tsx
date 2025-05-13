export const dynamic = "force-dynamic"

import { notFound } from "next/navigation"
import { getChatMessages } from "@/app/actions/chat"
import { formatDate } from "@/lib/utils"

export default async function ChatSessionPage({ params }: { params: { sessionId: string } }) {
  if (!params.sessionId) {
    notFound()
  }

  try {
    const messages = await getChatMessages(params.sessionId)

    if (!messages || messages.length === 0) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Chat Session: {params.sessionId}</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <p className="text-yellow-800">No messages found for this session.</p>
          </div>
        </div>
      )
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Chat Session: {params.sessionId}</h1>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.role === "user" ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">{message.role === "user" ? "User" : "Assistant"}</span>
                <span className="text-xs text-gray-500">{formatDate(message.created_at)}</span>
              </div>
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error fetching chat messages:", error)
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Chat Session: {params.sessionId}</h1>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">Error loading chat messages. Please try again later.</p>
        </div>
      </div>
    )
  }
}
