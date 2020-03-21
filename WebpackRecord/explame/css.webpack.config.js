const path = require("path");
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasureWebpackPlugin();
const BundleAnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = smp.wrap({
    entry: './src/index-react.jsx',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "css-ex-react.js"
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 3
                        }
                    },
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    stats: 'errors-only',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            manifest: require('./build/library/library.json')
        }),
        // new BundleAnalyzePlugin()
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            // chunks: ['css-']
        })
    ]
});