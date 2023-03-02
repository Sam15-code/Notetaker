const app = require("express").Router()
const path =  require('path')


app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname,'../public/notes.html'))
})


//Homepage
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


module.exports = app;
