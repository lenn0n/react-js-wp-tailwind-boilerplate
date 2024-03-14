/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/*.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    screens: {
      "mobile-s": "320px",
      "mobile-m": "375px",
      ...defaultTheme.screens,
      '3xl': '1600px',
    },
    extend: {
      keyframes: {
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // },
        wiggle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      colors: {
        primary: "#E5142A",
        secondary: "#707070",
        black: "#292929",
        body: "#FBFBFB",
        white: "#FFF",
        "sub-primary": "#EB6448"
      },
      boxShadow: {
        "shadow-lg": "0px 0px 40px 15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        // "blur-blue": "url('../../landing/images/background/blur-radial.svg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        "poppins-bold": ["PoppinsBold"],
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [
		require("tailwindcss"), 
    require('flowbite/plugin'),
		// require("autoprefixer")
	],
};
