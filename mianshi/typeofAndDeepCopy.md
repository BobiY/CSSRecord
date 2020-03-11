### typeof 和 深拷贝

#### 1. typeof

**typeof** 操作符返回一个字符串，表示未经计算的操作数的类型。

*语法：*

~~~
typeof 表达式
typeof(表达式)
~~~

下面的列出 JS 中的数据类型在使用 typeof 的返回值

|类型|结果|
|:---|:---|
|Undefined|"undefined"|
|Null|"object"([详见此文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#null))|
|Boolean|"boolean"|
|Number|"number"|
|BigInt([详见这里](https://segmentfault.com/a/1190000019912017?utm_source=tag-newest))|"bigint"|
|String|"string"|
|Symbol(ES5 新增)|"symbol"|
|Function|"function"|
|其他任何对象(这里包括 Object, Array, Map, Set 等)|"object"|
****

#### 1.1 一些特殊情况

**new 操作符**

~~~
// 除 Function 外的构造函数返回的都是 "object"

var str = new String('111');
var num = new Number(1);

typeof str // 'object'
typeof num // 'number'

var fun = new Function()

typeof fun // 'function'
~~~

**带括号的表达式**

~~~
typeof 10 + 1 // 'number1'
typeof (10 + 1) // number 
~~~

**正则表达式**

正则表达式的判定各个浏览器可能不一致，所以使用时要谨慎求证。

**出错（[内容引自](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#null)）**

在使用 `let` 和 `const` 时，会形成 [暂存死区](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let#%E6%9A%82%E5%AD%98%E6%AD%BB%E5%8C%BA)。在变量被初始化之前，访问变量将会引发错误。

这时在使用 typeof 时，会抛出  [ReferenceError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) 错误。

~~~
typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = 'hello';
class newClass{};
~~~

#### 2. 深拷贝

下面将用 `typeof` 实现一个简单的深拷贝函数。

> 注：循环引用的属性值表示为 `{key: [Circular]}`

深拷贝函数示例

~~~
function find(arr,item){
    if ( Array.isArray(arr) ) {
        return null;
    }
    return arr.some( ele => ele.source === item );
}
function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}

function deepClone(source,uniqueList){
    if(!isObject(source)) return source;

    if(!uniqueList) uniqueList = [];    //   初始化数据

    var target = Array.isArray(source) ? [] : {};

    var uniqueData = find(uniqueList,source);
    if(uniqueData) return uniqueData.target;


    uniqueList.push({
        source:source,
        target:target
    });

    for(var key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                target[key] = deepClone(source[key], uniqueList)      //   传入数组
            }else{
                target[key] = source[key];
            }
        }
    }
    return target;
}
var a = {
    name:"key1",
    eat:[
        "苹果",
        "香蕉"
    ]
}
a.d = a;
b = deepClone(a);
a.eat[2] = "桃";
console.log(a);
console.log(b);
~~~


