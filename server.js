const http = require('http');
const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.PORT

const server = http.createServer(app);

server.on('listening',() => {
    console.log("server en route sur le port : " + PORT);
});

server.listen(PORT);