module.exports.noticias = function(app, req, res){
        let connection = app.config.dbConnection()
        let noticiasModel=  new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias(function(err, result){
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
            console.log(result)
        })
          
}

module.exports.noticia = function(app, req, res){
    let connection = app.config.dbConnection()
        let noticiasModel = new app.app.models.NoticiasDAO(connection)

        //pega os dados passados pela url
        console.log(req.query)
        var idNoticia = req.query
        
        noticiasModel.getNoticia(idNoticia, (err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticia",{noticia: result})
        })
        
}