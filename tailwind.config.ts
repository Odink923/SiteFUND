import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      plugins: [require("daisyui")],
      fontSize: {
        '100px': '100px',
        'base': '0.625rem',
        'smBase':'0.8125rem',
        'mdBase':'0.8125rem',
        'xl': '1.5rem',
        'smXl':'2.5rem',
        'mdXl':'3.125rem',
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'sans-serif'],
        assistant: ['"Assistant"', 'sans-serif'],
      },
      spacing: {
        '10': '0.625rem',
        '15': '0.9375rem',
        '20': '1.25rem',
        '30': '1.875rem',
      },
   
      
    },
  },
  plugins: [],
};
export default config;
