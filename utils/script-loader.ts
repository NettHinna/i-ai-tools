// Secure script loader with CSP considerations
interface ScriptOptions {
  async?: boolean
  defer?: boolean
  id?: string
  onLoad?: () => void
  onError?: (error: Error) => void
  attributes?: Record<string, string>
}

export function loadScript(src: string, options: ScriptOptions = {}): () => void {
  const { async = true, defer = false, id, onLoad, onError, attributes = {} } = options

  // Check if script already exists
  if (id && document.getElementById(id)) {
    if (onLoad) onLoad()
    return () => {}
  }

  // Create script element
  const script = document.createElement("script")
  script.src = src
  script.async = async
  script.defer = defer
  if (id) script.id = id

  // Add custom attributes
  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value)
  })

  // Add event listeners
  if (onLoad) {
    script.onload = onLoad
  }

  if (onError) {
    script.onerror = (event) => {
      onError(new Error(`Failed to load script: ${src}`))
    }
  }

  // Add to document
  document.head.appendChild(script)

  // Return cleanup function
  return () => {
    if (id && document.getElementById(id)) {
      document.head.removeChild(script)
    }
  }
}

// TradingView specific loader
export function loadTradingViewWidget(
  containerId: string,
  config: Record<string, any>,
  onLoad?: () => void,
): () => void {
  // Create container if it doesn't exist
  const container = document.getElementById(containerId)
  if (!container) {
    console.error(`Container with id ${containerId} not found`)
    return () => {}
  }

  // Clear container
  container.innerHTML = ""

  // Create script element
  const script = document.createElement("script")
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
  script.type = "text/javascript"
  script.async = true

  // Set widget configuration
  script.innerHTML = JSON.stringify(config)

  // Add event listeners
  if (onLoad) {
    script.onload = onLoad
  }

  // Add to container
  container.appendChild(script)

  // Return cleanup function
  return () => {
    if (container) {
      container.innerHTML = ""
    }
  }
}
