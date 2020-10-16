module.exports = function(app){
    app.get('/formulario_inclusao_noticia', (req,res)=>{
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res)
    })

    //recuperar a url via post
    app.post('/noticias/salvar', (req,res)=>{
        app.app.controllers.admin.noticias_salvar(app, req, res)        
    })
}