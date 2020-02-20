### 三勾玉写轮眼实现

#### 思路

- 眼的主题色为 `red`。
- 需要两个同心圆表示眼球轮廓（外圆）和勾玉的串联圆（内圆）
- 勾玉需要一个圆球和圆球凸起的尖组成
- 动画部分，需要透明度，旋转和缩放实现勾玉的在内圆上的旋转出现的效果

#### 开搞

1. 眼球整体实现

*html实现*
~~~
<div class='eye'><div>
~~~

*css 样式*
~~~
// width 和 height 根据喜好随意指定
.eye{
    width: 150px;
    height: 150px;
    border: 1px solid #333;
    border-redius: 50%;
    background: red;
    position: relative;
}
~~~

2. 添加眼球中间的黑眼珠部分

*html 部分*
~~~
<div class="center">
    <div class="black"></div>
</div>
~~~

*css 部分*
~~~
.center .black{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #333;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
~~~

3. 以 2 中的圆球为中心再画一个小的同心圆（用来串联勾玉）
*html部分*
~~~
<div class="center">
    <div class="black"></div>
    <div class="line"></div>
</div>
~~~
~~~
// 阴影颜色可以自行调整
.center .line{
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 32px #b20000 inset;
    border-radius: 50%;
}
~~~

4. 在 line 中添加一个包裹勾玉的元素

*html 部分*
~~~
<div class="center">
    <div class="black"></div>
    <div class="line">
        <div class="wapper">
        </div>
    </div>
</div>
~~~

*css 部分*
~~~
.center .wapper{
    width: 100%;
    height: 100%;
}
~~~

5. 接下来是勾玉部分

***勾玉实现思路***

1. 需要一个圆球
2. 用 1 中的元素的伪类元素的 `border-redius` 的四个值以及 `rotate()` 实现勾玉的角

*html 部分*
~~~
<div class="center">
    <div class="black"></div>
    <div class="line">
        <div class="wapper">
            <span class="gouyu"><b></b></span>
            <span class="gouyu"><b></b></span>
            <span class="gouyu"><b></b></span>
        </div>
    </div>
</div>
~~~

*css 部分*
~~~
// .gouyu 是勾玉的外包括部分，b 是实现勾玉的元素
.wapper .gouyu{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
}
.wapper .gouyu b{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #333;
}

// 勾玉的角
.wapper .gouyu b::before{
    content: "";
    position: absolute;
    top: 13px;
    left: -2px;
    width: 20px;
    height: 10px;
    border-radius: 0 0 118% 0;
    background: #333;
    transform: rotate(74deg);
}

// 调整每个勾玉的位置，使其均匀的分布在内圆环上
.wapper .gouyu:nth-child(1){
   transform: rotate(50deg);
}

.wapper .gouyu:nth-child(2){
    transform: rotate(180deg);
}

.wapper .gouyu:nth-child(3){
    transform: rotate(306deg);
}
~~~

6. 让勾玉动起来

让勾玉的包裹元素 .wapper 动起来，这样子勾玉也会动起来

*html 部分*
~~~
<div class="center">
    <div class="black"></div>
    <div class="line">
        <div class="wapper move">
            <span class="gouyu"><b></b></span>
            <span class="gouyu"><b></b></span>
            <span class="gouyu"><b></b></span>
        </div>
    </div>
</div>
~~~

*css 部分*
~~~
/* 动画部分 */
@keyframes move{
    0%{
        opacity: 0;
        transform: scale(0);
    }
    20%{
        opacity: 1;
        transform: scale(1) rotate(360deg);
    }
    100%{
        opacity: 1;
        transform: scale(1) rotate(360deg);
    }
}

.move{
    animation: move 4s cubic-bezier(0.74, 0.24, 0.7, 0.86);;
}
~~~

### 总结

1. 勾玉的实现整体不难，主要在于对每个步骤的拆分和组合。
2. 指的注意的是在第 5 步怎么将勾玉放到内圆的边上，这个方法因人而因，这里只是我实现的方法。
3. 动画部分可以根据自己喜好进行添加和修改。