import { getChatMessages } from "@/app/actions/chat"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function ChatSessionPage({
  params,
}: {
  params: { sessionId: string }
}) {
  const { sessionId } = params

  if (!sessionId) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Invalid Session ID</h1>
        <Link href="/admin/chat">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chat Sessions
          </Button>
        </Link>
      </div>
    )
  }

  const { success, messages, error } = await getChatMessages(sessionId)

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/admin/chat">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Chat Session: {sessionId}</h1>
      </div>

      {!success && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
          <p>Error: {error}</p>
        </div>
      )}

      {success && messages.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md">
          <p>No messages found for this session.</p>
        </div>
      )}

      {success && messages.length > 0 && (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.role === "user" ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold capitalize">{message.role}</span>
                <span className="text-xs text-gray-500">{formatDate(message.createdAt)}</span>
              </div>
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
