let socket_io = require('socket.io');
let io = socket_io();

io.on('connection', (socket) => {
   console.log('Connected');

   socket.on('test-data', (data) => {
      let dataStr = JSON.stringify(data);

      console.log(dataStr);
   });
});

let ioc = require('socket.io-client')('http://localhost');

ioc.on('connect', () => {
   console.log('client-connected');
});

module.exports.io = io;