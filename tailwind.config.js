/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./arabic_landing_page_special_3_store.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tajawal', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
