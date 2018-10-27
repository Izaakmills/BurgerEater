var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var burgerObject = { burgers: data };
    res.render("index", burgerObject);

  });
});

router.post("/burgers/add", function(req, res) {
  burger.insertOne("burger_name",  req.body.burger_name, function(){
    res.redirect("/burgers");
  });
});
    

router.put("/burgers/devour/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({ devoured: req.body.devoured }, condition, function(){
    res.redirect("/burgers");
  });
});



// Export routes for server.js to use.
module.exports = router;