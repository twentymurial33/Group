var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000;
var path=require("path");

var app = express();

app.engine('handlebars', exphbs({

	defaultLayout: 'main',

	layoutsDir: 'views/layouts'

}));

app.set('view engine', 'handlebars');

app.set('views', path.resolve(__dirname,'views'));




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/index",function(req,res){
  res.render("index");
})

app.get("/",function(req,res){
  res.render("index");
})

app.get('/seller', function(req, res) {
	res.render('seller');
});

app.get('/buy', function(req, res) {
	res.render('buy');
});

require('./routes/htmlroutes.js')(app);
require('./routes/apiroutes.js')(app);

var db = require ('./models')

db.sequelize.sync().then(function(){
	app.listen(PORT,function(){
		console.log("Server Started on Port 3000");
	 })
})
