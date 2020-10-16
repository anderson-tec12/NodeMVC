var mongo = require('mongodb') 

// colocando a conexao no autoload do consign
var connMongoDB = function(){
    console.log('Entrou na função de conexão')
    var db = new mongo.Db(
        'got', //nome do banco
        new mongo.Server(//configurações do servidor
            'localhost', // endereço
            27017, // porta do serviço
            {} //parametro de configuração do servidor
        ),
        {} //configurações opcionais 
    )

    return db
}
module.exports = function(){
    return connMongoDB    
}