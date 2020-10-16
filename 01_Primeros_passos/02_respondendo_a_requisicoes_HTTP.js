//faz a importação do modulo 
let http = require('http')

//usando o modulo importado para subir um servidor
http.createServer(function(req, res){
    res.end('<html><body>Portal de noticias </body></html>')
}).listen(3000) // porta do servidor