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

module.exports = function(){
    return UsuariosDAO
}