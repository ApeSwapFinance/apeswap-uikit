module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
};
