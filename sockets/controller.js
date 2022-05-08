


const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        
        console.log('Cliente desconectado', socket.id );
    });
//RECIBIENDO Y REGRESANDO
    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        
        socket.broadcast.emit('enviar-mensaje', payload );
        
        socket.emit('enviar-mensaje', payload);
        callback( id );
    })

}



module.exports = {
    socketController
}

