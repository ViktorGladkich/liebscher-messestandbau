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
        primary: '#0A0A0A', // Очень темный, почти черный
        secondary: '#1A1A1A', // Темно-серый для акцентов фона
        accent: '#4A90E2', // Яркий синий для акцентов, CTA
        'accent-hover': '#357ABD', // Синий для ховера
        lightText: '#E0E0E0', // Светло-серый текст
        mediumText: '#A0A0A0', // Средне-серый текст
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Используем Inter как основной
      },
      // Здесь можно будет добавить кастомные анимации для Tailwind, если понадобится
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;