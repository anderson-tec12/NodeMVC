//let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        //console.log(app)
        let connection = app.config.dbConnection()
        let noticiasModel=  app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, (err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
                
        
    })
}