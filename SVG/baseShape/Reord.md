### 基本图形和属性

- 基本图形
&emsp; `<rect>`, `<circle>`, `<ellipes>`, `<line>`, `<polyline>`, `<polygon>`
- 基本属性
&emsp;`fill`, `stroke`, `stroke-width`, `transform`

### 基本图形

**[基本图形演示](https://codepen.io/bobiy/pen/oNXYOQp)**

#### <rect>

~~~
<rect x=num y=num width=num height=num rx=num ry=num/>
~~~
*注意：* 当只给定 rx 时，ry = rx， 反之亦然。

#### <circle>

~~~
<circle cx=num cy=num r=num />
~~~

#### <ellipse>

~~~
<ellipse cx=num cy=num rx=num ry=num/>
~~~

#### <line>

~~~
<line x1=num y1=num x2=num y2=num/>
~~~

#### <polyline> （折线）

~~~
<polyline points='x1 y1 x2 y2 x3 y3 x4 y4' />
/*或者*/
<polyline points='x1 y1, x2 y2, x3 y3, x4 y4' />
~~~

### <polygon> （多边形）

~~~
<polygon points='x1 y1, x2 y2, x3 y3, x4 y4' />
~~~

*注意：* 多边形会将 开始点（x1 y1）和结束点（x2 y2）进行闭合连接

### 基本属性

 - `fill` 填充颜色
 - `stroke` 描边颜色
 - `stroke-width` 描边宽度
 - `transform` 变换

**基本演示**

~~~
fill='#333'
stroke='#333'
stroke-width=10
transform='translate(10, 10)'
~~~