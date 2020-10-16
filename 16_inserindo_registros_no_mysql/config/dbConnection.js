//modulo de conexão
let mysql = require('mysql')

var connMysql = function(){
    console.log('Conectando com o mysql')
    return  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'portal_noticias'
    })
}


module.exports = function(){
    console.log('modulo do banco carregado via autoload')
    return connMysql
}