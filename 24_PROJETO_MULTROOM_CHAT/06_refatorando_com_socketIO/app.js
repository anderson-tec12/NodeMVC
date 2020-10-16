// importa as configurações do servidor 
var app = require('./config/server')

// parametrizar a porta de escuta
app.listen(80, function(){
    console.log('Servidor Online')
})

//iniciando o socket.io, escutar a mesma porta que o express
require('socket.io').listen(server)