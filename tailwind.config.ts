import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { roboto: ["Roboto Mono", "monospace"] },
      animation: {
        "slide-down-0": "slide-down-0 0.5s ease",
        "slide-down-1": "slide-down-1 0.5s ease",
        "slide-out": "slide-out 0.5s ease forwards",
      },
      keyframes: {
        "slide-down-0": {
          "0%": { opacity: "0", transform: "translateY(-32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down-1": {
          "0%": { transform: "translateY(-32px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { opacity: "1", transform: "translateY(-32px)" },
          "100%": { opacity: "0", transform: "translateY(32px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
