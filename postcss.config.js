module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [],
      path: ['./node_modules'],
    }),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
