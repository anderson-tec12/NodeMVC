module.exports = function(app){
    app.get('/noticias', (req,res)=>{
        res.render("noticias/noticias")
    })
}