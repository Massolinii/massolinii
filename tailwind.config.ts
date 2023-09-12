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
          'border': '#382c5e',
          DEFAULT: '#191924'
        },
        'skills': {
          'bg': '#171721',
          DEFAULT: '#5f4e66'
        },
        'space': {
          DEFAULT: '#151e4b',
        },
        'background': {
          DEFAULT: '#05091d',
        },
      }
    },
  },
  plugins: [],
}

export default config
