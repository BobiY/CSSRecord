const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'force.js',
        path: path.resolve(__dirname, './dist'),
        library: 'Force',
        libraryTarget: 'umd',
        // 默认导出入口文件的默认导出
        libraryExport: "default"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}