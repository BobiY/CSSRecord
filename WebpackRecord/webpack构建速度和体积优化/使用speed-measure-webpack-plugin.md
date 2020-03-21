### 速度分析：使用 speed-measure-webpack-plugin

代码示例
~~~
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasureWebpackPlugin();

const webpackConfig = smp.wrap({
    plugins: [
        new MyPlugin(),
        new OtherPlugin()
    ]
});
~~~

可以看到每个 loader 和插件执行耗时

### 速度分析插件作用

- 分析整个打包总耗时
- 每个插件和 loader 的耗时情况