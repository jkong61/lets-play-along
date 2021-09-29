module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '(screen-16)': 'calc(100vh - 6rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
