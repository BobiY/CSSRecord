#### 页面打开的过程

1. 开始加载
2. HTML 加载成功开始加载数据
3. 数据加载成功，渲染成功开始，加载图片资源
4. 图片加载成功，页面可交互

#### 服务端渲染（SSR）是什么

1. 渲染：HTML + CSS + JS + Data -> 渲染后的 HTML
2. 服务端：

&emsp; - 所有模板等资源都储存在服务端
&emsp; - 内网机器拉去数据更快
&emsp; - 一个 HTML 返回所有数据

#### 客户端渲染 VS 服务端渲染

||客户端渲染|服务端渲染|
|:---|:---|:---|
|请求|多个请求（HTML，数据等）|1个请求|
|加载过程|HTML&数据串行加载|1个请求返回HTML&数据|
|渲染|前端渲染|服务端渲染|
|可交互|图片等静态资源加载完成，JS逻辑执行完成和交互||

*总结：*服务端渲染（SSR）的核心是减少请求

#### SSR 优势

- 减少白屏时间
- 对于 SEO 友好

#### SSR 代码实现思路

- 服务端

1. 使用 react-dom/server 的 renderToString 方法将 React 组件渲染成字符串
2. 服务端路由返回对应的模板

服务端代码示例
~~~
const express = require('express');
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/search-server');

server(process.env.PORT || 3000)

function server(port) {
    const app = express();

    app.use(express.static('dist'));
    app.get('/search', (res,req) => {
        res.status(200).send(renderMarkup(renderToString(SSR)))
    })

    app.listen(port, () => {
        console.log('server is running on port + ', port )
    })
}

function renderMarkup(html){
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>服务端渲染</title>
                <mate charset='utf-8' />
            </head>
            <body>
                <div id='app'>${html}</div>
            </body>
        </html>
    `
}
~~~

- 客户端

1. 打包出针对服务端的组件
2. 需要做些适配工作
3. 请求需要使用 axios


#### 关于声明周期方法

在服务端上 Component 生命周期只会到 componentWillMount，客户端则是完整的

#### webpack ssr 打包存在的问题

**浏览器的全局变量（libraryTarget:'umd' 时）（Node.js 中没有 document， window）**

- 组件适配：将不兼容的组件根据打包环境适配
- 请求适配：将 fetch 或者 ajax 发送请求的写法改成 isomorphic-fetch 或者 axios

**样式问题（Node.js 无法解析 css）**

- 方案一：服务端打包通过 ignore-loader 忽略掉 CSS 的解析
- 方案二：将 style-loader 替换成 isomorphic-style-loader

第二种方案需要以下方式引入样式

~~~
// index.css
.text{
    color: "red";
}

// index.js

import s from './index.css';

<div className={s.text}></div>

~~~

#### 使用 html 模板渲染

- 使用打包出来的浏览器端 html 为模板
- 设置占位符，动态插入组件

~~~
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"><!--HTML_PLEASEHOLDER--></div>

    <!--INITAL_DATA_--PLEASEHOLDER>
</body>
</html>
~~~

服务端代码

~~~
const html = fs.readFile(path.join(__dirname, "index.html"), 'utf-8')

html.replace("<!--HTML_PLEASEHOLDER-->", SSRStr).replace("<!--INITAL_DATA_--PLEASEHOLDER>", JSON.stringify(初始化数据，一般时挂载在 window 上的某个变量，比如 ： window.initData={a:1}))
~~~

特点
- 服务端获取数据
- 替换占位符 