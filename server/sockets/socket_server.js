const { io } = require('../server');

// On conection of client
io.on('connection', (client) => {
    // on connect client
    console.log('User connected');

    // Send data to client
    client.emit('sendMessageServer',{
        user: 'server',
        message: 'Message from server'
    });

    // on disconnect client
    client.on('disconnect',() => {
        console.log('User disconnect');
    });

    // listen data recived from client
    client.on('sendMessage', (message,callback) => {
        console.log('from client: ',message);

        client.broadcast.emit('sendMessageServer',message);

        if (callback){
            if (message.user){
                callback({ok:true});
            }else{
                callback({ok:false});
            }
        }

    });
});