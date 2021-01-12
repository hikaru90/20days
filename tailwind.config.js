var space = 24

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelistPatterns: [
        /text-green/,
        /text-darkOffwhite/,
        /w-1\/3/,
        /w-1\/4/,
      ],
      //whitelistPatternsChildren: [/^swiper/]
    }
  },
  theme: {
    extend:{
      colors:{
        'offwhite': '#f8f8f8',
        'light-blue': '#D4E9F4',
        'green': '#27FFA7',
        'black': '#333333',
      },
    },
    fontFamily:{
      'heading': ['Bahnschrift', 'sans-serif'],
      'date': ['Yatra One', 'serif'],
    },
    spacing:{
      '0': '0',
      '1px': '1px',
      '01': space / 10 + 'px',
      '02': space / 5 + 'px',
      '03': space * 3 / 10 + 'px',
      '04': space * 2 / 5 + 'px',
      '05': space / 2 + 'px',
      '06': space * 3 / 5 + 'px',
      '07': space * 7 / 10 + 'px',
      '1': space + 'px',
      '1_3': space * 1.3 + 'px',
      '1_5': space * 1.5 + 'px',
      '2': space * 2 + 'px',
      '3': space * 3 + 'px',
      '4': space * 4 + 'px',
      '5': space * 5 + 'px',
      '6': space * 6 + 'px',
      '7': space * 7 + 'px',
      '8': space * 8 + 'px',
      '9': space * 9 + 'px',
      '10': space * 10 + 'px',
      '11': space * 11 + 'px',
      '12': space * 12 + 'px',
      '13': space * 13 + 'px',
      '14': space * 14 + 'px',
      '15': space * 15 + 'px',
      '16': space * 16 + 'px',
      '20': space * 20 + 'px',
      '24': space * 24 + 'px',
      '1/2': '50%',
      '1/3': '33.33%',
      '1/4': '25%',
      '1/5': '20%',
      '2/3': '66.67%',
    },
    screens:{
      'mobile': '370px',
      '500': '500px',
      'ipad': '768px',
      'laptop': '1024px',
      'desktop': '1366px',
      'print': {'raw': 'print'},
    }
  },
  variants: {},
  plugins: [],
}
