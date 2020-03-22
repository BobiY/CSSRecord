const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(CleanWebpackPlugin)

const projectRoot = process.cwd();
module.exports = {
  entry: path.join(projectRoot, '/src/index.js'),
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { // 解析 js/jsx
        test: /\.jsx?/,
        loader: 'babel-loader',
      },
      { // 解析 css
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader, // 单独提取 css
          'css-loader',
          'less-loader',
          { // px 转 rem 相关
            loader: 'px2rem-loader',
            options: {
              remUit: 75, //  75px = 1rem 设计图的 1/10
              remPrecision: 8, // rem小数点后位数
            },
          },
          { // 添加 css 浏览器前缀
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                require('autoprefixer')({
                  browsers: ['last 2 vesion', '?1%', 'iOS'],
                });
              },
            },
          },
        ],
      },
      { // 解析 图片
        test: /\.(png|svg|gif|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      { // 解析 字体
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), // 单独提取 css 文件
    new FriendlyErrorsWebpackPlugin(), // 命令行信息显示优化
    // function errorCatch() { // 打包错误捕获
    //   this.hooks.done.tap('done', (stats) => {
    //     if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
    //     //   console.log('build error', stats.compilation.errors.length); // eslint-disabled-line
    //       process.exit(1);
    //     }
    //   });
    // },
    new HtmlWebpackPlugin({
        template: path.join(projectRoot, '/index.html'),
        // filename: 'index.html',
        // chunks: ['search'],
        inject: true,
        minify: {
            html5: true,
            collapseWhitespace: true,  // 去掉空格
            preservwLineBreak: false,  // 去掉换行
            minifyCss: true,
            minifyJS: true,
            removeComments: false // 移除注释
        }
    })
  ],
  stats: 'errors-only',
};
