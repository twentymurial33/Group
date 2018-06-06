var express =require("express");
var router=express.Router();
var db=require("..models");
var newItem=[
    {id:1 ,desc:item-name},
    {id:2 ,desc:item-description},
    {id:3 ,desc:item-url}
  ];

router.get("/",function(req,res){
    db.products.findAll({

    }).then(function(data){
         newItem={newItem:data};
        res.render('index',newItem)
    }).catch(function(err){

    });
})

//populates to search.handlebars

router.get("/search",function(req,res){
    res.render("search");
    console.log("search route is working");
});

module.exports=router;

  
//   app.get("api/posts", function(req, res) {
//    res.render("index", {
//         title:"Yard_Sale",
//         items:newItem
//    });
//   });
  
//   app.post("/add",function(req,res){
//     var newProduct=req.body.newProduct
//   })