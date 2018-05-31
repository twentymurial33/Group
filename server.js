var express = require("express");
var bodyParser = require("body-parser");
var mysql=require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;