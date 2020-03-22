### 构建体积优化：动态 Polyfill

#### polyfill 可选方案

|方案|优点|缺点|是否采用|
|----|----|----|----|
|babel-polyfill|React16官方推荐|包体积200k+,难以单独抽离 Map，Set  项目里React是单独引用的 cdn，如果要用它，需要单独构建一份放在React加载之前|false|
|babel-plugin-transform-runtime|只能polyfill用到的类或方法，相对体积较小|不能polyfill原型上的方法，不适合用于业务项目的复杂开发环境|false|
|自己写Map，Set的 polyfill|定制化高，体积小|重复制造轮子，容易在日后年久失修成为坑  及时体积小，依然所有用户都要加载|false|
|polyfill-service|只给用户返回需要的polyfill，社区维护|部分国内奇葩浏览器UA可能无法识别（但可以降级返回所需全部 polyfill）|true|

#### polyfill Service 原理

- 识别 User Agent，下发不同的 Polyfill

#### polyfill.io 官方提供的服务

~~~
<script src='https://cdn/polyfill.io/v2/polyfill.min.js'></script>
~~~

#### 基于官方自建 polyfill 服务

~~~
//huayang.qq.com/polyfill_service/v2/polyfill.min.js?unkonw=polyfill&features=Promise,Map,Set
~~~
