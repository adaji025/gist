module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: '#FF9A5F',
        dark: '#1A1A26',
        greyInput: '#DBBFB3',
        grey: '#F0F1EE'
      },
      fontFamily:{
        mangueira: ["Manqueira", "sans-serif"]
      },
      screens: {
        xl3: '1700px'
      }
    },
  },
  plugins: [],
}
