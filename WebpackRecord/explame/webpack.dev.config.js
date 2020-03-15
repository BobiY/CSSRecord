const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/file.jsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'file.js'
    },
    mode: 'development',
    module: {
        rules: [
            {test:/\.jsx$/, loader: 'babel-loader'},
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: './dist', // 表示服务器的跟目录
        hot: true,
        port: 3000
    }
}