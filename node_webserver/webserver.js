const express = require('express')
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){ 
    res.sendFile(__dirname + '/public/index.html')
});

/**
 * Websocket
 */
const io = require('socket.io')(server);
exports.io = io;
require('./services/websocket.js').startServerSocket();

/**
 * Zerorpc
 */
require('./services/zerorpc.js').startZerorpc();

server.listen(5000);
console.log("Webserver running on port 5000...")

exports.server = server;
