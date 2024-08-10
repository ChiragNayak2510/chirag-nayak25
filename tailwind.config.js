/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        otterco: ['Otterco', 'sans-serif'], // Add the Otterco font here
      },
      letterSpacing: {
        wider: '0.1em', // Add custom letter spacing
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '16ch' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(16) 1s forwards, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}
