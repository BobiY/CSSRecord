### ESLint 相关

#### 行业里面优秀的 EsLint 规范实践
- Airbnb: eslint-config-airbnb , eslint-config-airbnb-base

腾讯：

- alloyteam 团队 eslint-config-alloy（[地址](https://github.com/AlloyTeam/eslint-config-alloy)）
- ivweb 团队：eslint-config-ivweb([地址](https://github.com/feflow/eslint-config-ivweb))

#### 制定团队的 EsLint 规范

- 不重复造轮子，基于 eslint:recommend 配置并改进
- 能够帮助发现代码错误的规则，全部开启
- 帮助保持团队的代码风格统一，而不是限制开发体验

#### ESLint 如何执行落地

- 和 CI/CD 系统集成
- 和 webpack 集成

#### 方案一：webpack 与 CI/CD 集成

图片地址：./image/CItu

**本地开发阶段增加 precommit 钩子**

1. 安装 husky

`npm install husky -D`

2. 增加 npm script，通过 lint-staged 增量检查修改的文件

~~~
"script": {
    "precommit": "lint-stage"
},
"lint-staged": {
    "linters": {
        "*.{js,scss}": ["eslint --fix", "git add"]
    }
}
~~~

#### 方案二： webpack 与 ESlint 集成

1. 使用 eslint-loader，构建时检查 JS 规范

~~~
module:{
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader'
            ]
        }
    ]
}
~~~