module.exports = function(app){
    app.get('/formulario_inclusao_noticia', (req,res)=>{
        res.render("admin/form_add_noticia.ejs")
    })

    //recuperar a url via post
    app.post('/noticias/salvar', (req,res)=>{

        //recuperando os dados do formulario
        let noticias = req.body
        res.send(noticias)
    })
}