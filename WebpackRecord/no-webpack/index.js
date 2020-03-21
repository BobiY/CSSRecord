module.exports = function config(mode) {
    switch(mode){
        case 'dev': return require('./lib/webpack.dev');
        case 'pro': return require('./lib/webpack.prod');
        case 'ssr': return require('./lib/webpack.ssr');
        default: return require('./lib/webpack.base')
    }
}