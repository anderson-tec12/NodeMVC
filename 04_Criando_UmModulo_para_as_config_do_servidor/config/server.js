let express = require('express');
let app = express()

//alterando a engine
app.set('view engine', 'ejs')

module.exports = app