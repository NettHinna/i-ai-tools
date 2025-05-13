"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function ContextChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-[500px] flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Chat med oss</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
              <p className="text-sm">Hei! Hvordan kan jeg hjelpe deg i dag?</p>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Skriv en melding..."
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white rounded-full p-3 shadow-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Åpne chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
