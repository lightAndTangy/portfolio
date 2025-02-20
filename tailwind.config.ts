import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg": "#F6F3EE"
      },
      colors: {
        "blue": "#7785C2",
        "orange": "#E6BA83",
        "text-normal": "#3A3A3A"
      },
      fontFamily: {
        anek: ["Anek", "sans-serif"],
        aileron: ["Aileron", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
