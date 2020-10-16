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
       // console.log('data')
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem:data.mensagem})
        //emeite mensagem para todos conetados ao socke mesnos a quem enviou
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem:data.mensagem})

        //atulizando a lista  de participantes
        if(parseInt(data.apelido_atualizado) == 0){
            socket.emit('participantesParaCliente', {apelido: data.apelido})
            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido})
        }
        
    })

    
})

//connection é um evento padrao de tentativa de conexao