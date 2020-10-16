module.exports.jogo = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('index', {validacao:{}});
        return 
    }

    var usuario = req.session.usuario
    var connection = application.config.dbConnection
    var JogoDAO = new application.app.models.JogoDAO(connection)
    
    JogoDAO.iniciaJogo(res, req, usuario)
    

        
        
    
}

module.exports.sair = function(application, req, res){
    // destruindo a sessao
    req.session.destroy(function(err){
        res.render('index', {validacao:{}});
    })
}