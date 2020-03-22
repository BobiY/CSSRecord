### 无用的 CSS 如何删除

- `purifyCss`: 遍历代码，识别已经用到的 CSS class
- `uncss`: HTML 通过 jsdom 加载，所有的样式通过 PostCSS 解析，通过 document.querySelector 来识别在 html 文件里面不存在的选择器

#### 在 webpack 中如何使用 PurifyCSS

- 使用 [purgecss-webpack-plugin](https://github.com/FullHuman/purgecss-webpack-plugin)

- 加上 mini-css-extract-plugin 配合使用(必须和将css单独提取成文件的插件配合使用)

代码：

~~~
const PATHS = {
    src: path.join(__dirname, 'src')
}
module.exports = {
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssWebpackPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MinCssWebpackPlugin({
            filename: '[name].css'
        }),
        new PurgecssPlugin({
            path: glob.sync(`${PATHS.src}/**/*`,  //path 必须是绝对路径 {nodir: true})
        })
    ]
}
~~~
