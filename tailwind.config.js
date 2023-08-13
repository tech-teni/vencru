/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
    'primary':{
        100: '#D6BBFB',
        200 : '#7F56D9',
        300: '#F9F5FF'
      },
    'background': '#F9FAFB',
    'white': '#ffffff',
    'black': '#101828',
    'shadow': '#EAECF0',
    'grey': '#667085',
    'borderColor': '#D0D5DD',
    'navcolor': '#344054',
'notificationColor': '#F2F4F7',

    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },




    
        extend: {},
  },
  plugins: [],
}



