//let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        console.log(app)
        let connection = app.config.dbConnection()
        
        //exeutando consutas
        connection.query('select * from noticias' ,(err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
        
    })
}