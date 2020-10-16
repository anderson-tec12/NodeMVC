function UsuariosDAO(connection){
   this._connection = connection()
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    //inserindo os dados
    this._connection.open( function(err, mongoclient){
        //permitir manipular os elementos dentros das coleções
        mongoclient.collection("usuarios", function(err, collection){ // nome da collection depois a ação
            //iseirindo os dados
            collection.insert(usuario)

            //fecha a conexao
            mongoclient.close()
        })
    })
}

UsuariosDAO.prototype.autenticar = function(dados, req, res){
    this._connection.open( function(err, mongoclient){
        //permitir manipular os elementos dentros das coleções
        mongoclient.collection("usuarios", function(err, collection){ // nome da collection depois a ação
            //pesquisando se existe o usuario
            //collection.find({usuario:{$eq:dados.usuario}, senha:{$eq:dados.senha}}) //retorna cusor, por iso usamos o toArray para converter e retornar um array

            collection.find({usuario:{$eq:dados.usuario}, senha:{$eq:dados.senha}}).toArray(function(er, re){
                if(re[0] != undefined){
                    //criando variavel de sessão, autorizado é um nome qualquer 
                    req.session.autorizado = true
                    req.session.usuario = re[0].usuario
                    req.session.casa = re[0].casa
                }

                //console.log(req)
                
                if(req.session.autorizado){
                    res.redirect('jogo')
                }else{
                    res.render('index', {validacao:{}})
                }
            })

            //fecha a conexao
            mongoclient.close()
        })
    })
} 

module.exports = function(){
    return UsuariosDAO
}