/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
