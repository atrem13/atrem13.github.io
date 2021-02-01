module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'mydarkblue': '#437FC7',
        'myblue': '#6DAFFE',
        'mylightblue': '#EDF6FF',
        'whatsapp': '#25D366',
        'facebook': '#1877F2',
        'telegram': '#26A5E4',
        'instagram': '#E4405F',
        'github': '#181717',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/assets/images/hero.svg')",
        'hero-pattern2': "url('/assets/images/hero2.svg')",
        'skill-experience-pattern': "url('/assets/images/skill & experience bg.svg')",
        'skill-experience-pattern2': "url('/assets/images/skill & experience bg2.svg')",
        'blog-pattern': "url('/assets/images/blog.svg')",
        'footer-pattern': "url('/assets/images/footer.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
