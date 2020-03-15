const path = require('path');
module.exports = {
    entry: './src/file.jsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'file.js'
    },
    mode: 'production',
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
    }
}