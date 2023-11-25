import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: { "max-height": "max-height" },
      fontFamily: { roboto: ["Roboto Mono", "monospace"] },
      animation: {
        "slide-out": "slide-out 0.75s ease forwards",
        "fade-in": "fade-in 2s ease forwards",
        "fade-in-slide": "fade-in-slide 0.75s ease forwards",
        "slidey-boy": "slidey-boy 0.75s ease forwards",
      },
      keyframes: {
        "slide-out": {
          "0%": { opacity: "1", transform: "translateY(-28px)" },
          "50%": { opacity: "1", transform: "translateY(-28px)" },
          "100%": { opacity: "0", transform: "translateY(28px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-slide": {
          "0%": { opacity: "0", transform: "translateY(-28px)" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slidey-boy": {
          "0%": { transform: "translateY(-28px)" },
          "50%": { transform: "translateY(-28px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
