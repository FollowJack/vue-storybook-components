module.exports = {
  darkMode: 'media', // or 'media' or 'class
  options: {
    content: [
      './pages/**/*.{html,js,vue}',
      './components/**/*.{html,js,stories.js,vue}',
      './composables/**/*.{html,js,vue}',
      './layouts/**/*.{html,js,vue}',
    ],
  },
  theme: {
    fontFamily: {
      'jost': ['Jost'],
      'roboto': ['Roboto']
    },
    fontSize: {
      "copy-large": ["18px", "28px"],
      "copy-medium": ["16px", "24px"],
      "copy-small": ["14px", "24px"],
      "headline1": ["64px", "70px"],
      "headline2": ["56px", "62px"],
      "headline3": ["42px", "54px"],
    },
    extend: {
      screens: {
        'sm': '425px',
      },
      zIndex: {
        'backdrop': '1000',
        'modal': '1001',
        'tooltip': '1002',
      },
      colors: {
        // main
        primary: "#605DEC",
        "primary-hover": "#3D3ACE",
        "primary-active": "#23209F",
        secondary: "#E62D4A",
        'secondary-hover': "#F6F5FF",
        "secondary-active": "#F6F5FF",
        // font
        'font-warning': '#FFB82E',
        'font-error': '#F93232',
        'font-error-hover': '#F93232',
        'font-success': '#439F6E',
        'font-black': '#212121',
        'font-white': '#FFFFFF',
        'font-gray': '#8A8894',
        'font-light-gray': '#C9C8D3',
        'font-disabled': '#C5C0DB',
        // background
        'white': '#FFFFFF',
        'disabled': '#F4F3FE',
        // stroke
        'stroke-focused': '#F845FC',
        'stroke-gray': '#BDBCDB',
        // field
        'field-form': '#F7F7FD',
        'field-title': '#9D99AC',
        'field-description': '#AAAAAA',
        'field-stroke-hover': '#E8E6F8',
        'field-stroke-focused': '#605DEC',
        'field-text-disabled': '#A5A5A7',
        'field-stroke-validation': '#FFEAC1',
        'field-bg-validation': '#FFFBF4',
        'field-stroke-loading': '#E8E6F8',
        'field-bg-error': '#FFF5F5',
        'field-stroke-error': '#FFD8D8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
