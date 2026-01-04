import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(0, 0%, 0%)", // Black
        input: "hsl(0, 0%, 0%)", // Black
        ring: "hsl(0, 0%, 0%)", // Black
        background: "hsl(0, 0%, 78%)", // C7C9C9
        foreground: "hsl(0, 0%, 0%)", // Black
        primary: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        destructive: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)", // Black
        },
        card: {
          DEFAULT: "hsl(0, 0%, 41%)", // 6A6867
          foreground: "hsl(0, 0%, 100%)", // White
        },
        navBorder: "hsl(0, 0%, 0%)", // Black
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

