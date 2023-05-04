/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      backgroundImage : {
        "fotter" : 'url("./src/assets/Footer.svg")',
        "role" : 'url("./src/assets/NewRole.svg")'
      },
      colors : {
        'uno' : '#F9A8D4',
        'dos' : '#F472B6'
      }
    },
  },
  variants: {},
  plugins: [],
};
