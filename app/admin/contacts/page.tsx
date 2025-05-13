import { db } from "@/lib/db"
import { contactSubmissions } from "@/lib/db/schema"
import { formatDate } from "@/lib/utils"

export const dynamic = "force-dynamic"

export default async function ContactsPage() {
  let contacts = []
  let error = null

  try {
    contacts = await db.query.contactSubmissions.findMany({
      orderBy: contactSubmissions.createdAt,
    })
  } catch (err) {
    console.error("Error fetching contacts:", err)
    error = "Failed to fetch contact submissions"
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
          <p>Error: {error}</p>
        </div>
      )}

      {!error && contacts.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md">
          <p>No contact submissions found.</p>
        </div>
      )}

      {!error && contacts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Phone</th>
                <th className="py-2 px-4 border-b text-left">Company</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.phone || "-"}</td>
                  <td className="py-2 px-4 border-b">{contact.company || "-"}</td>
                  <td className="py-2 px-4 border-b">{formatDate(contact.createdAt)}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="max-w-xs truncate">{contact.message}</div>
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
