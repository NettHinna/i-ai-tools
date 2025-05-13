export function TypingIndicator() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
      <span className="ml-2 text-sm text-gray-500">Skriver...</span>
    </div>
  )
}
