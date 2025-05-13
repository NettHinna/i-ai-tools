import { db } from "@/lib/db"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

// Make this page dynamic to prevent prerendering during build
export const dynamic = "force-dynamic"

export default async function ChatPage() {
  // Add error handling for database queries
  let sessions = []
  let error = null

  try {
    // Fetch chat sessions from the database
    sessions = await db.query.chatSessions.findMany({
      orderBy: (chatSessions, { desc }) => [desc(chatSessions.updatedAt)],
    })
  } catch (e) {
    console.error("Error fetching chat sessions:", e)
    error = e instanceof Error ? e.message : "Unknown error fetching chat sessions"
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">Chat Sessions</h1>
          <p className="text-gray-600 mb-8">View and manage chat sessions from your website.</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              <h3 className="font-medium">Error loading chat sessions</h3>
              <p className="text-sm">{error}</p>
              <p className="text-sm mt-2">
                This could be due to a database connection issue. Please check your database configuration.
              </p>
            </div>
          )}

          {!error && sessions.length === 0 ? (
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
