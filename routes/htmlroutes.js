var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/assets/index.html'))
  });

  app.get('/sell', function(req, res){
    res.sendFile(path.join(__dirname, '../public/assets/seller.js'))
  });
  app.get('/buy', function(req, res){
    res.sendFile(path.join(__dirname, '../public/assets/THINGGOESHERE'))
  });
}