### 基本操作API

#### 创建图形

- document.createElementNS(namespaceURI, tagName)

#### 添加图形

- element.appendChild(childElement)

#### 设置/获取属性

- element.setAttribute(name value)
- element.getAttribute(name)

#### 关于 namespaceURI

`namespaceURI` 指定与元素相关联的命名空间 URI 的字符串。创建的元素namespaceURI属性使用 namespaceURI 的值进行初始化。

**有效的命名空间 URI**

- HTML - 参阅 [http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)
- SVG - 参阅[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)

*实际演示*
~~~
// 创建一个 XML 元素，例如 svg

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// 创建一个 HTML 元素

const div1 = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')

// 浏览器默认是 HTML 环境，所以在浏览器里可以折磨写
const div = document.createElement('div');

~~~