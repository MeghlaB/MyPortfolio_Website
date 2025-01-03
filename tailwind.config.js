/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-border': 'gradient-border 3s linear infinite',
      },
      keyframes: {
        'gradient-border': {
          '0%': { borderColor: 'rgba(99, 102, 241, 1)' },  
          '50%': { borderColor: 'rgba(99, 102, 241, 0.75)' }, 
          '100%': { borderColor: 'rgba(99, 102, 241, 0.5)' },
        },
       
      },
      colors: {
        btnprimary: '#987DF8',
        hoverprimary:'#7731D8',
        fontfamily: "Cinzel"
      },

    },
  },
  plugins: [require('daisyui'),],
}

