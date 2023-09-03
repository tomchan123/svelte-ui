/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        '8/10': '80%',
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

