### 1.1.1 SVG 简介

- 使用 XML 描述的矢量文件
- W3C 标准（1.1）（[http://www.w3.org/TR/SVG11/](http://www.w3.org/TR/SVG11/)）
- 浏览器支持情况（[http://caniuse.com/#cats=SVG](http://caniuse.com/#cats=SVG)）
&emsp; IE 9+  
&emsp; Chrome 33.0 +  
&emsp; Firfox 28.0 +  
&emsp; Safai 7.0 +

### 1.1.2 SVG 简介 - 矢量图和位图

- 位图（BMP,PNG,JPG 等）
&emsp; 基于颜色的描述
- 矢量图（SVG，AI等）
&emsp; 基于数学的描述

### 1.1.3 SVG 简介 - 简单示例

[效果演示](https://codepen.io/bobiy/pen/gOpLEYP)

*代码演示*
~~~
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='300'>
    <!--Face-->
    <circle cx='100' cy='100' r='90' fill='#39F'/>
    <!--Eyes-->
    <circle cx='70' cy='80' r='20' fill='white'/>
    <circle cx='130' cy='80' r='20' fill='white'/>
    <circle cx='65' cy='75' r='10' fill='black'/>
    <circle cx='125' cy='75' r='10' fill='black'/>
    <!--Smile-->
    <path d='M 50 140 A 60 60 0 0 0 150 140' stroke='white' stroke-width='3' fill='none'/> 
</svg>
~~~

### 1.1.4 SVG 使用方式

- 浏览器知己打开
- 在 HTML 中使用 `<img>` 标签引用
- 直接在 HTML 中使用 SVG 标签
- 作为 CSS 背景