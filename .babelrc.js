module.exports = {
  presets: [["next/babel"]],
  plugins: [
    ["styled-components", { ssr: true }],
    ["babel-plugin-twin", { debug: false }],
    "babel-plugin-macros",
  ],
};
