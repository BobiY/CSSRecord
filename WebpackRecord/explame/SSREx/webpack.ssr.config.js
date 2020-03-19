const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'server-index.js'
    },
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            // chunks: ['search'],
            inject: true,
        })
    ],
        externals: { // 引用全局的库时，在这里加入引用
            react: "React",
            ["react-dom"]: "ReactDOM"
        }
}