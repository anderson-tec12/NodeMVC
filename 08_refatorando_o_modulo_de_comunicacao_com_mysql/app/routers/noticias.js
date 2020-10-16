let dbConnection = require('../../config/dbConnection.js')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        let connection = dbConnection()
        
        //exeutando consutas
        connection.query('select * from noticias' ,(err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
        
    })
}