
module.exports = function(app){
    app.get('/', (req,res)=>{
        app.app.controllers.home.home(app,req, res)
    })
    
}
