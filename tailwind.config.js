/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      yes: {
        backgroundColor: '#4fa954',
        color: '#ffffff',
        borderRadius: '0.25rem',
        padding: '0 0.5rem',
        textAlign: 'center',
      },
      no: {
        backgroundColor: '#6b6b6b',
        color: '#ffffff',
        borderRadius: '0.25rem',
        padding: '0 0.5rem',
        textAlign: 'center'
 
      },
      active : {
        color:' #4788ba'
    },
    navText : {
      color:' #808689'
  },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  plugins: [],
};