// importa as configurações do servidor 
var app = require('./config/server')

// parametrizar a porta de escuta
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

//iniciando o socket.io, escutar a mesma porta que o express
var io = require('socket.io').listen(server)

// setando uma variavel global
app.set('io', io)

// criar aconexao por websocket 
io.on('connection', function(socket){
    console.log('Usuario Conectou')

    //passando outra esculta 

    socket.on('disconnect',function(){
        console.log('Usuario desconectou')
    })

    //mensegm enviada via formulario 

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem:data.mensagem})

        //emeite mensagem para todos conetados ao socke mesnos a quem enviou
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem:data.mensagem})
    })
})

//connection é um evento padrao de tentativa de conexao