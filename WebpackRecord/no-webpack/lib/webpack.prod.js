const webpackMerge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production', // 压缩 js
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({ // 压缩 css
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
  ],
  optimization: { // 抽离公共包
    splitChunks: {
      minSize: 0, // 分离包体积的最小体积
      cacheGroups: {
        commons: {
          test: /(react|react-dom)/,
          name: 'common',
          chunks: 'all',
          minChunks: 2, // 设置最小引用次数为2

        },
      },
    },
  },
};
module.exports = webpackMerge(baseConfig, prodConfig);
