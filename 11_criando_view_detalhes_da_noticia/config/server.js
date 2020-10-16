let express = require('express');
let consign = require('consign');

let app = express();

//alterando a engine
app.set('view engine', 'ejs')

//configurando o consign para assitir a pasta de rotas e incluir cada arquivo 
consign().include('./app/routers')
.then('config/dbConnection.js')
.then('app/models')
.into(app)

//apontando a localização da pasta view
app.set('views','./app/views')

module.exports = app