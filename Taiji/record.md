### 太极图

#### 要点解析

- 对于外层大圆，使用 `width = 2height`，并且使用 `border-bottom-width` 补全 `height` 缺失的 `width/2`，也就是 `border-bottom-width = width*/2`。
- 里面的阴阳鱼使用**大边框**包括**小内容**实现。
- `css` 代码中使用了 *[css 变量（也叫 css 自定义属性）](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)*

### 代码部分

*html*

~~~
<div class="taiji" id="yin-yang"></div>
~~~

*css*

1. 外层大圆

~~~
.taiji{
    position: relative;
    width: calc(var(--width) * 8px);
    height: calc(var(--height) * 4px);
    margin: 50px auto;
    background: #ccc;
    border-radius: 50%;
    border-style: solid;
    border-width: calc(var(--width)/ 10px);
    // 使用 border-bottom 补全 height，使整个图形呈现圆形
    border-bottom-width: calc((var(--width) /10 + var(--width) * 4) * 1px);
    border-color: #333;
}
~~~

2. 内部小圆

~~~
.taiji:after{
    content: "";
    position: absolute;
    width: calc(var(--width)* 1px);
    height: calc(var(--width)* 1px);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    background: #333;
    // 使用大边框包括小内容，使整个元素的宽度为 2width
    border: calc(var(--width) * 1.5px) solid #ccc;
}
~~~

3. css 变量部分

~~~
:root{
    --width: 50;
    --height:50;
}
~~~

*注意：* css 变量和 Less，sass 一样具有作用域，更多内容查看上面的要点中的链接。 