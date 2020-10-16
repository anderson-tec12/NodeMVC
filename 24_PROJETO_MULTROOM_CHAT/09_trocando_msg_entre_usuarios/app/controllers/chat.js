module.exports.iniciaChat = function(application, req, res){
    let dadosForm = req.body
    
    req.assert('nome', 'Nome ou apelido é obrigatorio').notEmpty()
    req.assert('nome', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15)

    var erros = req.validationErrors()

    if(erros){
        res.render('index', {validacao:erros})
        return 
    }

    //recuperando a variavel global
    application.get('io').emit('msgParaCliente', {
        apelido:dadosForm.nome, mensagem: 'Acabou de entrar no chat'
    })
    res.render('chat', {dadosForm: dadosForm})
    
    
}