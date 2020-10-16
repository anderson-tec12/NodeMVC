module.exports = function(){
    this.getNoticias = function (connection, callback){
        connection.query('select * from noticias' , callback)
    };
    
    this.getNoticia = function (connection, callback){
        connection.query('select * from noticias where id_noticia = 1', callback)
    }

    this.salvaNoticia = function(dados, connection, callback){
        // o comando insert abaixo funciona dedsde que os nomes dos campos do formulario seja o mesmo que esta no banco
        connection.query('insert into noticias set ?', dados, callback)
    }
    return this
}