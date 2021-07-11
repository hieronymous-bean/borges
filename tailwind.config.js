module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito Sans','sans-serif'],
        },
        colors: {
          one: "#4038FF",
          two: "#261EE4",
          three: "#2F2FF4",
          four: "#5252FF",
          five: "#6C6CFF",
          white: "#ffffff",
          greyone: "#F2F5F9",
          greytwo: "#E8EDF6",
          greythree: "#E8EDF6",
          greyfour: "#A7AEB7",
          black: "#000000",
          darkone: "#121519",
          darktwo: "#1F252E"
        }
      },
    },
    plugins: [],
  };
   