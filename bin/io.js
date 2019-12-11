let socket_io = require('socket.io');
let io = socket_io();

io.on('connection', () => {
   console.log('Connected');
});

let ioc = require('socket.io-client')('http://localhost:3000');

ioc.on('connect', () => {
   console.log('client-connected');
});

module.exports.io = io;