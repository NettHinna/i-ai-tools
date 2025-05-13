import { cn } from "@/lib/utils"
import type { Message } from "@/app/api/chat/action"
import { format } from "date-fns"
import { nb } from "date-fns/locale"

interface ChatMessageProps {
  message: Message
  timestamp?: Date
}

export function ChatMessage({ message, timestamp }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex flex-col max-w-[80%]", isUser ? "ml-auto items-end" : "items-start")}>
      <div className={cn("rounded-lg p-4", isUser ? "bg-primary-100 text-gray-800" : "bg-gray-100 text-gray-800")}>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
      {timestamp && <span className="text-xs text-gray-500 mt-1">{format(timestamp, "HH:mm", { locale: nb })}</span>}
    </div>
  )
}
