//let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        //console.log(app)
        app.app.controllers.noticias.noticias(app, req, res)      
        
    })

    app.get('/noticia', (req,res)=>{
        //console.log(app)
        app.app.controllers.noticias.noticia(app,req, res)
    })
}