module.exports = {
  darkMode: 'media', // or 'media' or 'class
  options: {
    safelist: [
      'bg-primary-200',
      'bg-info-200',
      'bg-secondary-200',
      "bg-gray-500",
      "pointer-events-none",
      "fixed",
      "inset-0",
      "opacity-75",
      "transition-opacity"
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
      },
      colors: {
        "cookie-100": "#EAE0D8",
        "cookie-400": "#D7D0CE",
        primary: "#3764EA",
        "primary-100": "#3764EA0D",
        "primary-200": "rgba(55, 100, 234, 0.10)",
        "primary-400": "rgba(55, 100, 234, 0.25)",
        secondary: "#E62D4A",
        "secondary-200": "rgba(230, 45, 74, 0.1)",
        title: "#FFFFFF",
        description: "#969696", // "#909496",

        info: "#5454D4",
        "info-200": "#FEDC5A1A",
        warning: "#FEDC5A",
        "warning-200": "rgba(254, 220, 90, 0.1)",
      },
      outlineWidth: {
        6: '6px',
      },
      width: {
        '112': '28rem',
        '200': '50rem',
      },
      height: {
        '112': '28rem',
      },
      spacing: {
        '30': '7.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
