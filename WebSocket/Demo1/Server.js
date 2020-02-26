const ws = require('nodejs-websocket');

const server = ws.createServer( connection => {
    connection.on('text', str => {
        console.log(str);
        connection.sendText(str, () => {
            console.log('socket is overed....')
        });
        // connection.close(404, 'is overed....')
    });
    connection.on('connect',() => {
        console.log('connection is running...');
    })
    connection.on('error', err => {
        console.log('error is occured...', err);
    })
    connection.on('close', () => {
        console.log('webscoket is closed...');
    })
} ).listen(3000);