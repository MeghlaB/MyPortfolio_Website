/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-border': 'gradient-border 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-border': {
          '0%': {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(80deg, #1E1E36, #7731D8) 1',
            boxShadow: '0 0 15px rgba(119, 49, 216, 0.5)',
          },
          '25%': {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(80deg, #1F1F38, #7731D8) 1',
         
          },
          '50%': {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(80deg, #7731D8, #1F1F38) 1',
           
          },
          '75%': {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(80deg, #1F1F38, #1E1E36) 1',
           
          },
          '100%': {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(80deg, #1E1E36, #7731D8) 1',
      
          },
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

