let express = require('express');
let app = express()

//alterando a engine
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.send('Servidor iniciado ')
})

app.get('/Moda', (req,res)=>{
    res.send('Moda')
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado com Express')
})