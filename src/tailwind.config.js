/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-poster': 'linear-gradient(135deg, #e6f2ff 0%, #f0f9ff 100%)',
        },
        boxShadow: {
          'poster': '0 30px 60px rgba(0,0,0,0.12), 0 15px 30px rgba(0,0,0,0.08)',
          'poster-hover': '0 40px 80px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.1)',
        },
      },
    },
    plugins: [],
  }