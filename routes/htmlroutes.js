const path = require('path');
const db = require('../models')


module.exports = function(app) {
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../views/index.handlebars'))
  });

  // app.get('/seller', function(req, res){
  //   res.sendFile(path.join(__dirname, '../views/seller.handlebars'))
  // });
  // app.get('/buy', function(req, res){
  //   res.sendFile(path.join(__dirname, '../views/buy.handlebars'))
  // });

  app.get('/buy', function(req, res) {
    return( 'buy', {variableName: 'products'} );
    db.Product.findAll()
  .then(function(product) {
    res.render('buy',newItem);
  });
});
}

  app.get('/seller', function(req, res) {
    return( 'seller', {variableName: 'products'} );
    db.Product.findAll()
  .then(function(product) {
    res.render('seller',newItem);
  });
});
