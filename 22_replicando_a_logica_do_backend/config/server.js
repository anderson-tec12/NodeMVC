let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser')
let validator = require('express-validator')
let app = express();

//alterando a engine
app.set('view engine', 'ejs')

//configurando a pasta estatica com os arquivos CSS e javascrip e imagnes

app.use(express.static('./app/public'))
//configurando o body-parse, ele funcina como midware
app.use(bodyParser.urlencoded({extended:true}))
app.use(validator())

//configurando o consign para assitir a pasta de rotas e incluir cada arquivo 
consign()
.include('./app/routers')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app)

//apontando a localização da pasta view
app.set('views','./app/views')

module.exports = app