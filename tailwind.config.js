/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      'yellow': {
        100: '#FFE6AE',
        200: '#F0A500',
      },
      'blue': {
        'placeholder': '#33475690',
        100: '#334756',
        200: '#293241',
      },
      'error': '#FF0000',
    },
    borderWidth: {
      default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        'cursor': '25px'
    },
    fontFamily: {
      sans: ['Ubuntu Mono', 'sans-serif']
    },
    extend: {
      dropShadow: {
        'dark': '0 3px 2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

