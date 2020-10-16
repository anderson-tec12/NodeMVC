// importa as configurações do servidor 
var app = require('./config/server')

// parametrizar a porta de escuta
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

//iniciando o socket.io, escutar a mesma porta que o express
var io = require('socket.io').listen(server)

// criar aconexao por websocket 
io.on('connection', function(socket){
    console.log('Usuario Conectou')

    //passando outra esculta 

    socket.on('disconnect',function(){
        console.log('Usuario desconectou')
    })
})

//connection é um evento padrao de tentativa de conexao