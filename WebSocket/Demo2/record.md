### Socket.io 记录

### Server

1. 引入，规定端口

~~~
const io = require('socket.io')(PORT);
~~~

2. 注册事件（io）

- 'io.on('connection', socket => {})' 事件，当有链接到来时触发。

3. 自定义事件(socket)

eg：
~~~
// server
socket.on('message', data => {});

// Client
socket.emit('message', data)

反之，客户端用 on 注册事件，在客户端用 emit 发送事件，客户端也能接收到
~~~