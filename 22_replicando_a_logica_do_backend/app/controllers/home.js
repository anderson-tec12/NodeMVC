module.exports.home = function(app,req,res){
        let connection = app.config.dbConnection()
        let noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.get5UltimasNoticias(function(error, result){
                        console.log(result)
                       res.render('home/index', {noticias:result})
                
        })  

        //res.render('home/index')
    
}