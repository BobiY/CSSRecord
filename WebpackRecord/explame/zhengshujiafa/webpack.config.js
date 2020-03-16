const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: {
        largeNumber: './src/index.js',
        "largeNumber.min": './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "/dist"),
        library: 'largeNumber',
        libraryExport: 'add',  // 写 default 或者 具体导出的方法或者属性的名字
        libraryTarget: 'umd'
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({  // 设置单独对 min 版本进行压缩处理 TreserPlugin 遇到 ES6 代码不会报错
                include:/\.min\.js$/
            })
        ]
    }
}