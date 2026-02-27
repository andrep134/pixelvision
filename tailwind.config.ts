import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D61C1C",
          hover: "#FF2E2E",
          background: "#0B0B0D",
          surface: "#141418",
          muted: "#9CA3AF",
          text: "#F9FAFB"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(214, 28, 28, 0.35)",
        card: "0 15px 60px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        vignette:
          "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)"
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
