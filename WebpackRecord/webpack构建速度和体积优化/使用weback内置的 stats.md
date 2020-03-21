### 初级分析：使用 webpack 内置的 stats

- stats：构建的信息统计

**方式一**
package.json 中使用 stats
~~~
"script": {
    "bulid:stats": "webpack --env production --json > stats.json"
}
~~~
`--json` 表示构建结果生成 json
`> stats.json` 表示生成 stats.json 文件
**方式二**

Node.js 中使用

~~~
const webpack = require('webpack');
const config = require('./webpack.config.js')('production');

webpack(config, (err, stats) => {
    if(err){
        return console.error(err);
    }

    if(stats.hasErrors()){
        return console.log(stats.toString('errors-only'));
    }

    console.log(stats);
});
~~~

以上两种方式的缺点是**颗粒度太粗，看不出问题所在**
