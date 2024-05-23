/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.jsx',
    './src/pages/**/*.tsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["-apple-system", "BlinkMacSystemFont", "PingFang-Regular", ...defaultTheme.fontFamily.sans]
      },
      'colors': {
        'base-blue': '#002563',
        'base-grey': '#697883',
        'light-blue': '#718EB0',
        'base-black': '#061237',
        'light-grey': '	#FAFBFC',
        'light-green': '#F6FBFA',
        'des-blue': '#2C4673'
      },
      backgroundImage: {
        'headImg': "url('@/assets/img/headImg.png')",
        'worldImg': "url('@/assets/img/worldImg.svg')",
        'GitHubBackground1': "url('@/assets/img/GitHubBackground1.png')",
        'GitHubBackground2': "url('@/assets/img/GitHubBackground2.png')",
        'leaderboardsBg1': "url('@/assets/img/leaderboardsBg1.png')",
        'leaderboardsBg2': "url('@/assets/img/leaderboardsBg2.png')",
      },
      spacing: {
        '19': "4.75rem",
        '22': "5.5rem",
        '33': "8.25em",
        '74': "18.5rem",
        '101': "25.25rem",
        '108': "27rem",
        '128': "32rem",
        '144': "36rem",
        '168': "42rem",
        '191': "47.75rem",
        '210': "52.5rem",
        '225': "56.25rem",
        '233': "58.25rem",
        '175': "43.75rem",
        '208': '52rem',
        '240': "60rem",
        '255': "63.75rem",
        '320': "80rem",
        '360': "90rem"
      },
      lineHeight: {
        '14': '3.5rem',
        '18': '4.5rem'
      },
      fontSize: {
        '5sm': '2.5rem'
      }
    },
  },
  plugins: [],
}

