// .storybook/webpack.config.js
const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.HotModuleReplacementPlugin()], // <---
  // this is the problem, but why?
  // in fact, HotModuleReplacementPlugin is not the only one that seems to bug
};
