module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
