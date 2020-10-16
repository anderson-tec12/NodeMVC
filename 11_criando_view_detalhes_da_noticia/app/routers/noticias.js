//let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        //console.log(app)
        var connection = app.config.dbConnection()

        var noticiasModel = app.app.models.noticiasModel
        
        noticiasModel.getNoticias(connection,function(err, result){
            res.render("noticias/noticias",{noticias: result})
        })
        
        
        
    })
}