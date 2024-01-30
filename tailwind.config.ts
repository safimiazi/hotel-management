const { fontFamily } = require('tailwindcss/defaultTheme');
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#f2C641',
        tertiary: {
          dark: '#F27405',
          light: '#F2C641'
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
