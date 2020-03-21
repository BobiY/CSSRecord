const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    context: process.cwd(),
    mode: 'production',
    resolve: {
        extensions: ['.js','.jsx', '.json','.less','.css'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        library: [
            'react',
            'react-dom',
            // 'redux',
            // 'react-redux'
        ]
    },
    output: {
        filename: '[name]_[hash:8].dll.js',
        path: path.resolve(__dirname, './build/library'),
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]',
            path: './build/library/[name].json'
        })
    ]
}