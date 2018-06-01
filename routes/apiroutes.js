const path = require('path');




module.exports = function(app) {
  app.get('/api/buy', function(req, res){
    res.json(item);

  });

  app.post('/api/sell', function (req, res){
    friendName.push(req.body);
    res.json(true)
  })
}
