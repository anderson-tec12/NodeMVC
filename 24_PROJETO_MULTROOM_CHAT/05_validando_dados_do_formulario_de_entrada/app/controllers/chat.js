module.exports.iniciaChat = function(application, req, res){
    let dadorForm = req.body
    
    req.assert('nome', 'Nome ou apelido é obrigatorio').notEmpty()
    req.assert('nome', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15)

    var erros = req.validationErrors()

    if(erros){
        res.render('index', {validacao:erros})
    }{
        res.render('chat')
    }
    
}