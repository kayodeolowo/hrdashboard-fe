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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "darkgray": "#1A1A1A",
        "dark": "#131313",
        "yellow": "#E25319",
        "white" : "#FFFFFF",
        "darkyellow" : "#281913" ,
        "gray": "#2F2F31",
        "graysecondary": "#A2A1A8"

      },
    },
  },
  plugins: [],
} satisfies Config;
