const path = require('path');


module.exports = function(app) {
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../views/index.handlebars'))
  });

  app.get('/seller', function(req, res){
    res.sendFile(path.join(__dirname, '../views/seller.handlebars'))
  });
  app.get('/buy', function(req, res){
    res.sendFile(path.join(__dirname, '../views/buy.handlebars'))
  });
}
