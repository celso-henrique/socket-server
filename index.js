const app = require('http').createServer(handler);
const io = require('socket.io')(app);

const PORT = 8080;

app.listen(PORT);

function handler(req, res) {
  res.writeHead(200);
  res.end('Socket.io running!');
}

io.on('connection', socket => {
  socket.on('message', msg => {
    console.info(`New message: ${msg}`);

    io.emit('message', msg);
  });
});

console.info(`Socket.io started in port ${PORT}`);
