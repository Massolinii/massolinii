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
        'lavender': {
          DEFAULT: '#eae1f5',
          'dark': '#d4c2eb'
        },
        'floral': {
          DEFAULT: '#a379c9',
          'dark': '#8850b9'
        },
        'violet': {
          DEFAULT: '#6752a6',
          'dark': '#191429'
        },
        'space': {
          DEFAULT: '#151e4b',
          'dark': '#0d1330'
        },
        'background': {
          DEFAULT: '#070A1E',
        },
      }
    },
  },
  plugins: [],
}

export default config
