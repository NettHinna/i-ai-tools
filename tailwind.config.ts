import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626", // Base red
          700: "#B91C1C", // Improved contrast for text
          800: "#991B1B", // Improved contrast for hover states
          900: "#7F1D1D",
          950: "#450A0A",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B", // Base dark blue
          900: "#0F172A", // Darker for better contrast
          950: "#020617",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151", // Improved for body text
          800: "#1F2937",
          900: "#111827", // Improved for headings
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "128": "32rem",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#374151",
            lineHeight: "1.6",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              fontWeight: "300",
            },
            a: {
              color: "#DC2626",
              "&:hover": {
                color: "#B91C1C",
              },
            },
            h1: {
              fontWeight: "600",
              lineHeight: "1.2",
              marginTop: "0",
              marginBottom: "0.8em",
            },
            h2: {
              fontWeight: "600",
              lineHeight: "1.2",
              marginTop: "1.6em",
              marginBottom: "0.8em",
            },
            h3: {
              fontWeight: "600",
              lineHeight: "1.3",
              marginTop: "1.5em",
              marginBottom: "0.7em",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
