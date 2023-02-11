/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'white': 'hsl(0, 0%, 100%)',
      'purple-from': 'hsla(259, 100%, 51%, 1)',
      'purple-to': 'hsla(292, 63%, 53%, 0.94)',
      'neutral-blur-purple': ' hsla(214, 33%, 17%, 1)',
      'primary-soft-red':  'hsl(10, 79%, 65%)',
      'primary-cyan': 'hsl(186, 34%, 60%)',
      'primary-dark-purple': 'hsl(213,34%,11%)',
      'neutral-light-purple': 'hsl(285,61%,50%)',
      'neutral-dark-brown': 'hsl(25, 47%, 15%)',
      'neutral-medium-brown': 'hsl(28, 10%, 53%)',
      'neutral-cream': 'hsl(27, 66%, 92%)',
      'neutral-pale-orange': 'hsl(33, 100%, 98%)'
    },
    fontFamily: {
      sans: ["DM Sans"],
      satoshi: ["Satoshi", "sans-seriff"],
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}



// https://docs.google.com/document/d/1isMTWueQHa6e5sehO5AAls_CbOLC_C8Dno9kmiSdL9o/edit

// - Weights: 400, 700