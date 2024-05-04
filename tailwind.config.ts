import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7341FF',
        secondary: '#0FDE8D',
        tertiary: '#FF9C28',
        dark: '#1F1E2F',
      },
    },
  },
  plugins: [],
};
export default config;
