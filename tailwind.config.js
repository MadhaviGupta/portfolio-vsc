/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#ffffff", // white
        mainText: "#F8FAE5", // lightertext
        subText: "#B19470", // darkertext
        bgPrimary: "#000000", //darkerbg
        bgSecondary: "#16161c", //lighterbg
      },
    },
  },
  plugins: [],
};
