### SVG 常使用

#### 1. <g>

- g 标签表示分组
- g 标签上的变换会作用到所有子元素上
- g 标签的样式会被所有子元素继承
- g 标签支持大部分的元素样式设置
*eg:*
~~~
<svg>
    <g fill='red'>
        <rect x='0' y='0' width='100' height='100'></rect>
    </g>
</svg>
~~~

#### 2. <use>

- use 标签主要用于复用已经存在的图形和分组
- use 表现通过 xlink:href 或 href 属性来引用已有的 SVG 元素或分组
- use 标签支持大部分的元素样式设置

*eg:*
~~~
<svg>
    <g id='g1'>
        <ellipse rx='30' ry='40' x='50' y='50' fill='hsl(0, 100%, 70%)'></ellipse>
    </g>
    <use x='10' y='20' width='100' height='300' href='#g1'>
</svg>
~~~

#### 3. <mask>

- mask 标签主要提供一个蒙层效果
- 在 mask 定义的蒙层区域中，亮度越大，显示的越多，亮度为 0 时不显示，完全遮罩
- mask 支持各种属性用来变换
- 使用元素的 mask=‘url(#maskid)’ 来引用 mask

*eg:*
[CODEPEN](https://codepen.io/bobiy/pen/ZEGyzMQ)

~~~
<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='-100 -100 300 300'>
  <defs>
    <mask id='mask1' x='0' y='0'>
      <circle cx='100' cy='100' r='25' fill='#fff'></circle>
  <circle cx='120' cy='75' r='25' fill='#000'></circle>
    </mask>
  </defs>
  <circle cx='100' cy='100' r='25' fill='yellow' mask='url(#mask1)'></circle>
</svg>
~~~

#### 4. <clipPath>

- 用来剪切固定图形，已完成更多图形
- 使用元素的 clip-path='url(#clipPath)' 来引用 path 以实现图形剪切

*eg:*

~~~
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="myClip">
      <circle cx="30" cy="30" r="20"/>
      <circle cx="70" cy="70" r="20"/>
    </clipPath>
  </defs>

  <rect x="10" y="10" width="100" height="100"
      clip-path="url(#myClip)"/>
</svg>
~~~

#### 5. <defs>

- defs 标签内的元素不会显示出来
- defs 标签主要用于定义一些预定义的元素

*eg:*
~~~
 <svg width='100%' height='100%'>
    <defs>
        <clipPath id="path1">
            <polygon points='20 20, 220 20, 220 220, 20 290' fill='rgba(0, 0, 0, 0.5)' transform='rotate(60)'>
                <animateTransform 
                    attributeType="XML"
                    attributeName="transform"
                    type='rotate'
                    from='-90'
                    to='0'
                    dur="2s"
                    repeatCount="indefinite"
                >   
                </animateTransform>
            </polygon>
            <!-- <polygon points='220 20, 420 20, 420 140, 220 220' fill='rgba(200, 200, 200, 0.5)'></polygon> -->
        </clipPath>
    </defs>
</svg>
~~~


