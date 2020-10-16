let http = require('http')

let server = http.createServer((req, res) =>{ 
    
    // req.url é o que usuario digita no browser do navegador 
    let categoria = req.url 

    switch(categoria){
        case '/tecnologia':
            res.end('<h1>Noticias de Tecnologia</h1>')
            break
        case '/moda':
            res.end('<h1>Noticias de moda</h1>')
            break
        case '/Games':
            res.end('<h1>Noticias de Games</h1>')
            break
        case '/beleza':
            res.end('<h1>Noticias de beleza</h1>')
            break
        default:
            res.end('<h1>Seja bem vindo</h1>')
    }
})


server.listen(3000)