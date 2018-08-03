'use strict'

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6000;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    //let buf = Buffer.alloc(8);
    //buf.writeUInt32LE(0xd,0);
    //client.write(buf);
});


// data是服务器发回的数据
client.on('data', function(data) {
    console.log('length:' + data.length);
    let subId = data.readUInt32LE(0);
    // 完全关闭连接
    if(subId == 0xd){
        console.log('SubId: %d',subId);
    }
    //client.destroy();
});


// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});
