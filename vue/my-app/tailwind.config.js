// usefull link that helped me install tailwind with my vue 3 app:
// https://javascript.plainenglish.io/how-to-setup-tailwind-css-in-vue-3-405c889842d9
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
