const glob = require('glob-all');
describe('Checking generated html files', () => {
    it('should generate js && html files', done => {
        const files = glob.sync([
            './dist/bundle.js',
            './dist/main.css'
        ]);

        if( files.length > 0 ) {
            done();
        } else {
            throw new Error('No js or css file...');
        }
    })
})