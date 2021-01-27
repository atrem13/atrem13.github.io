module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'mydarkblue': '#437FC7',
        'myblue': '#6DAFFE',
        'mylightblue': '#EDF6FF'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/assets/images/hero.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
