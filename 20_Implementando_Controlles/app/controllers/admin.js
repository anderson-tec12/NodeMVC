module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia.ejs", {validacao:{}, notica:{}})
}

module.exports.noticias_salvar = function(app, req, res){
    //recuperando os dados do formulario
    let noticias = req.body

    //validação do express-validator
    req.assert('titulo', 'titulo é obrigatorio').notEmpty()
    req.assert('resumo', 'resumo é obrigatorio').notEmpty()
    req.assert('resumo', 'deve contem entre 10 e 100 caracteres').len(10,100)
    req.assert('autor', 'Autor é obrigatorio').notEmpty()
    req.assert('data_noticia', 'Autor é obrigatorio').notEmpty().isDate({form:'YYYY-MM-DD'})
    req.assert('noticia', 'Noticia é obrigatorio').notEmpty()
   
    let erros = req.validationErrors()
    let connection = app.config.dbConnection()
    let noticiasModel=  new app.app.models.NoticiasDAO(connection);

    if(erros){
        console.log(erros)
        res.render("admin/form_add_noticia.ejs", {validacao:erros, notica:noticias})
        return 
    }
    
    noticiasModel.salvaNoticia(noticias,(err, result)=>{
        //paasando dados para a view em formato json
        res.redirect("/noticias")
    })
}