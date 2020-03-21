### 使用高版本的 webpack 和 Node.js

- 构建事件降低了 60%-98%

#### 使用 webpack4：优化原因

- V8 带来的优化（for of 代替 forEach，Map 和 Set 代替 Object，includes 代替 indexOf）
- 默认使用更快的 md4 hash 算法
- webpack AST 可以直接从 loader 传递给 AST，减少解析时间
- 使用字符串方法替代正则表达式