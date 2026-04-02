import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0b",
          accent: "#ea580c",
          surface: "#18181b",
          border: "#27272a",
        },
        text: {
          main: "#f4f4f5",
          muted: "#a1a1aa",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'grid-white': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
} satisfies Config;
