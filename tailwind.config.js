/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        delice: {
          red: '#de2b2b',
          'red-dark': '#b71d1d',
          wine: '#7c2627',
          'wine-dark': '#551718',
          cream: '#f8efdc',
          'cream-light': '#fdfaf2',
          peach: '#f5dbca',
          olive: '#91964f',
          forest: '#273e2a',
          'forest-dark': '#1a2b1c',
          cyan: '#75c2bd',
          orange: '#e58833',
          dark: '#131110',
          charcoal: '#211e1c',
          muted: '#80756b'
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Miller Banner', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'delice': '0 20px 40px -15px rgba(124, 38, 39, 0.15)',
        'glow': '0 0 35px rgba(222, 43, 43, 0.35)',
      }
    },
  },
  plugins: [],
}

