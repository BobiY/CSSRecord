### entry 用法

1. 单入口文件

entry: "./src/index.js"

2. 多入口文件

entry : {
    app: "./src/app.js",
    index: "./src/index.js"
}

### output 用法

*output* 指定了 webpack 打包后文件输入到指定的磁盘位置

1. 单入口配置

output:{
    path: __dirname + "/dist",
    filename: "bundle.js"
}

2. 多入口配置

output: {
    path: __dirname + '/dist',
    filename: "[name].js"
}

### 核心概念---Loaders

- webpack 开箱急用仅支持 JS 和 JSON 两种文件类型
- 通过 Loaders 去支持其他文件类型并且把它们转化成有效的模块，冰鞋可以前驾到依赖图中。
- 本身是一个函数，接收源文件作为参数，返回转换的结果。

**常见 Loaders**

|名称|描述|
|:---|:---|
|babel-loader|转换ES6，ES7等 JS 新特性语法|
|css-loader|支持 .css 文件加载和解析|
|less-loader|将 less 文件转换成 css|
|ts-loader|将 TS 转换成 JS|
|file-loader|进行图片，字体等的打包|
|raw-loader|将文件以字符串的形式导入|
|thread-loader|多进程打包 JS 和 CSS|

#### Loaders 的用法
~~~
module:{
    rules: [
        {test:/.txt$/, use:'raw-loader'}  // test 指定匹配规则 、、 use 指定使用的 loader
    ]
}
~~~

### 核心概念--- plugins 

- 插件用于 bundle 文件的优化，资源管理和环境变量注入
- 作用于整个构建过程

**常见的 Plugins**

|名称|描述|
|:---|:---|
|CommonChunkPlugin|将 chunks 相同的模块代码提取城公共 js|
|CleanWebpackPlugin|清理构建目录|
|ExtractTextWebpackPlugin|将 CSS 从 bundle 文件里提取成一个独立的 CSS 文件|
|CopyWebpackPlugin|将文件或者文件夹拷贝到构建目录|
|HtmlWebpackPlugin|创建 html 文件去承载输出的 bundle|
|UglifyjsWebpackPugin|压缩 JS|
|ZipWebpackPlugin|将打包的资源生成一个 zip 包|

#### 用法

plugins: []

### 核心概念---Mode

- Mode 用来指定上千的构建环境是：production/development
- 设置 mode 可以使用 webpack 内置函数。默认值为 production。
