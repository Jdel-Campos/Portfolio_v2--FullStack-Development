import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': {'min': '350px', 'max': '639px'},

      'tablet': {'min': '640px', 'max': '899px'},

      'desktop': {'min': '900px', 'max': '1439px'},

    },
    extend: {
      colors: {
        'brand-primary': 'rgb(42 41 40)',
        'brand-secondary': 'rgb(17 87 17)',
        'brand-accent': 'rgb(144 238 144)',
        'brand-background': 'rgb(255 255 255)',
        'brand-text': 'rgb(64 63 62)',

        'accent-color-mint-green-100': 'rgb(222 251 221)',

        'text-color-masala-50': 'rgb(246 245 245)',
        'text-color-masala-400': 'rgb(139 135 133)',
        'text-color-masala-500': 'rgb(112 108 106)',
        'text-color-masala-900': 'rgb(64 63 62)',

        'neutral-color-silver-chalice-50': 'rgb(247 247 247)',
        'neutral-color-silver-chalice-100': 'rgb(237 237 236)',
        'neutral-color-silver-chalice-400': 'rgb(176 175 174)',
        'neutral-color-silver-chalice-500': 'rgb(154 153 151)',
        'neutral-color-silver-chalice-600': 'rgb(137 136 135)',
        'neutral-color-silver-chalice-900': 'rgb(85 84 83)',

        'semantics-attachment-thunderbird': 'rgb(199 23 0)',

        'semantics-success-green-house': 'rgb(59 137 2)',
      },

      spacing: {
        '900px': '900px',
        '766px': '766px',
        '620px': '620px',
        '450px': '450px',
        '400px': '400px',
        '380px': '380px',
        '350px': '350px',
        '300px': '300px',
        '280px': '280px',
        '250px': '250px',
        '244px': '244px',
        '229px': '229px',
        '163px': '163px',
        '150px': '150px',
        '120px': '120px',
        '100px': '100px',
        '50px': '50px',
        '30px': '30px',
        '11px': '11px',
        '-16px': '-16px',
        '-1px': '-1px',
      },

      fontSize: {
        '1.25rem': '1.25rem',
        '0.875rem': '0.875rem',
        '0.625rem': '0.625rem',
      },

    },
  },
  plugins: [],
}
export default config
