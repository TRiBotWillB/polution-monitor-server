let io = require('socket.io');

io.on('connection', () => {
   console.log('Connected');
});