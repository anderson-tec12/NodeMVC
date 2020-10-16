module.exports.jogo = function(application, req, res){
    if(req.session.autorizado){
        res.render('jogo');
    }else{
        res.render('index', {validacao:{}});
    } 
}

module.exports.sair = function(application, req, res){
    // destruindo a sessao
    req.session.destroy(function(err){
        res.render('index', {validacao:{}});
    })
}