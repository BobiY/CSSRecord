const assert = require('chai').assert;
const path = require('path');
describe('webapck-base test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    it('entry test case', () => {  // 入口测试路径
        console.log(baseConfig.entry)
        assert.equal(baseConfig.entry.includes(path.join('src','index.js')), true)
    })
});