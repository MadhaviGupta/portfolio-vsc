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
        mainText: "#fa6c5f", // orange
        subtext: "#689775", // green
        bgPrimary: "#14161a", //darkerbg
        bgSecondary: "#22252c", //lighterbg
      },
    },
  },
  plugins: [],
};
