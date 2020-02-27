### 课程目标

1. SVG 的世界，视野，视窗的概念
2. SVG 中的图形分组
3. 坐标系统描述
4. 自身坐标系和参照坐标系
5. 坐标变换

#### 视野和世界

- 世界是无穷大的
- 视野是观察事件的一个矩形区域

#### SVG 的世界，视野，视窗的概念

- width, height - 控制视窗
- SVG 代码 - 定义世界
- viewBox，preserveAspectRation - 控制视野

~~~
<svg 
    xmlns='https://wwww.3w.org/2000/svg'
    width='800'
    height='600'
    viewBox='0 0 400 300'
    presereAspectionRatio='xMidYMid meet'
>
    <!--Svg Content-->
</svg>
~~~

### preserveAspectRation 和 viewBox

preserveAspectRation 和 viewBox 是配合使用的属性。单独使用任何属性都不会起作用

#### viewBox

~~~
viewBox='0 0 300 300'
~~~
- 第一个参数代表起始的 X 轴坐标
- 第二个参数代表起始的 Y 轴坐标
- 第三个参数代表视野的 width
- 第四个参数代表视野的 height

一般情况下，SVG 会放在 HTML 中特定的容器中，这时可能会出现图形的缩放，这会导致图形失真等问题。SVG 为了解决这种问题，viewBox 设置的大小就是当需要出现缩放时，图形要按照怎么样的比例放在特定的容器大小中。

#### preserveAspectRation

~~~
preserveAspectRation='xMinYMin meet'
~~~
- 第一个参数代表当出现缩放时，视野（viewBox）内容应该放到视窗（viewPort）的那个位置
- 第二个参数代表当需要缩放时，视野（viewBox）应该怎么适配视窗（viewPort）

#### 关于 preserveAspectRation 的第二个参数

*注：* 下面说的是整个 viewBox 的缩放而不是里面的图形

- meet 
**meet:** 保持 viewBox 的缩放比；整个 viewBox 在viewPort 中可见；在满足前 2 个约束条件的基础上，尽可能的**放大** viewBox。当 viewBox 和 viewPort 的宽高比不匹配时，**取宽高缩放比中叫小**的那个。

*总结：*为 meet 时，viewBox 必会全部显式在 viewPort 中。

- slice
**slice:** 修剪 viewBox 保持缩放比；整个 viewBox 会完全覆盖 viewPort 区域。在满足前 2 个约束条件的前提下，尽可能的**缩小** viewBox。当 viewBox 和 viewPort 宽高比不匹配是，**取宽高缩放比中较大**的那个。

*总结:* 为 slice 时，viewPort 必然会全部被 viewBox 覆盖，但是 viewBox 可能会显示不全。可以通过第一个参数进行调节。

#### preserveAspectRation 的第一个参数

这个参数表示了当 viewBox 进行缩放时，应该怎么放置在 viewPort 中。

|坐标|YMid|YMin|YMax|
|:---:|:---:|:---:|:---:|:---:|
|XMin|XMinYMid（中上）|XMinYMin(左上)|XMinYMax（左下）|
|XMax|XMaxYMid(右中)|XMaxYMin（右上）|XMaxYMax（右下）|
|XMid|XMidYMid（中中）|XMidYMin（中上）|XMidYMax（中下）|

#### preserveAsceptRation 设置示例

~~~
preserveAsceptRation='xMinYMid meet'
~~~

