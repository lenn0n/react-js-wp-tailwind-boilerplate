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
        dropdown: 'url("data:image/svg+xml,%3csvg aria-hidden=%27true%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 10 6%27%3e %3cpath stroke=%27%236B7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m1 1 4 4 4-4%27/%3e %3c/svg%3e")'
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
