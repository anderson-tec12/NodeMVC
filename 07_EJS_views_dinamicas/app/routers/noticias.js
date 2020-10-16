module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        //modulo de conexão
        let mysql = require('mysql')

        //parametros para a onexao
        let connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'portal_noticias'
        })

        //exeutando consutas

        connection.query('select * from noticias' ,(err, result)=>{
            //paasando dados para a view em formato json
            res.render("noticias/noticias",{noticias: result})
        })
        
    })
}