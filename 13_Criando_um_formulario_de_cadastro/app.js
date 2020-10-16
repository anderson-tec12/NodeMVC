
let app = require('./config/server')


//incluindo os modulos de rotas
// let rotaTanoticias = require('./app/routers/noticias')(app)
// let rotaHome = require('./app/routers/home')(app)
// let rotaInclusaoNoticia= require('./app/routers/formulario_inclusao_noticia')(app)



app.listen(3000, ()=>{
    console.log('Servidor iniciado')

})