import { getChatSessions } from "@/app/actions/chat"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function ChatPage() {
  const { success, sessions, error } = await getChatSessions()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Chat Sessions</h1>

      {!success && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
          <p>Error: {error}</p>
        </div>
      )}

      {success && sessions.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md">
          <p>No chat sessions found.</p>
        </div>
      )}

      {success && sessions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border-b text-left">Session ID</th>
                <th className="py-2 px-4 border-b text-left">Created</th>
                <th className="py-2 px-4 border-b text-left">Last Updated</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono text-sm">{session.sessionId}</td>
                  <td className="py-2 px-4 border-b">{formatDate(session.createdAt)}</td>
                  <td className="py-2 px-4 border-b">{formatDate(session.updatedAt)}</td>
                  <td className="py-2 px-4 border-b">
                    <Link
                      href={`/admin/chat/${session.sessionId}`}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      View Messages
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
