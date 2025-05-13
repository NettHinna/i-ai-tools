import { db } from "@/lib/db"
import { chatMessages } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default async function ChatSessionPage({ params }: { params: { sessionId: string } }) {
  const { sessionId } = params

  // Fetch chat messages for this session
  const messages = await db.query.chatMessages.findMany({
    where: eq(chatMessages.sessionId, sessionId),
    orderBy: (chatMessages, { asc }) => [asc(chatMessages.createdAt)],
  })

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/admin/chat" className="inline-flex items-center text-primary-600 hover:text-primary-800">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Chat Sessions
            </Link>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Chat Session: {sessionId.substring(0, 8)}...</h1>
          <p className="text-gray-600 mb-8">Viewing all messages for this chat session.</p>

          {messages.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500">No messages found for this session.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg ${message.role === "user" ? "bg-gray-100 ml-12" : "bg-primary-50 mr-12"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium capitalize">{message.role}</span>
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
