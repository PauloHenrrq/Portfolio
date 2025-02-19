/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        furto: "url('src/assets/Projeto-Furto.jpeg')"
      },
      keyframes: {
        shadowPulse: {
          '0%': { boxShadow: 'inset 0 0 5px 2px #9233eaab' },
          '50%': { boxShadow: 'inset 0 0 1px 0.5px #1e1b4b' },
          '100%': { boxShadow: 'inset 0 0 5px 2px #9233eaab' }
        },
        img: {
          '0%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(3px)' }
        },
        upDown: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        shadowPulse: 'shadowPulse 2s infinite ease-in-out',
        img: 'img 1s infinite ease-in-out alternate',
        upDown: 'upDown 0.7s infinite ease-in-out alternate'
      }
    }
  },
  plugins: []
}
