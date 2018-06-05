const path = require('path');
const sequelize = require('sequelize');
const db = require('../models')


module.exports = function(app) {
  // GET route for getting list of all products
  app.get('/api/posts', function(req, res){
    if (req.body.category) {
      query.SellerID = req.query.seller_id
    }
    db.products.findAll({})
      .then(function(dbproducts){
       res.json(dbproducts);
    });

  });

  // GET route for getting product by category

  app.get("/api/posts/:category", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbproducts) {
      console.log(dbproducts);
      res.json(dbproducts);
    });
  });



  // GET route for getting a particular product
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
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
    db.products.create(req.body).then(dbproducts => {
      res.json(dbproducts)
    });
  });
}
