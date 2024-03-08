/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "text" : 'var(--text)',
        "elements" : 'var(--elements)',
        "background" : 'var(--background)',
        "white" : 'var(--text)',
      },
      boxShadow:{ 
        "element": "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
      }
    },
  },
  plugins: [],
}

