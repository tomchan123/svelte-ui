/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      width: {
        '8/10': '80%',
      },
      colors: {
        'cf-orange': '#febf44',
        'cf-beige': '#f4f4ec',
        'cf-black': '#0c1115',
        'cf-red': '#e84545',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-span-[0-9]+/
    },
    {
      pattern: /row-span-[0-9]+/
    }
  ]
}

