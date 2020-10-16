let express = require('express');
let app = express()

app.get('/', (req,res)=>{
    res.send('Servidor iniciado ')
})

app.get('/Moda', (req,res)=>{
    res.send('Moda')
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado com Express')
})