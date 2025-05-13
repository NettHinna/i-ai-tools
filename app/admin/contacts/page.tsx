import { db } from "@/lib/db"
import { formatDistanceToNow } from "date-fns"

export default async function ContactsPage() {
  // Fetch contact submissions from the database
  const submissions = await db.query.contactSubmissions.findMany({
    orderBy: (contactSubmissions, { desc }) => [desc(contactSubmissions.id)],
  })

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">Contact Submissions</h1>
          <p className="text-gray-600 mb-8">View and manage contact form submissions from your website.</p>

          {submissions.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500">No contact submissions found.</p>
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
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone || "-"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.company || "-"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{submission.message}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.createdAt
                            ? formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })
                            : "-"}
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
