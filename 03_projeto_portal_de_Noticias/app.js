let express = require('express');
let msg = require("./mod_test")()
let app = express()

//alterando a engine
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('home/index')
})

app.get('/formulario_inclusao_noticia', (req,res)=>{
    res.render("admin/form_add_noticia.ejs")
})
app.get('/noticias', (req,res)=>{
    res.render("noticias/noticias")
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado com Express')

    console.log(msg)
})