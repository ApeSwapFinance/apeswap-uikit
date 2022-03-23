module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    "styled-components",
    [
      "@babel/plugin-transform-react-jsx",
      {
        throwIfNamespace: false, // defaults to true
        runtime: "automatic", // defaults to classic
        importSource: "theme-ui", // defaults to react
      },
    ],
  ],
};
