import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-content': '#ffffff',
        secondary: '#6d28d9',
        accent: '#111827',
        neutral: '#020617',
        'neutral-content': '#64748b',
        'base-100': '#ffffff',
        'base-200': '#f8fafc',
        'base-300': '#e2e8f0',
        'base-content': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -28px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [typography],
};
