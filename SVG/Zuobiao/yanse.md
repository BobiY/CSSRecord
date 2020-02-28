### 颜色，渐变和画刷

- 认识 RGB 和 HSL
- 线性渐变和径向渐变
- 使用画刷

#### RGB 和 HSL

- 都是 CSS3 支持的颜色表示方法
- 互相转换的原理

#### RGB

- 红色，绿色，蓝色三个分量
- 表示方式：rgb(r,g,b) 或 #rrggbb
- 每个分量取值范围：[0,255]

![RGB演示图](https://github.com/BobiY/CSSRecord/blob/master/SVG/Zuobiao/image/RGBColor.png)

- 优势：显示器容易解析
- 劣势：不符合人类描述颜色的习惯

#### HSL

- 三个分量分别表示颜色，饱和度和亮度
- 格式：hsl(h,s%,l%)
- 取值返回  
&emsp; - h: [0, 359]  
&emsp; - s,l:[0, 100]

![HSL演示](https://github.com/BobiY/CSSRecord/blob/master/SVG/Zuobiao/image/HSLColor.png)

- 优势：符合人类描述颜色的习惯

#### 标记配色网站

[Paletton](http://www.paletton.com/)

#### 透明度

- rgba(r,g,b,a) 和 hsla(h, s%, l% a) 表示带透明度的颜色
- opacity 属性表示元素的透明度
- a 和 opacity 的取值范围：[0,1]

#### 在 SVG 中应用颜色

~~~
<rect fill='rgb(255, 0, 0)' opacity='0.5'/>
<rect stroke='hsla(0, 50%, 60%, 0.5)'/>
~~~

### 渐变

- 让图形更丰满
- 线性渐变和径向渐变

#### 线性渐变

- <linearGradient> 和 <stop>
- 定义方向
- 关键点位置及颜色
- gradientUnits

![线性渐变演示](https://github.com/BobiY/CSSRecord/blob/master/SVG/Zuobiao/image/linearJianBian.png)

~~~
<linearGradient gradintUnis='objectBoundingBox'>
~~~

#### 关于 grandientUntis 属性

- 默认值是 `objectBoundingBox`

这种情况下的填充是按照图形的实际宽高的百分比设定，也就是 [0,1]

- 可选值是 `userSpaceOnUse`

这种情况下的起始坐标设定参考的是世界坐标系，这点要注意。可参考 `../Gragient/linearGradient.svg`

#### 径向渐变

- <radialGradient> 和 <stop>
- 定义方向
- 关键点位置及颜色（offset 和 stop-color）
- gradientUnits(参考线性渐变)
- 焦点位置（fx，fy）

焦点位置可以想象成一束光从设置的焦点位置发射出来，离得近的地方的比较清晰，扩散的小。离得远的地方模糊，扩散的大，参照 `../Gragient/radialGradient.svg`

### 笔刷

- 绘制纹理
- <pattern> 标签
- patternUnits（默认值 objectBoundingBox） 
- patternContentUnits（默认值 userSpaceOnUse）

会根据设置的笔刷和实际图形的大小进行平铺处理（和 背景的 平铺类似）

参考 `../Gragient/pattern.svg`