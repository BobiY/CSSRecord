### Scope Hoisting 使用和原理分析

现象：构建后的代码存在大量闭包代码

#### 会导致什么问题

- 大量函数闭包包裹代码，导致体积增大（模块越多越明显）
- 运行代码是创建的函数作用域变多，内存开销变大


#### 模块转换分析

模块
~~~
import {helloworld} from './helloworld';
import '../../common';

document.write(helloworld());
~~~

模块初始化函数
~~~
(function(module, __webpack_exports__, __webpack_require__){
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    var _common_WEBPACK_IMPORTTED_MODULE_0__ = __webpack_reqire__(1);
    var _helloworld_WEBPACK_IMPORTTED_MODULE_1__ = __webpack_reqire__(2);

    document.write(Object(_helloworld_WEBPACK_IMPORTTED_MODULE_1__['helloworld'])()); 
})
~~~

**结论：**

- 被 webpack 转换后的模块会带上一层包裹
- import 会被转换成 __webpack_require


#### scope hoisting 原理

原理：将所有模块的代码按照引用顺序在一个函数作用里，然后适当的重命名一些变量以防止变量名冲突。

对比：通过 scope hoisting 可以减少函数声明代码和内存开销。

webpack4+ mode 为 production 默认开启

必须是 ES6 语法，CJS 不支持

可以这样子手动开启
~~~
plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
]
~~~
