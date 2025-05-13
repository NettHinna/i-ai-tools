"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import the chat widget with no SSR
const GrokChatWidget = dynamic(() => import("./grok-chat-widget"), {
  ssr: false,
})

export default function ChatWidgetWrapper() {
  return (
    <Suspense fallback={null}>
      <GrokChatWidget />
    </Suspense>
  )
}
