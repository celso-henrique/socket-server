const PORT = 8080;
const io = require('socket.io')(PORT);

io.on('connection', socket => {
  socket.on('message', msg => {
    console.info(msg);

    io.emit('message', msg);
  });
});

console.info(`Starting socket.io server in port ${PORT}`);
