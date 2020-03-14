const path = require("path");

module.exports = {
    entry: './src/index-react.jsx',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "css-ex-react.js"
    },
    mode: 'production',
    module: {
        rules: [
            {test: /\.jsx?/, loader: 'babel-loader'},
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}