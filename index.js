const io = require('socket.io')(80);

io.on('connection', socket => {
  socket.on('message', msg => {
    io.emit('message', msg);
  });
});
