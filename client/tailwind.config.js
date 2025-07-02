/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      vertClair: "#44ADA8",
      vertFoncer: "#547981",
      blanc: "#ffffff",
      gris: "#e0e3e5",
      error: "rgb(185 28 28)",
      grisFonce: "#EFEFEF",
      bleu: "#4897d8",
      noir: "#00000000",
    },
     screens: {
      sup377: "377px",
      sup460: "460px",
      sup670: "670px",
      sup990: "990px",
      sup1600: "1600px",
      sup1400: "1400px",
      sup1300: "1300px",
      sup1256: "1256px",
    },
    extend: {

    },
  },
  plugins: [],
}

