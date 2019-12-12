let socket_io = require('socket.io');
let io = socket_io();

io.on('connection', (socket) => {
   console.log('Connected');

   socket.on('SEND_DATA', (data) => {
      let dataStr = JSON.stringify(data);

      console.log(dataStr);
   });
});

module.exports.io = io;