## WebScoket

### Server 端

- 依赖项 nodejs-websocket 封装了 node websocket 相关的内容

### Server 相关

1. server.liseten(port, [host[,callback]])

&emsp; 服务监听的端口相关

2. server.close([callback])

&emsp; 当所有链接关闭后会调用回调函数

3. server.connections

&emsp; 储存了所有已经链接的 socket。你可以使用它进行广播操作

~~~
function(server, msg) {
    server.connections.forEach(function(conn) {
        conn.sendText('Hello')
    })
}
~~~

### Connection 链接对象

1. connection.sendText(str, [callback]);

将指定的字符串发送给另一端。 callback 会在消息完全发送后调用。

2. connection.sendBinary(data, [callback])

将指定的二进制数据块发送给另一端。callback 会在消息完全发送后调用。

3. connection.send(data, [callback])

是 1，2 两种办法的别称。如果数据是字符串，是 sendText 的别名，如果是二进制数据块，则是 sendBinary 的别称。

4. conenction.close([code[, reason]])

将链接结束的信息发送给另一端。表明链接已经完毕

#### Connection Event

1. Event:'close(code, reason)'

链接关闭时触发。这个事件一定要注册，不然退出时会导致应用退出
~~~
connection.on('close', (code, reason) => {})
~~~

2. Event:'error(err)'

当链接出错时触发，这个事件一定要注册，不然出错会导致应用退出。
~~~
connection.on('error', err => {})
~~~

3. Event:'text(str)'

相当于 data 事件，当有数据传来时触发此事件。
~~~
connection.on('text', str => {})
~~~

4. Event:'connect()'

当链接好时触发
~~~
connection.on('connect', () => {})
~~~

