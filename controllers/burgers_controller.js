var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    var burgerObject = { burgers: data };
    res.render("index", burgerObject);

  });
});

router.post("/burgers/add", function (req, res) {
  if (req.body.burger_name) {
    console.log("Burger name is " + req.body.burger_name)
    // if burger entered store it in db
    burger.insertOne("burger_name", req.body.burger_name, function () {
      res.redirect("/burgers");
    });
  } else {
    res.render("/burgers")
  }
});

router.post("/burgers/devour/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition)
  burger.update({ devoured: req.body.devoured }, condition, function () {
    res.redirect("/burgers");
  });
});


// Export routes for server.js to use.
module.exports = router;