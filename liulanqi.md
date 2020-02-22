### 本文引自[这里](https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-37)
### 1. 跨标签页通讯

跨标签通讯的本质是运用一些可以***共享的中间介质***进行数据存储和传输。下面列举了一些方法：
- 通过父页面 `window.open() 和子页面 postMessage`

异步下，通过 `window.open('about:black')` 和 `tab.location.href = "*" `

- 设置同域下共享的 `localStorage` 与监听 `window.onstorage`

重复写入相同的值无法触发。
会受到浏览器隐身模式等的限制。

- 设置共享的 `cookie` 与不断轮询脏检查（`setInterval`）

- 借助服务端或者中间层。

### 2. 浏览器架构

- 用户界面
- 主进程
- 内核
&emsp;-  渲染引擎
&emsp; - JS 引擎
&emsp;&emsp;  - 执行栈
&emsp; - 时间触发线程
&emsp;&emsp; - 消息队列
&emsp;&emsp;&emsp;  - 微任务
&emsp;&emsp;&emsp; - 宏任务
&emsp;&emsp;  - 网络异步线程
&emsp;&emsp; - 定时器线程
### 3. 浏览器下的事件循环（Event Loop）
事件循环是指：执行一个宏任务，然后执行清空并清空微任务队列，如此循环执行。

- 微任务：`microtask(jobs)`:`promise/window.MutationObserver/process.nextTick `
- 宏任务：`macrotask(task)`:`setTimeout/ script/IO/UI Rendering`

### 4. 从输入 URL 到展示的过程
- DNS 解析
- TCP 握手
- 发送请求，分析 url，设置请求报文（头，主体）
- 服务器返回请求的文件（html）
- 浏览器渲染
&emsp;- HTML parser --> DOM Tree
&emsp; &emsp; - 标记化算法，进行元素状态的标记
&emsp; &emsp;  - dom树构建
&emsp; - CSS parser --> Style Tree
&emsp; &emsp;  - 解析 css 代码，生成样式树
&emsp; - attachment --> Render Tree
&emsp; &emsp; 集合 dom 树与 style 树，生成渲染树
&emsp;  - layout：布局
&emsp; - GUP painting：像素绘制页面

### 5. 回流与重绘

当元素样式发生改变时，会触发浏览器重新绘制。这个过程中，有两种类型的操作。即回流和重绘。

- ***重绘（repaint）：*** 当元素样式的改变不影响布局（eg:背景色），浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新绘制，因此***损耗较少***。
- ***回流（reflow）：***当元素的尺寸，结构或者触发某些属性时，浏览器会重新渲染页面，称为***回流***。此时，浏览器需要重新经过计算，计算后还需要从新进行页面布局，因此是较重的操作。

***会触发回流的操作：***
1. 页面初次渲染
2. 浏览器窗口大小改变
3. 元素尺寸，位置，内容发生改变
4. 元素字体大小变化
5. 添加或者删除可见的 dom 元素
6. 激活 CSS 伪类（例如：hover）
7. 查询某些属性或调用某些方法
&emsp;  - clientWidth，clientHeight，clientTop，clientLeft
&emsp;  - offsetWidth，offsetHeight，offsetTop，offsetLeft
&emsp;  - scollWidth，scrollHeight，scrollTop，scrollLeft
&emsp;  - getComputenStyle()
&emsp;  - getBoundingClientRect()
&emsp;  - scrollTo()

***回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。***

#### 最佳实践

- css
&emsp;  - 避免使用 `table` 布局
&emsp;  - 将动画效果应用到 `position` 属性为`absolute` 或 `fixed` 的元素上。
- javascript
&emsp;  - 避免频繁操作样式，可汇总后统一一次修改。
&emsp;  -尽量使用 `class` 进行样式修改。
&emsp;  -减少 `dom` 的增删次数，可使用 **字符串** 或者 `documentFragment` 一次性插入。
&emsp; - 极限优化时，修改样式可将其 `display: none` 后修改。
&emsp;  - 避免多次触发上面提到的那些会触发回流的方法，可以的话应尽量使用 **变量存住**

### 6. 存储
有时根据业务需要，可能需要存储一些数据，通常可以将其分为 **暂时行存储** 和 **持久性存储**。

- **暂时行存储**：只需要将数据存在内存中，只在运行时可用。
- **持久性存储**：可以分为 *浏览器端* 和 *服务端*
&emsp;  - 浏览器
&emsp; &emsp;  - `cookie`: 通常用于存储用户身份，登录状态等信息。
&emsp; &emsp; &emsp;   - `http` 中自动携带，体积上限为 4K，可自动设置过期时间。
 &emsp; &emsp; - `localStorage / sessionStorage` : 长久存储/窗口关闭删除，体积限制为 4~5M。
&emsp; &emsp; - `indexDB`
&emsp; - 服务器
&emsp; &emsp;  - 分布式缓存 redis
&emsp; &emsp;  - 数据库

### 7. Web Worker

*现代浏览器*为 `JavaScript` 创造了 **多线程环境**。可以新建并将部分任务分配到 `worker` 线程并行运行，两个线程 **独立运行**，**互不干扰**，可通过自带的 **消息机制** 相互通信。

**基本用法**
~~~
// 创建 worker
const worker = new Wprker('work.js')

// 向创建的线程推送消息
worker.postMessage('Hello World')

// 监听主线程来的消息
worker.onmessage = function(event) {
  console.log('Received message', event.data)
}
~~~
**限制：**
- 同源限制
- 无法使用 `document` / `window` / `alert` / `confirm`
- 无法加载本地资源

###8. V8 垃圾回收机制

**垃圾回收**：将内存中不再使用的数据进行清空处理，释放出内存空间。V8 将内存分成 **新生代空间** 和 **老生代空间**

- **新生代空间：** 用于存活较短的对象
&emsp; - 分成两个空间：`from` 与 `to` 空间
&emsp;  - Scavenge GC 算法：当 `from` 空间被占满时，启用 GC 算法
&emsp; &emsp;  - 存活的对象从 `from space` 转移到 `to space`
&emsp; &emsp;  - 清空 `from space`
&emsp; &emsp;  - `from space` 与 `to space` 互换
&emsp; &emsp; - 完成一次新生代 GC

- **老生代空间：**用于存储存活时间较长的对象
&emsp; &emsp;  - 从*新生代空间* 转移到 *老生代空间*的条件：
&emsp; &emsp; &emsp;  - 经历一次以上 Scavenge GC 的对象
&emsp; &emsp; &emsp; - 当 `to space` 体积超过 **25%**
&emsp; &emsp;  - **标记清楚算法：**标记存活的对象，未被标记的则被释放
&emsp; &emsp; &emsp; - *增量标记*：小模块标记，会阻塞 js 代码执行，GC 会影响性能
&emsp; &emsp; &emsp;  - 并发标记（最新技术）：不阻塞 js 执行
&emsp; &emsp; - **压缩算法：** 将内存中清除后导致的碎片化对象网内存堆的一端移动，解决**内存的碎片化**。
###9. 内存泄露
1. 意外 **全局变量**：无法被回收
2. **定时器**：未被正确关闭，导致所引用的外部变量无法被释放。
3. **事件监听**：没有正确销毁（低版本浏览器可能出现）
4. **闭包**：会导致父级作用域中的变量无法被释放
5. **dom 引用**：dom 元素被删除时，内存中的引用未被正确清空

*小贴士：* 可用 chrome 中的 timeline 斤西瓜内存标记，可视化查看内存的变化情况，找出异常点。
