module.exports = function(app){
    app.get('/noticia', (req,res)=>{
        console.log(app)
        let connection = app.config.dbConnection()
        var noticiasModel = app.app.models.noticiasModel

        //exeutando consutas
        noticiasModel.getNoticia(connection,function(err, result){
            //paasando dados para a view em formato json
            res.render("noticias/noticia",{noticia: result})
        })
        
    })
}