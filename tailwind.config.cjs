/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    colors: {
      'whitex': 'hsl(0, 0%, 100%)',
      'primary-soft-red':  'hsl(10, 79%, 65%)',
      'primary-cyan': 'hsl(186, 34%, 60%)',
      'neutral-dark-brown': 'hsl(25, 47%, 15%)',
      'neutral-medium-brown': 'hsl(28, 10%, 53%)',
      'neutral-cream': 'hsl(27, 66%, 92%)',
      'neutral-pale-orange': 'hsl(33, 100%, 98%)'
    },
    fontFamily: {
      sans: ["DM Sans"]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}


// - Font size: 18px


// - Weights: 400, 700