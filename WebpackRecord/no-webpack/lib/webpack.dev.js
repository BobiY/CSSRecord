const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  devServer: {
    contentBase: baseConfig.output.path,
    hot: true,
    open: true,
  },
  devTool: 'source-map',
  mode: 'development',
};
module.exports = webpackMerge(baseConfig, devConfig);
