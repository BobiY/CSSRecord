### 动画元素

#### 1. SVG SMIL

**SMIL:**Synchronized Multimedia Integration Language（同步多媒体集成语言）的首字母缩写简称，是有标准的。SVG动画就是基于这种语言。

*SMIL*允许你做下面的事
- 动画元素的竖直属性设置（X,Y....）
- 动画属性的变换（平移和旋转）
- 动画颜色属性
- 沿着运动路径运动

**下面将按照上面的四条，给出对应的动画标签介绍**

#### 1. animate
- 基础动画元素，属于单属性的过渡动画

*eg：*
~~~
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">
    马
      <animate attributeName="x" from="160" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
    </text>
  </g>
</svg>
~~~

#### 2. animateColor

- 用于控制颜色相关的属性的动画
- 由于和 `animate` 属性功能冲突，现在已经废弃，使用 `animate` 即可

#### 3. animateTranstion

- 用于控制 `transform` 属性的变化

*eg:*
~~~
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="80" y="100" x="100">马</text>
    <animateTransform attributeName="transform" begin="0s" dur="3s"  type="scale" from="1" to="1.5" repeatCount="indefinite"/>
  </g>
</svg>
~~~

#### 4. animateMotion

- 用于控制 SVG 元素沿着设置的路径运动

*eg:*
~~~
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" repeatCount="indefinite"/>
  </text>
  <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
~~~

#### 5. 多个动画组合

*eg：*
~~~
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" from="160" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" begin="0s" dur="3s" repeatCount="indefinite" />
    </text>
</svg>
~~~

#### 6. 动画元素属性介绍

**1. attributeName**

公式  &emsp;`attributeName=<attributeName>`

- 可以是元素上暴露的元素，比如 x,y,fill 等
- 也可以是 css 属性名，例如 opacity 等

**2. attributeType**

公式 &emsp; `attributeType='auto|XML|CSS'`

- CSS 表示想要改变的属性是在 CSS 中定义的属性。
- XML 表示的是直接在元素上暴露出来的属性，x,y 等。
- auto 表示自动识别，先判断属性是否在 CSS 上，不在则在 XML 上找。

**3. from,to,by.values**

*公式*

- `from=value`  开始值
- `to=value`    结束值
- `by=value`    相对值
- `values=<lists>` 一个关键点列表

*四个属性关系说明*

1. 如果 `from` 的值和元素的初始值一样，则可以不指定。
2. `to` 和 `by` 同时指定时，`to` 生效。`from` 值为 50，`to` 表示绝对位置，如果值为 50，则运动到 50 的位置停止。`by` 的值为 50，则最终位置是 `50+50=100`
3. `from`, `to`, `by`, `values` 同时指定时，values 生效。都不指定时没有动画执行。
4. `values` 为一个值时没有动画, values 的每个值表示绝对位置的元素。当需要复杂的动画时，eg:可以使用多值实现左右摇摆动画。

*总结：* 四个属性将以一下五种方式组合
- `from-to`
- `from-by`
- `to`
- `by`
- 多值的 `values`

**4. begin, end**

- `begin` 表示动画的开始时间，表示的是从加载完毕多长时间后开始执行动画
- `end` 表示动画的结束时间, 强制动画在多少秒后结束，会忽略 repeatCount 属性的设置。

**关于它们的更多介绍**

1.  `begin` 可以设置多个值 `begin='1s;2s'` 表示动画在 1s 时重头执行，在 2s 时还会再执行一次，这时不需要设置 repeatCount。

*以下规则是用于  begin， end 和 dur*    

2.  `offset-value` 

使用 `+/-` 符号来表示在 documentdocment（全局时间）上加/减 多长时间

3. `syncbase-value` 基于同步确定的值

语法 `begin/end=[元素id].end/begin +/- 时间值`

*eg:*
~~~
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" fill="freeze" />
        <animate attributeName="y" to="100" begin="x.end" dur="3s" fill="freeze" />
    </text>
</svg>
~~~
上例中，指定的是 x 元素的动画执行完以后在执行 y (竖直)方向的动画

4. `event-value` 表示与事件相关联的值

语法 `begin/end=[元素id].[事件类型] +/- 时间值`

*eg:*

~~~
<svg id="svg" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle id="circle" cx="100" cy="100" r="50"></circle>
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="circle.click" dur="3s" />
    </text>
</svg>
~~~

上例中，当点击了圆形以后，文字就会进行运动。

5. `repeat-value` 表示重复多少次以后做什么事

语法 `begin/end='[元素id].repeat(x) +/- 时间值'`

*eg:*
~~~
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" to="100" begin="x.repeat(2)" dur="3s" fill="freeze" />
    </text>
</svg>
~~~
`begin="x.repeat(2)"`指 `id `为 `x` 的元素的动画重复2次后执行~~

6. `accessKey-value` 指定快捷键，表示按下某个按键后开始执行动画

语法 `begin/end='asscessKey(快捷键所在的字符)'`

*eg:*
~~~
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="accessKey(s)" dur="3s" repeatCount="indefinite" />
    </text>
</svg>
~~~

谷歌没啥用，火狐有用，[引自](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)。

7. `indefinite` 表示无限延迟永不执行，可以使用脚本进行动画控制

语法 `begin/end='indefinite'`

*eg:*
~~~
<svg id="svg" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="indefinite" dur="3s" />
    </text>
</svg>
~~~
*js 代码*
~~~
var animate = document.getElementsByTagName("animate")[0];
if (animate) {
    document.getElementById("svg").onclick = function() {
        animate.beginElement();
    };
}
~~~

**5. dur**

`dur` 表示动画的持续时间。语法 `dur='具体时间值|indefinite'`

`indefinite` 表示不执行动画

**6. calcMode, keyTimes, keySplines**

这几个参数用于控制动画的速率

语法 `calcMode='discrete | linear | paced | spline.` 
中文意思分别是：“离散”|“线性”|“踏步”|“样条”。

- discrete(离散)  
`from` 直接跳到 `to`

- linear(线性)  
animateMotion元素以外元素的calcMode默认值。动画从头到尾的速率都是一致的。

- paced(踏步)  
通过插值让动画的变化步调平稳均匀。仅支持线性数值区域内的值，这样点之间“距离”的概念才能被计算（如position, width, height等）。如果”paced“指定，任何keyTimes或keySplines值都会打酱油。
**类似与 CSS Animattion 中的 step（x）**

- spline(样条)  
插值定义贝塞尔曲线。spline点的定义在keyTimes属性中，每个时间间隔控制点由keySplines定义。

`keyTimes = “<list>”`  
跟上面提到的`<list>`类似，都是分号分隔一组值。`keyTimes`总名字上看是关键时间点的意思，大致就是这个意思。前面提到过`values`也是多值，这里有一些约定的规则：首先，`keyTimes`值的数目要和`values`一致，如果是`from/to/by`动画，`keyTimes`就必须有两个值。然后对于`linear`和`spline`动画，第一个数字要是0, 最后一个是1。 最后，每个连续的时间值必须比它前面的值大或者相等。

`paced`模式下，`keyTimes`会被忽略；`keyTimes`定义错误，也会被忽略；`dur`为`indefinite`也会被忽略。

`keySplines = “<list>”`  
`keySplines`表示的是与keyTimes相关联的一组贝塞尔控制点（默认`0 0 1 1`）。每个控制点使用4个**浮点值**表示：`x1 y1 x2 y2`. **只有模式是spline时候这个参数才有用**，也是分号分隔，值范围0~1，**总是比keyTimes少一个值**。

如果keySplines值不合法或个数不对，是没有动画效果的。

[张鑫旭演示地址](https://www.zhangxinxu.com/study/201408/svg-animation-calcmode.html)

**7. repeatCount, repeatDur**  
`repeatCount`表示动画执行次数，可以是合法数值或者”indefinite“（动画循环到电脑死机）。

`repeatDur`定义重复动画的总时间。可以是普通时间值或者”indefinite（”动画循环到电脑死机）。

*eg:*
~~~
<animate attributeName="x" to="60" dur="3s" repeatCount="indefinite" repeatDur="10s" />
~~~

动画只玩执行完整`3个 + 一个1/3个`动画。因为repeat总时间就10s而已。

**8. fill**  
`fill`表示动画间隙的填充方式。支持参数有：`freeze | remove`. 其中`remove`是默认值，表示动画结束直接回到开始的地方。`freeze`“冻结”表示动画结束后像是被冻住了，元素保持了动画结束之后的状态。

**9. accumulate, additive**  
`accumulate`是累积的意思。支持参数有：`none | sum`. 默认值是none. 如果值是sum表示动画结束时候的位置作为下次动画的起始位置。

`additive`控制动画是否附加。支持参数有：`replace | sum`. 默认值是replace. 如果值是sum表示动画的基础知识会附加到其他低优先级的动画上，

*eg:*
~~~
<img ...>
   <animateMotion begin="0" dur="5s" path="[some path]" additive="sum" fill="freeze" />
   <animateMotion begin="5s" dur="5s" path="[some path]" additive="sum" fill="freeze" />
   <animateMotion begin="10s" dur="5s" path="[some path]" additive="sum" fill="freeze" />
</img>
~~~
这里轮到第二个动画的时候，路径是从第一个动画路径结束地方开始的，于是，3个动画完美无缝连接起来了。

*eg2:*

~~~
<animateTransform attributeName="transform" type="scale" from="1" to="3" dur="10s" repeatCount="indefinite" additive="sum"/>
<animateTransform attributeName="transform" type="rotate" from="0 30 20" to="360 30 20" dur="10s" fill="freeze" repeatCount="indefinite" additive="sum"/>;
~~~

这里，两个动画同时都是transform，都要使用一个type属性，好在这个例子additive="sum"是累加的而不是replace替换。

**这个也是 transform 执行多个属性同时控制的关键**

**10. restart**

支持的参数有：`always | whenNotActive | never`.

- `always`是默认值，表示总是，也就是点一次圈圈，马儿跑一下。 
- `whenNotActive`表示动画正在进行的时候，是不能重启动画的。
- `never`表示动画是一波流。


### 动画的暂停与播放
SVG animation中是有内置的API可以暂停和启动动画的。

语法如下：
~~~
// svg指当前svg DOM元素

// 暂停
svg.pauseAnimations();

// 重启动
svg.unpauseAnimations()
~~~


