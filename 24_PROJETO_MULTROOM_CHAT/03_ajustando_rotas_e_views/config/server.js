// importar modulo do express
var express = require('express')
// importar o consign
var consign = require('consign')
// importar o body-parser
var bodyParser = require('body-parser')
// importar o express-alidator
var expressValidator = require('express-validator')

// inicinado o express

var app = express()

// setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

// Configurando os midwarre  arquivos estaticos
app.use(express.static('./app/public'))

// Configurando os midwarre  dados de forulario
app.use(bodyParser.urlencoded({extended:true}))

// Configurar o express validadtor
app.use(expressValidator())

// Configurando o autoload
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

// exportar o objeto app
module.exports = app