module.exports = function(app){
    app.get('/noticia', (req,res)=>{
        console.log(app)
        let connection = app.config.dbConnection()
        let noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticia((err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticia",{noticia: result})
        })
        
    })
}