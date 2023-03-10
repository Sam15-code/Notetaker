const express = require("express")
const app = express()
const PORT = process.env.PORT || 3003
const apiRoutes = require("./apiRoutes")
const htmlRoutes = require("./htmlRoutes")



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));



app.use(apiRoutes)
app.use(htmlRoutes)


app.listen(PORT, function(){
    console.log("Server started on port " + PORT)
})