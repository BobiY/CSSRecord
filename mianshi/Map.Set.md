#### 4. 简单分析 Array/Set 和 Object/Map 使用区别

##### 4.1.1 Array/Set

下面给出相互转换的方法
~~~
const arr = [1,2,3];
const set = new Set(arr);
const arr1 = Array.from(set);
~~~
**Array** 是 JS 中经典和常用的数据储存类型，拥有强大的操作方法。

**Set** 是新添加的数据解构，只能通过构造函数 `new Set()` 进行初始化。

*Set* 在 JS 内部会进行查询和储存的优化，所以理论上讲，速度比 Array 要快。 并且 *Set* 不允许有重复的元素出现。这也为 Array 去重提供了一种新的思路。

##### 4.1.2 Set 更多介绍

eg:

~~~
let array=[[1,2],[3,4]]
let ws=new WeakSet(array)  //{[1,2],[3,4]}
~~~

以下部分引自[这里](https://www.jianshu.com/p/80bf2e6139dc)和[这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)。

使用 WeakSet 需要注意的是：

- WeakSet 没有 size 属性，因为它的成员都是弱引用对象，随时可能消失；但是它有 length 属性，可以获得其长度
- 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
- WeakSet持弱引用：集合中对象的引用为弱引用。 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着WeakSet中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的，这就意味着你不能用 `Array.form` 将其转换为*数组*。

![弱引用示意](https://upload-images.jianshu.io/upload_images/5518628-ee8de44ab8a4391d.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)。

- WeakSet 的用途举例

1. 使用ws储存DOM节点，就不用担心节点从文档移除时，会引发内存泄漏（即在被移除的节点上绑定的click等事件）。
2. 
