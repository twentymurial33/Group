const path = require('path');
const db = require ('../SEQUELIZESTUFF')




module.exports = function(app) {
  app.get('/api/posts', function(req, res){
    var query = {};
    if (req.query.seller_id) {
      query.SellerID = req.query.seller_id
    }
    db.Post.findAll({
      where: query,
      include: [db.Product]
    }).then(function(dbPost){
      res.json(dbPost)
    });

  });

  app.post('/api/posts', function (req, res){
    db.Post.create(req.body).then(dbPost => {
      res.json(dbPost)
    });
  });
}
