// Runtime environment configuration
export const config = {
  // Site URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://derksen.vercel.app",

  // API endpoints
  apiEndpoint: `${process.env.NEXT_PUBLIC_SITE_URL || "https://derksen.vercel.app"}/api`,

  // Supabase
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  // Contact information
  contactEmail: "post@derksentrading.no",
  contactPhone: "+47 123 45 678",
  contactAddress: "Industriveien 123, 8013 Bodø, Norge",

  // Social media
  socialMedia: {
    facebook: "https://facebook.com/derksentrading",
    instagram: "https://instagram.com/derksentrading",
    linkedin: "https://linkedin.com/company/derksentrading",
  },

  // Business hours
  businessHours: {
    weekdays: "08:00 - 16:00",
    weekend: "Stengt / Closed",
  },
}
