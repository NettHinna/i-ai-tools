import { db } from "@/lib/db"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

export default async function ChatPage() {
  // Fetch chat sessions from the database
  const sessions = await db.query.chatSessions.findMany({
    orderBy: (chatSessions, { desc }) => [desc(chatSessions.updatedAt)],
  })

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">Chat Sessions</h1>
          <p className="text-gray-600 mb-8">View and manage chat sessions from your website.</p>

          {sessions.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500">No chat sessions found.</p>
              <p className="text-gray-500 mt-2">
                Try seeding some sample data from the{" "}
                <a href="/admin/seed" className="text-primary-600 hover:underline">
                  Database Seed
                </a>{" "}
                page.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Session ID
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sessions.map((session) => (
                      <tr key={session.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {session.sessionId.substring(0, 8)}...
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDistanceToNow(new Date(session.updatedAt), { addSuffix: true })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Link
                            href={`/admin/chat/${session.sessionId}`}
                            className="text-primary-600 hover:text-primary-800 hover:underline"
                          >
                            View Messages
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
