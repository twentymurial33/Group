var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path=require("path");

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// let ejs = require('ejs');

app.set("view engine","ejs");
// app.engine("ejj", );

// var routes = require("/routes/apiroutes.js");

// app.use(routes);
// app.get("/",function(req,res){
// res.render("index");});

// ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'

app.listen(PORT,function(){
   console.log("Server Started on Port 3000");
})