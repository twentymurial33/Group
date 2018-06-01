var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require('sequelize');
var path=require("path");
//Middleware

// View Engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// Static Path
app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
res.render("index");});

var app = express();

app.listen(3000,function(){
   console.log("Server Started on Port 3000");
})