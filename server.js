var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequilize");

var app = express();
var PORT = process.env.PORT || 3000;