### JS 数据类型

#### 1. JS 数据类型总汇

- String
- Number
- Boolean
- Array
- Object
- Undefined
- Null
- Symbol
- Map
- Set

#### 2. 数据类型中的值类型

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

以上五种类型，是值类型的数据类型，它们遵循在赋值时遵循以下规则：

1. 值类型是变量的值存在栈中。
2. 当值类型发生赋值时，是直接引用的值，而不是变量。
~~~
//eg:
var a = 2;
var b = a;
b = 3;
console.log(a,b); // 2, 3; a和b 不会相互影响
~~~
3. 值类型无法添加属性和方法
4. 值类型比较时，只有它们的值相等时，才是真的相等；注意 “===”[包含强制类型转换] 和 “==”[不会进行类型转换] 的区别。

#### 3. 数据类型中的引用类型

- Array
- Object
- Map
- Set

这四种类型遵循以下规则：

1. 值的变量命存在栈中。
2. 当引用类型发生赋值是，是引用的内存地址，重新赋值会相互影响。

~~~
// eg:
var a = {};
var b = a;
b.c = 1;

cpnsole.log(a,b); // {c:1}, {c:1} 
~~~

3. 引用类型可以添加属性和方法
4. 引用类型比较时，只有引用的内存地址相同时，两个值才相等。





