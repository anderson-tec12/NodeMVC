function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback){
    this._connection.query('select * from noticias order by data_criacao desc' , callback)
}

NoticiasDAO.prototype.getNoticia = function (callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback)
}

NoticiasDAO.prototype.salvaNoticia = function(dados,callback){
    // o comando insert abaixo funciona dedsde que os nomes dos campos do formulario seja o mesmo que esta no banco
    this._connection.query('insert into noticias set ?', dados, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5',callback)
}

module.exports = function(){
    return  NoticiasDAO
}