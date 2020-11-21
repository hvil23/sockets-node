// Use internal library of node
const path = require('path');
const http = require('http');

// User external library
const express = require('express');
const socketIO = require('socket.io');

// Declare app for express use
const app = express();

// Define instance of server
let server = http.createServer(app);

// Declare public path for static public content
const publicPath = path.resolve(__dirname,'../public');

// Use middleware in app for access public to content in path defined
app.use(express.static(publicPath));

// Declare port for launch service
const port = process.env.PORT || 3000;

// Comunication bidirectional active with front
module.exports.io = socketIO(server);

require('./sockets/socket');

// Launch service on defined port an execute exception if error
server.listen(port,(err) => {
    if (err) throw new Error(err);

    console.log(`Server run in port ${port}`);
});