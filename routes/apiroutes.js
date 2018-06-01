const path = require('path');
var friendName = require("../app/data/friendName.js")



module.exports = function(app) {
  app.get('/api/buy', function(req, res){
    res.json(item);

  });

  app.post('/api/sell', function (req, res){
    friendName.push(req.body);
    res.json(true)
  })
}
