import type { BalticDryIndexDataPoint, CurrencyDataPoint } from "@/types/data-types"

// Cache mechanism with proper typing and expiration handling
interface CacheItem<T> {
  data: T
  timestamp: number
}

class ApiCache {
  private cache: Map<string, CacheItem<any>> = new Map()
  private defaultExpiryTime = 3600000 // 1 hour in milliseconds

  get<T>(key: string, expiryTime = this.defaultExpiryTime): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    // Check if cache has expired
    if (Date.now() - item.timestamp > expiryTime) {
      this.cache.delete(key)
      return null
    }

    return item.data as T
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    })
  }

  invalidate(key: string): void {
    this.cache.delete(key)
  }

  invalidateAll(): void {
    this.cache.clear()
  }
}

// Singleton instance of the cache
const apiCache = new ApiCache()

// Error types for better error handling
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

export class NetworkError extends ApiError {
  constructor(message: string, endpoint?: string) {
    super(message, undefined, endpoint)
    this.name = "NetworkError"
  }
}

export class DataError extends ApiError {
  constructor(message: string, endpoint?: string) {
    super(message, undefined, endpoint)
    this.name = "DataError"
  }
}

// API client with retry logic and proper error handling
export class ApiClient {
  private static instance: ApiClient
  private apiFailures: Set<string> = new Set()
  private maxRetries = 2
  private retryDelay = 1000 // ms

  private constructor() {}

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  // Generic fetch method with retries and error handling
  private async fetchWithRetry<T>(url: string, options?: RequestInit, retries = this.maxRetries): Promise<T> {
    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new ApiError(`API responded with status ${response.status}`, response.status, url)
      }

      return await response.json()
    } catch (error) {
      if (retries > 0) {
        // Wait before retrying
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay))
        return this.fetchWithRetry<T>(url, options, retries - 1)
      }

      if (error instanceof ApiError) {
        throw error
      }

      throw new NetworkError(`Network error when fetching from ${url}: ${error.message}`, url)
    }
  }

  // Baltic Dry Index data
  async fetchBalticDryIndexData(): Promise<BalticDryIndexDataPoint[]> {
    const cacheKey = "balticDryIndex"
    const cachedData = apiCache.get<BalticDryIndexDataPoint[]>(cacheKey)

    if (cachedData) {
      return cachedData
    }

    try {
      // In a real implementation, we would fetch from an actual API
      // For now, we'll use the mock data generator
      const data = this.generateMockBalticDryIndexData()
      apiCache.set(cacheKey, data)
      return data
    } catch (error) {
      console.error("Error fetching Baltic Dry Index data:", error)

      // If we have a previous cache, return it even if expired
      const expiredCache = apiCache.get<BalticDryIndexDataPoint[]>(cacheKey, Number.POSITIVE_INFINITY)
      if (expiredCache) {
        return expiredCache
      }

      // Last resort: generate new mock data
      const fallbackData = this.generateMockBalticDryIndexData()
      apiCache.set(cacheKey, fallbackData)
      return fallbackData
    }
  }

  // Currency exchange rate data
  async fetchCurrencyData(baseCurrency: string, quoteCurrency: string): Promise<CurrencyDataPoint[]> {
    const pairId = `${baseCurrency}/${quoteCurrency}`
    const cacheKey = `currency_${pairId}`

    const cachedData = apiCache.get<CurrencyDataPoint[]>(cacheKey)
    if (cachedData) {
      return cachedData
    }

    // If we've already tried and failed with this pair, go straight to mock data
    if (this.apiFailures.has(pairId)) {
      console.log(`Using mock data for ${pairId} (previous API failure)`)
      const mockData = this.generateMockCurrencyData(baseCurrency, quoteCurrency)
      apiCache.set(cacheKey, mockData)
      return mockData
    }

    try {
      // In a real implementation, we would fetch from Alpha Vantage or another API
      // For now, we'll use the mock data generator
      const mockData = this.generateMockCurrencyData(baseCurrency, quoteCurrency)
      apiCache.set(cacheKey, mockData)
      return mockData
    } catch (error) {
      console.error(`Error fetching currency data for ${pairId}:`, error)

      // Mark this pair as failed so we don't try again
      this.apiFailures.add(pairId)

      // If we have a previous cache, return it even if expired
      const expiredCache = apiCache.get<CurrencyDataPoint[]>(cacheKey, Number.POSITIVE_INFINITY)
      if (expiredCache) {
        return expiredCache
      }

      // Last resort: generate new mock data
      const fallbackData = this.generateMockCurrencyData(baseCurrency, quoteCurrency)
      apiCache.set(cacheKey, fallbackData)
      return fallbackData
    }
  }

  // Exchange rates data
  async fetchExchangeRates(baseCurrency: string): Promise<Record<string, number>> {
    const cacheKey = `exchangeRates_${baseCurrency}`
    const cachedData = apiCache.get<Record<string, number>>(cacheKey)

    if (cachedData) {
      return cachedData
    }

    try {
      const url = `https://api.exchangerate.host/latest?base=${baseCurrency}`
      const data = await this.fetchWithRetry<{ rates: Record<string, number> }>(url)

      if (!data.rates) {
        throw new DataError("Invalid response format from exchange rate API", url)
      }

      apiCache.set(cacheKey, data.rates)
      return data.rates
    } catch (error) {
      console.error(`Error fetching exchange rates for ${baseCurrency}:`, error)

      // If we have a previous cache, return it even if expired
      const expiredCache = apiCache.get<Record<string, number>>(cacheKey, Number.POSITIVE_INFINITY)
      if (expiredCache) {
        return expiredCache
      }

      // Last resort: generate mock exchange rates
      const fallbackData = this.generateMockExchangeRates(baseCurrency)
      apiCache.set(cacheKey, fallbackData)
      return fallbackData
    }
  }

  // Mock data generators
  private generateMockBalticDryIndexData(): BalticDryIndexDataPoint[] {
    const data: BalticDryIndexDataPoint[] = []
    const today = new Date()

    // Initial value (close to current real value as of April 2023)
    let value = 1587

    // Generate data points for the past year
    for (let i = 365; i >= 0; i--) {
      const date = new Date()
      date.setDate(today.getDate() - i)

      // Add some randomness to create realistic looking data
      // More volatility in certain periods
      let volatility = 0.02

      // Higher volatility in summer and winter months
      const month = date.getMonth()
      if (month >= 5 && month <= 7) volatility = 0.03 // Summer (Jun-Aug)
      if (month >= 10 || month <= 1) volatility = 0.025 // Winter (Nov-Feb)

      // Create trends similar to the real Baltic Dry Index
      if (i > 300) {
        // Declining trend in early period
        value -= Math.random() * 5
      } else if (i > 200) {
        // Bottom period
        value += (Math.random() * 2 - 1) * 10
      } else if (i > 100) {
        // Rising trend
        value += Math.random() * 8
      } else {
        // Recent stabilization
        value += (Math.random() * 2 - 1) * 15
      }

      // Add daily noise
      value = value * (1 + (Math.random() * 2 - 1) * volatility)

      // Ensure value stays within realistic bounds
      value = Math.max(600, Math.min(2400, value))

      data.push({
        date: new Date(date),
        value: Math.round(value),
      })
    }

    return data
  }

  private generateMockCurrencyData(baseCurrency: string, quoteCurrency: string): CurrencyDataPoint[] {
    const data: CurrencyDataPoint[] = []
    const today = new Date()

    // Set realistic starting values based on currency pair
    let startValue = 1.0

    if (baseCurrency === "NOK" && quoteCurrency === "USD") startValue = 0.0925
    else if (baseCurrency === "EUR" && quoteCurrency === "USD") startValue = 1.085
    else if (baseCurrency === "EUR" && quoteCurrency === "GBP") startValue = 0.852
    else if (baseCurrency === "NOK" && quoteCurrency === "GBP") startValue = 0.079
    else if (baseCurrency === "EUR" && quoteCurrency === "SEK") startValue = 11.35
    else if (baseCurrency === "EUR" && quoteCurrency === "NOK") startValue = 11.72
    else if (baseCurrency === "GBP" && quoteCurrency === "SEK") startValue = 13.32
    else if (baseCurrency === "USD" && quoteCurrency === "SEK") startValue = 10.45
    else if (baseCurrency === "USD" && quoteCurrency === "NOK") startValue = 10.81

    // Initial value
    let value = startValue

    // Generate data points for the past year
    for (let i = 365; i >= 0; i--) {
      const date = new Date()
      date.setDate(today.getDate() - i)

      // Add some randomness to create realistic looking data
      const volatility = 0.003 // Currency pairs typically have low volatility

      // Add daily noise
      value = value * (1 + (Math.random() * 2 - 1) * volatility)

      data.push({
        date: new Date(date),
        value: value,
      })
    }

    return data
  }

  private generateMockExchangeRates(baseCurrency: string): Record<string, number> {
    const currencies = ["USD", "EUR", "GBP", "NOK", "SEK", "JPY", "CAD", "AUD", "CHF"]
    const rates: Record<string, number> = {}

    // Set realistic values based on base currency
    currencies.forEach((currency) => {
      if (currency === baseCurrency) {
        rates[currency] = 1.0
        return
      }

      // Generate realistic exchange rates
      if (baseCurrency === "USD") {
        if (currency === "EUR") rates[currency] = 0.92
        else if (currency === "GBP") rates[currency] = 0.78
        else if (currency === "NOK") rates[currency] = 10.81
        else if (currency === "SEK") rates[currency] = 10.45
        else if (currency === "JPY") rates[currency] = 149.5
        else if (currency === "CAD") rates[currency] = 1.36
        else if (currency === "AUD") rates[currency] = 1.52
        else if (currency === "CHF") rates[currency] = 0.88
      } else if (baseCurrency === "EUR") {
        if (currency === "USD") rates[currency] = 1.09
        else if (currency === "GBP") rates[currency] = 0.85
        else if (currency === "NOK") rates[currency] = 11.72
        else if (currency === "SEK") rates[currency] = 11.35
        else if (currency === "JPY") rates[currency] = 162.5
        else if (currency === "CAD") rates[currency] = 1.48
        else if (currency === "AUD") rates[currency] = 1.65
        else if (currency === "CHF") rates[currency] = 0.96
      } else {
        // Default case - generate a random but realistic rate
        rates[currency] = 1.0 + Math.random() * 0.5
      }
    })

    return rates
  }

  // Clear cache and reset API failure tracking
  public resetState(): void {
    apiCache.invalidateAll()
    this.apiFailures.clear()
  }
}

// Export a singleton instance
export const apiClient = ApiClient.getInstance()
