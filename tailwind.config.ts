import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cerise-red': {
          '50': '#fef1f8',
          '100': '#ffe4f2',
          '200': '#ffcae7',
          '300': '#ff9ed2',
          '400': '#ff62b1',
          '500': '#ff3492',
          '600': '#ea0e68',
          '700': '#d20453',
          '800': '#ad0744',
          '900': '#900b3b',
          '950': '#59001f',
        },      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
