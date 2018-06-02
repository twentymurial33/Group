var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path=require("path");

var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine","ejs");
// app.engine("ejj", );

app.get("/",function(req,res){
  res.render("pages/index");
})

require('./routes/htmlroutes.js')(app);
require('./routes/apiroutes.js')(app);

app.listen(PORT,function(){
   console.log("Server Started on Port 3000");
})