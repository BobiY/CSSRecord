const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: "10000ms"
})

process.chdir(path.join(__dirname, "template")); // 将 __dirname 切换至 template 目录下
// console.log(__dirname, path.join(__dirname, "template"))
rimraf('./dist', () => {
    const pordConfig = require("../../lib/webpack.prod");

    webpack(pordConfig, (err, stats) => {
        if( err ) {
            console.error(err);

            process.exit(2);
            return ;
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }));

        console.log('\n' + 'Compiler success , begin run test'),
        // console.log(path.join(__dirname, "html-test.js"))
        mocha.addFile(path.join(__dirname, "html-test.js"));
        mocha.addFile(path.join(__dirname, "css-js-test.js"));

        mocha.run();
    });
});