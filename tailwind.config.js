/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: 'var(--green-950)',
          900: 'var(--green-900)',
          800: 'var(--green-800)',
          700: 'var(--green-700)',
          600: 'var(--green-600)',
          100: 'var(--green-100)',
        },
        gold: {
          500: 'var(--gold-500)',
          400: 'var(--gold-400)',
          200: 'var(--gold-200)',
        },
        surface: 'var(--surface)',
        textDark: 'var(--text-dark)',
        textMuted: 'var(--text-muted)',
        borderBase: 'var(--border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        gold: 'var(--shadow-gold)',
      },
    },
  },
  plugins: [],
}
