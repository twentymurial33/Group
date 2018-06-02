var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path=require("path");

var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// let ejs = require('ejs');

app.set("view engine","ejs");
// app.engine("ejj", );

require('./routes/apiroutes.js')(app);
require('./routes/htmlroutes.js')(app);
// app.use(routes);
// app.get("/",function(req,res){
// res.render("index");});

// ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'

app.listen(PORT,function(){
   console.log("Server Started on Port 3000");
})