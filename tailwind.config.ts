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
        'primary': {
          DEFAULT: '#191924',
          'border': '#382c5e',
          'transparency': '#382c5e40'
        },
        'secondary': {
          DEFAULT: '#151e4b',
        },
        'background': {
          DEFAULT: '#05091d',
        },
      }
    },
  },
  plugins: [
    
  ],
}

export default config

// https://coolors.co/151e4b-382c5e-191924-05091d