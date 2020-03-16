1. 库的目录结构和打包要求

打包输出的库名称

- 未压缩版 large-number.js
- 压缩版 large-number.min.js

目录结构

|- dist
    |- large-number.js
    |- large-number.min.js
|- webpack.config.js
|- package.json
|- index.js
|- /src
    |- index.js

2. 支持的使用方式

支持 ES module
~~~
import * as largeNumber from 'large-number';

    largeNumber.add('999', '1')
~~~

支持 CommonJS

~~~
const largeNumbers = require('large-number');
    largeNumber.add('999', '1')
~~~

支持 AMD

~~~
require(['large-number'], function(large-number) {
    largeNumber.add('999', '1')
})
~~~

可以直接通过 script 引入

<script src='路径'></script>


#### 如何将库暴露出去

library: 指定库的全局变量
libarayTarget: 支持库引入的方式

~~~
module.exports = {
    mode: 'production',
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryExport: 'default', // 如果不设置为 default，则引用时需要引用 库.default
        libraryTarget: 'umd'
    }
}
~~~

#### 设置入口文件

package.json 的 main 字段为 index.js

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/largeNumber.min.js');
} else {
    module.exports = require('./dist/largeNumber.js')
}