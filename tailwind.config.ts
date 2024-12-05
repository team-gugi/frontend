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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
      },
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

      colors: {
        MainColor: '#2AA971',
        BlockColor: '#EDEAE3',
        SemiBlack: '#242424',
        Gray: '#A2A2A2',
        DarkGray: '#707070',
        LightGray: '#DDDDDD',
        SemiWhite: '#F3F3F3',
        White: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
