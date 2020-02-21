### 实现一个 loading 效果

#### 下面是 codepen 演示地址
[点击这里看演示](https://codepen.io/bobiy/pen/BaNQooR)

### DOM 结构

dom 结构很简单，看下面代码

~~~
<div class="wapper">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
~~~

### CSS 代码

css 实现主要使用了 `animation-dely` 为负值时的特性：当延迟时间为**负值**时，会从设置的负值时间处开始运行动画。

举个例子来讲

~~~
animation: jump 1.2s ease-in;
animation-delay: -1s;

/* 这里设置为 -1s 的意思就是动画从动画执行到 1s 时的状态开始执行。  */
~~~

下面是关键部分的 css 代码

~~~
.wapper .bar{
    width: 5px;
    height: 40px;
    background: green;
    display: inline-block;
    margin: 0 2px;
    animation: jump 1.2s ease-in-out infinite;
}
.bar:nth-child(2) {
    animation-delay: -1.1s;
}

.bar:nth-child(3) {
    animation-delay: -1.0s;
}
.bar:nth-child(4) {
    animation-delay: -0.9s;
}
.bar:nth-child(5) {
    animation-delay: -0.8s;
}

@keyframes jump{
    0%, 40%, 100% {
        transform: scaleY(0.4);
    }
    20%{
        transform: scaleY(1);
    }
}
~~~

#### 简单的分析

- 上面的例子中，动画执行的时间是 1.2s，在前 0-0.4s 中执行动画，在 0.2s 时元素放大到原来倍数。
- 第二个元素设置 -1.1s 的延迟时间，表明它的是从动画执行到 1.1s 这个状态开始执行动画的。
- 上例中，动画执行 0.4s ,有 0.8s 的时间保持静止。
- 第二个元素从 1.1s 的状态开始执行，所以 1.1s, 1.2s 是等待了两秒，此时，第一个元素执行动画两秒，第一个元素达到原来大小。
- 从 0.2s - 0.4s，第一个元素开始缩小，第二个元素从 0 - 0.2s 正在从小到大的过程，这事就形成了第一个从大变小，第二个从小变大的动效。
- 后面的元素一次类推，直到最后一个元素执行完。从头再循环。

#### 思考

有兴趣可以想一下，这个例子中，为什么不能用正的动画延迟时间。