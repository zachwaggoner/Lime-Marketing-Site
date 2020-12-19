module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      'sans': 'ui-sans-serif system-ui',
      'serif': 'ui-serif Georgia',
      'mono': 'ui-monospace SFMono-Regular',
      'display': 'Poppins',
      'body': 'IBM Plex Sans',
     },
    textColor: theme => theme('colors'),
     textColor: {
       'primary': '#00dd00',
       'secondary': '#000000',
       'danger': '#cc0000',
       'white': '#ffffff',
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00dd00',
      'secondary': '#000000',
      'danger': '#cc0000',
     }),
    extend: {
      colors: {
        change: "transparent",
      },
    },
  },
  variants: {},
  plugins: [],
};
