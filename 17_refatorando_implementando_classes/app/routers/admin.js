module.exports = function(app){
    app.get('/formulario_inclusao_noticia', (req,res)=>{
        res.render("admin/form_add_noticia.ejs")
    })

    //recuperar a url via post
    app.post('/noticias/salvar', (req,res)=>{

        //recuperando os dados do formulario
        let noticias = req.body
       

        let connection = app.config.dbConnection()
        let noticiasModel=  new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvaNoticia(noticias,(err, result)=>{
            //paasando dados para a view em formato json
            res.redirect("/noticias")
        })
    })
}