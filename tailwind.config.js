/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ruta para incluir todos los archivos en la carpeta src
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Define la nueva familia tipográfica
      },
    },
  },
  plugins: [],
}
