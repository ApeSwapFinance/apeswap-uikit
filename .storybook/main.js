module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "themeprovider-storybook/register",
  ],
  webpackFinal: async (config, options) => {
    const path = require("path")

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../src'),
      use: ['style-loader', 'css-loader?modules=true'],
    })

    return config;
  },
};
