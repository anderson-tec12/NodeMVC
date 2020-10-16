let express = require('express');
let app = express()

//alterando a engine
app.set('view engine', 'ejs')

//apontando a localização da pasta view
app.set('views','./app/views')

module.exports = app