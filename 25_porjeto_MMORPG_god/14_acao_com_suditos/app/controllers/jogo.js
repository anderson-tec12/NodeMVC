module.exports.jogo = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('index', {validacao:{}});
        return 
    }

    var comando_invalido = 'N'
    if(req.query.comando_invalido == 'S'){
        comando_invalido = 'S'
    }

    //console.log(comando_invalido)

    var usuario = req.session.usuario
    var connection = application.config.dbConnection
    var JogoDAO = new application.app.models.JogoDAO(connection)
    
    JogoDAO.iniciaJogo(res, req, usuario, comando_invalido)
    

        
        
    
}

module.exports.sair = function(application, req, res){
    // destruindo a sessao
    req.session.destroy(function(err){
        res.render('index', {validacao:{}});
    })
}
module.exports.suditos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('index', {validacao:{}});
        return 
    }
        res.render('aldeoes');
    
}
module.exports.pergaminhos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('index', {validacao:{}});
        return 
    }
        res.render('pergaminhos');
    
}
module.exports.ordenar_acao_sudito = function(application, req, res){
    var dadosForm = req.body
    req.assert('acao', 'Acao deve ser informada').notEmpty()   
    req.assert('quantidade', 'quantidade deve ser informada').notEmpty()  
    
    var erros = req.validationErrors()

    if(erros){
        res.redirect('jogo?comando_invalido=S')
        return 
    }

    console.log('Dados FORM', dadosForm)
    res.send('Opa foi mano ')
}
