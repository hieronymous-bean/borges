module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito Sans','sans-serif'],
        },
        colors: {
          primary: '#5046bb',
          secondary: '#af8ff3',
          tertiary: '#fa896b',
          dark: '#222436',
          lightblue: '#f6faff',
          lightgrey: '#f7f7f7',
          mediumgrey: '#e2e3e5'
        }
      },
    },
    plugins: [],
  };
   