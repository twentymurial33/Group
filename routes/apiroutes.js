const path = require('path');
const sequelize = require('sequelize');
const db = require('../models')


module.exports = function(app) {
  // GET route for getting list of all products
  app.get('/api/posts/', function(req, res){
    db.Product.findAll()
      .then(dbproducts => {
        // console.log(dbproducts)
       res.json(dbproducts);
    });

  });

  // GET route for getting product by category

  app.get("/api/posts/category/:category", function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbproducts) {
      console.log(dbproducts);
      res.json(dbproducts);
    });
  });

  // GET route for getting a particular product
  app.get("/api/posts/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbproducts) {
      console.log(dbproducts);
      res.json(dbproducts);
    });
  });

  // POST

  app.post('/api/posts', function (req, res){
    console.log("we hit the route!!!!", req.body)
    db.Product.create(req.body).then(dbproducts => {
      res.json(dbproducts)
    });
  });
}


