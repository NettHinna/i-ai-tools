import Link from "next/link"
import { Database, MessageSquare, Users, Package } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 mb-8">
            Welcome to the admin dashboard. Here you can manage your website data and settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/seed" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-primary-600 mr-3" />
                  <h2 className="text-lg font-medium">Database Seed</h2>
                </div>
                <p className="text-gray-600 text-sm">
                  Seed your database with sample data for testing and development.
                </p>
              </div>
            </Link>

            <Link href="/admin/chat" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary-600 mr-3" />
                  <h2 className="text-lg font-medium">Chat Management</h2>
                </div>
                <p className="text-gray-600 text-sm">View and manage chat sessions and messages.</p>
              </div>
            </Link>

            <Link href="/admin/contacts" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary-600 mr-3" />
                  <h2 className="text-lg font-medium">Contact Submissions</h2>
                </div>
                <p className="text-gray-600 text-sm">View and manage contact form submissions.</p>
              </div>
            </Link>

            <Link href="/admin/products" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-primary-600 mr-3" />
                  <h2 className="text-lg font-medium">Product Management</h2>
                </div>
                <p className="text-gray-600 text-sm">Add, edit, and manage products and their details.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
