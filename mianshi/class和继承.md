### class 和 继承

#### 1. 开始的类的定义

ES6 以前，只能通过函数去模仿类的行为；示例代码如下

~~~
function A() {
    this.c = 1;
}

a.prototype.b = function() {}
~~~

这时，对于*属性*而言，会定义在构造函数内，对于公共*方法*，会定义在构造函数的原型上。

#### 2. 新的开始

ES6 为 JS 添加了 class 的语法糖，可以直接使用 class 去定义类。并且还添加了若干限制原则，使类看起来*更像*那么回事。

~~~
class A() {
    constructor() {
        this.c = 1;
    }
    b() {}
}
~~~

一旦使用 class 定义，这个类就不能像 ES6 以前用函数模拟时，将函数当做普通函数调用，否则就会报错。

关于类的若干知识

1. class 中的 constructor

- constructor 是类的构造函数，相当于 ES5 中的定义的函数 A, 用来进行一些初始化工作。
- 构造函数可以不指定，相当于指定了一个什么都不执行的构造函数

~~~
class A {}

// 相当于
class A {
    constructor() {

    }
}
~~~

- 一个合法的类，示例的构造函数一定指向类的本身。

~~~
// ES5 中 一般这么做
function A() {}

A.prototype.constructor = A;
A.prototype.a = function () {};

// 错误的写法
A.prototype = {};

// 继承
function B() {}
function Super() { this.constructor = B; }
Spuer.prototype = new A();
B.prototype = new Super();
~~~


2. 关于 this

class 在定义方法时不会自动进行 this 绑定，如果需要绑定 this，需要自行在构造函数中绑定。

~~~
class A{
    constructor() {
        this.c = 1;
        this.b = this.b.bind(this);
    }
    b() {

    }
}
~~~

3. 静态方法和属性

> 静态属性和方法指的是只能直接在类上调用，而不能通过原型调用。

- ES5 指定静态方法和属性

~~~~
function A() {

}

A.c = 1;
A.b = function() {};
~~~~

- ES6 指定静态属性和方法

~~~
class A{
    static c=1;
    static b(){};
}
~~~
4. 类的 name

类的 name 属性是静态属性，代表着类的名称

~~~
class A{
    constructor() {
        console.log(A.name); // A
    }
}
~~~

5. 类的表达式

类和函数一样，也可以使用表达式方式声明

~~~
const A = class Me{
    console.log(Me.name);
}

const ins = new A(); // Me
Me.name; // 报错，因为 Me 只能在类中访问
~~~

#### 2. 继承

1. 在 ES5 中，会通过以下方式实现继承

~~~
function A() {}

A.prototype.constructor = A;
A.prototype.a = function () {};


// 继承
function B() {}
function Super() { this.constructor = B; }
Spuer.prototype = new A();
B.prototype = new Super();
~~~

2. ES6 中直接使用 extends 就可以实现继承

~~~
class A{}

class B extends A{
    constructor(){
        super();
    }
}
~~~

3. super 关键字

- super 在继承关系中代表着父类
- super 当做函数调用时，代表着父类的构造函数
- super 可以作为对象调用，有两种情况。

    &emsp; 1. 在静态方法中代表父类  
    &emsp; 2. 在普通方法中代表父类的原型

- super 作为构造函数时，`this` 指向的是继承的类，代表着将属性和方法挂载到继承类上。

~~~
class A{
    toString() {
        console.log('qqqq');
    }

    static getName() {
        return A.name;
    }
}

class B extends A{
    constructor() {
        super(); // 代表父类的构造函数
    }

    toString() {
        super.toString();  // 此时 super 代表父类的原型
    }

    static getName() {  // super 代表父类
        return `${B.name}-${super.getName()}`;
    }
}

~~~