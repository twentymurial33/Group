var express = require("express");
var bodyParser = require("body-parser");
//Middleware
const app = express();
// View Engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// Static Path
app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
res.render("index");});



app.listen(3000,function(){
   console.log("Server Started on Port 3000");
})