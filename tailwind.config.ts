import type { Config } from 'tailwindcss';

const px0_10 = {
  ...Array.from(Array(11), (_, i) => `${i}px`),
};
const px0_100 = {
  ...Array.from(Array(101), (_, i) => `${i}px`),
};
const px0_200 = {
  ...Array.from(Array(201), (_, i) => `${i}px`),
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};
export default config;
