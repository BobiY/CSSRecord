if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/largeNumber.min.js');
} else {
    module.exports = require('./dist/largeNumber.js')
}