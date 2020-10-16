//let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        //console.log(app)
        let connection = app.config.dbConnection()
        let noticiasModel=  new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias((err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
                
        
    })
}