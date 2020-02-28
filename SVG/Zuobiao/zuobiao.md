### 坐标系统概述

- 笛卡尔直角坐标系
- 原点
- 互相垂直的两条数轴
- 角度定义

#### 角度定义

从 X 轴正方向，向 Y 轴正方向旋转为正方向（正角度）

#### SVG 的坐标系

- X轴向右为正方向
- Y轴向下为正方向
- 从 X 轴正方向，向 Y 轴正方向旋转（顺时针）为正角度。


#### 四个坐标系

- 用户坐标系（User Coordinate）
&emsp; 世界坐标系（无穷大 viewBox 属于其中的一部分，也就是 viewBox 的相对坐标系 ）
- 自身坐标系（Current Coordinate）
&emsp; 每个图形元素或分组独立与生俱来的坐标系
- 前驱坐标系（Previous Coordinate）
&emsp; 父容器坐标系
- 参考坐标系（Reference Coordinate）
&emsp; 使其他坐标系来考究自身情况时使用。

#### 坐标变换

**定义：** 

- 数学上，*坐标变换*是采用一定的数学方法将一个坐标系的坐标变换为另一个坐标系的坐标的过程。
- SVG 中，*坐标变换*是对一个坐标系到另一个坐标系的变换的描述。

1. 线性变换

- 线性变换方程

   X = aX + cY + e  
   Y = bX + dY + f

- 变换矩阵，记为 M

![矩阵变换](https://github.com/BobiY/CSSRecord/blob/master/SVG/Zuobiao/image/juzhen.png)

**平移，旋转，缩放就是线性变换**

**在 viewBox中 .5 的偏移，会使线条比较锐利**

