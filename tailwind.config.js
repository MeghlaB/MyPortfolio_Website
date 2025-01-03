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
          '0%':{borderColor:'#1E1E36'},
          '50%': { borderColor: '#1F1F38' }, 
          '100%': { borderColor: '#7731D8' },
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

