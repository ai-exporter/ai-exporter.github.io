import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        canvas: "#ffffff",
        ink: "#111111",
        body: "#374151",
        muted: "#6b7280",
        hairline: "#e5e7eb",
        "hairline-soft": "#f3f4f6",
        surface: "#f5f5f5",
        "surface-soft": "#f8f9fa",
        mint: "#eaf8f2",
        "mint-strong": "#d7f0e5",
        aqua: "#e7f4f9",
        forest: "#0c3b2e",
        "forest-hover": "#0f4a39",
        emerald: "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-cal)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderColor: {
        DEFAULT: "#e5e7eb",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
