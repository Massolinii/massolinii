import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'violet': {
          'border': '#6752a6',
          DEFAULT: '#191429'
        },
        'space': {
          DEFAULT: '#151e4b',
        },
        'background': {
          DEFAULT: '#090E2C',
        },
      }
    },
  },
  plugins: [],
}

export default config
