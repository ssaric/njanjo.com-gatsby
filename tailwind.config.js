module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#89c4ff',  // primary10
          '200': '#148ef5',  // primary20
          '300': '#148ef5',  // primary30
          '400': '#002c6c',  // primary40
        },
        secondary: {
          '500': '#C6755F',  // secondary50
        },
        neutral: {
          '50': '#E9EBF0',   // neutral5
          '100': '#C5C7CB',  // neutral10
          '200': '#A0A2A6',  // neutral20
          '300': '#7C7E81',  // neutral30
          '400': '#5F6163',  // neutral40
          '500': '#424445',  // neutral50
          '600': '#242627',  // neutral60
          '700': '#070909',  // neutral70
        },
      },
      fontSize: {
        'h1': '96px',
        'h2': '72px',
        'h3': '48px',
        'h4': '34px',
        'h5': '24px',
        'h6': '20px',
        'subtitle1': '16px',
        'subtitle2': '14px',
        'body1': '16px',
        'body2': '14px',
        'button': '14px',
        'caption': '12px',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.02, 0.01, 0.47, 1)',
      },
    },
  },
  plugins: [],
}