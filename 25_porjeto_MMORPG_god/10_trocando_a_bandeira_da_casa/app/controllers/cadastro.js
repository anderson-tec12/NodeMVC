module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao:{},dadosForm:{}});
}

module.exports.cadastrar = function(application, req, res){
    let dadosForm = req.body
    req.assert('nome', 'nome Não pode ser vazio').notEmpty()
    req.assert('usuario', 'usuario Não pode ser vazio').notEmpty()
    req.assert('senha', 'senha Não pode ser vazio').notEmpty()
    req.assert('casa', 'casa Não pode ser vazio').notEmpty()

    var erros = req.validationErrors()

    if(erros){
        res.render('cadastro', {validacao:erros, dadosForm: dadosForm})
        return 
    }

    //careggando a conexao com o banco de dados
    var connection = application.config.dbConnection
    console.log(connection)

    var UsuariosDAO = new application.app.models.UsuariosDAO(connection)
    UsuariosDAO.inserirUsuario(dadosForm)
    
    res.send('Vamos cadastrar')
}