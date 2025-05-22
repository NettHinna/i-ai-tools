// API utilities for fetching financial data

// Types for our data
export interface BalticDryIndexDataPoint {
  date: Date
  value: number
}

export interface CurrencyDataPoint {
  date: Date
  value: number
}

export interface CurrencyPair {
  id: string
  base: string
  quote: string
}

// Cache mechanism to avoid excessive API calls
const cache = {
  balticDryIndex: {
    data: null as BalticDryIndexDataPoint[] | null,
    timestamp: 0,
    expiryTime: 3600000, // 1 hour in milliseconds
  },
  currencyRates: {
    data: {} as Record<string, CurrencyDataPoint[]>,
    timestamp: {} as Record<string, number>,
    expiryTime: 3600000, // 1 hour in milliseconds
  },
  apiFailures: {} as Record<string, boolean>, // Track API failures to avoid repeated failed calls
}

// Fetch Baltic Dry Index data
export async function fetchBalticDryIndexData(): Promise<BalticDryIndexDataPoint[]> {
  // Check cache first
  if (cache.balticDryIndex.data && Date.now() - cache.balticDryIndex.timestamp < cache.balticDryIndex.expiryTime) {
    return cache.balticDryIndex.data
  }

  try {
    // Since we can't reliably get Baltic Dry Index from Alpha Vantage,
    // we'll use mock data that resembles real-world patterns
    return generateMockBalticDryIndexData()
  } catch (error) {
    console.error("Error generating Baltic Dry Index data:", error)

    // If we have cached data, return it even if expired
    if (cache.balticDryIndex.data) {
      return cache.balticDryIndex.data
    }

    // Fallback to generated mock data (try again)
    return generateMockBalticDryIndexData()
  }
}

// List of currency pairs supported by Alpha Vantage
// Alpha Vantage primarily supports major currencies, not all combinations work
const supportedAlphaVantagePairs = [
  "EUR/USD",
  "USD/JPY",
  "GBP/USD",
  "USD/CHF",
  "EUR/GBP",
  "EUR/JPY",
  "USD/CAD",
  "AUD/USD",
]

// Fetch currency exchange rate data
export async function fetchCurrencyData(baseCurrency: string, quoteCurrency: string): Promise<CurrencyDataPoint[]> {
  const pairId = `${baseCurrency}/${quoteCurrency}`

  // Check cache first
  if (
    cache.currencyRates.data[pairId] &&
    Date.now() - (cache.currencyRates.timestamp[pairId] || 0) < cache.currencyRates.expiryTime
  ) {
    return cache.currencyRates.data[pairId]
  }

  // If we've already tried and failed with the API for this pair, go straight to mock data
  if (cache.apiFailures[pairId]) {
    console.log(`Using mock data for ${pairId} (previous API failure)`)
    return generateMockCurrencyData(baseCurrency, quoteCurrency)
  }

  // Check if this pair is directly supported by Alpha Vantage
  const isDirectlySupported = supportedAlphaVantagePairs.includes(pairId)

  // For now, due to API issues, we'll use mock data for all pairs
  // This can be removed once the API issues are resolved
  console.log(`Using mock data for ${pairId} (API issues)`)
  const mockData = generateMockCurrencyData(baseCurrency, quoteCurrency)

  // Update cache with mock data
  cache.currencyRates.data[pairId] = mockData
  cache.currencyRates.timestamp[pairId] = Date.now()

  return mockData

  /* Commented out API call code - can be uncommented when API issues are resolved
  // Try to get data from Alpha Vantage if directly supported
  if (isDirectlySupported) {
    try {
      const alphaVantageKey = process.env.ALPHA_VANTAGE_API_KEY || '5C1G3VDFRIADOZVL';
      const response = await fetch(
        `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${baseCurrency}&to_symbol=${quoteCurrency}&outputsize=full&apikey=${alphaVantageKey}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour
      );
      
      if (!response.ok) {
        throw new Error(`Alpha Vantage API returned ${response.status} for ${pairId}`);
      }
      
      const data = await response.json();
      
      // Log the full response for debugging
      console.log(`Alpha Vantage response for ${pairId}:`, JSON.stringify(data).substring(0, 500) + '...');
      
      // Check if the response contains an error message
      if (data['Error Message']) {
        throw new Error(`Alpha Vantage API error: ${data['Error Message']}`);
      }
      
      // Check if the response contains the expected data format
      if (data['Time Series FX (Daily)'] && Object.keys(data['Time Series FX (Daily)']).length > 0) {
        const timeSeries = data['Time Series FX (Daily)'];
        const historicalData: CurrencyDataPoint[] = [];
        
        // Process the time series data
        for (const dateStr in timeSeries) {
          const dateData = timeSeries[dateStr];
          if (dateData && dateData['4. close']) {
            const closePrice = parseFloat(dateData['4. close']);
            
            historicalData.push({
              date: new Date(dateStr),
              value: closePrice
            });
          }
        }
        
        // Check if we got any valid data points
        if (historicalData.length === 0) {
          throw new Error(`No valid data points found for ${pairId}`);
        }
        
        // Sort by date (oldest first)
        historicalData.sort((a, b) => a.date.getTime() - b.date.getTime());
        
        // Limit to last 365 days to keep data size manageable
        const last365Days = historicalData.slice(-365);
        
        // Update cache
        cache.currencyRates.data[pairId] = last365Days;
        cache.currencyRates.timestamp[pairId] = Date.now();
        
        console.log(`Successfully fetched ${last365Days.length} data points for ${pairId} from Alpha Vantage`);
        return last365Days;
      } else {
        console.log(`Alpha Vantage response for ${pairId} doesn't contain expected data format:`, data);
        throw new Error(`No time series data found for ${pairId}`);
      }
    } catch (error) {
      console.error(`Error fetching direct data for ${pairId}:`, error);
      
      // Mark this pair as failed so we don't try again
      cache.apiFailures[pairId] = true;
      
      // Continue to try cross-rate calculation or mock data
    }
  } else {
    console.log(`Currency pair ${pairId} not directly supported by Alpha Vantage, trying cross-rate calculation`);
  }

  // Try to calculate via USD if possible (for pairs not directly supported or if direct fetch failed)
  if (baseCurrency !== "USD" && quoteCurrency !== "USD") {
    try {
      console.log(`Attempting cross-rate calculation for ${pairId} via USD`)

      // Try to get base/USD and USD/quote rates
      let baseToUsd: CurrencyDataPoint[] = []
      let usdToQuote: CurrencyDataPoint[] = []

      // Check if base/USD is directly supported
      if (supportedAlphaVantagePairs.includes(`${baseCurrency}/USD`)) {
        try {
          baseToUsd = await fetchCurrencyData(baseCurrency, "USD")
        } catch (error) {
          console.error(`Error fetching ${baseCurrency}/USD for cross-rate:`, error)
          // If direct fetch fails, try inverse
          if (supportedAlphaVantagePairs.includes(`USD/${baseCurrency}`)) {
            const usdToBase = await fetchCurrencyData("USD", baseCurrency)
            // Invert the rates
            baseToUsd = usdToBase.map((item) => ({
              date: item.date,
              value: 1 / item.value,
            }))
          }
        }
      } else if (supportedAlphaVantagePairs.includes(`USD/${baseCurrency}`)) {
        // Try inverse
        const usdToBase = await fetchCurrencyData("USD", baseCurrency)
        // Invert the rates
        baseToUsd = usdToBase.map((item) => ({
          date: item.date,
          value: 1 / item.value,
        }))
      } else {
        // Use mock data for base/USD
        baseToUsd = generateMockCurrencyData(baseCurrency, "USD")
      }

      // Check if USD/quote is directly supported
      if (supportedAlphaVantagePairs.includes(`USD/${quoteCurrency}`)) {
        try {
          usdToQuote = await fetchCurrencyData("USD", quoteCurrency)
        } catch (error) {
          console.error(`Error fetching USD/${quoteCurrency} for cross-rate:`, error)
          // If direct fetch fails, try inverse
          if (supportedAlphaVantagePairs.includes(`${quoteCurrency}/USD`)) {
            const quoteToUsd = await fetchCurrencyData(quoteCurrency, "USD")
            // Invert the rates
            usdToQuote = quoteToUsd.map((item) => ({
              date: item.date,
              value: 1 / item.value,
            }))
          }
        }
      } else if (supportedAlphaVantagePairs.includes(`${quoteCurrency}/USD`)) {
        // Try inverse
        const quoteToUsd = await fetchCurrencyData(quoteCurrency, "USD")
        // Invert the rates
        usdToQuote = quoteToUsd.map((item) => ({
          date: item.date,
          value: 1 / item.value,
        }))
      } else {
        // Use mock data for USD/quote
        usdToQuote = generateMockCurrencyData("USD", quoteCurrency)
      }

      if (baseToUsd.length > 0 && usdToQuote.length > 0) {
        // Create a map of dates for quick lookup
        const usdToQuoteMap = new Map()
        usdToQuote.forEach((item) => {
          usdToQuoteMap.set(item.date.toISOString().split("T")[0], item.value)
        })

        // Calculate cross rates
        const crossRates: CurrencyDataPoint[] = []

        for (const item of baseToUsd) {
          const dateStr = item.date.toISOString().split("T")[0]
          const usdQuoteRate = usdToQuoteMap.get(dateStr)

          if (usdQuoteRate) {
            // base/quote = base/USD * USD/quote
            crossRates.push({
              date: new Date(item.date),
              value: item.value * usdQuoteRate,
            })
          }
        }

        if (crossRates.length > 0) {
          console.log(`Successfully calculated cross-rates for ${pairId}, got ${crossRates.length} data points`)

          // Update cache
          cache.currencyRates.data[pairId] = crossRates
          cache.currencyRates.timestamp[pairId] = Date.now()

          return crossRates
        } else {
          console.error(`Failed to calculate cross-rates for ${pairId}: no matching dates`)
        }
      } else {
        console.error(`Failed to calculate cross-rates for ${pairId}: missing base/USD or USD/quote data`)
      }
    } catch (error) {
      console.error(`Error calculating cross rate for ${pairId}:`, error)
    }
  }
  */

  // If we reach here, we need to use mock data
  console.log(`Using mock data for ${pairId}`)

  // If we have cached data, return it even if expired
  if (cache.currencyRates.data[pairId]) {
    return cache.currencyRates.data[pairId]
  }

  // Fallback to generated mock data
  const mockDataFallback = generateMockCurrencyData(baseCurrency, quoteCurrency)

  // Update cache with mock data
  cache.currencyRates.data[pairId] = mockDataFallback
  cache.currencyRates.timestamp[pairId] = Date.now()

  return mockDataFallback
}

// Generate realistic Baltic Dry Index data
function generateMockBalticDryIndexData(): BalticDryIndexDataPoint[] {
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

  // Update cache
  cache.balticDryIndex.data = data
  cache.balticDryIndex.timestamp = Date.now()

  return data
}

// Generate mock currency data as fallback
function generateMockCurrencyData(baseCurrency: string, quoteCurrency: string): CurrencyDataPoint[] {
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
