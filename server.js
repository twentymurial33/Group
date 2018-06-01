var express = require("express");
var bodyParser = require("body-parser");
var mysql=require("mysql");
var path=require("path");
// View Engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",function(req,res){
res.render("index");});

var app = express();
var PORT = process.env.PORT || 3000;