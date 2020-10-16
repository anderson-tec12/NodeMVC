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
            res.send(result)
        })
        //res.render("noticias/noticias")
    })
}