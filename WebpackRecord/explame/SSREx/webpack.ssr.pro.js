const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'server-index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'production',
    // devtool: 'source-map',
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
    ]
}