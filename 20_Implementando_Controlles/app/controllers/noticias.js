module.exports.noticias = function(app, req, res){
        let connection = app.config.dbConnection()
        let noticiasModel=  new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias((err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
          
}

module.exports.noticia = function(app, req, res){
    let connection = app.config.dbConnection()
        let noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticia((err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticia",{noticia: result})
        })
        
}