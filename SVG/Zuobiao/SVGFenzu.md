### SVG 分组

- <g> 标签来创建分组
- 属性继承
- transform 属性定义坐标变换
- 可以嵌套使用

**参考下面代码**

~~~
<svg xmlns='www.w3.org/2000/svg'>
    <g stroke='green' fill='none'
    transform='translate(0, 50)'
    >
        <rect x='100' y='50' width='100' height='50'></rect>
        <rect x='40' y='100' width='20' height='120'></rect>
    </g>
</svg>
~~~