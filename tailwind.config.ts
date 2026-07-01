import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,md,mdx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0c",
          elevated: "#121216",
          card: "#0f0f13",
        },
        border: {
          DEFAULT: "#232329",
          subtle: "#1a1a1f",
        },
        ink: {
          DEFAULT: "#e8e8ec",
          muted: "#9a9aa5",
          faint: "#5c5c66",
        },
        accent: {
          blue: "#5b8cff",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(115deg, #5b8cff 0%, #8b5cf6 100%)",
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(91,140,255,0.10), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.15), 0 8px 30px -8px rgba(91,140,255,0.35)",
        "glow-sm": "0 0 0 1px rgba(139,92,246,0.12), 0 4px 16px -6px rgba(91,140,255,0.25)",
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
