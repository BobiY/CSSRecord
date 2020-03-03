const PORT = 3000
const io = require('socket.io')(PORT);

io.on('connection', socket => {
    socket.on('message', text => {
        console.log('received message', text)
        socket.emit('message', text)
    })
    socket.on('disconnect', () => {
        console.log('socket is closed...')
    })
});
const nsp = io.of('/my');
nsp.on('connection', function(socket){
  console.log('someone connected');
  nsp.emit('hi', 'everyone!');
});
