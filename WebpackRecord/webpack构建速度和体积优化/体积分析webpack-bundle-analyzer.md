### 体积分析：使用 webpack-bundle-analyzer

代码示例  
~~~
const BundleAnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzePlugin;

plugins: [
    new BundleAnalyzePlugin()
]
~~~

构建完成后会在 8888 端口展示大小

#### 分析出那些问题

- 依赖的第三方文件大小
- 业务里面的组件代码的大小