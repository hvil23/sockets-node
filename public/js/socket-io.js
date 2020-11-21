 // instanciate socket library
 var socket = io();

 // Listen socket on connect
 socket.on('connect', function(){
     console.log('Connect to server');
 });

 // listen socket on disconnect
 socket.on('disconnect',function(){
     console.log('User disconnect');
 });

 // Send data from client to server and callback confirmation
 socket.emit('sendMessage',{
     user: 'Client',
     message: 'Message from client'
 },function (resp){
     console.log('Dispach callback',resp);
 });

 // Listen data from server
 socket.on('sendMessageServer',function(message){
     console.log('from server: ',message);
 });